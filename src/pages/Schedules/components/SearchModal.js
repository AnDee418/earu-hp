import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * 検索モーダルコンポーネント
 * 年月、都道府県の検索条件を設定
 */
const SearchModal = ({ isOpen, onClose, onSearch, initialFilters }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const years = Array.from({ length: 3 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const [selectedYear, setSelectedYear] = useState(initialFilters?.selectedYear || currentYear);
  const [selectedMonth, setSelectedMonth] = useState(initialFilters?.selectedMonth || currentMonth);
  const [selectedPrefecture, setSelectedPrefecture] = useState(initialFilters?.selectedPrefecture || null);

  // モーダルボディへの参照
  const modalBodyRef = useRef(null);

  // 都道府県リスト
  const prefecturesByRegion = {
    '北海道': ['北海道'],
    '東北': ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
    '関東': ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
    '中部': ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県'],
    '近畿': ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
    '中国': ['鳥取県', '島根県', '岡山県', '広島県', '山口県'],
    '四国': ['徳島県', '香川県', '愛媛県', '高知県'],
    '九州': ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
  };

  useEffect(() => {
    if (initialFilters) {
      setSelectedYear(initialFilters.selectedYear || currentYear);
      setSelectedMonth(initialFilters.selectedMonth || currentMonth);
      setSelectedPrefecture(initialFilters.selectedPrefecture || null);
    }
  }, [initialFilters, currentYear, currentMonth]);

  // モーダルが開いたときにbodyのスクロールとLenisを無効化
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const scrollY = window.scrollY;

      // Lenisインスタンスを完全に破棄
      const lenis = window.lenis;
      if (lenis) {
        lenis.destroy();
        window.lenis = null;
        console.log('Lenis destroyed');
      }

      // bodyのスクロールを無効化
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;

      // モーダルボディのスクロールを強制的に有効化
      if (modalBodyRef.current) {
        const modalBody = modalBodyRef.current;
        modalBody.style.overflowY = 'scroll';
        modalBody.style.overflowX = 'hidden';
        modalBody.style.pointerEvents = 'auto';
        modalBody.style.touchAction = 'pan-y';

        // wheelイベントハンドラーを追加してスクロールを強制
        const handleWheel = (e) => {
          e.stopPropagation();
          const { scrollTop, scrollHeight, clientHeight } = modalBody;
          const isAtTop = scrollTop === 0;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight;

          // 上端または下端でない場合のみスクロールを許可
          if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            e.preventDefault();
          }
        };

        modalBody.addEventListener('wheel', handleWheel, { passive: false });
        console.log('Modal body scroll enabled with wheel handler');

        // クリーンアップ用に保存
        modalBody._wheelHandler = handleWheel;
      }
    } else {
      // wheelイベントハンドラーをクリーンアップ
      if (modalBodyRef.current && modalBodyRef.current._wheelHandler) {
        modalBodyRef.current.removeEventListener('wheel', modalBodyRef.current._wheelHandler);
        delete modalBodyRef.current._wheelHandler;
      }

      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';

      // スクロール位置を復元
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }

      // Lenisを再初期化（App.jsの設定と同じ）
      if (!window.lenis) {
        const lenis = new Lenis({
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        window.lenis = lenis;

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        console.log('Lenis reinitialized');
      }
    }
    return () => {
      // wheelイベントハンドラーをクリーンアップ
      if (modalBodyRef.current && modalBodyRef.current._wheelHandler) {
        modalBodyRef.current.removeEventListener('wheel', modalBodyRef.current._wheelHandler);
        delete modalBodyRef.current._wheelHandler;
      }

      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';

      // スクロール位置を復元
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }

      // クリーンアップ時にLenisを再初期化
      if (!window.lenis) {
        const lenis = new Lenis({
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        window.lenis = lenis;

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    };
  }, [isOpen]);

  const handleReset = () => {
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
    setSelectedPrefecture(null);
  };

  const handleSearch = () => {
    onSearch({
      selectedYear,
      selectedMonth,
      selectedPrefecture
    });
    onClose();
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="search-modal-overlay" onClick={handleOverlayClick}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <h2>
            <i className="fas fa-search"></i>
            検索条件
          </h2>
          <button className="close-button" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="search-modal-body" ref={modalBodyRef}>
          {/* 年月選択 */}
          <div className="search-section">
            <label className="search-label">
              <i className="fas fa-calendar-alt"></i>
              年月
            </label>
            <div className="year-month-select">
              <select
                className="search-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}年
                  </option>
                ))}
              </select>
              <select
                className="search-select"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
              >
                {months.map(month => (
                  <option key={month} value={month}>
                    {month}月
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 都道府県選択 */}
          <div className="search-section">
            <label className="search-label">
              <i className="fas fa-map-marker-alt"></i>
              都道府県
            </label>
            <div className="prefecture-grid">
              {Object.entries(prefecturesByRegion).map(([region, prefectures]) => (
                <div key={region} className="prefecture-region">
                  <h4 className="region-name">{region}</h4>
                  <div className="prefecture-buttons">
                    {prefectures.map((prefecture) => (
                      <button
                        key={prefecture}
                        className={`prefecture-chip ${selectedPrefecture === prefecture ? 'selected' : ''}`}
                        onClick={() => setSelectedPrefecture(
                          selectedPrefecture === prefecture ? null : prefecture
                        )}
                      >
                        {prefecture.replace(/[都道府県]/g, '')}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="search-modal-footer">
          <button className="reset-button" onClick={handleReset}>
            <i className="fas fa-redo-alt"></i>
            リセット
          </button>
          <button className="search-submit-button" onClick={handleSearch}>
            <i className="fas fa-search"></i>
            検索
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
