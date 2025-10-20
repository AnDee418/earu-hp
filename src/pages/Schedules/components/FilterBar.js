import React from 'react';

/**
 * フィルターバーコンポーネント
 * 表示モードの選択と検索ボタン
 */
const FilterBar = ({
  viewMode,
  setViewMode,
  onSearchClick
}) => {
  return (
    <div className="filter-bar">
      <div className="view-mode-section">
        <div className="view-mode-buttons">
          <button
            className={`view-mode-button ${viewMode === 'calendar' ? 'active' : ''}`}
            onClick={() => setViewMode('calendar')}
          >
            <i className="far fa-calendar mode-icon"></i>
            カレンダー
          </button>
          <button
            className={`view-mode-button ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => setViewMode('map')}
          >
            <i className="fas fa-map-marked-alt mode-icon"></i>
            地図
          </button>
        </div>
      </div>

      <button className="search-button" onClick={onSearchClick}>
        <i className="fas fa-search"></i>
        検索条件
      </button>
    </div>
  );
};

export default FilterBar;

