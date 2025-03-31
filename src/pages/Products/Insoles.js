import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Tabs, TopCoverTabs} from '../../components/perts/Tab'
import {FadeInSection} from '../../components/animaition/fade-in';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';

import '../../styles/ProductPages/_insolePage.scss';

import Concept from '../../assets/images/thumbnail/standing-man.webp'
import TopCover from '../../assets/images/Products/insole-layer/レイヤートップカバー.webp'
import CenterCover from '../../assets/images/Products/insole-layer/レイヤーセンターカバー.webp'
import UnderCover from '../../assets/images/Products/insole-layer/レイヤーアンダーカバー.webp'
import Core from '../../assets/images/Products/insole-layer/レイヤー芯材.webp'
import Eva from '../../assets/images/Products/top-cover/eva.webp'
import Cotton from '../../assets/images/Products/top-cover/cotton.webp'
import Swade from '../../assets/images/Products/top-cover/swade.webp'
import Skin from '../../assets/images/Products/top-cover/skin.webp'
import Chiffon from '../../assets/images/Products/top-cover/chiffon.webp'
import bone from '../../assets/images/background/足の骨見本.webp'

const Insoles = () => {
    const [structureActiveTab, setStructureActiveTab] = useState("topCover"); // Tabs用
    const [topCoverActiveTab, setTopCoverActiveTab] = useState("eva"); // TopCoverTabs用
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = ['Concept', 'Technology', 'Structure', 'TopCover'];
        const handleScroll = () => {
            let currentSection = '';
            sections.forEach(section => {
                const elem = document.getElementById(section);
                if (elem) {
                    const rect = elem.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
            <div className="insole-page-wrapper">
                <div className='potal-list-wrapper'>
                    <ul className='potal-list'>
                        <li className='potal-list-item home'><Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link></li>
                        <li className='potal-list-item arrow'><FontAwesomeIcon icon={faChevronRight} /></li>
                        <li className='potal-list-item'><Link to="/products">商品トップ</Link></li>
                        <li className='potal-list-item arrow'><FontAwesomeIcon icon={faChevronRight} /></li>
                        <li className='potal-list-item current'>インソール</li>
                    </ul>
                    <h1 className='potal-page-title'>INSOLE</h1>
                    <h2 className='potal-page-subtitle'>インソール</h2>
                </div>
                <div className='insole-page-top'>
                    <h1>INSOLE</h1>
                    <div className='gradation-box'></div>
                </div>
                <div className='insole-page-container'>
                    <FadeInSection>
                        <section className='concept insole-section' id='Concept'>
                            <div className='concept-text-container insole-page-text'>
                                <h2>CONCEPT</h2>
                                <h1 className='insole-section-titie'>まっすぐに立つ。
                                    <br/>それが身体の悩みを
                                    <br/>解決する。
                                </h1>
                                <h3 className='under-text'>身体の不調は些細なズレから始まる。</h3>
                                <p className='insole-page-text-detail'>多くのインソールは吸収や反発といった足の機能をサポートする目的で作成されています。しかし、
                                    それら全ては人間が本来持っている機能なのです。その自分の身体の力をうまく扱えていないから、
                                    バランスを崩したり、負荷が集中しケガをしてしまったりします。
                                <br/>
                                <br/>エアル・ファーストは、解剖学の観点から人体を研究し人間にとって最も大切な「まっすぐ立つ事」をサポートするために、
                                    「バランス補正インソール」FOOT-Kを作成しました。</p>
                            </div>
                            <div className='insole-page-backgronud'>
                                <img src={Concept} alt="concept-image" className='concept-image' />
                            </div>
                        </section>
                    </FadeInSection>
                    <FadeInSection>
                        <section className='technology insole-section' id='Technology'>
                            <div className='technology-text-container insole-page-text'>
                                <h2>TECHMOLOGY</h2>
                                <h1 className='insole-section-titie'>骨に働きかける
                                    <br/>革新的な立体構造
                                </h1>
                                <h3 className='under-text'>重心の要、かかとの骨「踵骨」の角度を修正する特許技術</h3>
                                <p className='insole-page-text-detail'>20年にわたる研究と実績を背景に、足元から全身のバランスを根本から整えることのできる特許技術を開発しました。
                                    <br/>
                                    <br/>踵の骨「踵骨（しょうこつ）」は、足全体の土台となる重要な部位であり、その位置や角度がわずかにズレるだけで、
                                        体全体のバランスが崩れてしまいます。この課題に対処するために、踵骨を本来の位置に戻す特許技術をコアパーツとして
                                        インソールに組み込みました。この技術は、踵骨の位置と角度を回復させることで、過剰な負担を軽減し、
                                        骨盤の傾きや関節への負荷を効果的に分散します。その結果、日常の歩行や立ち姿勢がより安定し、体全体の調和が取り戻されます。
                                        これにより、足元から体全体の健康を支える新しい基準を提供し、長期的な健康と快適さを実現します。
                                    <br/>
                                    <br/>私たちのインソールは、ただのサポートではなく、体の自然なバランスを引き出し、動きやすさを向上させる革新的なツールです。
                                        このインソールを通じて、あなたの生活がより健康的で快適なものになることをお約束します。</p>
                            </div>
                            <div className='insole-page-backgronud'>
                                <img src={bone} alt="concept-image" className='concept-image' />
                            </div>
                        </section>
                    </FadeInSection>
                    <FadeInSection>
                        <section className='structure insole-section' id='Structure'>
                            <div className='structure-text-container insole-page-text'>
                                <h2>STRUCTURE</h2>
                                <h1 className='insole-section-titie'>コアパーツを包み、
                                <br />機能性と持続力を強化
                                </h1>
                                <h3 className='under-text'>心臓部の保護と機能性の3層構造</h3>
                                <Tabs setStructureActiveTab={setStructureActiveTab} />
                            </div>
                            <div className='insole-structure-image'>
                                <img 
                                    src={TopCover}
                                    alt="top cover" 
                                    className={`topCover cover-image ${structureActiveTab === "topCover" ? "active" : ""}`} 
                                />
                                <img 
                                    src={CenterCover}
                                    alt="center cover" 
                                    className={`centerCover cover-image ${structureActiveTab === "centerCover" ? "active" : ""}`} 
                                />
                                <img 
                                    src={Core}
                                    alt="core" 
                                    className={`core cover-image ${structureActiveTab === "core" ? "active" : ""}`} 
                                />
                                <img 
                                    src={UnderCover}
                                    alt="under cover" 
                                    className={`underCover cover-image ${structureActiveTab === "underCover" ? "active" : ""}`} 
                                />
                            </div>
                        </section>
                    </FadeInSection>
                    <FadeInSection>
                        <section className='top-cover insole-section' id='TopCover'>
                            <div className='top-cover-container'>
                                <div className='structure-text-container insole-page-text'>
                                    <h2>TOP COVER</h2>
                                    <h1 className='insole-section-titie'>欲しいを叶える選択肢</h1>
                                    <h3 className='under-text'>用途に合わせた豊富なトップカバー素材</h3>
                                    <TopCoverTabs setTopCoverActiveTab={setTopCoverActiveTab}/>
                                </div>
                                <div className='insole-top-cover-image'>
                                    <img 
                                        src={Eva}
                                        alt="top cover" 
                                        className={`eva cover-image ${topCoverActiveTab === "eva" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Cotton}
                                        alt="center cover" 
                                        className={`cotton cover-image ${topCoverActiveTab === "cotton" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Swade}
                                        alt="core" 
                                        className={`swade cover-image ${topCoverActiveTab === "swade" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Skin}
                                        alt="under cover" 
                                        className={`skin cover-image ${topCoverActiveTab === "skin" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Chiffon}
                                        alt="under cover" 
                                        className={`chiffon cover-image ${topCoverActiveTab === "chiffon" ? "active" : ""}`} 
                                    />
                                </div>
                            </div>
                            <div className='insole-top-cover-background'>
                                <div className='top-cover-background'>
                                    <img 
                                        src={Eva}
                                        alt="top cover" 
                                        className={`eva cover-image ${topCoverActiveTab === "eva" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Cotton}
                                        alt="center cover" 
                                        className={`cotton cover-image ${topCoverActiveTab === "cotton" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Swade}
                                        alt="core" 
                                        className={`swade cover-image ${topCoverActiveTab === "swade" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Skin}
                                        alt="under cover" 
                                        className={`skin cover-image ${topCoverActiveTab === "skin" ? "active" : ""}`} 
                                    />
                                    <img 
                                        src={Chiffon}
                                        alt="under cover" 
                                        className={`chiffon cover-image ${topCoverActiveTab === "chiffon" ? "active" : ""}`} 
                                    />
                                </div>
                            </div>
                        </section>
                    </FadeInSection>
                </div>
                <div className='navigation-button'>
                    <button 
                        className={activeSection === 'Concept' ? 'active' : ''} 
                        onClick={() => document.getElementById('Concept').scrollIntoView({ behavior: 'smooth' })}
                    >
                        コンセプト
                    </button>
                    <button 
                        className={activeSection === 'Technology' ? 'active' : ''} 
                        onClick={() => document.getElementById('Technology').scrollIntoView({ behavior: 'smooth' })}
                    >
                        技術
                    </button>
                    <button 
                        className={activeSection === 'Structure' ? 'active' : ''} 
                        onClick={() => document.getElementById('Structure').scrollIntoView({ behavior: 'smooth' })}
                    >
                        構造
                    </button>
                    <button 
                        className={activeSection === 'TopCover' ? 'active' : ''} 
                        onClick={() => document.getElementById('TopCover').scrollIntoView({ behavior: 'smooth' })}
                    >
                        トップカバー
                    </button>
                </div>
            </div>
    );
};

export default Insoles;



