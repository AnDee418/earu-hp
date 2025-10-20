# スケジュールページ

測定会のスケジュールを表示するページです。

## 概要

このページでは、バックエンドAPIから取得した公開測定会のスケジュールを、2つの表示モードで閲覧できます：

1. **カレンダービュー**: 月ごとに整理されたイベントカード表示
2. **地図ビュー**: 日本地図から都道府県を選択してイベントを検索

## ファイル構成

```
src/pages/Schedules/
├── Schedules.js              # メインコンポーネント
├── types.js                  # 型定義（JSDoc形式）
├── README.md                 # このファイル
├── api/
│   └── scheduleApi.js        # API通信関数
└── components/
    ├── JapanMap.js           # 日本地図コンポーネント
    ├── CalendarView.js       # カレンダービューコンポーネント
    ├── EventCard.js          # イベントカードコンポーネント
    └── FilterBar.js          # フィルターバーコンポーネント
```

## 環境変数設定

`.env`ファイルに以下の環境変数を設定してください（オプション）：

```env
REACT_APP_DJANGO_API_BASE_URL=https://earu-sistem.onrender.com
```

設定されていない場合は、デフォルトで`https://earu-sistem.onrender.com`が使用されます。

## 主な機能

### 1. データフィルタリング
- **年度フィルター**: 年度別にスケジュールを表示
- **日付範囲フィルター**: 開始日・終了日を指定してフィルタリング
- **都道府県フィルター**: 地図ビューから都道府県を選択

### 2. 表示モード
- **カレンダービュー**: 
  - 月ごとにグループ化
  - イベントカードで詳細表示
  - Google Map連携
  
- **地図ビュー**:
  - 地域別に都道府県を表示
  - イベント数をバッジで表示
  - 都道府県選択でカレンダービューへ自動切り替え

### 3. イベント詳細
- 店舗名
- 開催期間
- 担当者名
- 住所情報
- Google Mapによる地図表示（トグル式）

## スタイル

レインボーグラデーションの5色をメインカラーとして使用：
- 赤: `#FF6B6B`
- 黄: `#FFD93D`
- 緑: `#6BCB77`
- 青: `#4D96FF`
- 紫: `#9D4EDD`

スタイルファイル: `src/styles/_schedules.scss`

## 使用例

```javascript
// ページへのルート
<Route path="/schedules" element={<Schedules />} />
```

ブラウザで`/schedules`にアクセスすると、スケジュールページが表示されます。

## API仕様

詳細は`docs/PUBLIC_SCHEDULE_API_GUIDE.md`を参照してください。

**エンドポイント:**
```
GET https://earu-sistem.onrender.com/api/plan_and_record/public/schedule/
```

**パラメータ:**
- `fiscal_year`: 年度（例: 2025）
- `start_date`: 開始日（YYYY-MM-DD）
- `end_date`: 終了日（YYYY-MM-DD）

## トラブルシューティング

### データが表示されない場合
1. ネットワーク接続を確認
2. バックエンドAPIが正常に動作しているか確認
3. ブラウザのコンソールでエラーメッセージを確認

### 地図が表示されない場合
- Google Maps iframeの埋め込みURL形式が正しいか確認
- 店舗の住所情報が正しく設定されているか確認

## 今後の拡張案

- [ ] Google Maps API統合（APIキーを使用した高度な地図機能）
- [ ] お気に入り機能
- [ ] カレンダーへのエクスポート機能（.ics）
- [ ] SNSシェア機能
- [ ] キャッシング機能による高速化

## ライセンス

このプロジェクトはEARUの著作物です。

