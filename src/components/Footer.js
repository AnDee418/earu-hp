import React from 'react';
import { Link } from 'react-router-dom';
import { SnsButton } from './perts/button';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className='footer-wrapper'>
                <div className="footer-top">
                    <Link to="/contact" className="footer-box footer-top-contact">
                        <div className="footer-box-text">
                            <h1>CONTACT</h1>
                            <p>EARU-FIRSTについて・インソールのこと・サービス、採用など
                            各種お問い合わせは
                            <br/>フォームよりお気軽に問い合わせください。</p>
                            <div className='go-contact-fake'>
                                <p>お問い合わせ<FontAwesomeIcon icon={faChevronRight} /></p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="main-footer">
                    <div className="main-footer-left">
                        <div className="main-footer-title">
                            <h1>有限会社　エアル・ファースト</h1>
                            <h3 className="footer-address">
                                〒064-0004 北海道札幌市中央区北4条西13丁目1-94 第25藤栄ビル2F
                            </h3>
                        </div>
                        <p className="tel">TEL: 011-272-0070</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.925520823088!2d141.33385747641185!3d43.06403397113618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29a2eb1489f5%3A0x5b162ec4687602e8!2z44iy44Ko44Ki44Or772l44OV44Kh44O844K544OI!5e0!3m2!1sja!2sjp!4v1729835870421!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <SnsButton/>
                    </div>
                    <div className="main-footer-right">
                        <nav className="footer-nav">
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
                                <Link to="/products" className='page-title'><span>商品サービス</span>PRODUCT</Link>
                                <ul className='side-menu-sublist'>
                                    <li><Link to="/products/insole">インソール</Link></li>
                                    {/* <li><Link to="/products/hokkaido">北海道セレクション</Link></li> */}
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

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
