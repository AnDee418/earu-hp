# EARU-FIRST Next.js移行 注意事項

> 作成日: 2026-02-27
> 最終更新: 2026-02-27
> バージョン: 1.1

---

## 0. リスクマトリクス

移行作業における主要リスクの影響度と発生確率を整理する。

| # | リスク | 影響度 | 発生確率 | 対策 | 参照セクション |
|---|--------|--------|---------|------|-------------|
| R-01 | Lenis SSRクラッシュ | 高 | 高 | `'use client'` + `useEffect` で隔離 | 1.1 |
| R-02 | SearchModal の window/document 直接アクセス | 高 | 高 | 全アクセスを `useEffect` / ハンドラ内に移動 | 1.2 |
| R-03 | WordPress画像URL切れ（DNS変更後） | 高 | 高 | Vercel rewrite ルールで旧URLをプロキシ | 2.3 |
| R-04 | Django API CORS拒否 | 高 | 中 | Django CORS設定更新 or API Route プロキシ | 3.1 |
| R-05 | require.context ビルドエラー | 高 | 確実 | 明示的importに全置換 | 1.5 |
| R-06 | SCSS ロード順序の変化によるスタイル崩れ | 中 | 中 | globals.scss 一括読み込みで回避 | 5 |
| R-07 | Framer Motion exit アニメーション非対応 | 低 | 高 | template.tsx で入場のみ実装、exit は省略 | 6 |
| R-08 | Render コールドスタートによるSSRタイムアウト | 中 | 中 | サーバーレス関数タイムアウト設定確認 | 8.8 |
| R-09 | SCSS `@import` 非推奨警告 | 低 | 確実 | `@use`/`@forward` 移行 or `silenceDeprecations` | 5.5 |
| R-10 | DNS切替後のダウンタイム | 高 | 低 | TTL短縮 + ロールバック手順準備 | 7 |
| R-11 | middleware Edge Runtime fetch制限 | 中 | 中 | 拡張fetchオプション不使用 | 1.6 |

---

## 1. SSR互換性リスク

### 1.1 Lenis Smooth Scrolling（高リスク）

**問題**: Lenis は `window`, `document`, `requestAnimationFrame` に直接アクセスする。SSR時にはこれらのAPIが存在しないため、サーバーサイドでクラッシュする。

**現行コード（App.js）の問題箇所:**
```javascript
// App.js:30-61
useEffect(() => {
  const lenis = new Lenis({ ... });
  window.lenis = lenis;  // ← グローバルに設定
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);
```

**対応方法:**
- `LenisProvider` を `'use client'` コンポーネントとして作成
- Lenis の初期化は必ず `useEffect` 内で行う（現行通り）
- `window.lenis` へのグローバル参照は維持可能（useEffect内であれば安全）

**重要**: `'use client'` を指定していても、コンポーネントのトップレベルで `window` にアクセスするとSSRエラーになる。必ず `useEffect` 内または `typeof window !== 'undefined'` ガード内で使用すること。

### 1.2 SearchModal（高リスク）

**問題**: `SearchModal.js` は最も多くの `window`/`document` 直接アクセスを含むコンポーネント。

**問題箇所（SearchModal.js:44-169）:**
```javascript
window.innerWidth - document.documentElement.clientWidth  // スクロールバー幅
window.scrollY                                            // 現在位置
document.body.style.position = 'fixed'                    // スクロール無効化
document.body.style.top = `-${scrollY}px`
window.lenis                                              // Lenis破棄・再作成
window.scrollTo(0, scrollPosition)
modalBodyRef.current.addEventListener('wheel', ...)
```

**対応方法:**
- `'use client'` 指定は必須
- 全ての `window`/`document` アクセスを `useEffect` または イベントハンドラ内に移動
- Lenis の操作は LenisProvider のコンテキストAPI経由に変更を検討
- スクロールロック処理を `useEffect` のクリーンアップ関数に整理

### 1.3 Header スクロール検知

**問題**: Header.js はスクロール位置に応じてスタイルを変更する。

**対応方法:**
- `'use client'` 指定
- `useEffect` 内で `window.addEventListener('scroll', ...)` を設定
- 初期値は SSR セーフな値（例: `isScrolled: false`）を使用

### 1.4 Loading コンポーネント

**問題**: `document.readyState` を参照。

**対応方法:**
- Next.js の `loading.tsx` は App Router が自動的に管理する
- `document.readyState` チェックは不要になる可能性が高い
- 現行のカスタムローディングを維持する場合は `'use client'` + `useEffect` で対応

### 1.6 middleware Edge Runtime の制限

**問題**: `middleware.ts` は Edge Runtime で実行される。Edge Runtime では Node.js の `fs`, `path` 等のモジュールが使えないほか、`fetch` の Next.js 拡張オプション（`{ next: { revalidate } }`）も使用不可。

**問題箇所（02_migration_steps.md の middleware.ts）:**
```typescript
// NG: Edge Runtime では動作しない
const res = await fetch(url, { next: { revalidate: 86400 } });
```

**対応方法:**
```typescript
// OK: 標準の fetch API を使用
const res = await fetch(url);
```

- middleware 内の fetch はキャッシュされない（毎回APIコール）
- `/news/[数字]` パターンは旧URLからの流入時のみ発動するため、頻度は低い
- パフォーマンスが問題になる場合は、既知のID→Slug マッピングを静的に保持する方法も検討

---

### 1.5 require.context（CRA固有）

**問題**: `Home.js:139` で使用されている `require.context` はWebpack固有のAPIで、Next.jsでは使用不可。

```javascript
// 現行（CRA）— 動作しない
const images = require.context('../assets/images/Home', false, /\.(webp|jpg|png)$/);
```

**対応方法:**
```typescript
// Next.js — 明示的インポート
import img1 from '@/assets/images/Home/image1.webp';
import img2 from '@/assets/images/Home/image2.webp';
const images = [img1, img2, /* ... */];
```

---

## 2. WordPress API — DNS変更時の対応

### 2.1 最重要注意事項

現在、WordPress は `earu-first.com/Blog/` でホストされている。DNS を Vercel に向けると、このパスは Vercel のNext.jsアプリに解決される。**WordPress に直接アクセスできなくなる**。

### 2.2 対応策: サブドメイン移行

1. **Xserver で `wp.earu-first.com` サブドメインを作成**
2. WordPress の `wp-config.php` を更新:
   ```php
   define('WP_HOME', 'https://wp.earu-first.com/Blog');
   define('WP_SITEURL', 'https://wp.earu-first.com/Blog');
   ```
3. Next.js の API Base URL を更新:
   ```env
   WP_API_BASE=https://wp.earu-first.com/Blog/wp-json/wp/v2
   ```

### 2.3 WordPress画像URLの問題

既存のWP記事の画像URLは `https://earu-first.com/Blog/wp-content/uploads/...` を参照している。DNS変更後、これらの画像は Vercel に解決されるが、Vercel にはこのファイルが存在しない。

**対応策:**

**方法A（推奨）: Vercel rewrite ルール**
```typescript
// next.config.ts
async rewrites() {
  return [
    {
      source: '/Blog/wp-content/:path*',
      destination: 'https://wp.earu-first.com/Blog/wp-content/:path*',
    },
  ];
}
```
これにより既存の画像URLが引き続き動作する。

**方法B: WordPress のメディアURL一括更新**
WordPress管理画面またはSQLで既存記事の画像URLを `wp.earu-first.com` に更新。但しバックアップ必須。

### 2.4 WordPress管理画面へのアクセス

DNS変更後、`earu-first.com/Blog/wp-admin/` は Vercel に解決される。

**対応策:**
- WordPress管理画面は `https://wp.earu-first.com/Blog/wp-admin/` 経由でアクセス
- 必要に応じて Vercel rewrite で `/Blog/wp-admin/:path*` もプロキシ

---

## 3. CORS設定

### 3.1 Django API（earu-sistem.onrender.com）

現行はCRAプロキシ（`package.json`の`proxy`設定）でCORS回避している。Next.jsではこのプロキシは使用不可。

**対応方法:**

1. Django の `settings.py` で CORS を設定:
   ```python
   CORS_ALLOWED_ORIGINS = [
       "https://earu-first.com",
       "https://www.earu-first.com",
   ]
   # 開発・プレビュー用
   CORS_ALLOWED_ORIGIN_REGEXES = [
       r"^https://.*\.vercel\.app$",
       r"^http://localhost:\d+$",
   ]
   ```

2. **代替案**: Next.js API Route でプロキシ:
   ```typescript
   // src/app/api/schedule/route.ts
   export async function GET(request: Request) {
     const url = new URL(request.url);
     const params = url.searchParams.toString();
     const res = await fetch(
       `https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?${params}`
     );
     const data = await res.json();
     return Response.json(data);
   }
   ```
   これによりブラウザからは `/api/schedule` を呼び出し、サーバーサイドでDjango APIにプロキシする。CORS問題を完全回避。

### 3.2 WordPress API

WordPress REST API はデフォルトでCORS制限がない（パブリックAPI）。但し、WordPress側で制限している場合は確認が必要。

### 3.3 Zipcloud API

`https://zipcloud.ibsnet.co.jp/api/search` はパブリックAPIでCORS制限なし。変更不要。

---

## 4. 画像パス移行

### 4.1 静的画像（src/assets/）

現行の CRA import パターンは Next.js でも動作する:
```typescript
import logo from '@/assets/images/logo/logo.webp';
// → <Image src={logo} alt="EARU-FIRST" />
```

但し `next/image` を使用する場合、`width` と `height` の指定が必須:
- 静的インポートの場合は自動で取得される
- 動的URLの場合は明示的に指定する必要がある

### 4.2 WordPress 画像（リモート）

`next/image` でリモート画像を使用するには `next.config.ts` で許可が必要:
```typescript
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
}
```

`width`, `height` が不明な場合は `fill` プロパティを使用:
```tsx
<div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
  <Image src={post.featuredImage} alt={post.title} fill style={{ objectFit: 'cover' }} />
</div>
```

### 4.3 SVGファイル

Next.js はデフォルトで SVG を `<img>` として扱う。インラインSVGが必要な場合（JapanMap等）は:
- `public/` に配置して `fetch` で取得（現行パターンを維持）
- または `@svgr/webpack` を追加してコンポーネントとして使用

---

## 5. SCSS グローバルスコープ

### 5.1 CSSロード順序の違い

CRA と Next.js ではCSSの読み込み順序が異なる場合がある。特に:
- CRA: webpack がエントリーポイントから順にCSS結合
- Next.js: ページ単位でCSSを分割する場合がある

**現行の設計**: 全SCSSは `globals.scss` から `@import` で一括読み込み。この方式は Next.js でも安全に動作する。

### 5.2 注意点

- `globals.scss` は `layout.tsx` で一度だけ import する
- 個別ページで追加のSCSSを import しない（二重読み込みのリスク）
- 将来的にCSS Modulesに移行する場合は段階的に行う

### 5.3 SCSSインポートパスの違い

CRAの `resolve-url-loader` がSCSS内の相対パスを解決していた。Next.js では `sassOptions.includePaths` で対応:
```typescript
// next.config.ts
sassOptions: {
  includePaths: ['./src/styles'],
}
```

### 5.4 フォント参照

現行の Google Fonts CDN リンク → `next/font/google` に変更する際、SCSS内のフォントファミリー参照も更新が必要:

```scss
// 旧
body { font-family: 'Noto Sans JP', sans-serif; }

// 新（CSS変数経由）
body { font-family: var(--font-noto-sans-jp), sans-serif; }
```

`next/font` は CSS 変数として注入されるため、`layout.tsx` の `<html>` に `className` として設定する。

### 5.5 SCSS `@import` 非推奨化（Dart Sass）

**問題**: Dart Sass は `@import` ルールを非推奨としており、将来のバージョン（予定: 2025年10月以降）で完全削除される。現行プロジェクトの `globals.scss` は `@import` で全パーシャルを読み込んでいる。

**影響**:
- Next.js のビルド時にSassの非推奨警告が大量に出力される
- Sass の将来バージョンアップ時にビルドが壊れる可能性がある

**対応方法（2段階）:**

**段階1（初回移行時）: 警告を抑制して `@import` を維持**
```typescript
// next.config.ts
sassOptions: {
  includePaths: ['./src/styles'],
  silenceDeprecations: ['import'],
},
```

**段階2（移行後に実施）: `@use`/`@forward` に順次移行**
```scss
// 旧 (globals.scss)
@import 'variables';
@import 'header';

// 新 (globals.scss)
@use 'variables';
@use 'header';
```

`@use` では名前空間が導入されるため、変数の参照方法が変わる:
```scss
// 旧: $primary-color (グローバルアクセス)
// 新: variables.$primary-color (名前空間付き)
// または @use 'variables' as *; で名前空間なしも可能
```

> **推奨**: 初回移行では段階1で進め、移行完了後に段階2を別タスクとして実施する。

---

## 6. Framer Motion ページ遷移

### 6.1 AnimatePresence の変更

現行の App.js では React Router の `location.key` を使って `AnimatePresence` を制御:
```jsx
<AnimatePresence mode="wait" initial={false}>
  <Routes location={location} key={location.pathname}>
    ...
  </Routes>
</AnimatePresence>
```

Next.js App Router では `AnimatePresence` をページ遷移に使うのが難しい。

**対応方法:**

**方法A（推奨）: template.tsx を使用**
```typescript
// src/app/template.tsx
'use client';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```
`template.tsx` はルート変更時に毎回再マウントされる（layout.tsx は再マウントされない）。

**方法B: exit アニメーションは省略**

App Router では exit アニメーションの実装が複雑。初回移行では入場アニメーションのみにし、exit アニメーションは将来の改善として検討。

### 6.2 motion.div のSSR

Framer Motion の `motion.div` はSSRに対応しているが、`'use client'` コンポーネント内で使用する必要がある。Server Component で直接使用するとエラーになる。

---

## 7. ロールバック戦略

### 7.1 ロールバック判断基準

以下の **いずれか** に該当する場合、ロールバックを実行する:

| 基準 | 判断 | 対応 |
|------|------|------|
| トップページが500エラーで表示不可 | 即座にロールバック | DNS変更戻し |
| WordPress API連携が完全に機能しない | 30分調査後、解決不可ならロールバック | DNS変更戻し |
| お問い合わせフォームが送信できない | Vercelデプロイロールバックを先に試行 | デプロイロールバック → DNS |
| 特定ページのみ表示不可 | Vercelデプロイロールバックを先に試行 | デプロイロールバック |
| スタイル崩れ（軽微） | 修正デプロイで対応 | コード修正 + 再デプロイ |
| 切替後2時間以内に解決できない重大不具合 | ロールバック | DNS変更戻し |

### 7.2 DNS変更前のロールバック

Xserver上の旧CRAサイトは変更していないため、DNS変更さえしなければ旧サイトが稼働し続ける。

### 7.3 DNS変更後のロールバック

1. ドメインレジストラでDNSレコードを Xserver のIPに戻す
2. TTLを300秒に設定していた場合、5分〜1時間で反映
3. 通常TTL（3600秒）の場合、最大数時間で反映

### 7.4 Vercelデプロイのロールバック

Vercelダッシュボードから以前のデプロイに即座にロールバック可能。コード問題の場合はこれが最速。DNSの変更なしに、以前のバージョンに戻せる。

### 7.5 安全策

- **Xserver のホスティングは DNS 切替後 最低30日間 維持する**
- ロールバック時に旧サイトが即座に復活できるようにする
- WordPress のサブドメイン移行前に、現行構成の **フルバックアップ** を取得（DB + ファイル）
- DNS切替実施日時は **火〜木の10:00-14:00** を推奨（問題発生時の対応時間確保）

---

## 8. その他の注意事項

### 8.1 dangerouslySetInnerHTML のXSSリスク

WordPress記事のHTMLコンテンツを `dangerouslySetInnerHTML` で表示する際、悪意あるスクリプトが含まれる可能性がある。

**必須対策:**
```typescript
import sanitizeHtml from 'sanitize-html';

const cleanHTML = sanitizeHtml(post.content, {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption', 'iframe']),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ['src', 'alt', 'width', 'height', 'loading'],
    iframe: ['src', 'width', 'height', 'frameborder', 'allowfullscreen'],
  },
  allowedIframeHostnames: ['www.youtube.com', 'youtube.com', 'www.google.com'],
});
```

### 8.2 emailjs-com と @emailjs/browser の重複

現行の `package.json` には `emailjs-com` と `@emailjs/browser` の両方がインストールされている。Next.jsでは `@emailjs/browser` のみに統一する。

### 8.3 Recharts の SSR

Recharts は Canvas/SVG を使用するため、SSR で問題が発生する可能性がある。

**対応方法:**
```typescript
import dynamic from 'next/dynamic';

const PentagonChart = dynamic(
  () => import('@/components/ui/PentagonChart'),
  { ssr: false }
);
```

### 8.4 japan-prefectures.json（424KB）の取り扱い

このファイルは `public/` に配置し、クライアントサイドの `fetch` で取得する現行パターンを維持する。

**絶対にやってはいけないこと:**
```typescript
// NG: バンドルに含まれてしまう
import prefectures from '../../../public/japan-prefectures.json';
```

**正しい方法:**
```typescript
// OK: クライアントサイドで動的取得
useEffect(() => {
  fetch('/japan-prefectures.json')
    .then(res => res.json())
    .then(data => setPrefectures(data));
}, []);
```

### 8.5 HashLink の置換

`react-router-hash-link` は Next.js では使用不可。カスタム実装が必要:

```typescript
// src/lib/utils.ts
export function scrollToHash(hash: string) {
  const element = document.getElementById(hash.replace('#', ''));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
```

```typescript
// 使用例
'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// パスにハッシュが含まれる場合、該当要素にスクロール
```

### 8.6 react-transition-group の統合

現行で `react-transition-group` を使用している箇所は `framer-motion` に統合する。2つのアニメーションライブラリを維持する必要はない。

### 8.7 window.lenis グローバル参照

複数コンポーネント（App.js, SearchModal.js, AboutUs.js）が `window.lenis` を直接参照している。Next.js 移行時にこのパターンを維持するか、React Context に置き換えるかを検討。

**推奨:**
Context APIで Lenis インスタンスを管理する方が型安全でテスタブル。但し、移行の第一段階では `window.lenis` パターンを維持し、後で改善する方針でも可。

### 8.8 Vercel の制限事項

| 項目 | Hobby (無料) | Pro ($20/月) |
|------|-------------|-------------|
| サーバーレス関数実行時間 | 10秒 | 60秒 |
| ビルド時間 | 45分 | 45分 |
| 帯域幅 | 100GB/月 | 1TB/月 |
| ISR再検証 | 対応 | 対応 |
| Edge Functions | 対応 | 対応 |
| Analytics | 基本 | 詳細 |

スケジュールページの SSR が10秒を超える場合、Django API のレスポンスタイムを確認する必要がある（Render の無料プランはコールドスタートで遅い場合がある）。

**Render コールドスタート対策:**
- Render 無料プランは15分間リクエストがないとスリープする
- スリープ復帰時のコールドスタートは30秒〜1分かかる場合がある
- Vercel のサーバーレス関数タイムアウト（Hobby: 10秒、Pro: 60秒）を超える可能性あり
- **対策1**: Render 有料プラン（$7/月〜）でスリープを回避
- **対策2**: スケジュールページの初期データ取得にタイムアウト処理を実装し、フォールバック表示を用意
- **対策3**: 外部cron（UptimeRobot等）で定期的にDjango APIにリクエストを送り、スリープを防止

### 8.9 開発環境の注意

- `npm run dev` でNext.js開発サーバー起動（ポート3000）
- CRAの `npm start` とポートが競合するため、同時起動しない
- 環境変数は `.env.local` に設定（CRAの `.env` とは別ファイル）
- `next/font` はオフライン環境ではフォント取得に失敗する可能性がある

### 8.10 ISRの注意点

ISR（Incremental Static Regeneration）はVercelでの運用が最も安定する。

- `revalidate: 3600` は「最後のビルドから3600秒後のリクエストで再生成をトリガー」の意味
- 再生成中は古いページが表示され、再生成完了後に新しいページに切り替わる（stale-while-revalidate）
- WordPress記事の即時反映が必要な場合は、On-Demand ISR（Webhookトリガー）を検討:
  ```typescript
  // src/app/api/revalidate/route.ts
  import { revalidatePath } from 'next/cache';

  export async function POST(request: Request) {
    const { secret, slug } = await request.json();
    if (secret !== process.env.REVALIDATION_SECRET) {
      return Response.json({ error: 'Invalid secret' }, { status: 401 });
    }
    revalidatePath(`/news/${slug}`);
    revalidatePath('/news');
    revalidatePath('/');
    return Response.json({ revalidated: true });
  }
  ```
  WordPress側でプラグインを使い、記事公開時にこのAPIを呼び出す。

### 8.11 セキュリティ注意事項

#### 環境変数の分類
| 変数 | 分類 | 理由 |
|------|------|------|
| `WP_API_BASE` | サーバー専用 | API エンドポイント。クライアントに露出する必要なし |
| `DJANGO_API_BASE_URL` | サーバー専用 | Server Component から使用 |
| `REVALIDATION_SECRET` | サーバー専用 | On-Demand ISR の認証シークレット |
| `NEXT_PUBLIC_DJANGO_API_BASE_URL` | クライアント可 | クライアントからのフィルター操作で使用 |
| `NEXT_PUBLIC_EMAILJS_*` | クライアント可 | EmailJS は仕様上クライアント公開前提 |
| `NEXT_PUBLIC_SITE_URL` | クライアント可 | 公開情報 |

#### ドキュメント内の秘匿情報
- APIキーの実値をドキュメントに記載しない
- `.env.local` は `.gitignore` で除外されていることを確認
- Vercel の環境変数設定で Production / Preview / Development を分離

#### Content Security Policy (CSP)
移行後、必要に応じて `next.config.ts` のヘッダー設定で CSP を追加:
```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' wp.earu-first.com earu-first.com data:; style-src 'self' 'unsafe-inline'; frame-src www.youtube.com www.google.com;"
        }
      ]
    }
  ];
}
```
> CSP は段階的に導入し、既存機能が壊れないことを確認してから本番適用する。

### 8.12 ビジネス継続性

#### DNS切替時のダウンタイム想定
- DNS伝播時間: TTL 300秒設定で **5分〜最大1時間**
- 完全伝播: 全世界のDNSキャッシュ更新まで **最大24-48時間**
- この間、ユーザーの地理的位置やISPにより旧サイトと新サイトが混在する可能性あり

#### 影響最小化策
- DNS TTL を切替1日前に 300秒に短縮
- 切替はアクセスが少ない時間帯に実施（平日昼間推奨）
- WordPress の REST API URL はサブドメインに事前移行済みであること
- 切替前にVercelプレビューで全機能確認済みであること
