# EARU-FIRST Next.js移行 作業手順

> 作成日: 2026-02-27
> 最終更新: 2026-02-27
> バージョン: 1.1

---

## 工数見積サマリー

| Phase | 内容 | 見積工数 | 期間目安 |
|-------|------|---------|---------|
| Phase 0 | パフォーマンスベースライン計測 | 0.5人日 | Week 1 |
| Phase 1 | プロジェクトセットアップ | 3-4人日 | Week 1-2 |
| Phase 2 | 静的ページ移行（8ページ） | 5-7人日 | Week 2-3 |
| Phase 3 | 動的ページ移行（3ページ） | 5-7人日 | Week 3-4 |
| Phase 4 | SEO実装 + On-Demand ISR | 3-4人日 | Week 4-5 |
| Phase 5 | デプロイ・DNS切替・検証 | 2-3人日 | Week 5-6 |
| **合計** | | **18.5-25.5人日** | **約6週間** |

> **注意**: 上記は1人で作業する場合の見積もり。不具合対応やデザイン微調整のバッファとして +20% を推奨。

---

## Phase 0: パフォーマンスベースライン計測（Week 1初日、0.5人日）

移行前の現行CRAサイトのパフォーマンスを記録する。移行後の比較に使用。

### 0.1 計測実施

1. Chrome DevTools Lighthouse で以下のページを計測（モバイル + デスクトップ）:
   - `/` (ホーム)
   - `/news/:id` (ニュース詳細)
   - `/schedules` (スケジュール)
2. 計測結果のJSONレポートを `docs/baseline/` に保存
3. Google Search Console の現在のインデックス状況をスクリーンショットで記録
4. `curl -I https://earu-first.com/news/` でレスポンスヘッダー（TTFB）を記録

### 0.2 記録項目

| 指標 | ホーム | ニュース詳細 | スケジュール |
|------|--------|------------|------------|
| Performance Score | ___点 | ___点 | ___点 |
| SEO Score | ___点 | ___点 | ___点 |
| LCP | ___秒 | ___秒 | ___秒 |
| CLS | ___ | ___ | ___ |
| First Load JS | ___KB | ___KB | ___KB |

---

## Phase 1: プロジェクトセットアップ（Week 1-2、3-4人日）

### 1.1 Next.jsプロジェクト初期化

```bash
# 新規ディレクトリで作成（既存CRAプロジェクトとは別）
npx create-next-app@latest earu-first-nextjs \
  --typescript \
  --app \
  --src-dir \
  --import-alias "@/*"

cd earu-first-nextjs
```

### 1.2 依存ライブラリインストール

```bash
# 維持するライブラリ
npm install framer-motion lenis react-scroll-parallax \
  react-intersection-observer recharts \
  @emailjs/browser lucide-react \
  @fortawesome/fontawesome-svg-core \
  @fortawesome/free-solid-svg-icons \
  @fortawesome/free-brands-svg-icons \
  @fortawesome/react-fontawesome

# 新規追加
npm install sanitize-html
npm install -D @types/sanitize-html sass
```

### 1.3 SCSS設定

SCSS は Next.js に組み込みサポートがある。`sass` パッケージのインストールのみで動作する。

1. 現行 `src/styles/` ディレクトリを新プロジェクトの `src/styles/` にコピー
2. `main.scss` → `globals.scss` にリネーム
3. `src/app/layout.tsx` で `import '@/styles/globals.scss'` を追加
4. **SCSS `@import` → `@use`/`@forward` 移行（推奨）**:
   - Dart Sass は `@import` を非推奨化しており、将来のバージョンで削除予定
   - 初回移行では `@import` のままでも動作するが、Sass のコンパイル時に警告が出る
   - `globals.scss` 内の `@import '_variables'` → `@use 'variables'` に変更を推奨
   - `@use` では名前空間が必要: `variables.$primary-color` のように参照
   - 段階的移行の場合、`sassOptions` に `silenceDeprecations: ['import']` を設定して警告を抑制可能:
   ```typescript
   // next.config.ts
   sassOptions: {
     includePaths: ['./src/styles'],
     silenceDeprecations: ['import'], // 段階的移行中の警告抑制
   },
   ```

### 1.4 アセット移行

```bash
# 画像ファイルをコピー
cp -r <旧プロジェクト>/src/assets/ <新プロジェクト>/src/assets/

# publicファイルをコピー
cp <旧>/public/japan-map-geolonia.svg <新>/public/
cp <旧>/public/japan-prefectures.json <新>/public/
cp <旧>/public/favicon* <新>/public/
cp <旧>/public/apple-touch-icon.png <新>/public/
cp <旧>/public/site.webmanifest <新>/public/
cp <旧>/public/web-app-manifest-*.png <新>/public/
```

### 1.5 TypeScript型定義作成

**`src/types/wordpress.ts`**
```typescript
export interface WPPost {
  id: number;
  slug: string;
  title: string;
  content: string;       // sanitize済みHTML
  excerpt: string;        // プレーンテキスト（metaに使用）
  date: string;
  modified: string;
  featuredImage: string | null;
  categories: WPCategory[];
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

export interface PostsResult {
  posts: WPPost[];
  totalPages: number;
  totalCount: number;
}
```

**`src/types/schedule.ts`**
```typescript
export interface Schedule {
  id: number;
  store: number;
  store_name: string;
  store_postalcode: string | null;
  store_prefectures: string | null;
  store_address: string | null;
  user: number;
  user_name: string;
  category: string;
  start_day: string;
  end_day: string;
  is_public: boolean;
}

export interface ScheduleResult {
  count: number;
  results: Schedule[];
}

export interface ScheduleParams {
  start_date?: string;
  end_date?: string;
  fiscal_year?: string;
}
```

**`src/types/staff.ts`**
```typescript
export interface StaffMember {
  image: string;
  name: string;
  engName: string;
  title: string;
  birth: string;
  from: string;
  career: string[];
  qualification: string;
  email?: string;
  region: string;
}
```

**`src/types/contact.ts`**
```typescript
export type InquiryType = 'repair' | 'agency' | 'oem';

export interface ContactFormData {
  inquiryType: InquiryType;
  email: string;
  nameKanji: string;
  nameKatakana: string;
  phone: string;
  postalCode: string;
  prefecture: string;
  city: string;
  address: string;
  message: string;
  // repair固有
  purchaseDate?: string;
  productName?: string;
  symptom?: string;
  // agency固有
  companyName?: string;
  position?: string;
  // oem固有
  oemDetails?: string;
}
```

### 1.6 APIクライアント作成

**`src/lib/wordpress.ts`** — WordPress REST API関数

主要関数:
- `getLatestPosts(count)` — ホームページ用最新記事取得
- `getPosts({ page, perPage, categoryId })` — 記事一覧取得（ページネーション対応）
- `getPostBySlug(slug)` — スラッグで単一記事取得
- `getPostById(id)` — IDで記事取得（リダイレクト用）
- `getAllPostSlugs(limit)` — generateStaticParams用スラッグ一覧
- `getCategories()` — カテゴリ一覧取得

注意: Next.js の fetch は自動的にキャッシュされる。`revalidate` オプションでISRを制御。

**`src/lib/schedule-api.ts`** — Django API関数

現行 `src/pages/Schedules/api/scheduleApi.js` をTypeScript化。
- サーバーサイド呼び出し時: `DJANGO_API_BASE_URL` 環境変数を使用
- クライアントサイド呼び出し時: `NEXT_PUBLIC_DJANGO_API_BASE_URL` を使用

### 1.7 ルートレイアウト作成

**`src/app/layout.tsx`**

```typescript
import type { Metadata } from 'next';
import { Noto_Sans_JP, Anton, Bebas_Neue } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/providers/Providers';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://earu-first.com'),
  title: {
    default: 'EARU-FIRST | インソールで足元から健康をサポート',
    template: '%s | EARU-FIRST',
  },
  description: '有限会社エアル・ファーストは北海道を拠点に...',
  // ... (00_specification.md参照)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${anton.variable} ${bebasNeue.variable}`}
    >
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '有限会社エアル・ファースト',
              // ... (00_specification.md参照)
            }),
          }}
        />
      </body>
    </html>
  );
}
```

### 1.8 Providersコンポーネント作成

**`src/components/providers/Providers.tsx`** (`'use client'`)

```typescript
'use client';
import { LenisProvider } from './LenisProvider';
import { ParallaxProvider } from 'react-scroll-parallax';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </LenisProvider>
  );
}
```

**`src/components/providers/LenisProvider.tsx`** (`'use client'`)

Lenis初期化をuseEffect内で実行。`window.lenis`へのグローバル参照を設定。

### 1.9 レイアウトコンポーネント移行

| コンポーネント | 元ファイル | 移行先 | 変更点 |
|-------------|----------|-------|-------|
| Header | `src/components/Header.js` | `src/components/layout/Header.tsx` | `'use client'`追加、Link→next/link、useLocation→usePathname |
| Footer | `src/components/Footer.js` | `src/components/layout/Footer.tsx` | Link→next/link |
| SideMenu | `src/components/SideMenu.js` | `src/components/layout/SideMenu.tsx` | `'use client'`追加、Link→next/link、useLocation→usePathname |
| SubPageNav | `src/components/SubPageNav.js` | `src/components/layout/SubPageNav.tsx` | `'use client'`追加 |

### 1.10 middleware.ts作成

> **重要**: middleware は Edge Runtime で実行される。Edge Runtime では `{ next: { revalidate } }` 等の拡張 fetch オプションは使用不可。標準の `fetch` API のみ使用すること。

```typescript
// middleware.ts（プロジェクトルート）
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // /news/[数字] → /news/[slug] リダイレクト
  const match = request.nextUrl.pathname.match(/^\/news\/(\d+)$/);
  if (match) {
    const id = match[1];
    try {
      // Edge Runtime では標準 fetch のみ使用可能
      // next: { revalidate } オプションは使用不可
      const res = await fetch(
        `https://wp.earu-first.com/Blog/wp-json/wp/v2/posts/${id}?_fields=slug`
      );
      if (res.ok) {
        const post = await res.json();
        if (post.slug) {
          return NextResponse.redirect(
            new URL(`/news/${post.slug}`, request.url),
            301
          );
        }
      }
    } catch {
      // APIエラー時は404へフォールスルー
    }
  }
}

export const config = {
  matcher: '/news/:path*',
};
```

> **パフォーマンス補足**: middleware は全 `/news/*` リクエストで実行される。数値IDパスのリクエストは旧SEOリンクからの流入のみなので頻度は低い。Slug パスのリクエストでは正規表現にマッチしないため即座にスルーする。

### 1.11 共通コンポーネント移行

| 元ファイル | 移行先 | 指定 |
|----------|-------|------|
| `animaition/fade-in.js` | `animation/FadeInSection.tsx` | `'use client'` |
| `animaition/Loading.js` | `animation/Loading.tsx` → `app/loading.tsx` | `'use client'` |
| `animaition/ScrollDown.js` | `animation/ScrollDown.tsx` | `'use client'` |
| `animaition/ScrollDownIndicator.js` | `animation/ScrollDownIndicator.tsx` | `'use client'` |
| `animaition/ScrollTop.js` | 削除 | Next.jsはルート変更時に自動スクロール |
| `animaition/slider.js` | `animation/VideoSlider.tsx` | `'use client'` |
| `animaition/FlowingImagesBackground.js` | `animation/FlowingImagesBackground.tsx` | `'use client'` |
| `perts/button.js` | `ui/Button.tsx` | Server可（next/link使用） |
| `perts/accordion.js` | `ui/Accordion.tsx` | `'use client'` |
| `perts/Tab.js` | `ui/Tab.tsx` | `'use client'` |
| `perts/Tooltip.js` | `ui/Tooltip.tsx` | `'use client'` |
| `perts/SubmitButton.js` | `ui/SubmitButton.tsx` | `'use client'` |
| `perts/BackInsole.js` | `ui/BackInsole.tsx` | Server可 |
| `perts/agentLogo.js` | `ui/AgentLogo.tsx` | Server可 |
| `perts/OverVIewLink.js` | `ui/OverViewLink.tsx` | Server可 |
| `perts/PentagonChart.js` | `ui/PentagonChart.tsx` | `'use client'` + dynamic import |
| `perts/backslide.js` | `ui/BackSlide.tsx` | `'use client'` |
| `perts/PopUps/*.js` | `ui/popups/*.tsx` | `'use client'` |
| `sections/form.js` | `sections/ContactForm.tsx` | `'use client'` |
| `sections/AgreeCheck.js` | `sections/AgreeCheck.tsx` | `'use client'` |
| `sections/PickUp.js` | `sections/PickUp.tsx` | Server可 |
| `sections/HomeSection/*.js` | `sections/Home*.tsx` | `'use client'` |

### 1.12 環境変数設定

`.env.local` を作成（実値は `00_specification.md` セクション8参照）:
```env
# サーバーサイド専用
WP_API_BASE=https://wp.earu-first.com/Blog/wp-json/wp/v2
DJANGO_API_BASE_URL=https://earu-sistem.onrender.com
REVALIDATION_SECRET=<ランダム文字列を生成>

# クライアントサイドでも使用
NEXT_PUBLIC_DJANGO_API_BASE_URL=https://earu-sistem.onrender.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=<EmailJS管理画面から取得>
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=<EmailJS管理画面から取得>
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<EmailJS管理画面から取得>
NEXT_PUBLIC_SITE_URL=https://earu-first.com
```

> **注意**: EmailJSの実際のキー値はドキュメントに記載しない。現行プロジェクトの `.env` ファイルまたは EmailJS管理画面から取得すること。

---

## Phase 2: 静的ページ移行（Week 2-3、5-7人日）

移行順序: 単純なページから複雑なページへ

### 工数内訳
| タスク | 見積 |
|--------|------|
| FAQ、アフターサービス、代理店 | 各0.5人日 |
| 私たちについて（スタッフデータ抽出含む） | 1人日 |
| 会社概要、製品ページ群（3ページ） | 1.5人日 |
| お問い合わせ（フォーム移行） | 1人日 |
| ホームページ（最複雑） | 1.5-2人日 |
| Phase 2 動作確認・ビジュアル比較 | 0.5人日 |

### 2.1 FAQページ（最も単純）

1. `src/data/faq.ts` にFAQデータを抽出（型付き）
2. `src/app/faq/page.tsx` を作成（Server Component）
3. FAQPageスキーマのJSON-LDを追加
4. メタデータを設定
5. Accordion コンポーネントは `'use client'` で使用

### 2.2 アフターサービスページ

1. `src/app/after-service/page.tsx` を作成
2. 保証情報、症状テーブル、フロー画像を移行
3. 画像は `next/image` で最適化
4. メタデータを設定

### 2.3 代理店・会員ページ

1. `src/app/membership/page.tsx` を作成
2. SVGアニメーション（setTimeout）は `'use client'` サブコンポーネントに分離
3. メタデータを設定

### 2.4 私たちについてページ

1. `src/data/staff.ts` にスタッフデータを抽出（型付き）
2. `src/data/company-history.ts` に沿革データを抽出
3. `src/app/about-us/page.tsx` を作成（Server Component）
4. スタッフポップアップは Client Component に分離
5. FadeInSection, motion.div は Client Component
6. メタデータを設定

### 2.5 会社概要ページ（旧/overview）

1. `src/app/company/page.tsx` を作成
2. `/overview` → `/company` リダイレクトは next.config.ts で設定済み
3. 代理店一覧のアコーディオンは Client Component
4. メタデータを設定

### 2.6 製品ページ群

1. `src/app/products/layout.tsx` を作成（共通レイアウト）
2. `src/app/products/page.tsx` — 製品一覧
3. `src/app/products/insole/page.tsx` — インソール詳細
4. `src/app/products/brand/page.tsx` — ブランド一覧
5. Tab コンポーネントは Client Component
6. 各ページにメタデータ + Product JSON-LD

### 2.7 お問い合わせページ

1. `src/app/contact/page.tsx` を作成（Server Component シェル）
2. `src/components/sections/ContactForm.tsx` を `'use client'` で移行
3. EmailJS 設定を環境変数から取得
4. Zipcloud API は従来通りクライアントサイド
5. `src/components/sections/AgreeCheck.tsx` を移行
6. メタデータを設定

### 2.8 ホームページ（Phase 2最後 — 最も複雑）

1. `src/app/page.tsx` を作成（Server Component、ISR）
2. サーバーサイドで WP 最新3記事を取得
3. データを Client Component の `HomeContent` に渡す
4. 各セクション（ニュースカルーセル、製品パララックス、FAQ等）は Client Component
5. `FlowingImagesBackground` は Client Component
6. `VideoSlider` は Client Component
7. 画像インポートの `require.context`（CRA固有）→ 明示的importに変更
8. `next/image` で画像最適化
9. メタデータを設定

**require.context の置換例:**

```typescript
// 旧（CRA）
const images = require.context('../assets/images/Home', false, /\.(webp|jpg|png)$/);

// 新（Next.js）
import homeImg1 from '@/assets/images/Home/image1.webp';
import homeImg2 from '@/assets/images/Home/image2.webp';
// ... 明示的にインポート
const images = [homeImg1, homeImg2, ...];
```

---

## Phase 3: 動的ページ移行 — WordPress/Django連携（Week 3-4、5-7人日）

### 工数内訳
| タスク | 見積 |
|--------|------|
| WordPress APIクライアント実装 + テスト | 1人日 |
| ニュース一覧ページ | 1人日 |
| ニュース詳細ページ（SEO最重要） | 1.5人日 |
| スケジュールページ（全コンポーネント移行） | 1.5-2人日 |
| Phase 3 動作確認・API連携テスト | 0.5-1人日 |

### 3.1 WordPress APIクライアント実装

`src/lib/wordpress.ts` に全API関数を実装:

1. `transformWPPost()` — WP APIレスポンスを `WPPost` 型に正規化
2. `decodeHTMLEntities()` — WPタイトルのHTMLエンティティをデコード
3. `stripHTML()` — excerpt用にHTMLタグを除去
4. `sanitizeContent()` — `sanitize-html` でXSS対策

### 3.2 ニュース一覧ページ

**`src/app/news/page.tsx`**

```typescript
// ISR: 30分ごとに再検証
export const revalidate = 1800;

// searchParamsでページネーション・カテゴリフィルター
// ?page=2&category=5 のようなURLパラメータで制御
```

移行のポイント:
- 現行の `useState` + クライアントfetch → サーバーサイドfetch + searchParams
- ページネーションはURLパラメータ（`?page=2`）で管理
- カテゴリフィルターもURLパラメータ（`?category=5`）で管理
- `X-WP-TotalPages` ヘッダーからtotalPagesを取得

### 3.3 ニュース詳細ページ（SEO最重要）

**`src/app/news/[slug]/page.tsx`**

```typescript
// generateStaticParams で最新50記事をビルド時に生成
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(50);
  return slugs.map((slug) => ({ slug }));
}

// ISR: 1時間ごとに再検証
export const revalidate = 3600;

// 動的メタデータ生成
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  // title, description, OG, Twitterカード設定
}
```

移行のポイント:
- 現行の `dangerouslySetInnerHTML` → `sanitize-html` で処理後に使用
- SNSシェアボタンは Client Component に分離
- Article JSON-LDを追加
- WP記事のアイキャッチ画像を `next/image` で表示（remotePatterns設定必要）

### 3.4 スケジュールページ

**`src/app/schedules/page.tsx`**

```typescript
// SSR: リアルタイムデータ
export const dynamic = 'force-dynamic';
```

移行のポイント:
- 初期データ（当月分）はサーバーサイドで取得
- 月変更、都道府県フィルター等のインタラクションは Client Component
- `JapanMap.tsx` — SVG fetchをクライアントサイドに維持
- `SearchModal.tsx` — `window.lenis` 操作は LenisProvider のコンテキスト経由に改修
- `CalendarView.tsx`, `FilterBar.tsx`, `PrefectureListView.tsx` — `'use client'`

スケジュールコンポーネント移行:
| 元ファイル | 移行先 |
|----------|-------|
| `Schedules/Schedules.js` | `app/schedules/page.tsx` (Server) + `SchedulesClient.tsx` (Client) |
| `Schedules/components/CalendarView.js` | `components/schedules/CalendarView.tsx` |
| `Schedules/components/EventCard.js` | `components/schedules/EventCard.tsx` |
| `Schedules/components/FilterBar.js` | `components/schedules/FilterBar.tsx` |
| `Schedules/components/JapanMap.js` | `components/schedules/JapanMap.tsx` |
| `Schedules/components/PrefectureListView.js` | `components/schedules/PrefectureListView.tsx` |
| `Schedules/components/SearchModal.js` | `components/schedules/SearchModal.tsx` |
| `Schedules/api/scheduleApi.js` | `lib/schedule-api.ts` |
| `Schedules/types.js` | `types/schedule.ts` |

---

## Phase 4: SEO実装 + On-Demand ISR（Week 4-5、3-4人日）

### 4.1 サイトマップ生成

`src/app/sitemap.ts` を作成:
- 全静的ページのURL
- WordPress記事のURL（getAllPostSlugsで取得）
- changeFrequency, priority 設定

### 4.2 robots.txt生成

`src/app/robots.ts` を作成:
- 全ページクロール許可
- `/api/` パスを除外
- サイトマップURLを指定

### 4.3 JSON-LD構造化データ

| ページ | 追加するスキーマ |
|--------|-------------|
| layout.tsx | Organization |
| /faq | FAQPage |
| /news/[slug] | Article |
| /products/* | Product |
| /schedules | Event（各イベント） |

### 4.4 OGP画像作成

1200x630pxのデフォルトOGP画像を `public/og-image.jpg` に配置。
内容: EARUロゴ + 「インソールで足元から健康をサポート」キャッチコピー

### 4.5 画像最適化

全 `<img>` タグを `next/image` に置換:
- `src/assets/` の画像: 静的importで自動最適化
- WordPress画像: `remotePatterns` 設定で許可
- `width`, `height`, `alt` を全画像に設定
- ヒーロー画像には `priority` 属性追加

### 4.6 フォント最適化

Google Fonts CDN → `next/font/google` に置換:
- Noto Sans JP (100-900)
- Anton
- Bebas Neue

`_variables.scss` のフォント参照を CSS変数に更新:
```scss
body {
  font-family: var(--font-noto-sans-jp), sans-serif;
}
```

FontAwesome CDN → npm パッケージ使用のみに統一（既にインストール済み）

### 4.7 On-Demand ISR 設定（WordPress記事の即時反映）

WordPress記事の公開・更新時に、ISRキャッシュを即座に無効化する仕組みを構築する。

**`src/app/api/revalidate/route.ts`**
```typescript
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { secret, slug } = await request.json();

  // シークレットキーによる認証
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  // 関連ページのキャッシュを無効化
  revalidatePath(`/news/${slug}`);  // 記事詳細
  revalidatePath('/news');           // 記事一覧
  revalidatePath('/');               // ホーム（最新3記事表示）

  return NextResponse.json({ revalidated: true, slug });
}
```

**WordPress側の設定:**
- WP Webhooks プラグイン等を使用
- 記事公開時に `POST https://earu-first.com/api/revalidate` を呼び出し
- リクエストボディ: `{ "secret": "<REVALIDATION_SECRET>", "slug": "<記事スラッグ>" }`

> On-Demand ISR は必須ではない。ISRの `revalidate` 値（ニュース詳細: 1時間、一覧: 30分）で十分な場合はスキップ可能。記事公開の即時反映が求められる場合に導入する。

### 4.8 Phase 4 完了時テスト

1. `curl -s https://xxx.vercel.app/news/[slug] | grep -o '<title>.*</title>'` でSSRメタデータ確認
2. `/sitemap.xml` に全ページ + 全記事が含まれることを確認
3. `/robots.txt` の内容を確認
4. Google Rich Results Test で各ページの構造化データを検証
5. Lighthouse で Performance / SEO / Accessibility を計測し、Phase 0 のベースラインと比較

---

## Phase 5: Vercelデプロイ & DNS切替（Week 5-6、2-3人日）

### 5.1 WordPress サブドメイン移行

**Xserver側作業:**
1. `wp.earu-first.com` サブドメインを作成
2. WordPress設定（wp-config.php）のサイトURLを更新:
   - `WP_HOME` → `https://wp.earu-first.com/Blog`
   - `WP_SITEURL` → `https://wp.earu-first.com/Blog`
3. `.htaccess` でリダイレクト設定
4. SSL証明書を設定（Xserverの無料SSLで対応可）
5. REST APIのアクセスを確認: `https://wp.earu-first.com/Blog/wp-json/wp/v2/posts`

### 5.2 Django API CORS更新

Django バックエンド (`earu-sistem.onrender.com`) のCORS設定を更新:
- `earu-first.com` を許可オリジンに追加
- Vercelプレビューデプロイ用のパターンも許可（`*.vercel.app`）

### 5.3 Vercelプロジェクト設定

1. Vercel にGitリポジトリを接続
2. 環境変数を設定（全変数の一覧は `00_specification.md` セクション8参照）:
   - `WP_API_BASE` — WordPress API ベースURL
   - `DJANGO_API_BASE_URL` — Django API ベースURL（サーバー専用）
   - `NEXT_PUBLIC_DJANGO_API_BASE_URL` — Django API ベースURL（クライアント用）
   - `NEXT_PUBLIC_EMAILJS_*` — EmailJS設定（3変数）
   - `NEXT_PUBLIC_SITE_URL` — 本番サイトURL
   - `REVALIDATION_SECRET` — On-Demand ISR認証キー
3. ビルド設定確認（デフォルトでOK）
4. プレビューデプロイで全ページ動作確認

### 5.4 プレビュー環境テスト

プレビューURL（`xxx.vercel.app`）で以下を確認:
- 全ページの表示確認
- WordPress API連携（ニュース記事表示）
- Django API連携（スケジュール表示）
- フォーム送信（EmailJS）
- 郵便番号検索（Zipcloud）
- アニメーション動作（Lenis, Framer Motion, パララックス）
- レスポンシブデザイン
- Lighthouse監査

### 5.5 DNS切替準備

**切替7日前:**
- WordPressサブドメイン動作確認
- 全API呼び出しがサブドメイン経由で動作することを確認

**切替3日前:**
- 最終QAテスト on Vercelプレビュー
- 全リダイレクト動作確認

**切替1日前:**
- DNS TTLを300秒（5分）に短縮

### 5.6 DNS切替実行

1. ドメインレジストラ（Xserver等）でDNS設定変更:
   - `earu-first.com` の Aレコード → Vercelの指定IPに変更
   - `www.earu-first.com` の CNAME → `cname.vercel-dns.com`
2. Vercelダッシュボードでドメイン追加
3. SSL証明書の自動発行を確認

### 5.7 切替後確認

**切替直後（1時間以内）:**
- 全ページアクセス確認
- API連携確認
- フォーム送信テスト
- リダイレクト確認（/overview → /company, /news/123 → /news/slug）

**切替24時間後:**
- Google Search Console でサイトマップ送信
- インデックス登録をリクエスト
- エラーログ確認（Vercel Functions Logs）
- Core Web Vitals 確認

**切替7日後:**
- DNS TTLを通常値（3600秒）に戻す
- Google Search Console でインデックス状況確認
- Xserverのホスティングは30日間維持（ロールバック用）

**切替30日後:**
- インデックス状況が安定していることを確認
- Xserverホスティング解約可否を判断

---

## DNS切替 コミュニケーション計画

### 切替判断基準
以下の全条件を満たした場合にDNS切替を実行:
1. Vercel プレビューで全ページ正常表示
2. 全テストケース（01_requirements.md T-01〜T-12）合格
3. WordPress サブドメイン（wp.earu-first.com）の REST API 正常動作
4. Lighthouse Performance > 80, SEO > 90（モバイル）

### ロールバック判断基準
以下のいずれかに該当する場合、DNS をXserverに戻す:
1. トップページが表示されない（500エラー等）
2. WordPress API 連携が完全に機能しない
3. お問い合わせフォームが送信できない
4. 切替後2時間以内に解決できない重大な不具合

### 切替推奨タイミング
- **曜日**: 火曜〜木曜（月曜は週明け対応が重なる、金曜はロールバック対応が困難）
- **時間帯**: 10:00-14:00（業務時間内でモニタリング可能な時間帯）
- **避けるべき日**: 祝前日、大規模イベント直前
