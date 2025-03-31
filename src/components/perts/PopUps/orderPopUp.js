import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Tooltip from '../Tooltip'
import PentagonChart from '../PentagonChart'

const PremiumTooltipContent = () => (
    <div className="tooltip-inner">
        <p className='tooltip-text'>測定したバランスデータと採形した足形を基にあなたのバランスを補正する為の世界で一つのインソールを作成。</p>
        <p className='arrert-order'>※ご注文には測定会もしくは店舗での測定が必要です。</p>
    </div>
);

const OrderTooltipContent = () => (
    <div className="tooltip-inner">
        <p className='tooltip-text'>測定したバランスデータを基にあなたのバランスを補正する為の世界で一つのインソールを作成。</p>
        <p className='arrert-order'>※ご注文には測定会もしくは店舗での測定が必要です。</p>
    </div>
);

const BasicTooltipContent = () => (
    <div className="tooltip-inner">
        <p className='tooltip-text'>長年の研究から導く出した日本人の平均的な足に合わせたどなたでもお使いいただけるモデル。</p>
    </div>
);

const SelectTooltipContent = () => (
    <div className="tooltip-inner">
        <p className='tooltip-text'>ベーシックモデルのトップカバー、芯材の型さなどをお好みで選択できるモデル。</p>
    </div>
);

const Popup = ({ isOpen, onClose, item }) => {
    const popupRef = useRef(null);
    const popupContentRef = useRef(null);

    useEffect(() => {
        if (popupRef.current && popupContentRef.current) {
            if (isOpen) {
                popupRef.current.classList.add('open');
                popupContentRef.current.classList.add('open');

                // Reset scroll position when popup is opened
                setTimeout(() => {
                    if (popupContentRef.current) {
                        const itemTitleContainer = popupContentRef.current.querySelector('.item-title-container');
                        if (itemTitleContainer) {
                            itemTitleContainer.scrollTop = 0;
                        }
                        popupContentRef.current.scrollTop = 0;
                    }
                }, 100);
            } else {
                popupRef.current.classList.remove('open');
                popupContentRef.current.classList.remove('open');

                // Reset scroll position when popup is closed
                if (popupContentRef.current) {
                    const itemTitleContainer = popupContentRef.current.querySelector('.item-title-container');
                    if (itemTitleContainer) {
                        itemTitleContainer.scrollTop = 0;
                    }
                    popupContentRef.current.scrollTop = 0;
                }
            }
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="popup" ref={popupRef}>
            <div className="popup-content" ref={popupContentRef}>
                <button className="close-button" onClick={onClose}>×</button>
                <div className='popup-content-inner'>
                    <div className='popup-content-text'>
                        <div className='item-title-container' data-lenis-prevent>
                            <img src={item.image} alt={item.title} className="sp-image"/>
                            <div className="item-title">
                                <h3>{item.title}</h3>
                                <p>{item.detail}</p>
                            </div>
                            <div className='insole-detail-wrapper'>
                                <ul className='insole-detail'>
                                    <li className='insole-detail-container'>
                                        <p className='label'>特徴</p>
                                        <p className='detail'>
                                            {item.special}
                                        </p>
                                        <div className="sp-chart">
                                            <PentagonChart 
                                                data={item.Data} 
                                                strokeColor="#ff4d4d"
                                                fillColor="#ff4d4d"
                                                fillOpacity={0.7}
                                            />
                                        </div>
                                    </li>
                                    <li className='insole-detail-container'>
                                        <p className='label'>バリエーション</p>
                                        <ul className='variation-wrapper'>
                                            {item.premium && (
                                                <li className='variation-container'>
                                                    <Tooltip content={<PremiumTooltipContent />}>
                                                        <span>プレミアムオーダーメイド</span>
                                                    </Tooltip>
                                                </li>
                                            )}
                                            {item.order && (
                                                <li className='variation-container'>
                                                    <Tooltip content={<OrderTooltipContent />}>
                                                        <span>オーダーメイド</span>
                                                    </Tooltip>
                                                </li>
                                            )}
                                            {item.basic && (
                                                <li className='variation-container'>
                                                    <Tooltip content={<BasicTooltipContent />}>
                                                        <span>ベーシックモデル</span>
                                                    </Tooltip>
                                                </li>
                                            )}
                                            {item.select && (
                                                <li className='variation-container'>
                                                    <Tooltip content={<SelectTooltipContent />}>
                                                        <span>セミオーダー</span>
                                                    </Tooltip>
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                    <li className='insole-detail-container'>
                                        <p className='label'>トップカバー</p>
                                        <ul className='top-cover-wrapper'>
                                            {item.texture && item.texture.map((textureItem, textureIndex) => (
                                                <li key={textureIndex} className='top-cover-container'>
                                                    <p className='top-cover'>
                                                        {textureItem.textureName}
                                                        {textureItem.only && (
                                                            <span>※プレミアムオーダーのみ</span>
                                                        )}
                                                    </p>
                                                    <ul className='color-wrapper'>
                                                        {textureItem.color.map((colorItem, colorIndex) => (
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
                                            {/* <Link to={item.to} className="learn-more shopping"><FontAwesomeIcon icon={faChevronRight} />ショップで見る</Link> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item-image-container">
                            <img src={item.image} alt={item.title} className="pc-image"/>
                            <div className="pc-chart">
                                <PentagonChart 
                                    data={item.Data} 
                                    strokeColor="#ff4d4d"
                                    fillColor="#ff4d4d"
                                    fillOpacity={0.7}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;