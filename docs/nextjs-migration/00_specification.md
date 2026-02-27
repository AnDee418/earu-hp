# EARU-FIRST Next.js移行 仕様書

> 作成日: 2026-02-27
> 最終更新: 2026-02-27
> バージョン: 1.1
> 対象: corporate-website (React CRA → Next.js App Router)
> ステータス: ドラフト（レビュー待ち）

---

## 1. 現行システム構成

| 項目 | 内容 |
|------|------|
| フレームワーク | React 18.2.0 (Create React App) |
| レンダリング | クライアントサイドレンダリング (CSR) |
| ルーティング | react-router-dom v6.22.0 |
| 言語 | JavaScript (ES6+) |
| スタイリング | SCSS (グローバル) |
| CMS | WordPress REST API (ヘッドレス) |
| バックエンドAPI | Django (Render上) |
| メール送信 | EmailJS |
| ホスティング | Xserver |
| ビルドツール | react-scripts 5.0.1 |

### 現行の問題点
- **SEO**: ブログ記事がCSRのため、Googleにインデックスされない
- **メタタグ**: description が「Web site created using create-react-app」のまま
- **OGP**: Open Graphタグ未設定
- **構造化データ**: JSON-LD未実装
- **サイトマップ**: sitemap.xml 未作成
- **ページ個別タイトル**: 全ページ「EARU-FIRST」のまま

---

## 2. 新システム構成

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 15 (App Router) |
| レンダリング | SSG / ISR / SSR (ページ毎に最適化) |
| ルーティング | Next.js App Router (ファイルベース) |
| 言語 | TypeScript |
| スタイリング | SCSS (グローバル、段階的にCSS Modules移行可) |
| CMS | WordPress REST API (ヘッドレス、サブドメイン移行) |
| バックエンドAPI | Django (Render上、変更なし) |
| メール送信 | EmailJS (変更なし) |
| ホスティング | Vercel |
| 画像最適化 | next/image |
| フォント | next/font/google |

---

## 3. 技術スタック詳細

### 維持するライブラリ
| ライブラリ | バージョン | Next.js互換性 | 備考 |
|-----------|-----------|-------------|------|
| framer-motion | ^12.0.6 | 互換 | `'use client'`で使用 |
| lenis | 最新 | 互換 | `@studio-freight/lenis`からパッケージ名変更 |
| react-scroll-parallax | ^3.4.5 | 互換 | Provider設定必要 |
| react-intersection-observer | ^9.15.1 | 互換 | 問題なし |
| recharts | ^2.15.1 | 互換 | dynamic importでSSR回避 |
| @emailjs/browser | ^3.2.0 | 互換 | クライアントサイドのみ |
| lucide-react | ^0.474.0 | 互換 | SVGアイコン |
| @fortawesome/* | ^6.7.2 | 互換 | アイコン |

### 削除するライブラリ
| ライブラリ | 理由 |
|-----------|------|
| react-router-dom | Next.js App Routerに置換 |
| react-router-hash-link | カスタムHashLinkコンポーネントに置換 |
| react-scripts | Next.jsビルドシステムに置換 |
| @studio-freight/lenis | `lenis`パッケージに更新 |
| react-transition-group | framer-motionで統一 |

### 追加するライブラリ
| ライブラリ | 用途 |
|-----------|------|
| next | フレームワーク本体 |
| typescript | 型システム |
| @types/react, @types/node | 型定義 |
| sanitize-html | WordPressコンテンツのXSS対策 |
| @types/sanitize-html | 型定義 |

---

## 4. URL設計

### ルートマッピング

| 旧パス | 新パス | レンダリング | 備考 |
|--------|--------|------------|------|
| `/` | `/` | ISR (1時間) | WP最新3記事取得 |
| `/about-us` | `/about-us` | SSG | 静的コンテンツ |
| `/products` | `/products` | SSG | 製品一覧 |
| `/products/insole` | `/products/insole` | SSG | インソール詳細 |
| `/products/brand` | `/products/brand` | SSG | ブランド一覧 |
| `/overview` | `/company` | SSG | **パス変更**: SEO改善 |
| `/after-service` | `/after-service` | SSG | 保証・メンテナンス |
| `/membership` | `/membership` | SSG | 代理店・特約店 |
| `/faq` | `/faq` | SSG | よくある質問 |
| `/contact` | `/contact` | SSG + Client | フォームはクライアント |
| `/news` | `/news` | ISR (30分) | 記事一覧・ページネーション |
| `/news/:id` | `/news/[slug]` | ISR (1時間) | **ID→スラッグ変更**: SEO改善 |
| `/schedules` | `/schedules` | SSR | リアルタイムデータ |
| (なし) | `/sitemap.xml` | 動的生成 | 新規追加 |
| (なし) | `/robots.txt` | 動的生成 | 改善版 |

### リダイレクト設定

```typescript
// next.config.ts
async redirects() {
  return [
    {
      source: '/overview',
      destination: '/company',
      permanent: true, // 301
    },
  ];
}
```

`/news/:id`（数値ID）→ `/news/[slug]` のリダイレクトは `middleware.ts` で処理:
- パスが `/news/[数字]` にマッチした場合
- WordPress APIでIDからスラッグを取得
- 301リダイレクトを発行

---

## 5. ディレクトリ構成

```
earu-first-nextjs/
├── public/
│   ├── favicon.ico, favicon.svg, favicon-96x96.png
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   ├── web-app-manifest-*.png
│   ├── japan-map-geolonia.svg
│   ├── japan-prefectures.json        # 424KB、クライアントfetch
│   └── og-image.jpg                  # OGP用画像（新規作成）
│
├── src/
│   ├── app/                           # App Routerページ
│   │   ├── layout.tsx                 # ルートレイアウト
│   │   ├── page.tsx                   # ホーム (/)
│   │   ├── loading.tsx                # グローバルローディング
│   │   ├── not-found.tsx              # 404ページ
│   │   ├── error.tsx                  # エラーバウンダリ
│   │   ├── sitemap.ts                 # サイトマップ生成
│   │   ├── robots.ts                  # robots.txt生成
│   │   ├── about-us/page.tsx
│   │   ├── products/
│   │   │   ├── layout.tsx             # 製品共通レイアウト
│   │   │   ├── page.tsx               # /products
│   │   │   ├── insole/page.tsx
│   │   │   └── brand/page.tsx
│   │   ├── company/page.tsx           # 旧/overview
│   │   ├── after-service/page.tsx
│   │   ├── membership/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx               # 記事一覧 (ISR)
│   │   │   └── [slug]/page.tsx        # 記事詳細 (ISR)
│   │   └── schedules/page.tsx         # スケジュール (SSR)
│   │
│   ├── components/
│   │   ├── layout/                    # Header, Footer, SideMenu
│   │   ├── animation/                 # FadeIn, ScrollDown等（typo修正）
│   │   ├── ui/                        # Button, Accordion, Tab等（perts→ui）
│   │   ├── sections/                  # ContactForm, PickUp等
│   │   ├── schedules/                 # CalendarView, JapanMap等
│   │   └── providers/                 # LenisProvider, ParallaxProvider
│   │
│   ├── lib/                           # APIクライアント・ユーティリティ
│   │   ├── wordpress.ts               # WP API関数群
│   │   ├── schedule-api.ts            # Django API関数群
│   │   ├── emailjs.ts                 # EmailJS設定
│   │   ├── metadata.ts                # メタデータヘルパー
│   │   └── utils.ts                   # 汎用ユーティリティ
│   │
│   ├── types/                         # TypeScript型定義
│   │   ├── wordpress.ts
│   │   ├── schedule.ts
│   │   ├── staff.ts
│   │   └── contact.ts
│   │
│   ├── data/                          # 静的データ（インライン→外部化）
│   │   ├── staff.ts                   # スタッフ一覧（AboutUs.jsから抽出）
│   │   ├── faq.ts                     # FAQ項目
│   │   ├── company-history.ts         # 沿革データ
│   │   └── prefectures.ts            # 都道府県リスト
│   │
│   ├── styles/                        # SCSS（現行構成を維持）
│   │   ├── globals.scss               # main.scss→globals.scss
│   │   ├── _variables.scss
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _home.scss
│   │   ├── _about.scss
│   │   ├── _news.scss
│   │   ├── _schedules.scss
│   │   ├── _contact.scss
│   │   ├── _faq.scss
│   │   ├── _overview.scss
│   │   ├── _afterservice.scss
│   │   ├── _membership.scss
│   │   ├── _button.scss
│   │   ├── _animation.scss            # typo修正: animaition→animation
│   │   ├── _sectionAnimation.scss
│   │   ├── _sideBar.scss
│   │   ├── _videoSlider.scss
│   │   ├── _accordion.scss
│   │   ├── ProductPages/
│   │   ├── perts-style/
│   │   └── section/
│   │
│   └── assets/images/                 # 画像ファイル（現行構成維持）
│
├── middleware.ts                       # ID→スラッグリダイレクト
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.local
```

---

## 6. データフェッチ戦略

### レンダリング方式一覧

| ページ | 方式 | revalidate | データソース | 理由 |
|--------|------|-----------|------------|------|
| `/` (Home) | ISR | 3600秒(1h) | WordPress API | WP最新記事を定期更新 |
| `/about-us` | SSG | なし | 静的データ | 変更頻度低 |
| `/products/*` | SSG | なし | 静的データ | 変更頻度低 |
| `/company` | SSG | なし | 静的データ | 変更頻度低 |
| `/after-service` | SSG | なし | 静的データ | 変更頻度低 |
| `/membership` | SSG | なし | 静的データ | 変更頻度低 |
| `/faq` | SSG | なし | 静的データ | 変更頻度低 |
| `/contact` | SSG+Client | なし | なし(送信時EmailJS) | フォームはClient |
| `/news` | ISR | 1800秒(30m) | WordPress API | カテゴリ・ページ動的 |
| `/news/[slug]` | ISR | 3600秒(1h) | WordPress API | SEO最重要ページ |
| `/schedules` | SSR | なし(毎回) | Django API | リアルタイムデータ |

### WordPress API設計

```typescript
// src/lib/wordpress.ts
const WP_API_BASE = 'https://wp.earu-first.com/Blog/wp-json/wp/v2';

// サーバーサイドで呼び出す関数群
export async function getLatestPosts(count: number): Promise<WPPost[]>
export async function getPosts(options: GetPostsOptions): Promise<PostsResult>
export async function getPostBySlug(slug: string): Promise<WPPost | null>
export async function getAllPostSlugs(limit?: number): Promise<string[]>
export async function getCategories(): Promise<WPCategory[]>
```

### Django API設計

```typescript
// src/lib/schedule-api.ts

// サーバーサイド用（Server Component / Route Handler から呼び出し）
const DJANGO_API_BASE = process.env.DJANGO_API_BASE_URL; // NEXT_PUBLIC_ 不要

// クライアントサイド用（Client Component から直接呼び出す場合）
const DJANGO_API_BASE_CLIENT = process.env.NEXT_PUBLIC_DJANGO_API_BASE_URL;

export async function fetchPublicSchedule(params?: ScheduleParams): Promise<ScheduleResult>
export async function fetchScheduleByPrefecture(prefecture: string): Promise<Schedule[]>
export function getCurrentFiscalYear(): number
```

> **注意**: スケジュールページの初期データ取得はServer Componentで行うため、`DJANGO_API_BASE_URL`（プレフィックスなし）を使用する。クライアントサイドでのフィルター変更時のみ`NEXT_PUBLIC_`付きの変数を使用する。サーバー専用の環境変数をクライアントに露出させないこと。

---

## 7. Server/Client Component分類

### Server Components（サーバー側でレンダリング）
| コンポーネント | 理由 |
|-------------|------|
| layout.tsx (ルート) | メタデータ、フォント、静的HTML |
| Footer.tsx | 静的コンテンツ、インタラクション不要 |
| BackInsole.tsx | 純粋なプレゼンテーション |
| AgentLogo.tsx | 静的ロゴ表示 |
| OverViewLink.tsx | 静的リンク |
| PickUp.tsx | 静的セクション |
| EventCard.tsx | データ表示のみ |
| Button.tsx | Next.js Linkラッパー |

### Client Components（`'use client'`指定）
| コンポーネント | 理由 |
|-------------|------|
| Header.tsx | scroll event, useState, window |
| SideMenu.tsx | useState, usePathname |
| LenisProvider.tsx | window, requestAnimationFrame |
| ParallaxProviderWrapper.tsx | Provider API |
| FadeInSection.tsx | IntersectionObserver |
| ScrollDown*.tsx | アニメーション |
| FlowingImagesBackground.tsx | アニメーション |
| VideoSlider.tsx | インタラクション |
| Accordion.tsx | useState (開閉) |
| Tab.tsx | useState (選択) |
| Tooltip.tsx | hover state |
| PopUp/BasicPopUp/OrderPopUp.tsx | モーダル制御 |
| ContactForm.tsx | フォーム状態、EmailJS、Zipcloud |
| SubmitButton.tsx | アニメーション |
| PentagonChart.tsx | recharts (Canvas/SVG) |
| JapanMap.tsx | SVG DOM操作、イベント |
| CalendarView.tsx | 日付選択 |
| FilterBar.tsx | フィルター操作 |
| SearchModal.tsx | window.lenis、DOM操作 |
| PrefectureListView.tsx | インタラクション |
| HomeProduct.tsx | Parallax |
| HomeAfterService.tsx | Parallax |

---

## 8. 環境変数

```env
# .env.local
# ============================================
# サーバーサイド専用（ブラウザに露出しない）
# ============================================
WP_API_BASE=https://wp.earu-first.com/Blog/wp-json/wp/v2
DJANGO_API_BASE_URL=https://earu-sistem.onrender.com
REVALIDATION_SECRET=<ランダム文字列を生成して設定>

# ============================================
# クライアントサイドでも使用（NEXT_PUBLIC_プレフィックス）
# ブラウザに露出するため、秘匿性の高い値は含めないこと
# ============================================
NEXT_PUBLIC_DJANGO_API_BASE_URL=https://earu-sistem.onrender.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=<EmailJS管理画面から取得>
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=<EmailJS管理画面から取得>
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<EmailJS管理画面から取得>
NEXT_PUBLIC_SITE_URL=https://earu-first.com
```

> **セキュリティ注意事項**:
> - `NEXT_PUBLIC_` 付きの変数はクライアントバンドルに含まれ、ブラウザで閲覧可能
> - EmailJS の Public Key は仕様上クライアント公開前提だが、本ドキュメントに実値を記載しない
> - `REVALIDATION_SECRET` は On-Demand ISR の認証用。必ずサーバー専用変数として管理
> - Vercel の環境変数設定で Production / Preview / Development を分けて管理可能

---

## 9. next.config.ts 設計

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // SCSS対応（Next.jsはSASS組み込みサポート）
  sassOptions: {
    includePaths: ['./src/styles'],
  },

  // WordPress画像ドメイン許可
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.earu-first.com',
        pathname: '/Blog/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'earu-first.com',
        pathname: '/Blog/wp-content/uploads/**',
      },
    ],
  },

  // リダイレクト
  async redirects() {
    return [
      {
        source: '/overview',
        destination: '/company',
        permanent: true,
      },
    ];
  },

  // WordPress管理画面へのリライト（オプション）
  async rewrites() {
    return [
      {
        source: '/Blog/:path*',
        destination: 'https://wp.earu-first.com/Blog/:path*',
      },
    ];
  },
};

export default nextConfig;
```

---

## 10. 現行サイト パフォーマンスベースライン

移行前に現行CRAサイトのパフォーマンスを計測し、移行後と比較するための基準値を取得する。

### 計測対象ページ（最低限）
| ページ | URL | 計測理由 |
|--------|-----|---------|
| ホーム | `/` | 最も重いページ（画像・アニメーション多数） |
| ニュース詳細 | `/news/:id` | SEO改善の主目的ページ |
| スケジュール | `/schedules` | Django API依存・SSR化対象 |

### 計測項目
| 指標 | ツール | 目的 |
|------|--------|------|
| Lighthouse Score (Performance, SEO, Accessibility) | Chrome DevTools | 移行前後のスコア比較 |
| LCP, CLS, INP | PageSpeed Insights | Core Web Vitals比較 |
| First Load JS サイズ | Chrome DevTools Network | バンドルサイズ比較 |
| TTFB | curl / WebPageTest | サーバー応答速度比較 |
| Google検索インデックス数 | Google Search Console | SEO効果測定の基準 |

### 記録方法
- Lighthouse JSONレポートを `docs/baseline/` に保存
- 計測日時を記録（ネットワーク環境による変動あり）
- モバイル / デスクトップ両方で計測

---

## 11. 用語定義

| 用語 | 定義 |
|------|------|
| SSG (Static Site Generation) | ビルド時にHTMLを生成。変更頻度の低いページに適用 |
| ISR (Incremental Static Regeneration) | ビルド後も一定間隔で再生成。ブログ記事等に適用 |
| SSR (Server-Side Rendering) | リクエスト毎にサーバーでHTML生成。リアルタイムデータに適用 |
| On-Demand ISR | Webhookトリガーで即時再生成。CMS更新の即時反映に使用 |
| Server Component | サーバーでのみ実行されるReactコンポーネント。`'use client'`なし |
| Client Component | ブラウザでも実行されるReactコンポーネント。`'use client'`指定 |
| Edge Runtime | Vercel Edge Networkで実行される軽量ランタイム。middlewareが使用 |
| CRA | Create React App。現行プロジェクトのビルドツール |
