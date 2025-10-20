import React, { useState, useEffect, useMemo } from 'react';
import { fetchPublicSchedule, getCurrentFiscalYear } from './api/scheduleApi';
import JapanMap from './components/JapanMap';
import CalendarView from './components/CalendarView';
import PrefectureListView from './components/PrefectureListView';
import FilterBar from './components/FilterBar';
import SearchModal from './components/SearchModal';

/**
 * スケジュールページ
 * 測定会のスケジュールを地図表示・カレンダー表示で確認できる
 */
const Schedules = () => {
  // 状態管理
  const [schedules, setSchedules] = useState([]);
  const [threeMonthsData, setThreeMonthsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // フィルター状態
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1);
  const [selectedPrefecture, setSelectedPrefecture] = useState(null);

  // モーダル状態
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // 表示モード
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar', 'map', or 'prefectureDetail'

  // データ取得
  useEffect(() => {
    const loadSchedules = async () => {
      setLoading(true);
      setError(null);

      try {
        // 年月から開始日と終了日を計算
        const startDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-01`;
        const lastDay = new Date(selectedYear, selectedMonth, 0).getDate();
        const endDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

        const params = {
          start_date: startDate,
          end_date: endDate,
        };

        const data = await fetchPublicSchedule(params);
        setSchedules(data.results || []);
      } catch (err) {
        setError('スケジュールの読み込みに失敗しました。');
        console.error('スケジュール取得エラー:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSchedules();
  }, [selectedYear, selectedMonth]);

  // 今月から3ヶ月のデータ取得（地図ビュー・都道府県詳細ビュー用）
  useEffect(() => {
    const loadThreeMonthsData = async () => {
      try {
        const today = new Date();
        // 今月の初日から開始
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const endDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

        const startDateStr = startDate.toISOString().split('T')[0];
        const endDateStr = endDate.toISOString().split('T')[0];

        const data = await fetchPublicSchedule({
          start_date: startDateStr,
          end_date: endDateStr,
        });
        setThreeMonthsData(data.results || []);
      } catch (error) {
        console.error('Failed to fetch 3 months data:', error);
      }
    };

    loadThreeMonthsData();
  }, []);

  // フィルタリングされたスケジュール（カレンダービュー用）
  const filteredSchedules = useMemo(() => {
    if (!selectedPrefecture) return schedules;
    return schedules.filter(
      schedule => schedule.store_prefectures === selectedPrefecture
    );
  }, [schedules, selectedPrefecture]);

  // 都道府県詳細ビュー用のフィルタリングされたスケジュール（3ヶ月分）
  const prefectureThreeMonthsSchedules = useMemo(() => {
    if (!selectedPrefecture) return [];
    return threeMonthsData.filter(
      schedule => schedule.store_prefectures === selectedPrefecture
    );
  }, [threeMonthsData, selectedPrefecture]);

  // 都道府県選択ハンドラー
  const handlePrefectureClick = (prefecture) => {
    setSelectedPrefecture(prefecture);
    // 地図モードで都道府県を選択したら、都道府県詳細ビューに切り替え
    if (prefecture && viewMode === 'map') {
      setViewMode('prefectureDetail');
    }
  };

  // フィルターリセットハンドラー
  const handleFilterReset = () => {
    setSelectedPrefecture(null);
    // 都道府県詳細ビューから地図に戻る
    if (viewMode === 'prefectureDetail') {
      setViewMode('map');
    }
  };

  // 検索ハンドラー
  const handleSearch = (filters) => {
    setSelectedYear(filters.selectedYear);
    setSelectedMonth(filters.selectedMonth);
    setSelectedPrefecture(filters.selectedPrefecture);
    // 都道府県が選択された場合はカレンダービューに切り替え
    if (filters.selectedPrefecture && viewMode === 'map') {
      setViewMode('calendar');
    }
  };

  return (
    <div className="schedules-page">
      {/* コンテナ */}
      <div className="schedules-container">
        {/* ページタイトル */}
        <div className="potal-list-wrapper">
          <ul className="potal-list">
            <li className="potal-list-item home">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                HOME
              </a>
            </li>
            <li className="potal-list-item current">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span>測定会スケジュール</span>
            </li>
          </ul>
          <h1 className="potal-page-title">測定会スケジュール</h1>
        </div>

        {/* フィルターバー */}
        <FilterBar
          viewMode={viewMode}
          setViewMode={setViewMode}
          onSearchClick={() => setIsSearchModalOpen(true)}
        />

        {/* 検索モーダル */}
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
          onSearch={handleSearch}
          initialFilters={{
            selectedYear,
            selectedMonth,
            selectedPrefecture
          }}
        />

        {/* 都道府県選択表示 */}
        {selectedPrefecture && (
          <div className="selected-prefecture-banner">
            <i className="fas fa-map-marker-alt banner-icon"></i>
            <span className="banner-text">
              <strong>{selectedPrefecture}</strong>の測定会を表示中
              （{filteredSchedules.length}件）
            </span>
            <button 
              className="clear-prefecture"
              onClick={() => setSelectedPrefecture(null)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}

        {/* ローディング・エラー表示 */}
        {loading && (
          <div className="schedules-loading">
            <div className="loading-spinner"></div>
            <p>スケジュールを読み込み中...</p>
          </div>
        )}

        {error && (
          <div className="schedules-error">
            <i className="fas fa-exclamation-triangle error-icon"></i>
            <p>{error}</p>
            <button 
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              <i className="fas fa-sync-alt"></i>
              再読み込み
            </button>
          </div>
        )}

        {/* メインコンテンツ */}
        {!loading && !error && (
          <div className="schedules-content">
            {viewMode === 'map' ? (
              schedules.length === 0 ? (
                <div className="schedules-empty">
                  <i className="far fa-calendar-times empty-icon"></i>
                  <h3>測定会が見つかりませんでした</h3>
                  <p>選択した期間には測定会が予定されていません。</p>
                  <button
                    className="change-filter-button"
                    onClick={handleFilterReset}
                  >
                    <i className="fas fa-filter"></i>
                    フィルターを変更
                  </button>
                </div>
              ) : (
                <div className="map-view-wrapper">
                  <JapanMap
                    schedules={schedules}
                    onPrefectureClick={handlePrefectureClick}
                    selectedPrefecture={selectedPrefecture}
                  />
                </div>
              )
            ) : viewMode === 'prefectureDetail' ? (
              <div className="prefecture-detail-wrapper">
                <PrefectureListView
                  prefecture={selectedPrefecture}
                  schedules={prefectureThreeMonthsSchedules}
                  onClearSelection={handleFilterReset}
                />
              </div>
            ) : (
              <div className="calendar-view-wrapper">
                <CalendarView
                  schedules={filteredSchedules}
                  currentYear={selectedYear}
                  currentMonth={selectedMonth}
                  onMonthChange={(year, month) => {
                    setSelectedYear(year);
                    setSelectedMonth(month);
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedules;

