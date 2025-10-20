import React from 'react';
import EventCard from './EventCard';

/**
 * カレンダービューコンポーネント
 * 月ごとのパネル形式で測定会を表示
 */
const CalendarView = ({ schedules, currentYear, currentMonth, onMonthChange }) => {
  // 月の切り替えハンドラー
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      onMonthChange(currentYear - 1, 12);
    } else {
      onMonthChange(currentYear, currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      onMonthChange(currentYear + 1, 1);
    } else {
      onMonthChange(currentYear, currentMonth + 1);
    }
  };

  return (
    <div className="calendar-view">
      {/* 月切り替えコントロール */}
      <div className="calendar-controls">
        <button
          className="month-nav-button prev"
          onClick={handlePrevMonth}
          title="前月"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="current-month-display">
          <span className="month-year">{currentYear}</span>
          <span className="month-number">{currentMonth}月</span>
        </div>
        <button
          className="month-nav-button next"
          onClick={handleNextMonth}
          title="次月"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* 月パネル */}
      <div className="month-panel">
        {schedules.length > 0 ? (
          <>
            <div className="month-panel-header">
              <h2 className="month-title">
                <i className="far fa-calendar-alt"></i>
                {currentYear}年{currentMonth}月の測定会
              </h2>
              <div className="month-stats">
                <span className="stat-badge">
                  <i className="fas fa-calendar-check"></i>
                  <strong>{schedules.length}</strong>件
                </span>
              </div>
            </div>

            <div className="month-events">
              {schedules
                .sort((a, b) => new Date(a.start_day) - new Date(b.start_day))
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
          </>
        ) : (
          <div className="month-panel-empty">
            <div className="empty-icon-wrapper">
              <i className="far fa-calendar-times"></i>
            </div>
            <h3>{currentYear}年{currentMonth}月</h3>
            <p>この月には測定会が予定されていません</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
