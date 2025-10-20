/**
 * スケジュールAPI通信関数
 */

// バックエンドAPIのベースURL
// 開発環境ではプロキシを使用するため、相対パスを使用
const DJANGO_API_BASE = process.env.NODE_ENV === 'production'
  ? (process.env.REACT_APP_DJANGO_API_BASE_URL || 'https://earu-sistem.onrender.com')
  : ''; // 開発環境ではプロキシを使用
const PUBLIC_SCHEDULE_API_URL = `${DJANGO_API_BASE}/api/plan_and_record/public/schedule/`;

/**
 * 公開スケジュールデータを取得
 * @param {Object} params - クエリパラメータ
 * @param {string} [params.start_date] - 開始日 (YYYY-MM-DD)
 * @param {string} [params.end_date] - 終了日 (YYYY-MM-DD)
 * @param {number} [params.fiscal_year] - 年度
 * @returns {Promise<Object>} レスポンスデータ
 */
export async function fetchPublicSchedule(params = {}) {
  try {
    const queryParams = new URLSearchParams();

    if (params.start_date) queryParams.append('start_date', params.start_date);
    if (params.end_date) queryParams.append('end_date', params.end_date);
    if (params.fiscal_year) queryParams.append('fiscal_year', String(params.fiscal_year));

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
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('公開スケジュール取得エラー:', error);
    throw error;
  }
}

/**
 * 都道府県でフィルタリングされたスケジュールを取得
 * @param {string} prefecture - 都道府県名
 * @param {Object} additionalParams - 追加のクエリパラメータ
 * @returns {Promise<Object>} フィルタリングされたレスポンスデータ
 */
export async function fetchScheduleByPrefecture(prefecture, additionalParams = {}) {
  const data = await fetchPublicSchedule(additionalParams);
  
  // クライアントサイドで都道府県フィルタリング
  const filteredResults = data.results.filter(
    plan => plan.store_prefectures === prefecture
  );

  return {
    count: filteredResults.length,
    results: filteredResults,
  };
}

/**
 * 現在の年度を取得（日本の年度: 4月始まり）
 * @returns {number} 現在の年度
 */
export function getCurrentFiscalYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0-indexed なので+1
  
  // 1月〜3月は前年度、4月〜12月は今年度
  return month >= 4 ? year : year - 1;
}

