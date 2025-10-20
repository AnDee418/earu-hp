import React, { useMemo } from 'react';
import EventCard from './EventCard';

/**
 * 都道府県別測定会・アウトソーシングリストビュー
 * 選択された都道府県の今月・来月・再来月の測定会・アウトソーシングを表示
 */
const PrefectureListView = ({ prefecture, schedules, onClearSelection }) => {
  // 今月・来月・再来月のイベントを分類
  const { thisMonthEvents, nextMonthEvents, monthAfterNextEvents } = useMemo(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-11

    // 今月のイベント
    const thisMonth = schedules.filter(event => {
      const eventDate = new Date(event.start_day);
      return eventDate.getFullYear() === currentYear &&
             eventDate.getMonth() === currentMonth;
    }).sort((a, b) => new Date(a.start_day) - new Date(b.start_day));

    // 来月のイベント
    const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);
    const nextMonth = schedules.filter(event => {
      const eventDate = new Date(event.start_day);
      return eventDate.getFullYear() === nextMonthDate.getFullYear() &&
             eventDate.getMonth() === nextMonthDate.getMonth();
    }).sort((a, b) => new Date(a.start_day) - new Date(b.start_day));

    // 再来月のイベント
    const monthAfterNextDate = new Date(currentYear, currentMonth + 2, 1);
    const monthAfterNext = schedules.filter(event => {
      const eventDate = new Date(event.start_day);
      return eventDate.getFullYear() === monthAfterNextDate.getFullYear() &&
             eventDate.getMonth() === monthAfterNextDate.getMonth();
    }).sort((a, b) => new Date(a.start_day) - new Date(b.start_day));

    return {
      thisMonthEvents: thisMonth,
      nextMonthEvents: nextMonth,
      monthAfterNextEvents: monthAfterNext
    };
  }, [schedules]);

  // 月の情報を取得
  const getMonthInfo = (offset) => {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth() + offset, 1);
    return {
      year: targetDate.getFullYear(),
      month: targetDate.getMonth() + 1,
    };
  };

  const thisMonthInfo = getMonthInfo(0);
  const nextMonthInfo = getMonthInfo(1);
  const monthAfterNextInfo = getMonthInfo(2);

  // 月パネルをレンダリング
  const renderMonthPanel = (title, events, monthInfo, icon) => {
    return (
      <div className="prefecture-month-panel">
        <div className="month-panel-header">
          <h3 className="month-title">
            <i className={icon}></i>
            {title} ({monthInfo.year}年{monthInfo.month}月)
          </h3>
          <div className="month-stats">
            <span className="stat-badge">
              <i className="fas fa-calendar-check"></i>
              <strong>{events.length}</strong>件
            </span>
          </div>
        </div>

        {events.length > 0 ? (
          <div className="month-events">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="month-panel-empty">
            <div className="empty-icon-wrapper">
              <i className="far fa-calendar-times"></i>
            </div>
            <p>この月には予定がありません</p>
          </div>
        )}
      </div>
    );
  };

  const totalEvents = thisMonthEvents.length + nextMonthEvents.length + monthAfterNextEvents.length;

  return (
    <div className="prefecture-list-view">
      {/* ヘッダー */}
      <div className="prefecture-view-header">
        <div className="header-content">
          <h2 className="prefecture-title">
            <i className="fas fa-map-marker-alt"></i>
            {prefecture}のスケジュール
          </h2>
          <p className="prefecture-subtitle">
            今後3ヶ月の予定（合計{totalEvents}件）
          </p>
        </div>
        <button className="close-prefecture-view" onClick={onClearSelection}>
          <i className="fas fa-arrow-left"></i>
          地図に戻る
        </button>
      </div>

      {/* 月別パネル */}
      <div className="month-panels-container">
        {renderMonthPanel('今月', thisMonthEvents, thisMonthInfo, 'fas fa-calendar-day')}
        {renderMonthPanel('来月', nextMonthEvents, nextMonthInfo, 'fas fa-calendar-week')}
        {renderMonthPanel('再来月', monthAfterNextEvents, monthAfterNextInfo, 'far fa-calendar-alt')}
      </div>
    </div>
  );
};

export default PrefectureListView;
