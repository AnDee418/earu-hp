# 公開スケジュールAPI ドキュメント

## 目次

1. [概要](#概要)
2. [エンドポイント情報](#エンドポイント情報)
3. [認証](#認証)
4. [リクエストパラメータ](#リクエストパラメータ)
5. [レスポンス形式](#レスポンス形式)
6. [使用例](#使用例)
7. [エラーハンドリング](#エラーハンドリング)
8. [フロントエンド実装](#フロントエンド実装)
9. [テスト方法](#テスト方法)

---

## 概要

公開スケジュールAPIは、ホームページ（HP）に測定会のスケジュールを表示するために作成された認証不要の公開APIです。

**目的:**
- 社外に公開可能な測定会スケジュールをHP上に表示する
- is_public=True かつ category='measurement' のプランのみを取得

**特徴:**
- 認証不要（AllowAny）
- 軽量シリアライザによる高速レスポンス
- 日付・年度による柔軟なフィルタリング機能

**実装ファイル:**
- シリアライザ: `plan_and_record/serializers.py` (PublicPlanScheduleSerializer)
- ビュー: `plan_and_record/views.py` (public_plan_schedule)
- URL設定: `plan_and_record/urls.py`

---

## エンドポイント情報

### バックエンドエンドポイント

```
GET https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/
```

### フロントエンドプロキシエンドポイント（Next.js経由）

```
GET /api/plan_and_record/public/schedule
```

**メソッド:** GET のみ

**Content-Type:** application/json

---

## 認証

**認証不要**

このAPIは公開用のため、認証トークンやログインセッションは不要です。

```python
@api_view(['GET'])
@permission_classes([AllowAny])  # 認証不要
def public_plan_schedule(request):
    ...
```

---

## リクエストパラメータ

### クエリパラメータ（すべてオプション）

| パラメータ名 | 型 | 説明 | 例 |
|------------|-----|------|-----|
| `start_date` | string | 開始日でフィルタ（指定日以降のプラン）<br>形式: YYYY-MM-DD | `2025-10-01` |
| `end_date` | string | 終了日でフィルタ（指定日以前のプラン）<br>形式: YYYY-MM-DD | `2025-12-31` |
| `fiscal_year` | integer | 年度でフィルタ | `2025` |

### フィルタ条件の詳細

#### 固定フィルタ（APIによって自動適用）
```python
queryset = Plan.objects.filter(
    is_public=True,        # 社外公開可のプランのみ
    category='measurement' # 測定会カテゴリのみ
)
```

#### オプションフィルタ（クエリパラメータで指定）

**start_date フィルタ:**
```python
# start_day >= start_date
queryset = queryset.filter(start_day__gte=start_date)
```

**end_date フィルタ:**
```python
# end_day <= end_date
queryset = queryset.filter(end_day__lte=end_date)
```

**fiscal_year フィルタ:**
```python
# fiscal_year = 指定年度
queryset = queryset.filter(fiscal_year=fiscal_year)
```

---

## レスポンス形式

### 成功レスポンス (200 OK)

```json
{
  "count": 2,
  "results": [
    {
      "id": 3166,
      "store": 226,
      "store_name": "セントラルウェルネスクラブ天神ソラリア",
      "store_postalcode": "810-0001",
      "store_prefectures": "福岡県",
      "store_address": "福岡市中央区天神2-2-43 ソラリアプラザ6F",
      "user": 3,
      "user_name": "西田 和弘",
      "category": "measurement",
      "start_day": "2025-10-05",
      "end_day": "2025-10-10",
      "is_public": true
    },
    {
      "id": 3180,
      "store": 1525,
      "store_name": "コナミスポーツクラブ 札幌円山",
      "store_postalcode": "064-0820",
      "store_prefectures": "北海道",
      "store_address": "札幌市中央区大通西24-2-1",
      "user": 3,
      "user_name": "西田 和弘",
      "category": "measurement",
      "start_day": "2025-10-15",
      "end_day": "2025-10-17",
      "is_public": true
    }
  ]
}
```

### レスポンスフィールド詳細

#### トップレベル

| フィールド名 | 型 | 説明 |
|------------|-----|------|
| `count` | integer | 取得されたプランの総数 |
| `results` | array | プランデータの配列 |

#### results 配列内の各プランオブジェクト

| フィールド名 | 型 | 説明 | 必須 |
|------------|-----|------|------|
| `id` | integer | プランID | ✅ |
| `store` | integer | 店舗ID（外部キー） | ✅ |
| `store_name` | string | 店舗名（SerializerMethodFieldで取得） | ✅ |
| `store_postalcode` | string \| null | 店舗郵便番号（SerializerMethodFieldで取得） | ⚠️ |
| `store_prefectures` | string \| null | 店舗都道府県（SerializerMethodFieldで取得） | ⚠️ |
| `store_address` | string \| null | 店舗住所（SerializerMethodFieldで取得） | ⚠️ |
| `user` | integer | 担当者ID（外部キー） | ✅ |
| `user_name` | string | 担当者名（姓 名）<br>SerializerMethodFieldで取得 | ✅ |
| `category` | string | カテゴリ（常に "measurement"） | ✅ |
| `start_day` | string | 開始日（YYYY-MM-DD） | ✅ |
| `end_day` | string | 終了日（YYYY-MM-DD） | ✅ |
| `is_public` | boolean | 公開状態（常に true） | ✅ |

**注記:**
- ⚠️ マークのフィールドは、データが存在しない場合nullになる可能性があります
- 住所情報（postalcode, prefectures, address）は店舗マスタデータに依存します

### SerializerMethodField の実装

**store_name の取得:**
```python
def get_store_name(self, obj):
    """店舗名を取得"""
    try:
        from facility_app.models import Store
        store = Store.objects.get(id=obj.store_id)
        return store.name
    except:
        return None
```

**店舗住所情報の取得:**
```python
def get_store_postalcode(self, obj):
    """店舗郵便番号を取得"""
    try:
        from facility_app.models import Store
        store = Store.objects.get(id=obj.store_id)
        return store.postalcode
    except:
        return None

def get_store_prefectures(self, obj):
    """店舗都道府県を取得"""
    try:
        from facility_app.models import Store
        store = Store.objects.get(id=obj.store_id)
        return store.prefectures
    except:
        return None

def get_store_address(self, obj):
    """店舗住所を取得"""
    try:
        from facility_app.models import Store
        store = Store.objects.get(id=obj.store_id)
        return store.address
    except:
        return None
```

**user_name の取得:**
```python
def get_user_name(self, obj):
    """担当者名を取得"""
    if obj.user:
        return f"{obj.user.last_name} {obj.user.first_name}"
    return None
```

**注意:** 現在の実装では各SerializerMethodFieldで個別にStoreオブジェクトを取得していますが、パフォーマンス向上のためにviews.pyで`.select_related('user')`を使用しています。将来的には店舗情報も`select_related('user', 'store')`で最適化することを推奨します。

---

## 使用例

### 基本的な使用例

#### 例1: 全ての公開測定会スケジュールを取得

**リクエスト:**
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/" \
  -H "Content-Type: application/json"
```

**レスポンス:**
```json
{
  "count": 2,
  "results": [...]
}
```

#### 例2: 2025年度の公開測定会スケジュールを取得

**リクエスト:**
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?fiscal_year=2025" \
  -H "Content-Type: application/json"
```

#### 例3: 2025年10月15日以降のスケジュールを取得

**リクエスト:**
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?start_date=2025-10-15" \
  -H "Content-Type: application/json"
```

**レスポンス:**
```json
{
  "count": 1,
  "results": [
    {
      "id": 3180,
      "store": 1525,
      "store_name": "コナミスポーツクラブ 札幌円山",
      "user": 3,
      "user_name": "西田 和弘",
      "category": "measurement",
      "start_day": "2025-10-15",
      "end_day": "2025-10-17",
      "is_public": true
    }
  ]
}
```

#### 例4: 2025年10月10日以前のスケジュールを取得

**リクエスト:**
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?end_date=2025-10-10" \
  -H "Content-Type: application/json"
```

#### 例5: 期間を指定してスケジュールを取得

**リクエスト:**
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?start_date=2025-10-01&end_date=2025-10-31" \
  -H "Content-Type: application/json"
```

#### 例6: 複数のフィルタを組み合わせ

**リクエスト:**
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?fiscal_year=2025&start_date=2025-10-01&end_date=2025-12-31" \
  -H "Content-Type: application/json"
```

---

## エラーハンドリング

### 一般的なエラーレスポンス

#### 400 Bad Request
無効なパラメータが指定された場合

```json
{
  "error": "Invalid date format",
  "details": "start_date must be in YYYY-MM-DD format"
}
```

#### 404 Not Found
エンドポイントが見つからない場合（URLの誤り）

```json
{
  "detail": "Not found."
}
```

#### 500 Internal Server Error
サーバー内部エラー

```json
{
  "error": "Internal server error",
  "details": "Database connection failed"
}
```

### エラーハンドリングのベストプラクティス

**フロントエンドでの実装例:**
```typescript
async function fetchPublicSchedule(params?: {
  start_date?: string;
  end_date?: string;
  fiscal_year?: number;
}) {
  try {
    const queryParams = new URLSearchParams();

    if (params?.start_date) queryParams.append('start_date', params.start_date);
    if (params?.end_date) queryParams.append('end_date', params.end_date);
    if (params?.fiscal_year) queryParams.append('fiscal_year', String(params.fiscal_year));

    const url = `/api/plan_and_record/public/schedule${
      queryParams.toString() ? `?${queryParams.toString()}` : ''
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('公開スケジュール取得エラー:', error);
    throw error;
  }
}
```

---

## フロントエンド実装

### Next.js APIプロキシの実装

**ファイル:** `pages/api/plan_and_record/public/schedule.ts`

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';

const DJANGO_API_BASE = process.env.DJANGO_API_BASE_URL || 'http://localhost:8000';
const PUBLIC_SCHEDULE_API_URL = `${DJANGO_API_BASE}/api/plan_and_record/public/schedule/`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  try {
    const queryParams = new URLSearchParams();
    const allowedParams = ['start_date', 'end_date', 'fiscal_year'];

    allowedParams.forEach((param) => {
      if (req.query[param]) {
        const value = req.query[param] as string;
        queryParams.append(param, value);
      }
    });

    const url = queryParams.toString()
      ? `${PUBLIC_SCHEDULE_API_URL}?${queryParams.toString()}`
      : PUBLIC_SCHEDULE_API_URL;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: `Django APIエラー: ${response.status}`,
        details: errorText,
      });
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({
      error: '公開スケジュールデータ取得に失敗しました',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
```

### TypeScript型定義

```typescript
// types/plan.ts に追加

export interface PublicSchedulePlan {
  id: number;
  store: number;
  store_name: string;
  store_postalcode: string | null;
  store_prefectures: string | null;
  store_address: string | null;
  user: number;
  user_name: string;
  category: 'measurement';
  start_day: string; // YYYY-MM-DD
  end_day: string;   // YYYY-MM-DD
  is_public: true;
}

export interface PublicScheduleResponse {
  count: number;
  results: PublicSchedulePlan[];
}

export interface PublicScheduleParams {
  start_date?: string;  // YYYY-MM-DD
  end_date?: string;    // YYYY-MM-DD
  fiscal_year?: number;
}
```

### Reactコンポーネント実装例

#### SWRを使用した実装

```typescript
import useSWR from 'swr';
import { PublicScheduleResponse, PublicScheduleParams } from '@/types/plan';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function PublicScheduleList({ params }: { params?: PublicScheduleParams }) {
  const queryParams = new URLSearchParams();

  if (params?.start_date) queryParams.append('start_date', params.start_date);
  if (params?.end_date) queryParams.append('end_date', params.end_date);
  if (params?.fiscal_year) queryParams.append('fiscal_year', String(params.fiscal_year));

  const url = `/api/plan_and_record/public/schedule${
    queryParams.toString() ? `?${queryParams.toString()}` : ''
  }`;

  const { data, error, isLoading } = useSWR<PublicScheduleResponse>(url, fetcher);

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました</div>;
  if (!data || data.count === 0) return <div>スケジュールがありません</div>;

  return (
    <div>
      <h2>測定会スケジュール（{data.count}件）</h2>
      <ul>
        {data.results.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.store_name}</h3>
            {plan.store_prefectures && plan.store_address && (
              <p>住所: 〒{plan.store_postalcode} {plan.store_prefectures}{plan.store_address}</p>
            )}
            <p>担当者: {plan.user_name}</p>
            <p>期間: {plan.start_day} 〜 {plan.end_day}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### カレンダー表示の実装例

```typescript
import { useMemo } from 'react';
import useSWR from 'swr';
import { PublicScheduleResponse } from '@/types/plan';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function PublicScheduleCalendar() {
  const currentYear = new Date().getFullYear();
  const url = `/api/plan_and_record/public/schedule?fiscal_year=${currentYear}`;

  const { data, error, isLoading } = useSWR<PublicScheduleResponse>(url, fetcher);

  // 月ごとにグループ化
  const schedulesByMonth = useMemo(() => {
    if (!data) return {};

    return data.results.reduce((acc, plan) => {
      const month = plan.start_day.substring(0, 7); // YYYY-MM
      if (!acc[month]) acc[month] = [];
      acc[month].push(plan);
      return acc;
    }, {} as Record<string, typeof data.results>);
  }, [data]);

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました</div>;

  return (
    <div className="schedule-calendar">
      <h2>{currentYear}年度 測定会スケジュール</h2>
      {Object.entries(schedulesByMonth).map(([month, plans]) => (
        <div key={month} className="month-section">
          <h3>{month}</h3>
          <ul>
            {plans.map((plan) => (
              <li key={plan.id}>
                <span className="date">{plan.start_day} 〜 {plan.end_day}</span>
                <span className="store">{plan.store_name}</span>
                <span className="user">{plan.user_name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### フィルタ機能付きコンポーネント

```typescript
import { useState } from 'react';
import useSWR from 'swr';
import { PublicScheduleResponse } from '@/types/plan';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function FilterableScheduleList() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fiscalYear, setFiscalYear] = useState(new Date().getFullYear());

  const queryParams = new URLSearchParams();
  if (startDate) queryParams.append('start_date', startDate);
  if (endDate) queryParams.append('end_date', endDate);
  if (fiscalYear) queryParams.append('fiscal_year', String(fiscalYear));

  const url = `/api/plan_and_record/public/schedule?${queryParams.toString()}`;
  const { data, error, isLoading } = useSWR<PublicScheduleResponse>(url, fetcher);

  return (
    <div>
      <div className="filters">
        <label>
          年度:
          <input
            type="number"
            value={fiscalYear}
            onChange={(e) => setFiscalYear(Number(e.target.value))}
          />
        </label>
        <label>
          開始日:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          終了日:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>

      {isLoading && <div>読み込み中...</div>}
      {error && <div>エラーが発生しました</div>}
      {data && (
        <div>
          <p>{data.count}件のスケジュール</p>
          <ul>
            {data.results.map((plan) => (
              <li key={plan.id}>
                <strong>{plan.store_name}</strong><br />
                {plan.start_day} 〜 {plan.end_day}<br />
                担当: {plan.user_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

---

## テスト方法

### 1. curlコマンドによるテスト

#### 基本的なテスト
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/" \
  -H "Content-Type: application/json"
```

#### パラメータ付きテスト
```bash
curl -X GET "https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?fiscal_year=2025" \
  -H "Content-Type: application/json"
```

### 2. Postmanによるテスト

**設定方法:**
1. メソッド: GET
2. URL: `https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/`
3. Headers:
   - Content-Type: application/json
4. Params（オプション）:
   - start_date: 2025-10-01
   - end_date: 2025-12-31
   - fiscal_year: 2025

### 3. ブラウザによるテスト

直接URLをブラウザで開く:
```
https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/
```

パラメータ付き:
```
https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?fiscal_year=2025
```

### 4. Next.js経由のテスト

```bash
curl -X GET "http://localhost:3000/api/plan_and_record/public/schedule" \
  -H "Content-Type: application/json"
```

### 5. Pythonスクリプトによるテスト

```python
import requests

# 基本的なリクエスト
response = requests.get('https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/')
data = response.json()
print(f"取得件数: {data['count']}")
print(data['results'])

# パラメータ付きリクエスト
params = {
    'fiscal_year': 2025,
    'start_date': '2025-10-01'
}
response = requests.get(
    'https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/',
    params=params
)
data = response.json()
print(f"フィルタ後の件数: {data['count']}")
```

### 6. JavaScriptによるテスト（コンソール）

```javascript
// ブラウザのコンソールで実行
fetch('https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/')
  .then(res => res.json())
  .then(data => {
    console.log(`取得件数: ${data.count}`);
    console.table(data.results);
  });

// パラメータ付き
fetch('https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/?fiscal_year=2025')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## データベースクエリの確認

APIが実行するクエリを確認する方法:

```python
# Django shellで確認
from plan_and_record.models import Plan

# APIが実行するクエリと同じ
queryset = Plan.objects.filter(
    is_public=True,
    category='measurement'
).select_related('user').order_by('start_day')

print(queryset.query)  # SQL確認
print(queryset.count())  # 件数確認
```

---

## パフォーマンス最適化

### select_related の活用

```python
queryset = Plan.objects.filter(
    is_public=True,
    category='measurement'
).select_related('user', 'store')  # N+1問題を回避
```

### インデックスの確認

is_public フィールドにはインデックスが付与されています:
```python
is_public = models.BooleanField(default=False, db_index=True)
```

### キャッシュの活用（将来的な拡張）

```python
from django.core.cache import cache

def public_plan_schedule(request):
    cache_key = f"public_schedule_{request.GET.urlencode()}"
    cached_data = cache.get(cache_key)

    if cached_data:
        return Response(cached_data)

    # データ取得処理...

    cache.set(cache_key, response_data, 300)  # 5分キャッシュ
    return Response(response_data)
```

---

## トラブルシューティング

### Q1: データが取得できない（count: 0）

**原因:**
- is_public=True のプランが存在しない
- category='measurement' のプランが存在しない

**確認方法:**
```python
# Django shell
from plan_and_record.models import Plan

# is_public=True のプラン数
Plan.objects.filter(is_public=True).count()

# category='measurement' のプラン数
Plan.objects.filter(category='measurement').count()

# 両方の条件を満たすプラン数
Plan.objects.filter(is_public=True, category='measurement').count()
```

**解決策:**
1. Planデータのis_publicフィールドをTrueに設定
2. categoryが'measurement'であることを確認

### Q2: store_name や user_name が null になる

**原因:**
- 店舗データまたはユーザーデータが存在しない
- 外部キーの参照が壊れている

**確認方法:**
```python
from plan_and_record.models import Plan
from facility_app.models import Store

plan = Plan.objects.get(id=3166)
print(plan.store_id)  # 店舗ID確認
print(Store.objects.filter(id=plan.store_id).exists())  # 店舗存在確認
print(plan.user)  # ユーザー確認
```

### Q3: 日付フィルタが動作しない

**原因:**
- 日付形式が不正（YYYY-MM-DD以外）

**解決策:**
- 正しい形式で日付を指定: `2025-10-15`
- 不正な形式の例: `10/15/2025`, `2025-10-15T00:00:00`

---

## セキュリティ考慮事項

### 1. 公開範囲の制限

このAPIは認証不要ですが、以下の条件で公開範囲を制限しています:
- is_public=True のデータのみ
- category='measurement' のデータのみ

### 2. データの匿名化は不要

公開用のデータとして設計されているため、店舗名・担当者名が含まれます。

### 3. レート制限（将来的な拡張）

大量アクセスを防ぐため、レート制限の実装を検討:
```python
from rest_framework.throttling import AnonRateThrottle

class PublicScheduleThrottle(AnonRateThrottle):
    rate = '100/hour'

@api_view(['GET'])
@permission_classes([AllowAny])
@throttle_classes([PublicScheduleThrottle])
def public_plan_schedule(request):
    ...
```

---

## 関連ドキュメント

- [Planモデル仕様書](model-of-plan_and_records_app.md)
- [is_public フィールド実装ドキュメント](../plan_and_record/migrations/0036_plan_is_public.py)

---

## 更新履歴

| 日付 | バージョン | 変更内容 | 担当者 |
|------|-----------|---------|--------|
| 2025-10-15 | 1.1.0 | 店舗住所情報を追加（store_postalcode, store_prefectures, store_address） | Claude Code |
| 2025-10-15 | 1.0.0 | 初版作成 | Claude Code |

---

## お問い合わせ

APIに関する質問や問題がある場合は、開発チームまでご連絡ください。
