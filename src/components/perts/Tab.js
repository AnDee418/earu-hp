import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Tabs = ({setStructureActiveTab}) => {
    const [selectedTab, setSelectedTab] = useState("topCover");

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setStructureActiveTab(tab); // 親コンポーネントにアクティブなタブを渡す
    };

    return (
        <div className="tabs-container">
            <div className="tabs structure-tub">

                <button
                className={`tab-button ${selectedTab === "topCover" ? "active" : ""}`}
                onClick={() => handleTabClick("topCover")}
                >
                トップカバー
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <button
                className={`tab-button ${selectedTab === "centerCover" ? "active" : ""}`}
                onClick={() => handleTabClick("centerCover")}
                >
                ミドルカバー
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <button
                className={`tab-button ${selectedTab === "core" ? "active" : ""}`}
                onClick={() => handleTabClick("core")}
                >
                芯材
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <button
                className={`tab-button ${selectedTab === "underCover" ? "active" : ""}`}
                onClick={() => handleTabClick("underCover")}
                >
                アンダーカバー
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>
            
            <div className="tab-content">
                {selectedTab === "topCover" && (
                <div key="topCover" className="fade-in">
                    <h3 className="structure-name">Layer.1 トップカバー</h3>
                    <p className="tab-subtitle">用途に合わせた豊富な素材とカラー</p>
                    <p>立ち仕事やウォーキングといった日常生活に向いた素材や、軽い運動からハードなスポーツまでの運動に向いた素材、
                        革靴などのビジネスシーンでも使用できる素材など用途や目的に合わせた選択が可能です。</p>
                </div>
                )}
                {selectedTab === "centerCover" && (
                <div key="centerCover" className="fade-in">
                    <h3 className="structure-name">Layer.2 ミドルカバー</h3>
                    <p className="tab-subtitle">目的に合わせたクッション性を実現</p>
                    <p>足を守るクッション性と、パフォーマンスを上げる反発性を実現する特別な層。</p>
                </div>
                )}
                {selectedTab === "core" && (
                <div key="core" className="fade-in">
                    <h3 className="structure-name">Layer.3 芯材</h3>
                    <p className="tab-subtitle">高い強度と柔軟性</p>
                    <p>異なる硬度の選択肢があり、アクティビティに応じて調整が可能です。</p>
                </div>
                )}
                {selectedTab === "underCover" && (
                <div key="underCover" className="fade-in">
                    <h3 className="structure-name">Layer.4 アンダーカバー</h3>
                    <p className="tab-subtitle">保護と耐久性を提供</p>
                    <p>インソール全体の耐久性を高め、日常の摩耗から保護します。</p>
                </div>
                )}
            </div>
        </div>
    );
};

const TopCoverTabs = ({setTopCoverActiveTab}) => {
    const [selectedTab2, setSelectedTab] = useState("eva");

    const handleTabClick = (tab2) => {
        setSelectedTab(tab2);
        setTopCoverActiveTab(tab2); // 親コンポーネントにアクティブなタブを渡す
    };

    return (
        <div className="tabs-container">
            <div className="tabs">

                <button
                className={`tab-button ${selectedTab2 === "eva" ? "active" : ""}`}
                onClick={() => handleTabClick("eva")}
                >
                EVA
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <button
                className={`tab-button ${selectedTab2 === "cotton" ? "active" : ""}`}
                onClick={() => handleTabClick("cotton")}
                >
                綿
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <button
                className={`tab-button ${selectedTab2 === "swade" ? "active" : ""}`}
                onClick={() => handleTabClick("swade")}
                >
                スウェード
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <button
                className={`tab-button ${selectedTab2 === "skin" ? "active" : ""}`}
                onClick={() => handleTabClick("skin")}
                >
                合皮
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <button
                className={`tab-button ${selectedTab2 === "chiffon" ? "active" : ""}`}
                onClick={() => handleTabClick("chiffon")}
                >
                シフォンヌバック
                <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>
            
            <div className="top-cover-tab-content">
                {selectedTab2 === "eva" && (
                <div key="eva" className="fade-in">
                    <h1 className="texture">EVA</h1>
                    <p className="title-detail">全素材の中で最も滑りづらく、運動やスポーツに最適な素材。</p>
                    <ul className="purpose-list">
                        <li className="purpose-list-item">
                            <p className="label">おすすめ用途</p>
                            <p className="detail">運動 / スポーツ / 本格的な競技</p>
                        </li>
                        <li className="purpose-list-item">
                            <p className="label">特徴</p>
                            <p className="detail">グリップ力が強く靴の中でもズレ無くしっかりホールドしてくれる。</p>
                        </li>
                        <li className="purpose-list-item">
                            <div className="color-label">
                                <p className="label">カラー</p>
                                <p className="arrert">※カスタムメイド商品のみ選択可能</p>
                            </div>

                            <ul className="color-list">
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#232429' }}></div>
                                    <p>ブラック</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#FF8739' }}></div>
                                    <p>オレンジ</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#029DD8' }}></div>
                                    <p>ブルー</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                )}
                {selectedTab2 === "cotton" && (
                <div key="cotton" className="fade-in">
                    <h1 className="texture">綿</h1>
                    <p className="title-detail">柔らかく肌触りのいい素材。日常用に使用する人が最も多い。</p>
                    <ul className="purpose-list">
                        <li className="purpose-list-item">
                            <p className="label">おすすめ用途</p>
                            <p className="detail">日常生活 / ウォーキング</p>
                        </li>
                        <li className="purpose-list-item">
                            <p className="label">特徴</p>
                            <p className="detail">肌触りがいい。通気性〇</p>
                        </li>
                        <li className="purpose-list-item">
                            <div className="color-label">
                                <p className="label">カラー</p>
                                <p className="arrert">※カスタムメイド商品のみ選択可能</p>
                            </div>

                            <ul className="color-list">
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#232429' }}></div>
                                    <p>ブラック</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#185499' }}></div>
                                    <p>ブルー</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                )}
                {selectedTab2 === "swade" && (
                <div key="swade" className="fade-in">
                    <h1 className="texture">スウェード</h1>
                    <p className="title-detail">程よいグリップ力と滑らかな肌触りを兼ね備えている。
                        <br/>オールラウンドに活躍。</p>
                    <ul className="purpose-list">
                        <li className="purpose-list-item">
                            <p className="label">おすすめ用途</p>
                            <p className="detail">日常用 / 運動 / スポーツ</p>
                        </li>
                        <li className="purpose-list-item">
                            <p className="label">特徴</p>
                            <p className="detail">程よいグリップで幅広く使用可能。</p>
                        </li>
                        <li className="purpose-list-item">

                            <div className="color-label">
                                <p className="label">カラー</p>
                                <p className="arrert">※カスタムメイド商品のみ選択可能</p>
                            </div>

                            <ul className="color-list">
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#393B4A' }}></div>
                                    <p>ネイビー</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#807768' }}></div>
                                    <p>グレー</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                )}
                {selectedTab2 === "skin" && (
                <div key="skin" className="fade-in">
                    <h1 className="texture">合皮</h1>
                    <p className="title-detail">ビジネスの場面でも違和感の無いスタイリッシュな見栄え。</p>
                    <ul className="purpose-list">
                        <li className="purpose-list-item">
                            <p className="label">おすすめ用途</p>
                            <p className="detail">日常用 / ビジネスシーン</p>
                        </li>
                        <li className="purpose-list-item">
                            <p className="label">特徴</p>
                            <p className="detail">スタイリッシュな見た目と、<br/>革靴など中敷きの取れない靴にも使える薄さ。</p>
                        </li>
                        <li className="purpose-list-item">
                            <div className="color-label">
                                <p className="label">カラー</p>
                                <p className="arrert">※カスタムメイド商品のみ選択可能</p>
                            </div>
                            <ul className="color-list">
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#000000' }}></div>
                                    <p>ブラック</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#F8F1E8' }}></div>
                                    <p>ホワイト</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#BBBCB8' }}></div>
                                    <p>シルバー</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                )}
                {selectedTab2 === "chiffon" && (
                <div key="chiffon" className="fade-in">
                    <h1 className="texture">シフォンヌバック</h1>
                    <p className="title-detail">高級ソファや車の内装などにも利用される素材。
                        <br/>高級感があり、滑らかな肌触り。</p>
                    <ul className="purpose-list">
                        <li className="purpose-list-item">
                            <p className="label">おすすめ用途</p>
                            <p className="detail">日常用 / ビジネスシーン</p>
                        </li>
                        <li className="purpose-list-item">
                            <p className="label">特徴</p>
                            <p className="detail">柔らかく、肌に吸い付くような肌触り。</p>
                        </li>
                        <li className="purpose-list-item">
                            <div className="color-label">
                                <p className="label">カラー</p>
                                <p className="arrert">※カスタムメイド商品のみ選択可能</p>
                            </div>

                            <ul className="color-list">
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#CFD1BC' }}></div>
                                    <p>ベージュ</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#DB9A63' }}></div>
                                    <p>オレンジ</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#393E5B' }}></div>
                                    <p>ネイビー</p>
                                </li>
                                <li className="color-list-item">
                                    <div className="color-curcle" style={{ backgroundColor: '#5E7BC5' }}></div>
                                    <p>ライトブルー</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                )}
            </div>
        </div>
    );
};

export { Tabs,TopCoverTabs };
