import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 追加
import { useInView } from 'react-intersection-observer'; 

import {FadeInSection} from '../components/animaition/fade-in'; // FadeInSectionコンポーネントをインポート
import {Button} from '../components/perts/button';
import AgentLogo from '../components/perts/agentLogo';
import AccordionMenu from '../components/perts/accordion';
import PickUp from '../components/sections/PickUp';
import {FlowingImagesText} from '../components/animaition/FlowingImagesBackground';
import VideoSlider from '../components/animaition/slider'
import FlowingImages from '../components/perts/backslide'
import {ScrollDownIndicator} from '../components/animaition/ScrollDownIndicator';
import HomeAfterService from '../components/sections/HomeSection/HomeAfterService'
import ParallaxComponent from '../components/sections/HomeSection/HomeProduct' // useHistoryをインポート

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEnvelope, faCalendarDays, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/main.scss';

import blogThumneil from '../assets/images/Overview/会社LOGOvisual.webp'
import promotionThumneil from '../assets/images/thumbnail/サムネイル.jpg'
import backLogo from '../assets/images/logo/LOGO 鷹 青.webp'

import VodyEqip1 from '../assets/images/Products/VodyEqipネイビー宣材写真1.webp'
import DeerShampoo from '../assets/images/Products/鹿シャンプー.webp'
import BasicInsoles from '../assets/images/Products/BASIC宣材写真1.webp'

import mainback1 from '../assets/images/background/Backslide/mainback1.webp';
import pxlImage from '../assets/images/background/Backslide/itami-attend.webp';
import shampooImage from '../assets/images/background/Backslide/シカシャンプーseries.png';
import bgImage from '../assets/images/background/Backslide/BG.png';
import bamImage from '../assets/images/background/Backslide/BABAM.png';
import basicImage from '../assets/images/background/Backslide/BASIC宣材写真１.png';
import vodyImage from '../assets/images/background/Backslide/VodyEqipネイビー宣材写真１.png';

const Home = ({ onImagesLoaded }) => { // Add onImagesLoaded prop
  const [productRef, parentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productChildRef1, childInView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productChildRef2, childInView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productChildRef3, childInView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [posts, setPosts] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [prevSlide, setPrevSlide] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          'https://earu-first.com/Blog/wp-json/wp/v2/posts?_embed&per_page=3'
        );
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const changeSlide = (newIndex) => {
    setDirection(newIndex > activeSlide ? 'next' : 'prev');
    setPrevSlide(activeSlide);
    setActiveSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeSlide + 1) % posts.length;
      changeSlide(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, posts.length]);

  // アイキャッチ画像URLを取得するヘルパー関数
  const getFeaturedImage = (post) => {
    if (
      post?._embedded?.['wp:featuredmedia']?.[0]?.source_url
    ) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
  };

  const videos = [
    {
      url: 'https://youtu.be/Qi1x4VYQEas',
      title: 'プロモーション',
      thumbnail: promotionThumneil,
    },
    // 他の動画情報を追加
  ];

  const items1 = [
    { 
        title: 'インソールはどのくらい持ちますか？', 
        content: '使用頻度などにより個人差が大きいものですが、一般的にはベーシックモデルでは1~2年、オーダーメイドモデルでは2~4年程度で交換が目明日でございます。' },
    { 
        title: 'スポーツをしていない人でも使えますか？', 
        content: 'もちろんです！バランス補正が強みのインソールですので、パフォーマンス向上はもちろんですが、その他にもバランスが改善されることによって今まである場所に集中していた負荷をから全体に分散させる事で負担の軽減効果も期待できます。' },
    { 
        title: '自分でどのようにケアしたらいいですか？', 
        content: '洗濯機などは使用できません。よく絞った布などで優しく拭いていただいたり、アルコール成分の入っていない除菌スプレーをご使用ください。詳しくは下の動画ギャラリーの「お手入れ方法」の動画をご覧ください。' },
  ];

  const importAll = (r) => r.keys().map(r);
  const backslideImages = [
    basicImage,
    pxlImage,
    shampooImage,
    bgImage,
    bamImage,
    mainback1,
    vodyImage,
  ];
  const palceImages = importAll(require.context('../assets/images/Overview', false, /\.(png|jpe?g|webp)$/));

  const blogThumneils = {
    backgroundImage: `url(${blogThumneil})`,
  }

  const productimage1 = [
    VodyEqip1, BasicInsoles, DeerShampoo
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='motion-wrapper'
    >
      <div className='body'>
        <div className='home-contents-wrapper'>
          <div className='top-wrapper'>
            <div className='top-container'>
              <div className='flow-layer'>

                <div class="card shop">
                  <Link to="https://custom-made-insole.com/" class="card-content">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p class="card-para">公式ショップ</p>
                  </Link>
                </div>

                <h3 className='top-side-text'>
                  Supporting the steps and creating an inspiring step forward together
                </h3>

              </div>
              <div className='text-layer'>
                <p className='text-layer-text'>SINCE 2005</p>
                <h1 className='home-top-text'>
                  <span className='text-back'>歩みを支え</span>
                  <sapn className='text-back'>感動の一歩を</sapn>
                  <span className='text-back'>共に創る。</span>
                </h1>
              </div>
              <ScrollDownIndicator/>
            </div>
          </div>
          <div className='background-gra-color'>

            {/* NEWS section */}
            <FadeInSection>
              <section className='home-news'>
                <div className="news-text-header">
                  <h2 className='news-text-header-pc'>NEWS</h2>
                </div>
                <div className="news-carousel">
                  {posts.map((post, index) => (
                    <Link 
                      key={post.id} 
                      to={`/news/${post.id}`} 
                      className={`news-link ${
                        index === activeSlide 
                            ? 'active' 
                            : index === prevSlide 
                                ? 'prev' 
                                : ''
                      }`}
                    >
                      <div 
                        className='news' 
                        style={{
                          backgroundImage: getFeaturedImage(post)
                            ? `url(${getFeaturedImage(post)})`
                            : `url(${blogThumneil})`
                        }}
                      >
                        <div className='news-text'>
                          <div className="news-text-content">
                            <span className="news-date">
                              {new Date(post.date).toLocaleDateString('ja-JP', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                              })}
                            </span>
                            <p 
                              className="news-title"
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered
                              }}
                            />
                            <div className='news-text-header-underbar'></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="carousel-dots">
                    {posts.map((_, index) => (
                      <button 
                        key={index} 
                        className={`dot ${index === activeSlide ? 'active' : ''}`}
                        onClick={() => changeSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </FadeInSection>

            {/* ABOUT section */}
            <FadeInSection>
              <section className='home-about section'>
                <div className='home-about-background'>
                  <img src={backLogo} alt='back-logo'></img>
                </div>
                <div className='home-about-text-container'>
                  <div className='home-about-message'>
                    <h1>私たちは、北海道を拠点として
                      インソールを通じて足元から人々の健康を
                      支える縁の下の力持ちを目指しています。
                    </h1>
                  </div>
                  <div className='home-about-text'>
                    <p>
                      20年の歴史の中で、私たちは数多くのお客様と出会い、共に歩んできました。お客様の「ありがとう」という言葉は、私たちの何よりの励みです。
                      <br />
                      <br />
                      私たちのインソールは、単なる靴の中敷きではありません。それは、姿勢やバランスを補正し、健康な体へと導くための、最先端のテクノロジーと長年の研究成果が詰まった製品です。
                      足元から身体全体のバランスを整えることで、腰痛や膝の痛みなどの悩みの軽減、そして姿勢の改善による見た目の向上にもつながります。
                      <br />
                      <br />
                      お客様一人ひとりの足型・足圧を丁寧に計測し、最適なインソールをご提案することで、より快適な歩行をサポート。あなたの身体に合わせたのオーダーメイドの作成もあり、あなたの毎日をより快適にします。
                      <br />
                      <br />
                      私たちは、インソールを通じて、お客様の健康で豊かな未来を創造することを目指しています。足元から、あなたの未来を支えます。
                    </p>
                    <Button href="/about-us" text="詳しく見る"/>
                  </div>
                </div>
              </section>
            </FadeInSection>
            
            {/* PRODUCT section */}
            <ParallaxComponent images={productimage1}/>

            {/* MENBERSHIP section */}
            <FadeInSection>
              <section className='home-membership'>
                <div className='home-membership-container'>
                  <div className='home-membership-wrapper'>

                    <h1 className='section-title'>MEMBERSHIP</h1>
                    <p className='home-membership-message'>
                      エアル・ファーストと共に、世界中に「感謝」と「感動」を
                      伝えてくれるパートナーを紹介しています。
                    </p>
                    <AgentLogo/>
                    <div className='link-wrapper'>
                      <Button href="/overview#Agency" text="詳細を見る"/>
                    </div>

                  </div>
                </div>
              </section>
            </FadeInSection>

            {/* LOOP TEXT */}
            <div className='loop-text-container'>
              <FlowingImagesText/>
            </div>

            {/* AFTER SERVICE section */}
            <section ref={productRef} className={`product ${parentInView ? 'animate' : ''}`}>
              <HomeAfterService/>
            </section>

            {/* LOOP TEXT */}
            <div className='loop-text-container'>
              <FlowingImagesText/>
            </div>

            {/* PICK UP section */}
            <FadeInSection>
              <section className='pick-up section'>
                <div className='pick-up-wrapper'>
                  <PickUp/>
                </div>
              </section>
            </FadeInSection>

            {/* NEWS section */}
            <FadeInSection>
              <section className="qa section">
                <div className='qa-wrapper'>
                  <div className='qa-title'>
                    <h1 className='section-title'>Q&A</h1>
                    <p className='qa-sub'>よくある質問</p>
                  </div>
                  <div className='contents-side'>
                    <AccordionMenu items={items1} />
                    <div className='link-wrapper'>
                      <Button href="/faq" text="もっと見る"/>
                    </div>
                  </div>
                </div>
              </section>
            </FadeInSection>

            {/* MOVIES section */}
            <FadeInSection>
              <section className="movie section">
                <h1 className='section-title'>MOVIES</h1>
                <VideoSlider videos={videos} />
              </section>
            </FadeInSection>

          </div>
        </div>
        <FlowingImages imagesLeft={backslideImages} onImagesLoaded={onImagesLoaded} />
      </div>
    </motion.div>
  );
};

export default Home;
