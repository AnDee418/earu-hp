/**
 * 公開スケジュールAPIのレスポンス型定義
 */

/**
 * @typedef {Object} PublicSchedulePlan
 * @property {number} id - プランID
 * @property {number} store - 店舗ID
 * @property {string} store_name - 店舗名
 * @property {string|null} store_postalcode - 店舗郵便番号
 * @property {string|null} store_prefectures - 店舗都道府県
 * @property {string|null} store_address - 店舗住所
 * @property {number} user - 担当者ID
 * @property {string} user_name - 担当者名
 * @property {string} category - カテゴリ (常に "measurement")
 * @property {string} start_day - 開始日 (YYYY-MM-DD)
 * @property {string} end_day - 終了日 (YYYY-MM-DD)
 * @property {boolean} is_public - 公開状態 (常に true)
 */

/**
 * @typedef {Object} PublicScheduleResponse
 * @property {number} count - 取得されたプランの総数
 * @property {PublicSchedulePlan[]} results - プランデータの配列
 */

/**
 * @typedef {Object} PublicScheduleParams
 * @property {string} [start_date] - 開始日 (YYYY-MM-DD)
 * @property {string} [end_date] - 終了日 (YYYY-MM-DD)
 * @property {number} [fiscal_year] - 年度
 */

export {};

