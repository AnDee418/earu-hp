import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';

import {ScrollToTopButton} from '../components/SubPageNav';
import ScrollDownIndicator from '../components/animaition/ScrollDown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Campany from '../assets/images/Overview/会社LOGOvisual.webp';
import Tokyo from '../assets/images/Overview/tokyo.jpg';
import Sendai from '../assets/images/Overview/sendai.jpg';
import Nagoya from '../assets/images/Overview/Nagoya-visual.jpg';
import Osaka from '../assets/images/Overview/Osaka-visual.jpg';


const AboutUs = () => {
    const [openAgencies, setOpenAgencies] = useState({});

    const toggleAgency = (area) => {
        setOpenAgencies(prev => ({ ...prev, [area]: !prev[area] }));
    };

    return (  
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='motion-wrapper'
        >
            <div className='body'>
                <ScrollToTopButton/>
                <div className='sub-top-wrapper overview-top'>
                    <h1 className='sub-page-title'>OVER VIEW</h1>
                    <h2 className='sub-page-subtitle'>会社概要</h2>
                    <ScrollDownIndicator/>
                </div>
                <section className='profile section' id='Profile'>
                    <h1 className='sub-section-title'>COMPANY PROFILE</h1>
                    <p className='sub-section-subtitle'>会社概要</p>
                    <div className='profile-wrapper'>
                        <img src={Campany} alt="会社外観" className='campany-visual' />
                        <ul className='profile-container'>
                            <li className='profile-item'>
                                <p className='profile-title'>会社概要</p>
                                <p className='profile-detail'>有限会社　エアル・ファースト</p>
                            </li>
                            <li className='profile-item'>
                                <p className='profile-title'>事業開始</p>
                                <p className='profile-detail'>2005年8月</p>
                            </li>
                            <li className='profile-item'>
                                <p className='profile-title'>資本金</p>
                                <p className='profile-detail'>500万</p>
                            </li>
                            <li className='profile-item'>
                                <p className='profile-title'>従業員</p>
                                <p className='profile-detail'>22人</p>
                            </li>
                            <li className='profile-item'>
                                <p className='profile-title'>代表</p>
                                <p className='profile-detail'>斉藤　孝行</p>
                            </li>
                            <li className='profile-item'>
                                <p className='profile-title'>事業内容</p>
                                <p className='profile-detail'>インソール製造・販売 / フラワーレンタル / 美容・衛生商品販売</p>
                            </li>
                            <li className='profile-item'>
                                <p className='profile-title'>本社住所</p>
                                <p className='profile-detail'>札幌市中央区北4条西13丁目1-94　第25藤栄ビル2F</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='Branch section' id='BranchOffice'>
                    <h1 className='sub-section-title'>BRANCH OFFICE</h1>
                    <p className='sub-section-subtitle'>支店 / 事業所</p>
                    <div className='branch-wrapper'>
                        <div className='branch-cintainer'>
                            <div className='branch-text-container'>
                                <h1>東京ショールーム</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒107-0062</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>東京都港区南青山2-11-13 南青山ビル2F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>支店長</p>
                                        <p className='branch-text-detail'>渡邉　将也</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>03-6434-0261</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>FAX番号</p>
                                        <p className='branch-text-detail'>03-6434-0262</p>
                                    </li>
                                </ul>
                            </div>
                            <img src={Tokyo} alt="東京支店" />
                        </div>
                        <div className='branch-cintainer'>
                            <div className='branch-text-container'>
                                <h1>仙台ショールーム</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒980-0002</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>宮城県仙台市青葉区福沢町2-10 ミマツビル1F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>支店長</p>
                                        <p className='branch-text-detail'>伊丹　雄太</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>022-796-3471</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>FAX番号</p>
                                        <p className='branch-text-detail'>022-796-3472</p>
                                    </li>
                                </ul>
                            </div>
                            <img src={Sendai} alt="仙台支店" />
                        </div>
                        <div className='branch-cintainer'>
                            <div className='branch-text-container'>
                                <h1>名古屋事業所</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒460-0002</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>愛知県名古屋市中区丸の内2-14-32-1402</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>支店長</p>
                                        <p className='branch-text-detail'>斉藤　春樹</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0120-315-210</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>FAX番号</p>
                                        <p className='branch-text-detail'>なし</p>
                                    </li>
                                </ul>
                            </div>
                            <img src={Nagoya} alt="名古屋支店" />
                        </div>
                        <div className='branch-cintainer'>
                            <div className='branch-text-container'>
                                <h1>大阪事業所</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒553-0003</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>大阪府大阪市福島区福島8-5-6</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>支店長</p>
                                        <p className='branch-text-detail'>野口　和裕</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0120-315-210</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>FAX番号</p>
                                        <p className='branch-text-detail'>なし</p>
                                    </li>
                                </ul>
                            </div>
                            <img src={Osaka} alt="大阪支店" />
                        </div>
                    </div>
                </section>
                <section className='agency section' id='Agency'>
                    <h1 className='sub-section-title'>AGENCY</h1>
                    <p className='sub-section-subtitle'>代理店 / 特約店</p>
                    <div className='agency-area-wrapper'>
                        <h1 className="agency-area" onClick={() => toggleAgency('hokkaido')}>
                            <span>北海道エリア<FontAwesomeIcon icon={faChevronRight} /></span>
                            <div className='area-background hokkaido'></div>
                        </h1>
                        <div className={`agency-wrapper ${openAgencies.hokkaido ? 'active' : ''}`}>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.259415400937!2d141.37304657641153!3d43.0570112711367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2bd61707c2cd%3A0x7fecfa02ed39b80e!2z44CSMDAzLTA4MDQg5YyX5rW36YGT5pyt5bmM5biC55m955-z5Yy66I-K5rC077yU5p2h77yT5LiB55uu77yR4oiS77yRIO-8pO-9ge-9ie-9me-9gSDvvLbvvYnvvYzvvYzvvYXvvYfvvYUg6I-K5rC0!5e0!3m2!1sja!2sjp!4v1732255252324!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'
                                    >
                                </iframe>
                                <h1>株式会社リテイル・ファストリー</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒003-0804</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>札幌市白石区菊水4条3丁目1-1</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'></p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>011-815-7051</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'></p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.0138747173623!2d141.33660277641087!3d43.04113957113782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2a1dcf2eaaab%3A0xf4de095a6dc16dc0!2z44ix44OV44Kh44Kk44Oz44O744OX44Ot44OH44Ol44O844K5!5e0!3m2!1sja!2sjp!4v1732338758736!5m2!1sja!2sjp" 
                                        allowfullscreen=""
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade"
                                        className='maps'>
                                </iframe>
                                <h1>株式会社ファイン・プロデュース</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒064-0914</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>札幌市中央区南14条西13丁目2-47 ローヤルハイツ南14条101号</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>宮坂　康太郎</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>011-215-1460</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>toc.kamihu@gmail.com</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='http://www.fine-produce.com/index.html' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/sapporo.fine.produce/?ref=embed_page' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.896258951532!2d142.46386707643097!3d43.46276297111186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0cb593460d0dc3%3A0xf83e71755b938438!2z44GC44GX44Gq44GM5pW06aqo6Zmi!5e0!3m2!1sja!2sjp!4v1732252096681!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>あしなが整骨院</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒071-0543</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>北海道空知郡上富良野町中町2丁目3-1</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>安西　孝典</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0167-56-7676</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>toc.kamihu@gmail.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.ashinaga-kamifu.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.857103555666!2d141.3169698764128!3d43.086499471134665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b28f83eb9ed1f%3A0x4bbaac8f59babab1!2z44CSMDYzLTA4Njcg5YyX5rW36YGT5pyt5bmM5biC6KW_5Yy65YWr6LuS77yX5p2h5p2x77yS5LiB55uu77yR4oiS77yY!5e0!3m2!1sja!2sjp!4v1732339553450!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>ATAS</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒063-0867</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>札幌市西区八軒7条2丁目1-8</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>中野　秀樹</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>011-557-7665</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>toc.kamihu@gmail.com</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.ashinaga-kamifu.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.9001680171027!2d141.33330417641187!3d43.064567171136126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29a2efcc5285%3A0x4986d2f34ef7f2f1!2z44ix44K544Od44O844OE44Oe44Kk44Oz44OJ!5e0!3m2!1sja!2sjp!4v1732339249775!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>株式会社スポーツマインド</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒060-0004</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>札幌市中央区北4条西13丁目1-94 第25藤栄ビル3F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>岡村　真吾</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>011-208-5556</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>toc.kamihu@gmail.com</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.sports-mind.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23322.691712489326!2d141.28046327431636!3d43.05539060000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29ea0313e4e3%3A0x357759c00191a565!2zQUJDIExBQiDlhoblsbHlupc!5e0!3m2!1sja!2sjp!4v1732340190054!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>株式会社アスリートボディコンディショニング</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒064-0801</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>札幌市中央区南1条西26丁目 ホワイトハウス円山 1F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>長谷部 大貴</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>011-614-8123</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>hscbbtm26orng@icloud.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.e-athlete.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/jqq3831d?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.4782340266256!2d141.29561237641232!3d43.07344017113561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2835f959c0a7%3A0xb9d838beba402368!2z44CSMDYzLTAwMDQg5YyX5rW36YGT5pyt5bmM5biC6KW_5Yy65bGx44Gu5omL77yU5p2h77yR5LiB55uu77yR4oiS77yRIE5vLjMg44Oe44OD44Kv44K544OT44Or!5e0!3m2!1sja!2sjp!4v1732339855247!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>三峰株式会社</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒063-0004</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>札幌市西区山の手4条1丁目1番1号</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>我満　嘉治</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>011-623-3331</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>gaman@kei-ski.co.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://kei-ski.co.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.363522028916!2d140.79068127641744!3d43.18088267112851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ae5929d5eb36d%3A0x2ae14077707262a6!2z44CSMDQ2LTAwMDMg5YyX5rW36YGT5L2Z5biC6YOh5L2Z5biC55S66buS5bed55S677yY77yY77yV4oiS77yR!5e0!3m2!1sja!2sjp!4v1732340604509!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>NPO法人 よいスポ</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒046-0003</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>北海道余市郡余市町黒川町885-1</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>我満　嘉治</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-5074-1143</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>snow.surf.lifestyle1217@gmail.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='http://yoispo.net/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.4395273100536!2d140.63589817640124!3d42.84245167115213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0aaf87fb4fdfc3%3A0x2dcd03159a43d770!2z44iy44OL44K744Kz44OV44Kh44Kk44Oz!5e0!3m2!1sja!2sjp!4v1732340893938!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>有限会社ニセコファイン</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒048-1501</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>北海道虻田郡ニセコ町冨士見65番地</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>吉岡　俊彦</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0136-58-3568</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>niseko@jade.plala.or.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='http://www8.plala.or.jp/niseko-fine/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.3326704836995!2d141.31818428856639!3d43.05547039671509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29eaf8fb5ae9%3A0xdd4ddb6b5c234a16!2z44CSMDY0LTA4MDEg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65Y2X77yR5p2h6KW_77yS77yT5LiB55uu77yR4oiS77yYIOODgeOCteODs-ODnuODs-OCt-ODp-ODs-esrO-8mOacreW5jA!5e0!3m2!1sja!2sjp!4v1732341262695!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>スタジオ『COOCROYOI（ココロヨイ）』</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒064-0801</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>北海道札幌市中央区南1条西23丁目1-8-607</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>吉岡　俊彦</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-8707-5641</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>michiko-h@coast.ocn.ne.jp</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='http://www8.plala.or.jp/niseko-fine/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.9780279568618!2d140.9861476764179!3d43.18897187112793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ae0f93ea2eed3%3A0xf7138cee44d39252!2z44CSMDQ3LTAwMzQg5YyX5rW36YGT5bCP5qi95biC57eR77yR5LiB55uu77yS77yR4oiS77yS77yZ!5e0!3m2!1sja!2sjp!4v1732341100817!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>株式会社NAOX</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒047-0034</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>北海道小樽市緑1-21-29</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>我満　嘉治</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>株式会社NAOX</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>naoya.k@naox.jp</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='http://yoispo.net/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='agency-area-wrapper'>
                        <h1 className="agency-area" onClick={() => toggleAgency('tohoku')}>
                            <span>東北・北陸エリア<FontAwesomeIcon icon={faChevronRight} /></span>
                            <div className='area-background tohoku'></div>
                        </h1>
                        <div className={`agency-wrapper ${openAgencies.tohoku ? 'active' : ''}`}>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.796807945607!2d136.61427947612097!3d36.583114072309826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff9ccab3d58ff89%3A0x7655e80e8139643!2z44CSOTIwLTAzNDgg55-z5bed55yM6YeR5rKi5biC5p2-5p2R77yT5LiB55uu77yT77yS77yW!5e0!3m2!1sja!2sjp!4v1732251880219!5m2!1sja!2sjp"  
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>こころ整骨院</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒920-0348</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>石川県金沢市松村3丁目326番地</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>高橋　真哉</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>076-256-0170</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>sp828u49@major.ocn.ne.jp</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.5617479433736!2d140.8720605761905!3d38.220070271876686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a2648758281e5%3A0xa4156aa6f38c38e0!2z44CSOTgyLTAwMTIg5a6u5Z-O55yM5LuZ5Y-w5biC5aSq55m95Yy66ZW355S65Y2X77yT5LiB55uu77yT77yT4oiS77yT77yTIOazieW0juayu-eZgumZog!5e0!3m2!1sja!2sjp!4v1732426258867!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>養命堂 泉崎治療院</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒982-0012</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>宮城県仙台市太白区長町南3-33-33</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>安西　孝典</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>022-248-8989</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>toc.kamihu@gmail.com</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.ashinaga-kamifu.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.788779064444!2d140.8727085761923!3d38.26120457186677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a283ccb615555%3A0xb2b67372ac754699!2z44OP44Ok44K144Kr44K144Kk44Kv44Or5LuZ5Y-w5Lit5aSu5bqX!5e0!3m2!1sja!2sjp!4v1732426449378!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>ハヤサカサイクル仙台中央店</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒981-0021</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>宮城県仙台市青葉区中央２丁目４－６</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>安西　孝典</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>022-248-8989</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>toc.kamihu@gmail.com</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://hayasaka.co.jp/shops/miyagi/chuo/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0383677341724!2d140.02780807627863!3d40.20820947147395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9a9edffa2a95f7%3A0xc3bda0c2b06ff71e!2zMTQx44K544Od44O844OE!5e0!3m2!1sja!2sjp!4v1732426621834!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>141スポーツ</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒016-0821</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>秋田県能代市畠町11-17</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>安西　孝典</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>022-248-8989</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>noshiro_141sports@yahoo.co.jp</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://hayasaka.co.jp/shops/miyagi/chuo/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/141sports/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.098910662246!2d138.77869207613048!3d36.81614967224266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e0617862acb03%3A0x5bf83e308cf66850!2z44CSOTQ5LTYyMTIg5paw5r2f55yM5Y2X6a2a5rK86YOh5rmv5rKi55S65LiJ5Zu977yU77yY77yX!5e0!3m2!1sja!2sjp!4v1732427076443!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>中村 浩章</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒949-6212</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>新潟県南魚沼郡湯沢町三国487</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>中村 浩章</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-8004-3210</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>insole@earu-first.com</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://hayasaka.co.jp/shops/miyagi/chuo/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/141sports/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.081429029167!2d138.8198517761578!3d37.45879927206675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5a99e593a4d47%3A0xeb4015123a0815af!2z44OI44Os44O844OL44Oz44Kw44K544K_44K444Kq5ZKyKFRSQUlOSU5HIFNUVURJTyBTQUtVKQ!5e0!3m2!1sja!2sjp!4v1732427240705!5m2!1sja!2sjp"
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>TRAINING STUDIO 咲</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒940-2106</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>新潟県長岡市古正寺3-100 ディルス古正寺F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>中村 浩章</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0258-89-7773</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>macyai.gingin.power@gmail.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://trainingstudiosaku.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/141sports/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25283.81322301101!2d138.9362652743164!3d37.614474300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff51d12ffffffff%3A0xc2938a1d1445e1fe!2zKOWQjCnjgqbjgqPjg6vjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7M!5e0!3m2!1sja!2sjp!4v1732427671220!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>合同会社ウィルコーポレーション</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒955-0803</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>新潟県三条市月岡2-22-43</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>中村 浩章</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0256-46-0677</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>will-cpr3@xrh.biglobe.ne.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='http://will-cpr.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/141sports/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.3816128939848!2d140.14168727625727!3d39.73107797155804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fe81f5d32934b%3A0xf81a1ac0a7af5160!2z44Kv44OJ44Km44K544Od44O844OE!5e0!3m2!1sja!2sjp!4v1732427876306!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>クドウスポーツ</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒010-0844</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>秋田県秋田市手形山中町11-3</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>工藤 美智代</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>018-836-0015</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@kudoh-sports.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.kudoh-sports.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/141sports/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.040432940151!2d141.11440907623742!3d39.28733357164344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8f45843b0b5f3d%3A0x4e6719f58a2c97d9!2sJ%20Conditioning%20Labo!5e0!3m2!1sja!2sjp!4v1732428087529!5m2!1sja!2sjp"
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>J Conditioning Labo</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒024-0034</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>岩手県北上市諏訪町2丁目5-16 2F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>工藤 美智代</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-5230-8722</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>jcl.kitakami@gmail.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.jcl-kitakami.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/141sports/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <h1>Anchor</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>三浦　麻衣子</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>sf.maikomiura@gmail.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://anchor-sports.net/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://www.facebook.com/141sports/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='agency-area-wrapper'>
                        <h1 className="agency-area" onClick={() => toggleAgency('kanto')}>
                            <span>関東エリア<FontAwesomeIcon icon={faChevronRight} /></span>
                            <div className='area-background kanto'></div>
                        </h1>
                        <div className={`agency-wrapper ${openAgencies.kanto ? 'active' : ''}`}>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.572280511507!2d139.58003527609583!3d35.98188117249172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018cf63957856e1%3A0xbcd87e10b03ee185!2z44CSMzYyLTAwMTUg5Z-8546J55yM5LiK5bC-5biC57eR5LiY77yS5LiB55uu77yR4oiS77yRIOWuj-WSjOODk-ODqyAyMDE!5e0!3m2!1sja!2sjp!4v1732248313854!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>株式会社Easys</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒362-0015</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>埼玉県上尾市緑丘2-1-1 宏和ビル201</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>斉藤　一心</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>048-708-4029</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@easys.co.jp</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.1980473342646!2d139.7005009760872!3d35.77051117255858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c15a8004401%3A0x2029c7b0493ca1c7!2z44K744OW44K544Od44O844OEIOOCt-ODp-ODvOODq-ODvOODoA!5e0!3m2!1sja!2sjp!4v1732429533481!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>有限会社セブスポーツ</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒174-0052</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>東京都板橋区蓮沼町43‐3エトセトラビル1F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>土門　広</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>03-5916-6881</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>newman@cosmos.ocn.ne.jp</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.sev-sports.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207381.34765688182!2d139.7161854707156!3d35.693408533153864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187fe6103200e9%3A0x3af7964ce45345b!2z44Ki44K544Oq44O844OI44K144Ot44OzIOODi-ODpeODvOODnuODsw!5e0!3m2!1sja!2sjp!4v1732429180176!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>アスリートサロン ニューマン</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒274-0072</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>千葉県船橋市三山8-36-7</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>安西　孝典</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>047-407-0681</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>newman@cosmos.ocn.ne.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='http://newman.biz-web.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://lin.ee/hZEQu5p' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://www.instagram.com/asng.kamifurano/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.1646828105436!2d139.84855557611945!3d36.550141972319445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f687719d93e6d%3A0x8d692748d6ccfc95!2z44CSMzIwLTA4NTEg5qCD5pyo55yM5a6H6YO95a6u5biC6ba055Sw55S677yR77yU77yQ77yR!5e0!3m2!1sja!2sjp!4v1732519457102!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>エアル・TOCHIGI</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒320-0581</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>栃木県宇都宮市鶴田町1401-6</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>安西　孝典</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>080-3125-5978</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>newman@cosmos.ocn.ne.jp</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://ka-ra-da.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/?accountId=720ltatl' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/setra_mitaka/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/profile.php?id=100067030817172' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.3710781078607!2d139.68437407607692!3d35.519826572639865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185e1c6cbf0d77%3A0x4e8a1acb5894af5b!2z44CSMjMwLTAwMjEg56We5aWI5bed55yM5qiq5rWc5biC6ba06KaL5Yy65biC5aC05LiK55S677yS4oiS77yR77yR4oiS77yS!5e0!3m2!1sja!2sjp!4v1732519535517!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>エアル・YOKOHAMA</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒230-0021</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>神奈川県横浜市鶴見区市場上町2-11-2</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>高田　栄治</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-3540-6550</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>newman@cosmos.ocn.ne.jp</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://ka-ra-da.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/?accountId=720ltatl' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/setra_mitaka/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/profile.php?id=100067030817172' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.055660401386!2d139.69614667607718!3d35.527622172637216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860a3a84cb08d%3A0x7b2f3a60b5ecf79e!2z44CSMjEwLTAwMjMg56We5aWI5bed55yM5bed5bSO5biC5bed5bSO5Yy65bCP5bed55S677yR77yT4oiS77yVIOOCqOOCr-OCu-ODquOCouW3neW0jiAxZg!5e0!3m2!1sja!2sjp!4v1732519762811!5m2!1sja!2sjp"
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>株式会社Next Innovation</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒230-0021</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>神奈川県川崎市川崎区小川町13-5メディックビル1F</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>高田　栄治</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-6529-4260</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>canchome0609@icloud.com</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://ka-ra-da.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/?accountId=720ltatl' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/setra_mitaka/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/profile.php?id=100067030817172' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.8214819107743!2d139.39925907607136!3d35.38488337268445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601853e9fb973e71%3A0x44c00318604258b5!2sBODY%20MAKE%20studio%20IDEAL!5e0!3m2!1sja!2sjp!4v1732520149302!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>BODY MAKE studio ＩDEAL</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒252-0825</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>神奈川県藤沢市獺郷1226</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>杉山　知寿子</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>050-3550-4116</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>canchome0609@icloud.com</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://bmstudio-ideal.amebaownd.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/vud7262g?oat_content=url&openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            {/* <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a> */}
                                            {/* <a href='https://www.instagram.com/setra_mitaka/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a> */}
                                            {/* <a href='https://www.facebook.com/tomohkm/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a> */}
                                            {/* <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.446513112084!2d138.62628927611212!3d36.374183372371654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4549a2bc35%3A0x39af6f2b0dce2940!2z77yI5qCq77yJ44ON44O844O044Kn!5e0!3m2!1sja!2sjp!4v1732520411737!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>株式会社neve</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒389-0102</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>長野県北佐久郡軽井沢町軽井沢1057-16</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>岡部　哲也</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0267-41-0623</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://neve.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            {/* <a href='https://page.line.me/vud7262g?oat_content=url&openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a> */}
                                            {/* <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a> */}
                                            {/* <a href='https://www.instagram.com/setra_mitaka/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a> */}
                                            <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            {/* <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13010.672890402117!2d139.38774832909385!3d35.38868393593271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018537f3a323f2f%3A0x57e0fc48dbdfee2e!2z44CSMjUyLTA4MjU!5e0!3m2!1sja!2sjp!4v1732520664653!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>プライベートサロン Blooming</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒252-0825</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>東京都西東京市東町3-14-23 アイランズアパートメント s132号室</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>穴沢　基樹</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0267-41-0623</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.private-salon-blooming.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            {/* <a href='https://page.line.me/vud7262g?oat_content=url&openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a> */}
                                            {/* <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a> */}
                                            {/* <a href='https://www.instagram.com/setra_mitaka/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a> */}
                                            <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            {/* <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.091368476343!2d139.8113449761104!3d36.334335372383656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f4f22cb1e5ca9%3A0x9aaca65310f0cead!2zRUlHSFRZIEZJVE5FU1MgR1lNIOWwj-WxseW6lw!5e0!3m2!1sja!2sjp!4v1732520969588!5m2!1sja!2sjp"
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>EIGHTY FITNESS GYM 小山店</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒323-0014</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>栃木県小山市喜沢１２２１−４０</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>穴沢　基樹</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0285-24-0080</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.80-fg.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/975zfzkx?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            {/* <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a> */}
                                            <a href='https://www.instagram.com/eightyfitnessgym' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            {/* <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a> */}
                                            {/* <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.885678263641!2d139.97472187611467!3d36.43614697235308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f5988f5d6d513%3A0xc45524aaafa00a17!2zRUlHSFRZIEZJVE5FU1MgR1lNIOecn-WyoeW6lw!5e0!3m2!1sja!2sjp!4v1732521358291!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>EIGHTY FITNESS GYM 真岡店</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒321-4341</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>栃木県真岡市高勢町１丁目２０７ コーポ高勢</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>穴沢　基樹</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0285-84-0008</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.80-fg.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/951arqrb?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            {/* <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a> */}
                                            <a href='https://www.instagram.com/eightyfitnessgym' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            {/* <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a> */}
                                            {/* <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.3907695822904!2d139.8965842761192!3d36.54468977232106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f67f233f2e7c3%3A0xb9ac25ef003fa17d!2zRUlHSFRZIEZJVE5FU1MgR1lNIOWuh-mDveWuruW6lw!5e0!3m2!1sja!2sjp!4v1732521407257!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>EIGHTY FITNESS GYM 宇都宮店</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒321-0925</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>栃木県宇都宮市東柳瀬1-3-15</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>穴沢　基樹</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>028-637-0080</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.80-fg.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            {/* <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a> */}
                                            <a href='https://www.instagram.com/eightyfitnessgym' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            {/* <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a> */}
                                            {/* <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='agency-area-wrapper'>
                        <h1 className="agency-area" onClick={() => toggleAgency('chubu')}>
                            <span>中部・関西エリア<FontAwesomeIcon icon={faChevronRight} /></span>
                            <div className='area-background chubu'></div>
                        </h1>
                        <div className={`agency-wrapper ${openAgencies.chubu ? 'active' : ''}`}>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.192366594102!2d135.63707847604687!3d34.77593227289297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011e8797cab3e5%3A0x2f549e28105cc1e0!2z44CSNTcyLTAwMTkg5aSn6Ziq5bqc5a-d5bGL5bed5biC5LiJ5LqV5Y2X55S677yS77yX4oiS77yR!5e0!3m2!1sja!2sjp!4v1732521736404!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>有限会社ピーク・パフォーマンス</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒572-0016</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>大阪府寝屋川市三井南町27-1</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>林　宏行</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-3994-1618</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://pp-inc.biz/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/eightyfitnessgym' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4471524164223!2d135.52203187604147!3d34.64340867294011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000dde031df5ae9%3A0xec79125caa01898d!2z44CSNTQ1LTAwMDEg5aSn6Ziq5bqc5aSn6Ziq5biC6Zi_5YCN6YeO5Yy65aSp546L5a-655S65YyX77yT5LiB55uu77yR77yX4oiS77yT77yU!5e0!3m2!1sja!2sjp!4v1732522107543!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>パフォーマンス・アカデミー</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒545-0001</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>大阪市阿倍野区天王寺町北3-17-34</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>山下　大輔</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>06-7505-8504</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://performanceacademy.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/eightyfitnessgym' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.6706746666964!2d135.79132627605145!3d34.889615172853176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600111aa097af0d5%3A0xb0168e88cee6430a!2z44CSNjExLTAwMjEg5Lqs6YO95bqc5a6H5rK75biC5a6H5rK755-i6JC977yS77yY4oiS77yX!5e0!3m2!1sja!2sjp!4v1732522493496!5m2!1sja!2sjp" 
                                    allowfullscreen=""
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>エアル・KYOTO</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒611-0021</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>京都府宇治市宇治矢落28-7</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>山下　大輔</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>090-8123-3734</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@neve.jp</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://performanceacademy.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/eightyfitnessgym' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.9527690686987!2d134.9235295760461!3d34.75678257289978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35552bdfe15f557d%3A0x9d37dd4b8dde8a44!2z44OV44Kp44O844K544GX44KT44Gb44GE!5e0!3m2!1sja!2sjp!4v1732522574068!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>株式会社フォースしんせい</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒675-1115</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>兵庫県加古郡稲美町岡916番地の1</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>安本 和彦</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>079-496-6755</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>forth-ss@leto.eonet.ne.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://forthshinsei.co.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://x.com/setra26346470' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/eightyfitnessgym' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/neveco.ltd' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCOGqjW_WpGH7oY0jaP0otPQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.0557106906576!2d132.314871376029!3d34.32360057305595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aba1d27100001%3A0x7c2662fe609010a8!2z5pyJ6ZmQ5Lya56S-44OV44Ot44Oz44OG44Kj44Ki44K544Kr44OD44K344Ol44K544Od44O844OE!5e0!3m2!1sja!2sjp!4v1732522808300!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>有限会社フロンティアスカッシュスポーツ</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒738-0054</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>広島県廿日市市阿品３丁目１番１０－５０７号</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>郡司 孝一</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>050-5236-0896</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>frontersquashsports@outlook.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://forthshinsei.co.jp/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            {/* <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a> */}
                                            <a href='https://twitter.com/frontiersquashs' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/frontiersquashsports?ref=badge' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/frontiersquashsports' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCkb5KvMKJQlou7g9tFck1Gw' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.2508331165313!2d135.61908427604982!3d34.84992417286694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600102ca316377e5%3A0xf378f41df034b508!2z44CSNTY5LTA4MDIg5aSn6Ziq5bqc6auY5qe75biC5YyX5ZyS55S677yR77yY4oiS77yRIOOCs-ODvOOCseODs-ODk-ODqyAzZg!5e0!3m2!1sja!2sjp!4v1732523060260!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>高槻みなみ整体院</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒569-0802</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>大阪府高槻市北園町１８－１　コーケンビル３F</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>中山　卓也</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>072-668-6780</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>takatsukiminami2013@yahoo.co.jp</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://takatsukiminami.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://twitter.com/frontiersquashs' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/frontiersquashsports?ref=badge' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/frontiersquashsports' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCkb5KvMKJQlou7g9tFck1Gw' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='agency-area-wrapper'>
                        <h1 className="agency-area" onClick={() => toggleAgency('kyushu')}>
                            <span>九州エリア<FontAwesomeIcon icon={faChevronRight} /></span>
                            <div className='area-background kyusyu'></div>
                        </h1>
                        <div className={`agency-wrapper ${openAgencies.kyushu ? 'active' : ''}`}>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8064103038882!2d130.54472037601!3d33.84310277323647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35422e0c1e6bb879%3A0x9e71d595cfca336b!2z44CSODExLTM1MTUg56aP5bKh55yM5a6X5YOP5biC5rGg55Sw77yT77yR77yQ77yQ4oiS77yR77yR77yS!5e0!3m2!1sja!2sjp!4v1732583381121!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>Hiro Project</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒811-3515</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>福岡県宗像市池田3100-112</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>伊藤　寛之</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>0940-62-3744</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>hiroproject@jbsn.jp</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://takatsukiminami.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://twitter.com/frontiersquashs' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/frontiersquashsports?ref=badge' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/frontiersquashsports' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCkb5KvMKJQlou7g9tFck1Gw' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7944895113637!2d130.25594677599992!3d33.58468477333667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541eb9a89d0621b%3A0xfeda006527427b42!2z44Ki44K544Op44OcIOOCueODnuOCpOODqw!5e0!3m2!1sja!2sjp!4v1732583567519!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>アスラボSmile</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒819-0366</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>福岡県西区横浜3-21-25</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>浦川　恵子</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>092-807-6848</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>company@ath-lab-smile.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://athlab-smile.hp.peraichi.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/533auruz?openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://twitter.com/frontiersquashs' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://www.instagram.com/frontiersquashsports?ref=badge' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/frontiersquashsports' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCkb5KvMKJQlou7g9tFck1Gw' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='agency-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6649.8766285538295!2d130.397005!3d33.554979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541915bbe4ac5e1%3A0xf45edd95c484040b!2zUGVyc29uYWwgQm9keSBNYW5hZ2VtZW50ICjjg5Hjg7zjgr3jg4rjg6vjg4jjg6zjg7zjg4vjg7PjgrDjgrjjg6BQQk0p!5e0!3m2!1sja!2sjp!4v1732584023688!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe>
                                <h1>Personal Body Management株式会社</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒815-0075</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>福岡市南区長丘1丁目17-15</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>浦川　恵子</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>092-555-8429</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@pbm555.com</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.pbm555.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/538gibby?oat_content=url&openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            {/* <a href='https://twitter.com/frontiersquashs' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a> */}
                                            <a href='https://instagram.com/personalbodymanagement/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/PersonalBodyManagement/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCftSR3iYPQqJ6EAiaqLP1MQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='agency-container'>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6649.8766285538295!2d130.397005!3d33.554979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541915bbe4ac5e1%3A0xf45edd95c484040b!2zUGVyc29uYWwgQm9keSBNYW5hZ2VtZW50ICjjg5Hjg7zjgr3jg4rjg6vjg4jjg6zjg7zjg4vjg7PjgrDjgrjjg6BQQk0p!5e0!3m2!1sja!2sjp!4v1732584023688!5m2!1sja!2sjp" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                    className='maps'>
                                </iframe> */}
                                <h1>エアル・OHITA</h1>
                                <div className='border-box'></div>
                                <ul className='branch-texts'>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>郵便番号</p>
                                        <p className='branch-text-detail'>〒870-0927</p>
                                    </li>
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>住所</p>
                                        <p className='branch-text-detail'>大分県大分市北下郡11-3</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>代表</p>
                                        <p className='branch-text-detail'>浦川　恵子</p>
                                    </li> */}
                                    <li className='branch-text'>
                                        <p className='branch-text-title'>電話番号</p>
                                        <p className='branch-text-detail'>097-543-2743</p>
                                    </li>
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>e-mail</p>
                                        <p className='branch-text-detail'>info@pbm555.com</p>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>WEBサイト</p>
                                        <a href='https://www.pbm555.com/' className='branch-text-detail link-button'>WEBサイトを見る</a>
                                    </li> */}
                                    {/* <li className='branch-text'>
                                        <p className='branch-text-title'>SNS</p>
                                        <div className='branch-text-detail'>
                                            <a href='https://page.line.me/538gibby?oat_content=url&openQrModal=true' className='branch-text-detail sns-link-button LINE'>
                                                <FontAwesomeIcon icon={faLine} />
                                            </a>
                                            <a href='https://twitter.com/frontiersquashs' className='branch-text-detail sns-link-button X'>
                                                <FontAwesomeIcon icon={faXTwitter} />
                                            </a>
                                            <a href='https://instagram.com/personalbodymanagement/' className='branch-text-detail sns-link-button Instagram'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.facebook.com/PersonalBodyManagement/' className='branch-text-detail sns-link-button facebook'>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCftSR3iYPQqJ6EAiaqLP1MQ' className='branch-text-detail sns-link-button youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </motion.div>
    );
};

export default AboutUs;
