import React, { useState, useEffect } from 'react';
import { fetchPublicSchedule } from '../api/scheduleApi';

/**
 * 日本地図コンポーネント
 * Geolonia SVG地図を使用したズーム可能な日本地図
 */
const JapanMap = ({ schedules, onPrefectureClick, selectedPrefecture }) => {
  const [prefectureStats, setPrefectureStats] = useState({});
  const [threeMonthsData, setThreeMonthsData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [svgContent, setSvgContent] = useState('');
  const [viewBox, setViewBox] = useState('0 0 1000 1000');
  const [hoveredPrefecture, setHoveredPrefecture] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // 地域ごとのviewBox設定（ズーム用）
  const regionViewBox = {
    'all': '0 0 1000 1000',
    '北海道': '541 -33 529 373',
    '東北': '573 242 179 387',
    '関東': '538 524 163 334',
    '中部': '375 439 287 324',
    '近畿': '324 627 178 191',
    '中国': '139 587 248 203',
    '四国': '203 707 187 144',
    '九州': '16 668 239 280',
    '沖縄': '6 174 402 168',
  };

  // 地域ごとの都道府県コード
  const regionPrefectureCodes = {
    '北海道': ['01'],
    '東北': ['02', '03', '04', '05', '06', '07'],
    '関東': ['08', '09', '10', '11', '12', '13', '14'],
    '中部': ['15', '16', '17', '18', '19', '20', '21', '22', '23'],
    '近畿': ['24', '25', '26', '27', '28', '29', '30'],
    '中国': ['31', '32', '33', '34', '35'],
    '四国': ['36', '37', '38', '39'],
    '九州': ['40', '41', '42', '43', '44', '45', '46'],
    '沖縄': ['47'],
  };

  // 都道府県コードから名前へのマッピング
  const prefectureCodeToName = {
    '01': '北海道', '02': '青森県', '03': '岩手県', '04': '宮城県',
    '05': '秋田県', '06': '山形県', '07': '福島県', '08': '茨城県',
    '09': '栃木県', '10': '群馬県', '11': '埼玉県', '12': '千葉県',
    '13': '東京都', '14': '神奈川県', '15': '新潟県', '16': '富山県',
    '17': '石川県', '18': '福井県', '19': '山梨県', '20': '長野県',
    '21': '岐阜県', '22': '静岡県', '23': '愛知県', '24': '三重県',
    '25': '滋賀県', '26': '京都府', '27': '大阪府', '28': '兵庫県',
    '29': '奈良県', '30': '和歌山県', '31': '鳥取県', '32': '島根県',
    '33': '岡山県', '34': '広島県', '35': '山口県', '36': '徳島県',
    '37': '香川県', '38': '愛媛県', '39': '高知県', '40': '福岡県',
    '41': '佐賀県', '42': '長崎県', '43': '熊本県', '44': '大分県',
    '45': '宮崎県', '46': '鹿児島県', '47': '沖縄県',
  };

  // SVGファイルを読み込み
  useEffect(() => {
    fetch('/japan-map-geolonia.svg')
      .then(response => response.text())
      .then(data => {
        setSvgContent(data);
      })
      .catch(error => {
        console.error('Failed to load SVG map:', error);
      });
  }, []);

  // 今月から3ヶ月のデータを取得
  useEffect(() => {
    const fetchThreeMonthsData = async () => {
      const today = new Date();
      // 今月の初日から開始
      const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      const endDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

      const startDateStr = startDate.toISOString().split('T')[0];
      const endDateStr = endDate.toISOString().split('T')[0];

      try {
        const data = await fetchPublicSchedule({
          start_date: startDateStr,
          end_date: endDateStr,
        });
        setThreeMonthsData(data.results || []);
      } catch (error) {
        console.error('Failed to fetch 3 months data:', error);
      }
    };

    fetchThreeMonthsData();
  }, []);

  // 都道府県ごとの統計を計算
  useEffect(() => {
    const stats = threeMonthsData.reduce((acc, schedule) => {
      const pref = schedule.store_prefectures;
      if (pref) {
        if (!acc[pref]) {
          acc[pref] = { count: 0, events: [] };
        }
        acc[pref].count += 1;
        acc[pref].events.push(schedule);
      }
      return acc;
    }, {});

    setPrefectureStats(stats);
  }, [threeMonthsData]);

  // 地域選択時のハンドラー（地図をズーム）
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    const newViewBox = regionViewBox[region];
    if (newViewBox) {
      setViewBox(newViewBox);
    }
  };

  // 都道府県の月別統計を取得
  const getMonthlyStats = (prefName) => {
    const stats = prefectureStats[prefName];
    if (!stats || !stats.events) {
      return { thisMonth: 0, nextMonth: 0, monthAfterNext: 0 };
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-11

    const thisMonthCount = stats.events.filter(event => {
      const eventDate = new Date(event.start_day);
      return eventDate.getFullYear() === currentYear &&
             eventDate.getMonth() === currentMonth;
    }).length;

    const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);
    const nextMonthCount = stats.events.filter(event => {
      const eventDate = new Date(event.start_day);
      return eventDate.getFullYear() === nextMonthDate.getFullYear() &&
             eventDate.getMonth() === nextMonthDate.getMonth();
    }).length;

    const monthAfterNextDate = new Date(currentYear, currentMonth + 2, 1);
    const monthAfterNextCount = stats.events.filter(event => {
      const eventDate = new Date(event.start_day);
      return eventDate.getFullYear() === monthAfterNextDate.getFullYear() &&
             eventDate.getMonth() === monthAfterNextDate.getMonth();
    }).length;

    return {
      thisMonth: thisMonthCount,
      nextMonth: nextMonthCount,
      monthAfterNext: monthAfterNextCount
    };
  };

  // 都道府県の色を取得
  const getPrefectureColor = (prefName) => {
    const stats = prefectureStats[prefName];
    if (!stats || stats.count === 0) {
      return '#E8F4FD'; // 予定なし（薄い青）
    }

    // 測定会数に応じてカラフルな色を返す
    if (stats.count === 1) {
      return '#90CAF9'; // 少ない（水色）
    } else if (stats.count <= 3) {
      return '#42A5F5'; // 中程度（青）
    } else {
      return '#1976D2'; // 多い（濃い青）
    }
  };

  // 都道府県クリック時のハンドラー
  const handlePrefectureClick = (event) => {
    let target = event.target;

    // data-code属性を持つ要素を探す（親要素を遡る）
    while (target && !target.getAttribute('data-code')) {
      target = target.parentElement;
      if (target && target.tagName === 'svg') break;
    }

    if (target && target.getAttribute('data-code')) {
      const code = target.getAttribute('data-code').padStart(2, '0');
      const prefName = prefectureCodeToName[code];

      // データの有無に関わらず、都道府県詳細ビューに遷移
      if (prefName && onPrefectureClick) {
        onPrefectureClick(prefName);
      }
    }
  };

  // SVGコンテンツを動的に更新（色を適用）
  useEffect(() => {
    if (!svgContent) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, 'image/svg+xml');
    const svg = doc.querySelector('svg');

    if (!svg) return;

    // 各都道府県グループに色とイベントを設定
    const prefectureGroups = svg.querySelectorAll('g.prefecture');
    prefectureGroups.forEach(group => {
      const code = group.getAttribute('data-code')?.padStart(2, '0');
      const prefName = prefectureCodeToName[code];

      if (prefName) {
        const fillColor = getPrefectureColor(prefName);
        const stats = prefectureStats[prefName];
        const hasEvents = stats && stats.count > 0;

        // 塗りつぶし色を設定
        group.setAttribute('fill', fillColor);

        // データ属性として都道府県名と元の色を保存
        group.setAttribute('data-prefecture-name', prefName);
        group.setAttribute('data-original-fill', fillColor);

        // すべての都道府県でホバーツールチップを表示
        group.style.cursor = 'pointer';

        // 選択された都道府県をハイライト
        if (selectedPrefecture === prefName) {
          group.setAttribute('fill', '#FF6B6B');
        }
      }
    });

    // 更新されたSVGをコンテナにセット
    const container = document.getElementById('japan-map-container');
    if (container) {
      container.innerHTML = '';
      // viewBoxを設定
      svg.setAttribute('viewBox', viewBox);
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', 'auto');
      svg.style.maxHeight = '600px';

      container.appendChild(svg);

      // クリックイベントを追加
      svg.addEventListener('click', handlePrefectureClick);

      // ホバーイベントをイベント委譲で追加（mouseoverとmouseoutを使用）
      let currentHoveredGroup = null;

      const handleMouseOver = (e) => {
        let target = e.target;
        // 都道府県グループを探す
        while (target && target !== svg) {
          if (target.classList && target.classList.contains('prefecture')) {
            // 既に同じ要素の上にいる場合はスキップ
            if (target === currentHoveredGroup) {
              return;
            }

            // 前の要素の色を戻す
            if (currentHoveredGroup) {
              const prevPrefName = currentHoveredGroup.getAttribute('data-prefecture-name');
              const prevOriginalFill = currentHoveredGroup.getAttribute('data-original-fill');
              if (prevPrefName && selectedPrefecture !== prevPrefName) {
                currentHoveredGroup.setAttribute('fill', prevOriginalFill);
              }
            }

            currentHoveredGroup = target;
            const prefName = target.getAttribute('data-prefecture-name');
            const originalFill = target.getAttribute('data-original-fill');

            if (prefName) {
              target.setAttribute('fill', '#FFD93D');
              setHoveredPrefecture(prefName);
              setTooltipPosition({
                x: e.clientX,
                y: e.clientY
              });
            }
            break;
          }
          target = target.parentElement;
        }

        // どの都道府県の上でもない場合
        if (!target || target === svg) {
          if (currentHoveredGroup) {
            const prevPrefName = currentHoveredGroup.getAttribute('data-prefecture-name');
            const prevOriginalFill = currentHoveredGroup.getAttribute('data-original-fill');
            if (prevPrefName && selectedPrefecture !== prevPrefName) {
              currentHoveredGroup.setAttribute('fill', prevOriginalFill);
            }
            currentHoveredGroup = null;
            setHoveredPrefecture(null);
          }
        }
      };

      const handleMouseMove = (e) => {
        if (currentHoveredGroup) {
          setTooltipPosition({
            x: e.clientX,
            y: e.clientY
          });
        }
      };

      svg.addEventListener('mouseover', handleMouseOver);
      svg.addEventListener('mousemove', handleMouseMove);
      svg.addEventListener('mouseleave', () => {
        if (currentHoveredGroup) {
          const prevPrefName = currentHoveredGroup.getAttribute('data-prefecture-name');
          const prevOriginalFill = currentHoveredGroup.getAttribute('data-original-fill');
          if (prevPrefName && selectedPrefecture !== prevPrefName) {
            currentHoveredGroup.setAttribute('fill', prevOriginalFill);
          }
          currentHoveredGroup = null;
        }
        setHoveredPrefecture(null);
      });
    }
  }, [svgContent, prefectureStats, selectedPrefecture, viewBox]);

  return (
    <div className="japan-map-container">
      <div className="map-header">
        <h2>
          <i className="fas fa-map-marked-alt"></i>
          地域から探す
        </h2>
        <p className="map-description">
          地域ボタンをクリックすると地図がズームします
        </p>
      </div>

      {/* 地域フィルター（ズームボタン） */}
      <div className="region-filter">
        <button
          className={`region-button ${selectedRegion === 'all' ? 'active' : ''}`}
          onClick={() => handleRegionChange('all')}
        >
          <i className="fas fa-globe-asia"></i>
          全国
        </button>
        {Object.keys(regionViewBox).filter(r => r !== 'all').map(region => (
          <button
            key={region}
            className={`region-button ${selectedRegion === region ? 'active' : ''}`}
            onClick={() => handleRegionChange(region)}
          >
            {region}
          </button>
        ))}
      </div>

      {/* 地図表示 */}
      <div className="map-wrapper">
        <div id="japan-map-container"></div>
      </div>

      {/* ホバーツールチップ */}
      {hoveredPrefecture && (() => {
        const monthlyStats = getMonthlyStats(hoveredPrefecture);
        const today = new Date();
        const thisMonthName = `${today.getMonth() + 1}月`;
        const nextMonthName = `${((today.getMonth() + 1) % 12) + 1}月`;
        const monthAfterNextName = `${((today.getMonth() + 2) % 12) + 1}月`;

        return (
          <div
            className="prefecture-tooltip"
            style={{
              position: 'fixed',
              left: `${tooltipPosition.x + 15}px`,
              top: `${tooltipPosition.y + 15}px`,
              zIndex: 1000,
            }}
          >
            <div className="tooltip-header">
              <i className="fas fa-map-marker-alt"></i>
              <strong>{hoveredPrefecture}</strong>
            </div>
            <div className="tooltip-body">
              <div className="tooltip-row">
                <span className="month-label">今月 ({thisMonthName})</span>
                <span className="event-count">{monthlyStats.thisMonth}件</span>
              </div>
              <div className="tooltip-row">
                <span className="month-label">来月 ({nextMonthName})</span>
                <span className="event-count">{monthlyStats.nextMonth}件</span>
              </div>
              <div className="tooltip-row">
                <span className="month-label">再来月 ({monthAfterNextName})</span>
                <span className="event-count">{monthlyStats.monthAfterNext}件</span>
              </div>
              <div className="tooltip-total">
                <span>合計</span>
                <span className="total-count">
                  {monthlyStats.thisMonth + monthlyStats.nextMonth + monthlyStats.monthAfterNext}件
                </span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 凡例 */}
      <div className="map-legend-bar">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#90CAF9' }}></div>
          <span>測定会少 (1件)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#42A5F5' }}></div>
          <span>測定会中 (2-3件)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#1976D2' }}></div>
          <span>測定会多 (4件以上)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#E8F4FD' }}></div>
          <span>予定なし</span>
        </div>
      </div>

      {selectedPrefecture && (
        <button
          className="clear-selection"
          onClick={() => onPrefectureClick(null)}
        >
          <i className="fas fa-times"></i>
          選択をクリア
        </button>
      )}
    </div>
  );
};

export default JapanMap;
