import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import '../styles/_sideBar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SnsButton } from './perts/button';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ルートが変更されたときにサイドメニューを閉じる
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <div className={`side-menu ${isOpen ? 'side-menu--open' : 'side-menu--closed'}`}>
      <button onClick={toggleMenu} className="side-menu__toggle">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <p className='side-menu-name'>EARU-FIRST</p>
      <nav className="side-menu__nav">
        <div className='menu-top-layer'>
          <Link to="/" className='top-link'><span>ホーム</span>HOME</Link>
        </div>

        <ul className='side-menu-list'>

          <li className='side-menu-list-item'>
            <Link to="/about-us" className='page-title'><span>私たちについて</span>ABOUT US</Link>
            <ul className='side-menu-sublist'>
              <li><HashLink to="/about-us#Message">メッセージ</HashLink></li>
              <li><HashLink to="/about-us#Achievements">実績</HashLink></li>
              <li><HashLink to="/about-us#History">歴史</HashLink></li>
              <li><HashLink to="/about-us#Staff">スタッフ紹介</HashLink></li>
            </ul>
          </li>

          <li className='side-menu-list-item'>
            <Link to="/overview" className='page-title'><span>会社概要</span>OVER VIEW</Link>
            <ul className='side-menu-sublist'>
              <li><HashLink to="/overview#Profile">会社概要</HashLink></li>
              <li><HashLink to="/overview#Branch">支店/事業所</HashLink></li>
              <li><HashLink to="/overview#Agency">代理店/特約店</HashLink></li>
            </ul>
          </li>

          <li className='side-menu-list-item'>
            <Link to="/after-service" className='page-title'><span>アフターサービス</span>AFTER SERVICE</Link>
            <ul className='side-menu-sublist'>
              <li><HashLink to="/after-service#Warranty">保証</HashLink></li>
              <li><HashLink to="/after-service#Maintenance">修理・メンテナンス</HashLink></li>
              <li><HashLink to="/after-service#Flow">修理受付の流れ</HashLink></li>
            </ul>
          </li>

          <li className='side-menu-list-item'>
            <Link to="/membership" className='page-title'><span>メンバーシップ</span>MEMBERSHIP</Link>
            <ul className='side-menu-sublist'>
              <li><HashLink to="/membership#Agency">代理店契約</HashLink></li>
              <li><HashLink to="/membership#SoloAgency">特約店契約</HashLink></li>
              <li><HashLink to="/membership#Oem">OEM制作</HashLink></li>
            </ul>
          </li>

          <li className='side-menu-list-item'>
            <Link to="/products" className='page-title'><span>事業内容</span>PRODUCTS</Link>
            <ul className='side-menu-sublist'>
              <li><Link to="/products/insole">インソール</Link></li>
              {/* <li><Link to="/products/Hokkaido">北海道セレクション</Link></li> */}
              <li><Link to="/products/brand">商品一覧</Link></li>
            </ul>
          </li>

          <li className='side-menu-list-item'>
            <Link to="/faq" className='page-title'><span>よくある質問</span>Q&A</Link>
          </li>

          <li className='side-menu-list-item'>
            <Link to="/news" className='page-title'><span>ニュース</span>NEWS</Link>
          </li>

          <li className='side-menu-list-item'>
            <Link to="/contact" className='page-title'><span>お問い合わせ</span>CONTACT</Link>
          </li>

          <li className='contact-link-box'>
            <Link to="https://custom-made-insole.com/" className='shop-link go-link'>オンラインショップ<FontAwesomeIcon icon={faChevronRight} /></Link>
          </li>

          <li>
            <SnsButton/>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
