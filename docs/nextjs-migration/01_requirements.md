# EARU-FIRST Next.js移行 要件定義

> 作成日: 2026-02-27
> 最終更新: 2026-02-27
> バージョン: 1.1

---

## 1. 機能要件

### 1.1 SEO/AIO対応（最優先）

| ID | 要件 | 優先度 | 詳細 |
|----|------|--------|------|
| SEO-01 | ブログ記事のSSR/ISR化 | 必須 | `/news/[slug]`ページをサーバーサイドでHTML生成し、Googleにインデックス可能にする |
| SEO-02 | ページ別メタデータ | 必須 | 各ページに固有の`title`、`description`を設定 |
| SEO-03 | Open Graphタグ | 必須 | 全ページにOGP（og:title, og:description, og:image）を設定 |
| SEO-04 | Twitter Cardタグ | 必須 | summary_large_image形式で設定 |
| SEO-05 | JSON-LD構造化データ | 必須 | Organization, Article, FAQPage, Product スキーマを実装 |
| SEO-06 | サイトマップ自動生成 | 必須 | 静的ページ + WordPressブログ記事を含む`sitemap.xml`を動的生成 |
| SEO-07 | robots.txt | 必須 | クローラー制御とサイトマップURL指定 |
| SEO-08 | canonical URL | 必須 | 各ページに正規URLを設定 |
| SEO-09 | ブログURLスラッグ化 | 必須 | `/news/123`（数値ID）→ `/news/post-slug`（スラッグ）に変更 |
| SEO-10 | 旧URL 301リダイレクト | 必須 | 旧IDベースURLからスラッグベースURLへ301リダイレクト |
| SEO-11 | AIO対応 | 重要 | AI検索エンジン（Perplexity, ChatGPT等）がコンテンツを正しく取得可能にする |

### 1.2 ページ移行

| ID | 要件 | 優先度 | 詳細 |
|----|------|--------|------|
| PAGE-01 | ホームページ移行 | 必須 | WP最新記事取得、ニュースカルーセル、全セクション |
| PAGE-02 | 私たちについて移行 | 必須 | メッセージ、実績、沿革、スタッフ一覧 |
| PAGE-03 | 製品ページ群移行 | 必須 | 製品一覧、インソール詳細、ブランド一覧 |
| PAGE-04 | 会社概要移行 | 必須 | `/overview` → `/company`にパス変更 |
| PAGE-05 | アフターサービス移行 | 必須 | 保証、メンテナンス、フロー |
| PAGE-06 | 代理店・会員移行 | 必須 | 代理店、特約店、OEM |
| PAGE-07 | FAQ移行 | 必須 | アコーディオンUI |
| PAGE-08 | お問い合わせ移行 | 必須 | EmailJS連携フォーム、郵便番号検索 |
| PAGE-09 | ニュース一覧移行 | 必須 | WP API連携、ページネーション、カテゴリフィルター |
| PAGE-10 | ニュース詳細移行 | 必須 | WP記事HTML表示、SNSシェア、ISR対応 |
| PAGE-11 | スケジュール移行 | 必須 | Django API連携、日本地図、カレンダー、フィルター |

### 1.3 機能維持

| ID | 要件 | 優先度 | 詳細 |
|----|------|--------|------|
| FUNC-01 | スムーススクロール | 必須 | Lenis smooth scrollの動作維持 |
| FUNC-02 | ページ遷移アニメーション | 重要 | Framer Motion AnimatePresenceのフェードイン/アウト |
| FUNC-03 | スクロールアニメーション | 必須 | FadeInSection (IntersectionObserver) の動作維持 |
| FUNC-04 | パララックス効果 | 重要 | react-scroll-parallaxの動作維持 |
| FUNC-05 | お問い合わせフォーム送信 | 必須 | EmailJS経由のメール送信 |
| FUNC-06 | 郵便番号自動入力 | 必須 | Zipcloud API連携 |
| FUNC-07 | スタッフポップアップ | 重要 | モバイルでのスタッフ詳細モーダル |
| FUNC-08 | ニュースカルーセル | 重要 | ホームページの自動回転ニュース表示 |
| FUNC-09 | 日本地図インタラクション | 必須 | 都道府県クリック、スケジュール表示 |
| FUNC-10 | カレンダービュー | 必須 | 月/年フィルター、イベント表示 |
| FUNC-11 | 検索モーダル | 必須 | 都道府県検索機能 |
| FUNC-12 | ハンバーガーメニュー | 必須 | モバイル対応ナビゲーション |
| FUNC-13 | ローディングアニメーション | 重要 | 初回ロード時のプログレス表示 |

### 1.4 TypeScript移行

| ID | 要件 | 優先度 | 詳細 |
|----|------|--------|------|
| TS-01 | 全コンポーネントの.tsx化 | 必須 | .js → .tsx に変換 |
| TS-02 | 型定義ファイル作成 | 必須 | WPPost, Schedule, Staff, ContactForm等の型定義 |
| TS-03 | Props型定義 | 必須 | 全コンポーネントのPropsにinterface定義 |
| TS-04 | API応答型定義 | 必須 | WordPress API, Django API, Zipcloud APIの応答型 |

---

## 2. 非機能要件

### 2.1 パフォーマンス

| ID | 要件 | 目標値 | 計測方法 |
|----|------|--------|---------|
| PERF-01 | Largest Contentful Paint (LCP) | < 2.5秒 | Lighthouse |
| PERF-02 | Interaction to Next Paint (INP) | < 200ms | PageSpeed Insights / Chrome UX Report |
| PERF-03 | Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| PERF-04 | Lighthouse Performance Score | > 80 | Lighthouse (モバイル) |
| PERF-05 | Time to First Byte (TTFB) | < 800ms | Vercel Analytics |
| PERF-06 | 画像最適化 | WebP/AVIF自動変換 | next/image |
| PERF-07 | フォント最適化 | FOUT/FOIT回避 | next/font |
| PERF-08 | JavaScript バンドルサイズ | First Load < 200KB | next build出力 |

### 2.2 SEO指標

| ID | 要件 | 目標値 | 計測方法 |
|----|------|--------|---------|
| SEOM-01 | Lighthouse SEO Score | > 90 | Lighthouse |
| SEOM-02 | ブログ記事インデックス率 | 100% | Google Search Console |
| SEOM-03 | サイトマップ登録 | 全ページ | Google Search Console |
| SEOM-04 | 構造化データエラー | 0件 | Google Rich Results Test |
| SEOM-05 | モバイルフレンドリー | 合格 | Google Mobile-Friendly Test |

### 2.3 アクセシビリティ

| ID | 要件 | 目標値 |
|----|------|--------|
| A11Y-01 | Lighthouse Accessibility Score | > 80 |
| A11Y-02 | alt属性 | 全画像にalt設定 |
| A11Y-03 | lang属性 | `<html lang="ja">` |
| A11Y-04 | セマンティックHTML | 適切なheading階層 |

### 2.4 セキュリティ

| ID | 要件 | 詳細 |
|----|------|------|
| SEC-01 | WordPressコンテンツ sanitize | dangerouslySetInnerHTMLの前にsanitize-htmlで処理 |
| SEC-02 | 環境変数管理 | クライアント公開可能な値のみ`NEXT_PUBLIC_`付与。サーバー専用キー（WP_API_BASE, REVALIDATION_SECRET等）はプレフィックスなし |
| SEC-03 | HTTPS強制 | Vercelデフォルト |
| SEC-04 | Content Security Policy | 必要に応じてヘッダー設定 |

---

## 3. SEO実装要件詳細

### 3.1 メタデータ構成

#### ルートメタデータ（layout.tsx）
```
title: "EARU-FIRST | インソールで足元から健康をサポート"
description: "有限会社エアル・ファーストは北海道を拠点にオーダーメイドインソールを通じて
             足元から健康を支えるインソールメーカーです。"
keywords: インソール, オーダーメイドインソール, FOOT-K, エアル・ファースト, 足底板, etc.
```

#### ページ別メタデータ
| ページ | title | description概要 |
|--------|-------|---------------|
| / | EARU-FIRST \| インソールで足元から健康をサポート | 会社紹介 + 主要サービス |
| /about-us | 私たちについて \| EARU-FIRST | メッセージ・実績・歴史・スタッフ |
| /products | 製品情報 \| EARU-FIRST | FOOT-Kブランド製品一覧 |
| /products/insole | インソール \| EARU-FIRST | オーダーメイドインソール詳細 |
| /products/brand | ブランド一覧 \| EARU-FIRST | 取扱ブランド |
| /company | 会社概要 \| EARU-FIRST | 会社情報・拠点・代理店 |
| /after-service | アフターサービス \| EARU-FIRST | 保証・メンテナンス |
| /membership | 代理店・会員 \| EARU-FIRST | 代理店・特約店・OEM |
| /faq | よくある質問 \| EARU-FIRST | 製品・イベント・メンテナンスFAQ |
| /contact | お問い合わせ \| EARU-FIRST | 修理・代理店・OEM問い合わせ |
| /news | ニュース \| EARU-FIRST | 最新情報・ブログ一覧 |
| /news/[slug] | {記事タイトル} \| EARU-FIRST NEWS | 記事のexcerptから生成 |
| /schedules | 測定会スケジュール \| EARU-FIRST | 全国測定会イベント一覧 |

### 3.2 JSON-LD構造化データ

| ページ | スキーマタイプ | 含めるデータ |
|--------|-------------|------------|
| 全ページ (layout) | Organization | 会社名、住所、電話、ロゴ、SNS |
| /news/[slug] | Article | タイトル、公開日、著者、画像 |
| /faq | FAQPage | 全Q&Aペア |
| /products/* | Product | 製品名、ブランド、製造元 |
| /schedules | Event (各イベント) | イベント名、日程、場所 |

### 3.3 OGP画像

| ページ | OGP画像 |
|--------|---------|
| デフォルト | `/og-image.jpg` (1200x630) — 会社ロゴ+キャッチコピー |
| /news/[slug] | WordPress記事のアイキャッチ画像（featuredImage） |
| 他ページ | デフォルト画像を使用 |

---

## 4. テスト戦略

### 4.1 テストレベル

| レベル | 対象 | ツール | タイミング |
|--------|------|--------|-----------|
| ビジュアルリグレッション | 全ページのスクリーンショット比較 | Percy / Chromatic / 手動比較 | Phase 2-3完了時 |
| E2Eテスト（手動） | 主要ユーザーフロー | ブラウザ手動操作 | 各Phase完了時 |
| SEO検証 | メタデータ、構造化データ、サイトマップ | Google Rich Results Test, Lighthouse | Phase 4完了時 |
| パフォーマンステスト | Core Web Vitals、バンドルサイズ | Lighthouse, next build出力 | Phase 4完了時 |
| クロスブラウザテスト | Chrome, Safari, Firefox, Edge | 手動操作 | Phase 5デプロイ前 |
| モバイルテスト | iOS Safari, Android Chrome | 実機 / Chrome DevTools | Phase 5デプロイ前 |

### 4.2 主要テストケース

| ID | テストケース | 合格基準 |
|----|------------|---------|
| T-01 | ニュース詳細ページのHTMLソースにコンテンツが含まれる | `curl` でHTMLソースを取得し、記事本文が含まれていること |
| T-02 | /news/[数値ID] にアクセスすると /news/[slug] に301リダイレクト | HTTPステータス301 + 正しいslug先 |
| T-03 | /overview にアクセスすると /company に301リダイレクト | HTTPステータス301 |
| T-04 | お問い合わせフォーム送信でメール受信 | EmailJS経由でメール到着確認 |
| T-05 | 郵便番号入力で住所自動入力 | 「060-0000」入力で北海道の住所表示 |
| T-06 | スケジュールページで日本地図クリック → 都道府県詳細表示 | 都道府県のイベント一覧表示 |
| T-07 | ニュース一覧でページネーション動作 | ?page=2 でページ2の記事表示 |
| T-08 | ニュース一覧でカテゴリフィルター動作 | ?category=X で該当カテゴリのみ表示 |
| T-09 | OGPデバッガーで正しいメタデータ表示 | og:title, og:image, og:description 正常表示 |
| T-10 | sitemap.xml に全ページ + 全ブログ記事が含まれる | XMLパース確認 |
| T-11 | 全画像にalt属性が設定されている | Lighthouse Accessibility チェック |
| T-12 | Lenis smooth scrollが動作する | スクロール操作でスムースアニメーション確認 |

### 4.3 受入基準（全体）

移行完了の判定基準:
1. 全ページが現行CRAサイトと同等のUI/UXで表示されること
2. Lighthouse Performance Score > 80（モバイル）
3. Lighthouse SEO Score > 90
4. `curl` で `/news/[slug]` のHTMLに記事本文が含まれること（SSR確認）
5. 全リダイレクトが301で正常動作すること
6. sitemap.xml が全ページ + 全ブログ記事を含むこと
7. Google Rich Results Test でエラー0件
8. EmailJS フォーム送信が正常動作すること
9. スケジュールページの Django API連携が正常動作すること

---

## 5. コスト分析

### 5.1 Vercel プラン比較

| 項目 | Hobby (無料) | Pro ($20/月) | 推奨 |
|------|-------------|-------------|------|
| 商用利用 | 不可 | 可 | **Pro** |
| サーバーレス関数実行時間 | 10秒 | 60秒 | Pro（Django APIのコールドスタート対策） |
| 帯域幅 | 100GB/月 | 1TB/月 | 企業サイトのトラフィック次第 |
| Analytics | 基本 | 詳細（Speed Insights） | Pro推奨 |
| DDoS保護 | 基本 | 高度 | Pro推奨 |
| サポート | コミュニティ | メール | Pro推奨 |

> **推奨**: 商用企業サイトのため **Pro プラン ($20/月)** を推奨。現行Xserverホスティング費用との差額を比較して判断。

### 5.2 ランニングコスト比較

| 項目 | 現行 (Xserver) | 移行後 (Vercel Pro) |
|------|---------------|-------------------|
| ホスティング | Xserver月額費用 | $20/月 (約3,000円) |
| ドメイン | 変更なし | 変更なし |
| WordPress | Xserver上で稼働 | Xserver上で継続（サブドメイン） |
| SSL | Xserver無料SSL | Vercel自動SSL + Xserver無料SSL |
| CDN | なし | Vercel Edge Network（全世界） |

> **注意**: WordPress はサブドメインで Xserver 上に残るため、Xserver の契約は継続が必要。

---

## 6. 監視・運用要件

### 6.1 監視項目

| ID | 要件 | ツール | 頻度 |
|----|------|--------|------|
| MON-01 | サイト死活監視 | Vercel Analytics / UptimeRobot | 常時 |
| MON-02 | Core Web Vitals 監視 | Vercel Speed Insights | 継続 |
| MON-03 | サーバーレス関数エラー監視 | Vercel Functions Logs | 日次確認 |
| MON-04 | WordPress API疎通確認 | ヘルスチェックAPI or 手動 | 週次 |
| MON-05 | Django API疎通確認 | ヘルスチェックAPI or 手動 | 週次 |
| MON-06 | Google Search Console 確認 | Google Search Console | 週次 |
| MON-07 | ISR再生成の正常動作確認 | 記事更新後の表示確認 | 記事更新時 |

### 6.2 アラート基準

| 状況 | 対応レベル | アクション |
|------|-----------|----------|
| サイト全体ダウン | 緊急 | DNS ロールバック検討 |
| 特定ページ500エラー | 高 | Vercel Functions Logs確認、デプロイロールバック |
| WordPress API応答なし | 高 | Xserver / wp.earu-first.com 確認 |
| Django API応答なし | 中 | Render ダッシュボード確認（コールドスタート考慮） |
| Lighthouse Score低下 | 低 | 原因分析、次回デプロイで対応 |

---

## 7. 移行対象外（スコープ外）

| 項目 | 理由 |
|------|------|
| WordPress本体の改修 | ヘッドレスCMSとして継続使用、WP側変更は最小限 |
| Django バックエンドの改修 | APIは現行のまま使用 |
| デザインリニューアル | 現行デザインを維持して移行 |
| 多言語対応 (i18n) | 現行は日本語のみ、将来検討 |
| ユーザー認証機能 | 現行なし、要件外 |
| ECサイト機能 | 現行なし、要件外 |
| CSS Modules/Tailwind全面導入 | 初回移行はSCSS維持、段階的に検討 |
| PWA対応強化 | 基本的なmanifest維持のみ |
| ユニットテスト追加 | 初回移行では既存テスト（最小限）を維持 |
| WordPress記事データの移行 | WPデータは変更なし（APIで参照し続ける） |

---

## 8. 前提条件

| 項目 | 内容 |
|------|------|
| WordPress API | `https://earu-first.com/Blog/wp-json/wp/v2/` が引き続き利用可能であること |
| Django API | `https://earu-sistem.onrender.com/api/` が引き続き利用可能であること |
| Vercelアカウント | Pro/Hobbyプランのアカウントが利用可能 |
| ドメイン管理 | `earu-first.com` のDNS設定変更が可能 |
| WordPress移行 | WPをサブドメイン (`wp.earu-first.com`) に移行可能 |
| Git | 新規リポジトリまたはブランチで開発 |

---

## 9. 成果物一覧

| 成果物 | 説明 |
|--------|------|
| Next.jsプロジェクト一式 | TypeScript、App Router、全ページ実装 |
| Vercelデプロイ設定 | 環境変数、ドメイン設定 |
| サイトマップ | 動的生成 `sitemap.xml` |
| robots.txt | 動的生成 |
| OGP画像 | デフォルトOG画像 (1200x630) |
| 型定義ファイル | `src/types/` 配下 |
| APIクライアント | `src/lib/wordpress.ts`, `src/lib/schedule-api.ts` |
| リダイレクト設定 | `next.config.ts` + `middleware.ts` |
| 移行ドキュメント | 本ドキュメント群 |
