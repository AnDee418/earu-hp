// ProductsHome.js
import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProductPages/_productHome.scss'

import {ScrollToTopButton} from '../../components/SubPageNav';
import {IconOnly} from '../../components/animaition/ScrollDownIndicator';
import {FadeInSection} from '../../components/animaition/fade-in';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';

import VodyEqip from '../../assets/images/Products/VodyEqipネイビー宣材写真1.webp'
import DeerShampoo from '../../assets/images/Products/鹿シャンプー.webp'
import Basic from '../../assets/images/Products/BASIC宣材写真1.webp'
import Products from '../../assets/images/Products/BASIC宣材写真1.webp'

const PageTable = [
    {
        image: VodyEqip,
        title: "インソールについて",
        detail: "20年にわたる研究と実績を背景に、足をサポートすることだけでなく、使用する事で身体のバランス・姿勢を「補正」するインソールという答えにたどり着きました。",
        to:"insole"
    },
    // {
    //     image: DeerShampoo,
    //     title: "北海道セレクション",
    //     detail: "北海道札幌市からスタートした私たちは、故郷の魅力をもっと多くの人に知ってもらたいという思いで道内各地から天然の素材を使用した魅力的なアイテムを厳選し集めてきました、",
    //     to:"hokkaido"
    // },
    {
        image: Basic,
        title: "商品一覧",
        detail: "インソールやヘアケア・スキンケアなどのカテゴリーを中心に人々の生活の中で欠かせない生活を豊かにするブランドを展開しています。",
        to:"brand"
    },
]

const ProductsHome = () => {

    return (
        <div className='product-home'>
            <ScrollToTopButton/>
            <div className='potal-list-wrapper'>
                <ul className='potal-list'>
                    <li className='potal-list-item home'><Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link></li>
                    <li className='potal-list-item arrow'><FontAwesomeIcon icon={faChevronRight} /></li>
                    <li className='potal-list-item current'>商品トップ</li>
                </ul>
                <h1 className='potal-page-title'>PRODUCTS</h1>
                <h2 className='potal-page-subtitle'>商品・サービス</h2>
            </div>
            <div className='sub-top-wrapper product-home-top'>
                <img src={Products} alt="top-image" />
            </div>
            <div className='top-upper-layer'>
                <IconOnly/>
            </div>
            <ul>
                {PageTable.map((table, index) => (
                    <li key={index}
                        className="product-page-container">
                        
                        <div className="image-container">
                            {table.image && (
                                <img src={table.image} alt={table.name} />
                            )}
                        </div>
                        <div className='text-container'>
                            <h3>{table.title}</h3>
                            <p>{table.detail}</p>
                        </div>

                        <Link to={table.to} className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow" />
                            </span>
                            <span className="button-text">詳しく見る</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsHome;
