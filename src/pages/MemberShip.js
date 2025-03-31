import React, { useEffect }  from 'react';
import { motion } from 'framer-motion';
import {ScrollToTopButton} from '../components/SubPageNav';
import ScrollDownIndicator from '../components/animaition/ScrollDown';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPeopleGroup, faMoneyBillTransfer, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import HandShake from '../assets/images/MemberShip/HandShake.webp';
import HoldLight from '../assets/images/MemberShip/HoldLight.webp';
import BusinessTeam from '../assets/images/MemberShip/BusinessTeam.webp';

import { ReactComponent as PricingPlans } from '../assets/svg/pricing-plans-not-css.svg';
import { ReactComponent as Launching } from '../assets/svg/launching-animate.svg';
import { ReactComponent as Taking } from '../assets/svg/taking-notes-animate.svg';
import { HashLink } from 'react-router-hash-link';



const AboutUs = () => {

    useEffect(() => {
        const svgElements = document.querySelectorAll('svg');
        if (svgElements.length > 0) {
            svgElements.forEach((svgElement, index) => {
                const timer = setTimeout(() => {
                    svgElement.classList.add('animated');
                }, 1000 * (index + 1)); // 各SVGに対してタイミングを少しずつ遅らせる
            });
    
            // クリーンアップ処理
            return () => {
                svgElements.forEach((_, index) => clearTimeout(index));
            };
        }
    }, []);

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
                <div className='sub-top-wrapper member-ship-top'>
                    <h1 className='sub-page-title'>MEMBERSHIP</h1>
                    <h2 className='sub-page-subtitle'>メンバーシップ</h2>
                    <ScrollDownIndicator/>
                </div>
                <section className='section membership' id='Membership'>
                    <h1 className='sub-section-title'>MEMBERSHIP</h1>
                    <p className='sub-section-subtitle'>メンバーシップ</p>

                    <div className='membership-wrapper'>
                        <div className='membership-text-container'>
                            <h1>
                                世界中の人々に
                                <br /><span>「感謝」と「感動」を</span>
                                <br/>与える仲間を探しています
                            </h1>
                            <p>
                                エアル・ファーストは商品を通じて
                                <br/>世界中に「感謝」と「感動」を伝える
                                <br/>事をミッションとし、共にこの課題に
                                <br/>立ち向かってくれる仲間を探しています。
                            </p>
                        </div>
                        <img src={HandShake} alt="handshake" />
                    </div>
                </section>

                <div className='article-container'>
                    <h1 className='article-title'>1.代理店契約</h1>
                    <article>
                        <h1>未来を創る<br/>イノベーションを、<br/>共に。</h1>
                        <img src={HoldLight} alt="" />
                        <h3>お客様の期待を超える価値を提供し続けたいと考えています。</h3>
                        <p className='article-main-text'>
                            「感謝」と「感動」を人々に伝える事。をミッションとしてエアル・ファーストは日々、
                            商品とお客様に向き合っています。２０年の活動の中でありがたいことに全国各地の多くのお客様・
                            企業様から販売会の申込や、弊社商品のご購入希望者など多数のお声を頂いています。
                            <br/>
                            <br/>これまでご愛顧いただいた皆様に、さらに身近に感じていただくため、そしてより多くの方々に
                            「感謝」と「感動」をお届けするために、エアル・ファーストでは代理店募集をしています。
                            私たちと共に、お客様に寄り添い、真心を込めたサービスと高品質な商品をお届けできるパートナーを
                            全国で募集しております。長年の経験と実績を基に、代理店様に向けたサポート体制も充実させておりますので、
                            初心者の方でも安心してご参加いただけます。エアル・ファーストと共に、より多くの方々に幸せを届ける
                            活動にご参加いただける皆様からのご応募をお待ちしております。ぜひ、私たちと一緒に新しいステージへと進んでいきましょう。
                        </p>
                        <div className='contact-link'>
                            <p>
                                <Link to="/contact">お問い合わせはこちら</Link>
                            </p>
                        </div>
                    </article>
                </div>

                <div className='article-container second-article'>
                    <h1 className='article-title'>2.特約店契約</h1>
                    <article>
                        <h1>共に歩む、<br/>地域に根差した未来。</h1>
                        <img src={BusinessTeam} alt="" />
                        <h3>信頼が生み出す、新たな可能性をあなたと共に。</h3>
                        <p className='article-main-text'>
                            エアル・ファーストは、「感謝」と「感動」をお届けするという使命のもと、20年間にわたり多くのお客様と共に歩んできました。
                            私たちと共にブランドの未来を築き上げ、ビジネスを発展させていく特約店パートナーを募集しています。
                            <br/>
                            <br/>特約店として、エアル・ファーストの商品を地域のお客様に届けることで、単なる販売活動にとどまらず、
                            地域のニーズに応える新たな市場を共に創り上げていきましょう。また、エアル・ファーストの特約店ネットワークを活かし、
                            他の特約店と情報を共有し合うことで、新しいビジネスチャンスや販売方法を見出し、共に成長できる環境を提供いたします。
                            地域に密着したサービスを提供しながら、エアル・ファーストのブランド力を活かし、長期的に安定したビジネス展開が可能となります。
                            <br/>
                            <br/>一緒に新しい価値を創造し、地域に貢献しながら、持続可能な成長を実現していきませんか。皆様との出会いを通じて、
                            共により良い未来を築いていけることを楽しみにしています。
                        </p>
                        <div className='contact-link'>
                            <p>
                                <Link to="/contact">お問い合わせはこちら</Link>
                            </p>
                        </div>
                    </article>
                </div>

                <section className='section oem' id='Oem'>
                    <h1 className='sub-section-title'>OEM</h1>
                    <p className='sub-section-subtitle'>OEMインソール制作</p>

                    <div className='oem-wrapper'>
                        <div className='oem-text-container'>
                            <h1>エアル・ファーストの技術を
                                <br/>あなたのビジネスに
                            </h1>
                            <p>私たちのインソールは、貴社の製品ラインに新たな価値を加え、人々の健康を支える力を持っています。
                                貴社が大切にされているお客様のニーズに応えるため、私たちはこれまで培ってきた20年の経験と技術力を全力で提供します。
                                <br/>
                                <br/>人々の健康を支える事業は、どんな時代でも、そしてどんな場所でも必要とされ続けます。
                                    この使命を共に果たしていくことで、貴社と共にお客様により良い未来を提供したいと考えています。
                                <br/>
                                <br/>私たちは、貴社の目指す未来を実現するために、柔軟なカスタマイズと丁寧なサポートをお約束します。
                                    長期的なパートナーシップを通じて、貴社と一緒に成長し、成功を共に分かち合えることを楽しみにしています。
                            </p>
                        </div>
                        <div className='oem-cando'>
                            <div className='oem-cando-container'>
                                <h2>オーダーメイド・ノンオーダーメイド<br/>どちらも制作可能</h2>
                                <p>通常のインソール（ノンオーダーモデル）だけでなく、代理店・特約店のメンバーシップ提携と合わせて
                                    オーダーメイドのブランドの作成も可能です。
                                </p>
                            </div>
                            <div className='oem-cando-container'>
                                <h2>素材やカラーのご相談可能</h2>
                                <p>貴社も求めるブランドイメージに合わせた素材やカラーをしっかりヒヤリング、
                                    相談し理想のインソールの作成のためのサポートを惜しみません。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='agency-link' id='AgencyLink'>
                    <h1 className='sub-section-title'>AGENCY</h1>
                    <p className='sub-section-subtitle'>全国の代理店・特約店</p>
                    <div className='agency-link-wrapper'>
                        <p>エアル・ファーストと共に「感謝」と「感動」を伝える
                            <br/>パートナーの方々を紹介しています。
                        </p>
                        <HashLink to="/overview#Agency">代理店特約店を見る<FontAwesomeIcon icon={faChevronRight} /></HashLink>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutUs;
