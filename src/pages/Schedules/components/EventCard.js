import React, { useState } from 'react';

/**
 * イベントカードコンポーネント
 * 測定会の詳細情報とGoogle Mapを表示
 */
const EventCard = ({ event }) => {
  const [showMap, setShowMap] = useState(false);

  // Google Map用のURL生成
  const getMapUrl = () => {
    const address = `${event.store_prefectures || ''}${event.store_address || ''}${event.store_name}`;
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
  };

  // Google Mapの検索URL（iframe用のAPIキーがない場合）
  const getMapSearchUrl = () => {
    const address = `${event.store_prefectures || ''}${event.store_address || ''}${event.store_name}`;
    const encodedAddress = encodeURIComponent(address);
    return `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;
  };

  // 日付フォーマット
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
    });
  };

  // 期間の計算
  const getDuration = () => {
    const start = new Date(event.start_day);
    const end = new Date(event.end_day);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    return diff;
  };

  const duration = getDuration();

  return (
    <div className="event-card">
      <div className="event-card-content">
        <div className="event-date-badge">
          <span className="month">{new Date(event.start_day).getMonth() + 1}月</span>
          <span className="day">{new Date(event.start_day).getDate()}</span>
        </div>

        <div className="event-main-info">
          <div className="event-title-row">
            <h3 className="event-store-name">{event.store_name}</h3>
            <span className="event-location">
              <i className="fas fa-map-marker-alt location-icon"></i>
              {event.store_prefectures}
            </span>
          </div>

          <div className="event-details-row">
            <div className="event-date-info">
              <i className="far fa-calendar"></i>
              <span>
                {formatDate(event.start_day).replace(/年|月|日/g, (match) => match === '日' ? '' : '/')}
                {event.start_day !== event.end_day && ` 〜 ${formatDate(event.end_day).replace(/年|月|日/g, (match) => match === '日' ? '' : '/')}`}
                <span className="duration-badge">{duration}日間</span>
              </span>
            </div>

            {event.user_name && (
              <div className="event-staff-info">
                <i className="fas fa-user"></i>
                <span>{event.user_name}</span>
              </div>
            )}

            {(event.store_postalcode || event.store_address) && (
              <div className="event-address-info">
                <i className="fas fa-map-marked-alt"></i>
                <span>
                  {event.store_postalcode && `〒${event.store_postalcode} `}
                  {event.store_address}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="event-actions">
          <button
            className="show-map-button"
            onClick={() => setShowMap(!showMap)}
          >
            <i className={`fas ${showMap ? 'fa-times' : 'fa-map-marked-alt'}`}></i>
            {showMap ? '閉じる' : '地図'}
          </button>
        </div>
      </div>

      {showMap && (
        <div className="event-map">
          <iframe
            title={`${event.store_name}の地図`}
            src={getMapSearchUrl()}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default EventCard;

