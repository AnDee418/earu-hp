# EARU-FIRST Next.js移行 チェックリスト

> 作成日: 2026-02-27
> 最終更新: 2026-02-27
> バージョン: 1.1

---

## 0. パフォーマンスベースライン（Phase 0）

- [ ] 現行CRAサイトの Lighthouse レポート取得（モバイル + デスクトップ）
  - [ ] `/` (ホーム)
  - [ ] `/news/:id` (ニュース詳細)
  - [ ] `/schedules` (スケジュール)
- [ ] Lighthouse JSONレポートを `docs/baseline/` に保存
- [ ] Google Search Console の現在のインデックス数を記録
- [ ] 主要ページの TTFB を記録
- [ ] Core Web Vitals (LCP, CLS, INP) をPageSpeed Insightsで記録

---

## 1. 移行前準備チェック

### プロジェクトセットアップ
- [ ] Next.js 15 プロジェクトを TypeScript + App Router で作成
- [ ] 必要な依存ライブラリをインストール（framer-motion, lenis, recharts等）
- [ ] `sass` パッケージをインストール
- [ ] `sanitize-html` をインストール
- [ ] `tsconfig.json` の `@/*` パスエイリアスを確認
- [ ] `.env.local` に全環境変数を設定（`00_specification.md` セクション8参照）
  - [ ] `WP_API_BASE` (サーバー専用)
  - [ ] `DJANGO_API_BASE_URL` (サーバー専用)
  - [ ] `REVALIDATION_SECRET` (サーバー専用)
  - [ ] `NEXT_PUBLIC_DJANGO_API_BASE_URL`
  - [ ] `NEXT_PUBLIC_EMAILJS_*` (3変数)
  - [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] `.gitignore` に `.env.local` が含まれていることを確認
- [ ] ドキュメント内にAPIキーの実値が記載されていないことを確認

### アセット移行
- [ ] `src/assets/images/` を新プロジェクトにコピー
- [ ] `public/` の静的ファイルをコピー（favicon, japan-map, japan-prefectures.json等）
- [ ] `src/styles/` のSCSSファイルをコピー
- [ ] `main.scss` → `globals.scss` にリネーム
- [ ] SCSSの `@import` パスが新構成で正しいことを確認
- [ ] SCSS `@import` → `@use`/`@forward` への移行、または `silenceDeprecations` 設定

### 型定義
- [ ] `src/types/wordpress.ts` を作成（WPPost, WPCategory, PostsResult）
- [ ] `src/types/schedule.ts` を作成（Schedule, ScheduleResult, ScheduleParams）
- [ ] `src/types/staff.ts` を作成（StaffMember）
- [ ] `src/types/contact.ts` を作成（InquiryType, ContactFormData）

### APIクライアント
- [ ] `src/lib/wordpress.ts` を作成（全WP API関数）
- [ ] `src/lib/schedule-api.ts` を作成（Django API関数）
- [ ] `src/lib/emailjs.ts` を作成（EmailJS設定）
- [ ] `src/lib/utils.ts` を作成（共通ユーティリティ）

### 静的データ抽出
- [ ] `src/data/staff.ts` にスタッフデータ抽出（AboutUs.jsから）
- [ ] `src/data/faq.ts` にFAQデータ抽出（Faq.jsから）
- [ ] `src/data/company-history.ts` に沿革データ抽出
- [ ] `src/data/prefectures.ts` に都道府県データ抽出（SearchModal.jsから）

### コア構成
- [ ] `src/app/layout.tsx` — ルートレイアウト（メタデータ、フォント、Provider）
- [ ] `src/components/providers/Providers.tsx` — Client Provider（Lenis, Parallax）
- [ ] `src/components/providers/LenisProvider.tsx` — Lenis初期化
- [ ] `next.config.ts` — リダイレクト、画像ドメイン、SCSS設定
- [ ] `middleware.ts` — /news/[id] → /news/[slug] リダイレクト
- [ ] `src/app/loading.tsx` — ローディングUI
- [ ] `src/app/not-found.tsx` — 404ページ
- [ ] `src/app/error.tsx` — エラーバウンダリ

---

## 2. レイアウトコンポーネント移行チェック

- [ ] `Header.tsx` — `'use client'` + next/link + usePathname
  - [ ] ナビゲーションリンク動作確認
  - [ ] ドロップダウンメニュー動作確認
  - [ ] スクロール時の背景変化
  - [ ] モバイル表示
- [ ] `Footer.tsx` — next/link
  - [ ] 全リンク動作確認
  - [ ] Google Map埋め込み表示
  - [ ] SNSボタン動作
- [ ] `SideMenu.tsx` — `'use client'` + next/link + usePathname
  - [ ] 開閉動作
  - [ ] ルート変更時の自動クローズ
  - [ ] 全リンク動作確認
- [ ] `SubPageNav.tsx` — `'use client'`
  - [ ] セクション内スクロール動作

---

## 3. 各ページ移行完了チェック

### ホームページ ( / )
- [ ] `src/app/page.tsx` 作成
- [ ] WordPress最新3記事のサーバーサイド取得
- [ ] ニュースカルーセル動作（自動回転5秒）
- [ ] FlowingImagesBackground アニメーション
- [ ] VideoSlider 表示
- [ ] FadeInSection スクロールアニメーション
- [ ] 製品セクション パララックス
- [ ] FAQ アコーディオン
- [ ] ScrollDownIndicator 表示
- [ ] ローディングアニメーション
- [ ] `require.context` を明示的importに置換
- [ ] メタデータ設定
- [ ] レスポンシブ表示確認

### 私たちについて ( /about-us )
- [ ] `src/app/about-us/page.tsx` 作成
- [ ] MESSAGEセクション表示
- [ ] ACHIEVEMENTSセクション（数値カウンター）
- [ ] HISTORYタイムライン表示
- [ ] SPEECHセクション
- [ ] STAFFセクション — 地域別フィルター
- [ ] スタッフポップアップモーダル（モバイル）
- [ ] FadeInSection アニメーション
- [ ] メタデータ設定
- [ ] レスポンシブ表示確認

### 製品ページ群
- [ ] `src/app/products/layout.tsx` 作成
- [ ] `src/app/products/page.tsx` — 製品一覧
- [ ] `src/app/products/insole/page.tsx` — インソール詳細
  - [ ] Tabコンポーネント動作
  - [ ] 構造タブ / 素材タブ切替
- [ ] `src/app/products/brand/page.tsx` — ブランド一覧
- [ ] パンくずナビ動作
- [ ] 各ページのメタデータ設定
- [ ] レスポンシブ表示確認

### 会社概要 ( /company、旧/overview )
- [ ] `src/app/company/page.tsx` 作成
- [ ] 会社プロフィール表示
- [ ] 拠点情報表示
- [ ] 代理店一覧（アコーディオン）
- [ ] メタデータ設定
- [ ] `/overview` → `/company` リダイレクト動作確認

### アフターサービス ( /after-service )
- [ ] `src/app/after-service/page.tsx` 作成
- [ ] 保証情報表示
- [ ] 症状テーブル（PC/モバイル両対応）
- [ ] フロー画像表示
- [ ] メタデータ設定

### 代理店・会員 ( /membership )
- [ ] `src/app/membership/page.tsx` 作成
- [ ] 3つの会員タイプ表示
- [ ] SVGアニメーション動作
- [ ] メタデータ設定

### FAQ ( /faq )
- [ ] `src/app/faq/page.tsx` 作成
- [ ] 3カテゴリのアコーディオン動作
- [ ] FAQPage JSON-LD追加
- [ ] メタデータ設定

### お問い合わせ ( /contact )
- [ ] `src/app/contact/page.tsx` 作成
- [ ] FAQ プレビュー表示
- [ ] ContactForm コンポーネント動作
- [ ] 問い合わせ種別切替（修理/代理店/OEM）
- [ ] 必須フィールドバリデーション
- [ ] 郵便番号自動入力（Zipcloud API）
- [ ] 同意チェックボックス動作
- [ ] EmailJS送信テスト
- [ ] 送信後のリダイレクト
- [ ] メタデータ設定

### ニュース一覧 ( /news )
- [ ] `src/app/news/page.tsx` 作成（ISR: 30分）
- [ ] WordPress記事一覧表示
- [ ] ページネーション動作（?page=2）
- [ ] カテゴリフィルター動作（?category=5）
- [ ] アイキャッチ画像表示（next/image）
- [ ] カテゴリ名表示
- [ ] 日付表示
- [ ] アニメーション動作
- [ ] メタデータ設定

### ニュース詳細 ( /news/[slug] ) ★SEO最重要
- [ ] `src/app/news/[slug]/page.tsx` 作成（ISR: 1時間）
- [ ] `generateStaticParams` で最新50記事をプリレンダ
- [ ] `generateMetadata` で動的メタデータ生成
- [ ] WordPress記事HTMLの表示（sanitize-html処理済み）
- [ ] アイキャッチ画像表示
- [ ] カテゴリ表示
- [ ] 日付表示
- [ ] SNSシェアボタン動作（Twitter, Facebook, LINE, Instagram, Email）
- [ ] Article JSON-LD追加
- [ ] 404ハンドリング（存在しないスラッグ）
- [ ] メタデータ設定（title, description, OGP, Twitter Card）
- [ ] **Google検索結果でのインデックス確認**

### スケジュール ( /schedules )
- [ ] `src/app/schedules/page.tsx` 作成（SSR）
- [ ] Django API初期データ取得（サーバーサイド）
- [ ] カレンダービュー表示
- [ ] 月/年フィルター動作
- [ ] 日本地図表示
- [ ] 都道府県クリック → 詳細表示
- [ ] 都道府県リストビュー
- [ ] 検索モーダル動作
- [ ] FilterBar動作
- [ ] EventCard表示
- [ ] ビュー切替（calendar / map / prefectureDetail）
- [ ] メタデータ設定

---

## 4. SEO実装チェック

### メタデータ
- [ ] 全ページに固有のtitleが設定されている
- [ ] 全ページに固有のdescriptionが設定されている
- [ ] titleテンプレート（`%s | EARU-FIRST`）が動作
- [ ] ニュース詳細ページで動的メタデータが生成される

### Open Graph
- [ ] 全ページにog:titleが設定
- [ ] 全ページにog:descriptionが設定
- [ ] 全ページにog:imageが設定
- [ ] og:typeが適切（website / article）
- [ ] og:locale が ja_JP
- [ ] ニュース詳細でog:imageがアイキャッチ画像

### Twitter Card
- [ ] twitter:card が summary_large_image
- [ ] twitter:title 設定
- [ ] twitter:description 設定
- [ ] twitter:image 設定

### 構造化データ (JSON-LD)
- [ ] Organization スキーマ（layout.tsx）
- [ ] Article スキーマ（/news/[slug]）
- [ ] FAQPage スキーマ（/faq）
- [ ] Product スキーマ（/products/*）
- [ ] Google Rich Results Test でエラー0件

### サイトマップ & robots
- [ ] `/sitemap.xml` が動的生成される
- [ ] サイトマップに全静的ページが含まれる
- [ ] サイトマップに全ブログ記事が含まれる
- [ ] `/robots.txt` が正しく生成される
- [ ] robots.txtにサイトマップURLが記載

### URL & リダイレクト
- [ ] `/overview` → `/company` が301リダイレクト
- [ ] `/news/123` → `/news/post-slug` が301リダイレクト
- [ ] canonical URLが全ページに設定
- [ ] 全ページが `https://earu-first.com` のcanonical

### 画像最適化
- [ ] 主要画像が `next/image` で表示
- [ ] WordPress画像の `remotePatterns` 設定
- [ ] 全画像にalt属性
- [ ] ヒーロー画像に `priority` 属性

### フォント
- [ ] next/font/google でNoto Sans JP読み込み
- [ ] next/font/google でAnton, Bebas Neue読み込み
- [ ] Google Fonts CDN linkタグが削除されている
- [ ] FontAwesome CDN linkタグが削除されている

---

## 5. パフォーマンスチェック

- [ ] Lighthouse Performance Score > 80（モバイル）
- [ ] Lighthouse SEO Score > 90
- [ ] Lighthouse Accessibility Score > 80
- [ ] LCP < 2.5秒
- [ ] INP < 200ms（PageSpeed Insights）
- [ ] CLS < 0.1
- [ ] First Load JS < 200KB（next build出力で確認）
- [ ] recharts が dynamic import されている
- [ ] 424KB japan-prefectures.json がバンドルに含まれていない
- [ ] Phase 0 ベースラインと比較して改善されていること

### SSR/ISR検証
- [ ] `curl` で `/news/[slug]` のHTMLソースに記事本文が含まれることを確認
- [ ] `curl` で `/` のHTMLソースに最新ニュースが含まれることを確認
- [ ] ISR再検証が動作する（記事更新 → revalidate時間後に反映）
- [ ] On-Demand ISR が動作する（API呼び出し → 即座に反映）※設定した場合

---

## 5.5 テスト実施チェック

### ビジュアルリグレッション
- [ ] 全ページのスクリーンショットを現行CRAサイトと比較
- [ ] モバイル表示（375px幅）での各ページスクリーンショット比較
- [ ] 明らかなレイアウト崩れがないこと

### 主要テストケース（01_requirements.md 参照）
- [ ] T-01: ニュース詳細のSSR HTMLにコンテンツ含有
- [ ] T-02: /news/[数値ID] → /news/[slug] 301リダイレクト
- [ ] T-03: /overview → /company 301リダイレクト
- [ ] T-04: お問い合わせフォーム送信 → メール受信
- [ ] T-05: 郵便番号自動入力
- [ ] T-06: 日本地図クリック → 都道府県詳細
- [ ] T-07: ニュースページネーション
- [ ] T-08: ニュースカテゴリフィルター
- [ ] T-09: OGPメタデータ正常表示
- [ ] T-10: sitemap.xml 全ページ含有
- [ ] T-11: 全画像alt属性設定
- [ ] T-12: Lenis smooth scroll動作

### クロスブラウザ
- [ ] Chrome (最新) で動作確認
- [ ] Safari (最新) で動作確認
- [ ] Firefox (最新) で動作確認
- [ ] Edge (最新) で動作確認
- [ ] iOS Safari (実機またはSimulator) で動作確認
- [ ] Android Chrome で動作確認

---

## 6. デプロイ前チェック

### Vercel設定
- [ ] Gitリポジトリが接続されている
- [ ] 環境変数が全て設定されている
- [ ] ビルドが正常に完了する
- [ ] プレビューデプロイで全ページ表示確認

### WordPress サブドメイン
- [ ] `wp.earu-first.com` でWordPressが動作
- [ ] REST API (`/wp-json/wp/v2/posts`) にアクセス可能
- [ ] 画像URL（wp-content/uploads）にアクセス可能
- [ ] SSL証明書が有効

### Django API
- [ ] CORS設定に `earu-first.com` が追加されている
- [ ] CORS設定に `*.vercel.app` パターンが追加されている
- [ ] スケジュールAPIが正常応答する

### EmailJS
- [ ] 環境変数からサービスID/テンプレートID/公開キーを取得
- [ ] テスト送信が成功する

---

## 7. DNS切替チェック

### 切替判断基準（全て満たすこと）
- [ ] Vercelプレビューで全ページ正常表示
- [ ] 全テストケース（T-01〜T-12）合格
- [ ] WordPress サブドメイン REST API 正常動作
- [ ] Lighthouse Performance > 80, SEO > 90（モバイル）

### 切替前
- [ ] DNS TTLを300秒に短縮済み（1日前）
- [ ] WordPressサブドメイン動作確認
- [ ] Vercelプレビューで最終確認
- [ ] ロールバック手順を確認
- [ ] 切替実施日時が業務時間内（火〜木 10:00-14:00推奨）であること

### 切替実行
- [ ] Aレコードを Vercel IP に変更
- [ ] www CNAME を `cname.vercel-dns.com` に変更
- [ ] Vercelダッシュボードでドメイン追加
- [ ] SSL証明書の自動発行を確認

### 切替後（1時間以内）
- [ ] `https://earu-first.com` でサイト表示
- [ ] 全ページのナビゲーション確認
- [ ] ニュース記事の表示確認
- [ ] スケジュールの表示確認
- [ ] フォーム送信テスト
- [ ] リダイレクト動作確認

---

## 8. 本番確認チェック（切替24時間後）

### Google Search Console
- [ ] プロパティに `earu-first.com` を追加/確認
- [ ] 新しいサイトマップを送信
- [ ] URL検査でトップページのインデックス確認
- [ ] URL検査でニュース記事のインデックス確認
- [ ] モバイルフレンドリーテスト合格

### 機能確認
- [ ] 全ページの表示に異常がない
- [ ] アニメーションが正常動作
- [ ] Vercel Functions ログにエラーがない
- [ ] Core Web Vitals が基準値以内

### 1週間後
- [ ] DNS TTLを3600秒に戻す
- [ ] Google Search Console でインデックス状況確認
- [ ] ブログ記事がGoogle検索にヒットするか確認
- [ ] 構造化データのリッチリザルト確認

### 1ヶ月後
- [ ] ブログ記事のインデックス率100%達成
- [ ] 検索トラフィックの変化を分析
- [ ] Xserverホスティング解約可否を判断

---

## 9. 監視・運用セットアップチェック

- [ ] Vercel Analytics / Speed Insights が有効化されている
- [ ] サイト死活監視の設定（UptimeRobot等）
- [ ] Vercel Functions Logs の確認方法を把握している
- [ ] WordPress API の疎通確認手順を把握している
- [ ] Django API の疎通確認手順を把握している
- [ ] Google Search Console のプロパティ設定済み
- [ ] ロールバック手順書が関係者に共有されている

---

## 10. ロールバック判断基準チェック

以下のいずれかに該当する場合、DNS をXserverに戻す:
- [ ] トップページが500エラーで表示不可
- [ ] WordPress API連携が完全に機能せず記事が表示されない
- [ ] お問い合わせフォームが送信できない
- [ ] 切替後2時間以内に解決できない重大不具合が存在する

ロールバック手順:
- [ ] ドメインレジストラでDNSレコードをXserver IPに戻す
- [ ] TTL 300秒の場合、5分〜1時間で反映されることを確認
- [ ] ロールバック後、旧CRAサイトが正常表示されることを確認
