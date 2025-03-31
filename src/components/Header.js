import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/logo/･EARU-FIRST ロゴ(黒).png';
import logoSp from '../assets/images/logo/SpHeaderLogo.webp';

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleMouseLeave();
  }, [location]);

  const isHomePage = location.pathname === '/';
  const headerStyle = {
    backgroundColor: isHomePage 
      ? (isScrolled ? 'rgba(255, 255, 255, 1)' : 'transparent')
      : 'rgba(255, 255, 255, 1)',
    backdropFilter: isHomePage
      ? (isScrolled ? 'blur(10px)' : 'none')
      : 'blur(10px)',
    boxShadow: isHomePage
      ? (isScrolled ? '5px 0px 5px rgba(51,51,51,0.5)' : 'none')
      : '5px 0px 5px rgba(51,51,51,0.5)',
    transition: 'background-color 0.3s ease',
  };

  const navTextStyle = {
    color: isHomePage
      ? (isScrolled ? '#333333' : '#333333')
      : '#333333',
  };

  return (
    <header
      id="Header"
      className={`header ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}
      style={headerStyle}
    >
      <div className="header-container">
        <Link to="/" className='logoSide'>
          <img src={logo} alt='logo' className='logo'></img>
          <img src={logoSp} alt='logo-sp' className='logo-sp'></img>
        </Link>
        <ul className="header-nav">
          {['ABOUT US', 'PRODUCTS','OVERVIEW', 'AFTER SERVICE', 'MEMBERSHIP'].map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to={
                  item === 'ABOUT US' ? '/about-us' :
                  item === 'PRODUCTS' ? '/products' :
                  item === 'OVERVIEW' ? '/overview' :
                  item === 'AFTER SERVICE' ? '/after-service' :
                  item === 'MEMBERSHIP' ? '/membership' :
                  '/'
                } 
                className='button-51' 
                style={navTextStyle}
              >
                {item}
              </Link>
              <ul className={`dropdown ${hoveredItem === item ? 'show' : ''}`}>
                {item === 'ABOUT US' && (
                  <>
                    <li className='header-list-title'>
                      <Link to="/about-us" onClick={handleMouseLeave}>
                        <p>私たちについて</p>
                        <h2>ABOUT US</h2>
                      </Link>
                    </li>
                    <div className='section-link'>
                      <li><HashLink to="/about-us#Message" onClick={handleMouseLeave}>メッセージ</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/about-us#Achievements" onClick={handleMouseLeave}>実績</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/about-us#History" onClick={handleMouseLeave}>歴史</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/about-us#Staff" onClick={handleMouseLeave}>スタッフ</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                    </div>
                  </>
                )}
                {item === 'PRODUCTS' && (
                  <>
                    <li className='header-list-title'>
                      <Link to="/products" onClick={handleMouseLeave}>
                        <p>商品・サービス</p>
                        <h2>PRODUCTS</h2>
                      </Link>
                    </li>
                    <div className='section-link'>
                      <li><HashLink to="/products/insole" onClick={handleMouseLeave}>インソール</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      {/* <li><HashLink to="/products/hokkaido">北海道セレクション</HashLink><FontAwesomeIcon icon={faChevronRight} /></li> */}
                      <li><HashLink to="/products/brand" onClick={handleMouseLeave}>商品一覧</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                    </div>
                  </>
                )}
                {item === 'OVERVIEW' && (
                  <>
                    <li className='header-list-title'>
                      <Link to="/overview" onClick={handleMouseLeave}>
                        <p>会社概要</p>
                        <h2>OVER VIEW</h2>
                      </Link>
                    </li>
                    <div className='section-link'>
                      <li><HashLink to="/overview#Profile" onClick={handleMouseLeave}>プロフィール</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/overview#BranchOffice" onClick={handleMouseLeave}>支店/事業所</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/overview#Agency" onClick={handleMouseLeave}>代理店/特約店</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                    </div>
                  </>
                )}
                {item === 'AFTER SERVICE' && (
                  <>
                    <li className='header-list-title'>
                      <Link to="/after-service" onClick={handleMouseLeave}>
                        <p>アフターサービス</p>
                        <h2>AFTER SERVICE</h2>
                      </Link>
                    </li>
                    <div className='section-link'>
                      <li><HashLink to="/after-service#Warranty" onClick={handleMouseLeave}>保証</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/after-service#Maintenance" onClick={handleMouseLeave}>メンテナンス</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/after-service#Flow" onClick={handleMouseLeave}>お申込みの流れ</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                    </div>
                  </>
                )}
                {item === 'MEMBERSHIP' && (
                  <>
                    <li className='header-list-title'>
                      <Link to="/membership" onClick={handleMouseLeave}>
                        <p>B2Bメンバーシップ</p>
                        <h2>MEMBERSHIP</h2>
                      </Link>
                    </li>
                    <div className='section-link'>
                      <li><HashLink to="/membership#Agent" onClick={handleMouseLeave}>代理店契約</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/membership#SoleAgent" onClick={handleMouseLeave}>特約店契約</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                      <li><HashLink to="/membership#Oem" onClick={handleMouseLeave}>OEM</HashLink><FontAwesomeIcon icon={faChevronRight} /></li>
                    </div>
                  </>
                )}
              </ul>
            </li>
          ))}
          <li className="nav-item">
            <Link to="/faq" className='button-51' style={navTextStyle}>Q&A</Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className='button-51' style={navTextStyle}>NEWS</Link>
          </li>
          <li className="nav-item nav-contact">
            <Link to="/contact" className='header-contact'>
              <FontAwesomeIcon icon={faEnvelope} />          
              <p>CONTACT</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export {Header};