import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import PentagonChart from '../PentagonChart'

import Ba from '../../../assets/images/insole/BA_BAM.webp'
import Bg from '../../../assets/images/insole/BG.webp'
import Blitz from '../../../assets/images/insole/BLITZ バナー.webp'
import Kern from '../../../assets/images/insole/KERN バナー.webp'
import Demo from '../../../assets/images/準備中ビジュアル.webp'
import Basic from '../../../assets/images/Products/BASIC宣材写真1.webp'

const AllRound = [
    {
        image: Ba,
        detail: "日常からスポーツまで幅広く活躍する汎用性の高いモデル。",
        special:"長年の研究から導き出した日本人の平均的な足に合わせた形状で、どなたでもお使いいただけます。",
        texture: [
            {
                textureName:"EVA",
                color:[
                    {
                        colorCode: "#232429",
                        colorText: "ブラック",
                    },
                ],
            },
            {
                textureName:"綿",
                color:[
                    {
                        colorCode: "#232429",
                        colorText: "ブラック",
                    },
                    {
                        colorCode: "#185499",
                        colorText: "ブルー",
                    },
                ],
                only:""
            },
        ],
        Data : [
            { category: "補正力", value: 60 },
            { category: "クッション性", value: 60 },
            { category: "固さ", value: 60 },
            { category: "パフォーマンス", value: 70 },
            { category: "耐久性", value: 60 },
        ],

    },
]
const BlitzAllRound = [
    {
        image: Blitz,
        detail: "日常からスポーツまで幅広く活躍する汎用性の高いモデル。",
        special:"長年の研究から導き出した日本人の平均的な足に合わせた形状で、どなたでもお使いいただけます。",
        texture: [
            {
                textureName:"綿",
                color:[
                    {
                        colorCode: "#232429",
                        colorText: "ブラック",
                    },
                    {
                        colorCode: "#46727F",
                        colorText: "ブルー",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 50 },
            { category: "クッション性", value: 20 },
            { category: "固さ", value: 80 },
            { category: "パフォーマンス", value: 50 },
            { category: "耐久性", value: 20 },
        ],

    },
]
const Run = [
    {
        image: Demo,
        detail: "ランニングシューズやスパイクなど線の細いシューズの為に加工された芯材を使用したモデル",
        texture: [
            {
                textureName:"EVA",
                color:[
                    {
                        colorCode: "#029DD8",
                        colorText: "ブルー",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 40 },
            { category: "クッション性", value: 30 },
            { category: "固さ", value: 60 },
            { category: "パフォーマンス", value: 70 },
            { category: "耐久性", value: 50 },
        ],

    },
]
const BlitzRun = [
    {
        image: Blitz,
        detail: "ランニングシューズやスパイクなど線の細いシューズの為に加工された芯材を使用したモデル",
        texture: [
            {
                textureName:"綿",
                color:[
                    {
                        colorCode: "#232429",
                        colorText: "ブラック",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 40 },
            { category: "クッション性", value: 20 },
            { category: "固さ", value: 80 },
            { category: "パフォーマンス", value: 60 },
            { category: "耐久性", value: 20 },
        ],

    },
]
const Golf = [
    {
        image: Bg,
        detail: "地面からの力をしっかり反発し踏ん張る力をサポート。ゴルフのスイングの安定性と強化を図る為に作成されたハード芯材モデル。",
        texture: [
            {
                textureName:"EVA",
                color:[
                    {
                        colorCode: "#FF8739",
                        colorText: "オレンジ",
                    },
                    {
                        colorCode: "#029DD8",
                        colorText: "ブルー",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 80 },
            { category: "クッション性", value: 40 },
            { category: "固さ", value: 100 },
            { category: "パフォーマンス", value: 85 },
            { category: "耐久性", value: 60 },
        ],

    },
]
const Business = [
    {
        image: Kern,
        detail: "ビジネスシーンに活躍する革靴や、元のインソールが抜けない靴にの為に通常のトップカバーより薄く加工された働くあなたの為のモデル。",
        texture: [
            {
                textureName:"合皮",
                color:[
                    {
                        colorCode: "#000000",
                        colorText: "ブラック",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 60 },
            { category: "クッション性", value: 30 },
            { category: "固さ", value: 80 },
            { category: "パフォーマンス", value: 30 },
            { category: "耐久性", value: 40 },
        ],

    },
]
const Ferse = [
    {
        image: Demo,
        detail: "女性の美しさを支えるヒールの為に作成された、特殊加工のインソール。",
        texture: [
            {
                textureName:"合皮",
                color:[
                    {
                        colorCode: "#000000",
                        colorText: "ブラック",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 30 },
            { category: "クッション性", value: 20 },
            { category: "固さ", value: 70 },
            { category: "パフォーマンス", value: 10 },
            { category: "耐久性", value: 40 },
        ],

    },
]
const Ski = [
    {
        image: Blitz,
        detail: "スキーブーツの為の特殊芯材を入れたスキーヤーの為のモデル。安定した踏み込みをサポート",
        texture: [
            {
                textureName:"綿",
                color:[
                    {
                        colorCode: "#232429",
                        colorText: "ブラック",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 60 },
            { category: "クッション性", value: 30 },
            { category: "固さ", value: 90 },
            { category: "パフォーマンス", value: 60 },
            { category: "耐久性", value: 40 },
        ],
    },
]
const Mountain = [
    {
        image: Blitz,
        detail: "登山靴やトレッキングシューズなどの為に加工された芯材を使用した山を愛する方のためのインソール。不安定な斜面を掴むことに重点を置いたモデル。",
        texture: [
            {
                textureName:"綿",
                color:[
                    {
                        colorCode: "#46727F",
                        colorText: "ブルー",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 50 },
            { category: "クッション性", value: 20 },
            { category: "固さ", value: 70 },
            { category: "パフォーマンス", value: 40 },
            { category: "耐久性", value: 30 },
        ],
    },
]
const Junior = [
    {
        image: Demo,
        detail: "子供のまっすぐな成長のために作成された、発育サポートインソール。",
        texture: [
            {
                textureName:"綿",
                color:[
                    {
                        colorCode: "#BAEB3B",
                        colorText: "ライトグリーン",
                    },
                ],
            },
        ],
        Data : [
            { category: "補正力", value: 50 },
            { category: "クッション性", value: 40 },
            { category: "固さ", value: 70 },
            { category: "パフォーマンス", value: 50 },
            { category: "耐久性", value: 30 },
        ],
    },
]
const NullItem = [
    {
        image: Basic,
        Data : [
            { category: "補正力", value: 0 },
            { category: "クッション性", value: 0 },
            { category: "固さ", value: 0 },
            { category: "パフォーマンス", value: 0 },
            { category: "耐久性", value: 0 },
        ],
        attention: "※下のボタンから選択してください",
    },
]

const BasicPopup = ({ isOpen, onClose, item }) => {
    const popupRef = useRef(null);
    const popupContentRef = useRef(null);
    const [selectedVariation, setSelectedVariation] = useState(null);

    useEffect(() => {
        if (popupRef.current && popupContentRef.current) {
            if (isOpen) {
                // Delay the class addition to ensure proper initialization
                requestAnimationFrame(() => {
                    popupRef.current.classList.add('open');
                    popupContentRef.current.classList.add('open');
                });

                // Reset scroll position immediately when opened
                if (popupContentRef.current) {
                    const itemTitleContainer = popupContentRef.current.querySelector('.item-title-container');
                    if (itemTitleContainer) {
                        requestAnimationFrame(() => {
                            itemTitleContainer.scrollTop = 0;
                            popupContentRef.current.scrollTop = 0;
                            // Force a reflow to ensure the scroll position is set
                            const display = itemTitleContainer.style.display;
                            itemTitleContainer.style.display = 'none';
                            // Need to access offsetHeight to trigger reflow
                            void itemTitleContainer.offsetHeight;
                            itemTitleContainer.style.display = display;
                        });
                    }
                }
            } else {
                popupRef.current.classList.remove('open');
                popupContentRef.current.classList.remove('open');
            }
        }
    }, [isOpen]);

    const handleClose = () => {
        // Reset scroll position before closing
        if (popupContentRef.current) {
            const itemTitleContainer = popupContentRef.current.querySelector('.item-title-container');
            if (itemTitleContainer) {
                itemTitleContainer.scrollTop = 0;
            }
            popupContentRef.current.scrollTop = 0;
        }
        onClose();
        setSelectedVariation(null);
    };

    const handleVariationClick = (variation) => {
        setSelectedVariation(variation);
    };

    const getVariationData = () => {
        switch (selectedVariation) {
            case 'AllRound':
                return AllRound[0];
            case 'Run':
                return Run[0];
            case 'Golf':
                return Golf[0];
            case 'Business':
                return Business[0];
            case 'ferse':
                return Ferse[0];
            case 'Ski':
                return Ski[0];
            case 'Mountain':
                return Mountain[0];
            case 'BlitzAllRound':
                return BlitzAllRound[0];
            case 'BlitzRun':
                return BlitzRun[0];
            case 'Junior':
                return Junior[0];
            default:
                return NullItem[0];
        }
    };

    const variationData = getVariationData();

    if (!isOpen || !item) return null;  // Add this line to prevent rendering when item is null

    return (
        <div className="popup" ref={popupRef}>
            <div className="popup-content" ref={popupContentRef}>
                <button className="close-button" onClick={handleClose}>×</button>
                <div className='popup-content-inner'>
                    <div className='popup-content-text'>
                        <div className='item-title-container' data-lenis-prevent>
                            {variationData && <img src={variationData.image} alt={item.title} className="sp-image"/>}
                            <div className="item-title">
                                <h3>{item?.title}</h3>
                                <p>{item?.detail}</p>
                            </div>
                            <div className='insole-detail-wrapper'>
                                <ul className='insole-detail'>
                                    <li className='insole-detail-container'>
                                        <p className='label'>バリエーション</p>
                                        <p className="attention">{variationData && variationData.attention}</p>
                                        <ul className='variation-wrapper'>
                                            {item.all && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'AllRound' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('AllRound')}
                                                    >
                                                        オールラウンドモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.blitzAll && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'BlitzAllRound' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('BlitzAllRound')}
                                                    >
                                                        オールラウンドモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.Junior && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'Junior' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('Junior')}
                                                    >
                                                        オールラウンドモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.run && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'Run' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('Run')}
                                                    >
                                                        ランニングモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.blitzRun && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'BlitzRun' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('BlitzRun')}
                                                    >
                                                        ランニングモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.golf && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'Golf' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('Golf')}
                                                    >
                                                        ゴルフモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.ski && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'Ski' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('Ski')}
                                                    >
                                                        スキーモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.mountain && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'Mountain' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('Mountain')}
                                                    >
                                                        マウンテンモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.business && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'Business' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('Business')}
                                                    >
                                                        ビジネスモデル
                                                    </button>
                                                </li>
                                            )}
                                            {item.ferse && (
                                                <li className='variation-container'>
                                                    <button 
                                                        className={`variation-button ${selectedVariation === 'ferse' ? 'selected' : ''}`} 
                                                        onClick={() => handleVariationClick('ferse')}
                                                    >
                                                        ビジネスモデル
                                                    </button>
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                    <li className='insole-detail-container'>
                                        <p className='label'>特徴</p>
                                        <p className='detail'>
                                            {variationData && variationData.detail}
                                            {variationData && variationData.special}
                                        </p>
                                        <div className="sp-chart">
                                            <PentagonChart 
                                                data={variationData.Data}
                                                strokeColor="#09416C"
                                                fillColor="#09416C"
                                                fillOpacity={0.7}
                                            />
                                        </div>
                                    </li>
                                    <li className='insole-detail-container'>
                                        <p className='label'>トップカバー</p>
                                        <ul className='top-cover-wrapper'>
                                            {variationData && variationData.texture && variationData.texture.map((texture, index) => (
                                                <li key={index} className='top-cover-container'>
                                                <p className='top-cover'>
                                                    {texture.textureName}
                                                </p>
                                                <ul className='color-wrapper'>
                                                    {texture.color.map((colorItem, colorIndex) => (
                                                    <li key={colorIndex} className='color-container'>
                                                        <div className='color-curcle' style={{ backgroundColor: colorItem.colorCode }}></div>
                                                        <p>{colorItem.colorText}</p>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className='insole-detail-container'>
                                        <p className='label'>価格</p>
                                        <ul className='price-wrapper'>
                                            {item.price && item.price.map((priceitem, priceIndex) => (
                                                <li key={priceIndex} className='price-container'>
                                                    <p className='detail'><span>{priceitem.category}</span>{priceitem.price}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className='insole-detail-container'>
                                        <div className="action-wrapper">
                                            <Link to="/products/insole" className="learn-more"><FontAwesomeIcon icon={faChevronRight} />インソールについて詳しく見る</Link>
                                            <Link to={item.to} className="learn-more shopping"><FontAwesomeIcon icon={faChevronRight} />ショップで見る</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item-image-container">
                            {variationData && <img src={variationData.image} alt={item.title} className="pc-image"/>}
                            <div className="pc-chart">
                                {variationData && (
                                    <PentagonChart 
                                        data={variationData.Data}
                                        strokeColor="#09416C"
                                        fillColor="#09416C"
                                        fillOpacity={0.7}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicPopup;