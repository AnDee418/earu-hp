// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion'; // 追加

import { Header } from './components/Header';
import SideMenu from './components/SideMenu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Products from './pages/Products';
import Contact from './pages/Contact';
import OverView from './pages/OverView';
import AfterService from './pages/AfterService';
import MemberShip from './pages/MemberShip';
import Faq from './pages/Faq';
import NewsList from './pages/News/NewsList';
import NewsDetail from './pages/News/NewsDetail';
// import News from './pages/News';
import Insole from './pages/Products/Insoles';
import Brand from './pages/Products/Brand';
import ProductsHome from './pages/Products/ProductsHome';
import ScrollToTop from './components/animaition/ScrollTop';
import Loading from './components/animaition/Loading';

function App() {
  useEffect(() => {
    // Lenisのインスタンスを作成
    const lenis = new Lenis({
      duration: 1.5, // スクロールの慣性の長さ
      easing: (t) => 1 - Math.pow(1 - t, 3), // イージング関数（easeOutCubic）
      smoothWheel: true, // マウスホイールでのスムーズスクロールを有効化
      smoothTouch: false, // タッチデバイスでのスムーズスクロールを無効化
      touchMultiplier: 2, // タッチデバイスでのスクロール速度
    });

    // アニメーションフレームのループ
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // スクロールイベントのリスニング（オプション）
    lenis.on('scroll', ({ scroll }) => {
      // スクロール位置に応じた処理
    });

    // コンポーネントのアンマウント時にLenisを破棄
    return () => {
      lenis.destroy();
    };
  }, []);

  const location = useLocation();

  // ローディングアニメーション
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0); // 新しい状態を追加
  const [loadingComplete, setLoadingComplete] = useState(false); // ローディング完了状態を追加
  const [boxesOut, setBoxesOut] = useState(false); // ボックスのスライドアウト状態を追加
  const [fadeIn, setFadeIn] = useState(false); // フェードイン状態を追加

  useEffect(() => {
    // ページ全体がロードされたらローディ��グを終了
    const handleLoad = () => {
      setLoadingProgress(100);
      setLoadingComplete(true); // フェードアウトを開始
      // フェードアウト後にボックスをスライドアウト
      setTimeout(() => {
        setBoxesOut(true);
        // ボックスのスライドアウト後にフェードインを開始
        setTimeout(() => {
          setFadeIn(true);
          // ボックスのスライドアウト後にローディングを非表示にする
          setTimeout(() => {
            setLoading(false);
          }, 800); // Reduced from 1000ms to 800ms
        }, 300); // Reduced from 500ms to 300ms
      }, 800); // Reduced from 1000ms to 800ms
    };

    if (document.readyState === 'complete') {
      setLoadingProgress(100);
      setLoadingComplete(true);
      setTimeout(() => {
        setBoxesOut(true);
        setTimeout(() => {
          setFadeIn(true);
          setTimeout(() => {
            setLoading(false);
          }, 800); // Reduced from 1000ms to 800ms
        }, 300); // Reduced from 500ms to 300ms
      }, 800); // Reduced from 1000ms to 800ms
    } else {
      window.addEventListener('load', handleLoad);

      // ローディング進行状況をシミュレート
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev < 90) {
            return prev + Math.floor(Math.random() * 10) + 1; // 1〜10%増加
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 500);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(interval);
      };
    }
  }, []);

  const handleImagesLoaded = () => {
    setLoadingProgress(100);
    setLoadingComplete(true);
    setTimeout(() => {
      setBoxesOut(true);
      setTimeout(() => {
        setFadeIn(true);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }, 300);
    }, 800);
  };

  return (
    <ParallaxProvider>
      {loading && <Loading progress={loadingProgress} isComplete={loadingComplete} boxesOut={boxesOut} />} {/* プロパティを追加 */}
      {/* ローディングが終わったらメインコンテンツを表示 */}

      <div className='page-wrapper'>
        <div className={`${loading ? 'main-hidden' : 'main-visible body-box main-fade-in'}`}> {/* Changed from 'fade-in' to 'main-fade-in' */}
          <Header />
          <SideMenu />
          <main>
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home onImagesLoaded={handleImagesLoaded} />} /> {/* Pass handleImagesLoaded */}
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/products" element={<Products />}>
                  <Route index element={<ProductsHome />} /> {/* /products */}
                  <Route path="insole" element={<Insole />} />   {/* /products/insole */}
                  <Route path="brand" element={<Brand />} />   {/* /products/brand */}
                </Route>
                <Route path="/overview" element={<OverView />} />
                <Route path="/after-service" element={<AfterService />} />
                <Route path="/membership" element={<MemberShip />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/news/:id" element={<NewsDetail />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}
