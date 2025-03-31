import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProductPages/_brandPage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';

import Popup from '../../components/perts/PopUps/orderPopUp';
import BasicPopup from '../../components/perts/PopUps/basicPopUp';

import VodyEqip from '../../assets/images/Products/VodyEqipネイビー宣材写真1.webp'
import Deer from '../../assets/images/Products/鹿シャンプーセット.webp'
import Platform from '../../assets/images/Products/Platform.webp'
import MintLavender from '../../assets/images/Products/Mint&Lavender.webp'
import Sora from '../../assets/images/Products/SORA.webp'
import Horse from '../../assets/images/Products/馬油SERIES.webp'
import Ba from '../../assets/images/insole/BA_BAM.webp'
import Kern from '../../assets/images/insole/KERN バナー.webp'
import Blitz from '../../assets/images/insole/BLITZ バナー.webp'
import Demo from '../../assets/images/準備中ビジュアル.webp'

const OrderTable = [
    {
        image: VodyEqip,
        title: "Vody Eqip",
        detail: "エアル・ファーストのバランス補正技術に加え、生体電流を整え免疫力安定化、疲労軽減の効果が期待できるHADOO社の特許技術を使用したチップを内蔵した。「回復するインソール」",
        to:"/products/insole",
        special:"エアル・ファーストの補正技術に加えて、体内の生体電流を整え免疫力の安定化や疲労軽減などの効果が認められたHADOO社の特許技術を使用した特殊チップをインソール内部に内蔵。より疲れづらく、身体の内側からの健康をサポートしながら、姿勢・バランスの補正を行う。",
        texture: [
            {
                textureName:"シフォンヌバック",
                color:[
                    {
                        colorCode: "#CFD1BC",
                        colorText: "ベージュ",
                    },
                    {
                        colorCode: "#DB9A63",
                        colorText: "オレンジ",
                    },
                    {
                        colorCode: "#393E5B",
                        colorText: "ネイビー",
                    },
                ],
            },
        ],
        price:[
            {
                category:"プレミアムオーダー",
                price:"¥ 132,000 (税込) ~",
            },
            {
                category:"ベーシック",
                price:"¥ 60,500 (税込) ~",
            },
        ],
        Data : [
            { category: "補正力", value: 100 },
            { category: "クッション性", value: 100 },
            { category: "固さ", value: 60 },
            { category: "パフォーマンス", value: 50 },
            { category: "耐久性", value: 100 },
        ],
        premium:"TRUE",
        order:"",
        basic:"TRUE",
    },
    {
        image: Platform,
        title: "Platform",
        detail: "測定したデータを元にあなたの身体を本来の生まれ持った正しい姿勢「ニュートラルポジション」に補正するあなたの為だけの特別なインソール",
        to:"/products/insole",
        special:"長年の研究から導きだした、バランスの要である踵（かかと）の骨「踵骨」の位置を正しく補正する特許取得の技術で、歪んだ足のバランスを正しい位置に補正します。",
        texture: [
            {
                textureName:"EVA",
                color:[
                    {
                        colorCode: "#232429",
                        colorText: "ブラック",
                    },
                    {
                        colorCode: "#FF8739",
                        colorText: "オレンジ",
                    },
                    {
                        colorCode: "#029DD8",
                        colorText: "ブルー",
                    },
                ],
                only:""
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
            {
                textureName:"スウェード",
                color:[
                    {
                        colorCode: "#EFDEC0",
                        colorText: "ホワイト",
                    },
                    {
                        colorCode: "#807768",
                        colorText: "グレー",
                    },
                    {
                        colorCode: "#393B4A",
                        colorText: "ネイビー",
                    },
                ],
                only:""
            },
            {
                textureName:"合皮",
                color:[
                    {
                        colorCode: "#000000",
                        colorText: "ブラック",
                    },
                    {
                        colorCode: "#F8F1E8",
                        colorText: "ホワイト",
                    },
                    {
                        colorCode: "#BBBCB8",
                        colorText: "シルバー",
                    },
                ],
                only:""
            },
            {
                textureName:"シフォンヌバック",
                color:[
                    {
                        colorCode: "#CFD1BC",
                        colorText: "ベージュ",
                    },
                    {
                        colorCode: "#DB9A63",
                        colorText: "オレンジ",
                    },
                    {
                        colorCode: "#393E5B",
                        colorText: "ネイビー",
                    },
                ],
                only:"TRUE"
            },
        ],
        price:[
            {
                category:"プレミアムオーダー",
                price:"¥ 66,000 (税込) ~",
            },
            {
                category:"オーダーメイド",
                price:"¥ 33,000 (税込) ~",
            },
            {
                category:"セミオーダー",
                price:"¥ 22,000 (税込) ~",
            },
        ],
        Data : [
            { category: "補正力", value: 90 },
            { category: "クッション性", value: 80 },
            { category: "固さ", value: 70 },
            { category: "パフォーマンス", value: 100 },
            { category: "耐久性", value: 80 },
        ],
        premium:"TRUE",
        order:"TRUE",
        basic:"",
        select:"TRUE",
    },
]

const BasicTable = [
    {
        image: Ba,
        title: "S-BLITZ",
        detail: "30万人以上の日本人の足のデータから導き出したどんな方にもお使いいただけるモデル",
        to:"https://custom-made-insole.com/view/category/ct39",

        all:"TRUE",
        run:"TRUE",
        golf:"TRUE",
        business:"",
        ski:"",
        mountain:"",

        price:[
            {
                category:"ベーシック",
                price:"¥ 13,200 (税込) ~",
            },
        ],
    },
    {
        image: Blitz,
        title: "BLITZ",
        detail: "エアル・ファーストの持つ特許技術を使用しながらコストを抑え、お買い求めやすいようにしたリーズナブルシリーズ",
        to:"https://custom-made-insole.com/view/category/ct40",

        all:"",
        blitzAll:"TRUE",
        run:"",
        blitzRun:"TRUE",
        golf:"",
        business:"",
        ski:"TRUE",
        mountain:"TRUE",
        price:[
            {
                category:"ベーシック",
                price:"¥ 5,500 (税込) ~",
            },
        ],
    },
    {
        image: Demo,
        title: "Junior BLITZ",
        detail: "子供のまっすぐな成長をサポートする発育サポートインソール",
        to:"https://custom-made-insole.com/view/item/000000000059?category_page_id=exercise",

        all:"",
        blitzAll:"",
        run:"",
        blitzRun:"",
        golf:"",
        business:"",
        ski:"",
        mountain:"",
        Junior:"TRUE",

        price:[
            {
                category:"ベーシック",
                price:"¥ 3,300 (税込) ~",
            },
        ],
    },
    {
        image: Kern,
        title: "KERN",
        detail: "革靴などのビジネスシーンの為に開発された日々頑張るビジネスマンの為のインソール",
        to:"https://custom-made-insole.com/view/category/ct42",

        all:"",
        blitzAll:"",
        run:"",
        blitzRun:"",
        golf:"",
        business:"TRUE",
        ski:"",
        mountain:"",

        price:[
            {
                category:"ベーシック",
                price:"¥ 13,200 (税込) ~",
            },
        ],
    },
    {
        image: Demo,
        title: "FERSE",
        detail: "女性のヒールの為に開発されたインソール。ヒールでの美しい姿勢をサポート",
        to:"https://custom-made-insole.com/view/category/ct43",

        all:"",
        blitzAll:"",
        run:"",
        blitzRun:"",
        golf:"",
        business:"",
        ski:"",
        mountain:"",
        ferse:"TRUE",

        price:[
            {
                category:"ベーシック",
                price:"¥ 13,200 (税込) ~",
            },
        ],
    },
]

const HokkaidoTable = [
    {
        image: Deer,
        title: "YUK エゾシカシリーズ",
        detail: "北海道の過酷な環境で生まれ育ったエゾシカの秘めたる力を、凝縮したアンチエイジング美容品",
        to:"https://custom-made-insole.com/view/item/000000000062?category_page_id=hygiene"
    },
    {
        image: MintLavender,
        title: "Mint & Lavender de Guard",
        detail: "コロナ禍の中で活躍した光に当てることで除菌・抗菌・消臭ができる光触媒に北海道産の天然のハーブの香りをブレンド",
        to:"https://custom-made-insole.com/view/item/000000000007?category_page_id=hygiene"
    },
    {
        image: Sora,
        title: "Sora",
        detail: "北海道小樽市の天然水を100%使用した水とナノサイズの酸素バブルの化粧水",
        to:""
    },
    {
        image: Horse,
        title: "馬油シリーズ",
        detail: "古代中国から愛される、殺菌と保湿の力を北海道産馬という信頼の品質で。",
        to:"https://custom-made-insole.com/view/item/000000000034?category_page_id=hygiene"
    },
]

const Brand = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0); // スクロール位置の状態を追加
    const [selectedOrderItem, setSelectedOrderItem] = useState(null);
    const [selectedBasicItem, setSelectedBasicItem] = useState(null);

    const handleOrderItemClick = (item) => {
        setScrollPosition(window.scrollY);
        setSelectedOrderItem(item);
    };

    const handleBasicItemClick = (item) => {
        setScrollPosition(window.scrollY);
        setSelectedBasicItem(item);
    };

    const closeOrderPopup = () => {
        setSelectedOrderItem(null);
    };

    const closeBasicPopup = () => {
        setSelectedBasicItem(null);
    };

    useEffect(() => {
        if (selectedOrderItem || selectedBasicItem) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            // スクロール位置を復元
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, scrollPosition); // 保存した位置に戻る
        }

        return () => {
            // コンポーネントがアンマウントされる際のクリーンアップ
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [selectedOrderItem, selectedBasicItem, scrollPosition]);

    return (
        <div className='brand-page-wrapper'>
            <div className='potal-list-wrapper'>
                <ul className='potal-list'>
                    <li className='potal-list-item home'><Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link></li>
                    <li className='potal-list-item arrow'><FontAwesomeIcon icon={faChevronRight} /></li>
                    <li className='potal-list-item'><Link to="/products">商品トップ</Link></li>
                    <li className='potal-list-item arrow'><FontAwesomeIcon icon={faChevronRight} /></li>
                    <li className='potal-list-item current'>商品一覧</li>
                </ul>
                <h1 className='potal-page-title'>BRANDS</h1>
                <h2 className='potal-page-subtitle'>商品一覧</h2>
            </div>
            <div className='brand-page-container'>
                <div className='brand-category-wrapper'>
                    <div className='brand-category-title-wrapper'>
                        <h3>CUSTOM MADE</h3>
                        <h1>オーダーメイドインソール</h1>
                        <p>専用の特別なセンサーを搭載した測定器で荷重バランスのデータを測定し、
                            そのデータを元にミリ単位で芯材を調整する。あなたの身体の為にだけお造りする特別なインソール。
                        </p>
                    </div>
                    <ul className='list-container order-container'>
                        {OrderTable.map((item, index) => (
                            <li key={index}
                                className="product-page-container order-item"
                                onClick={() => handleOrderItemClick(item)}
                            >
                                <div className="image-container">
                                    {item.image && <img src={item.image} alt={item.title} />}
                                </div>
                                <div className='text-container'>
                                    <h3>{item.title}</h3>
                                    <p>{item.detail}</p>
                                </div>
                                <div className='sp-button'>
                                    <p>詳しく見る</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Popup isOpen={selectedOrderItem !== null} onClose={closeOrderPopup} item={selectedOrderItem}/>

                </div>
                <div className='brand-category-wrapper'>
                    <div className='brand-category-title-wrapper'>
                        <h3>BASIC MODEL</h3>
                        <h1>ベーシックインソール</h1>
                        <p>30万人以上の日本人の足のデータから導き出した
                            日本人にとって最適な形状でどんな人にもご利用いただけるインソール。
                        </p>
                    </div>
                    <ul className='list-container sub-items-container'>
                        {BasicTable.map((item, index) => (
                            <li key={index}
                                className="product-page-container basic-item"
                                onClick={() => handleBasicItemClick(item)}
                            >
                                
                                <div className="image-container">
                                    {item.image && (
                                        <img src={item.image} alt={item.name} />
                                    )}
                                </div>
                                <div className='text-container'>
                                    <h3>{item.title}</h3>
                                    <p>{item.detail}</p>
                                </div>
                                <div className='sp-button'>
                                    <p>詳しく見る</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <BasicPopup isOpen={selectedBasicItem !== null} onClose={closeBasicPopup} item={selectedBasicItem}/>
                </div>
                <div className='brand-category-wrapper'>
                    <div className='brand-category-title-wrapper'>
                        <h3>HOKKAIDO SELECTION</h3>
                        <h1>北海道セレクション</h1>
                        <p>私たちの故郷「北海道」の魅力を全国に伝える為、
                            SDGsを心がけ、天然の素材にこだわったここでしか体験できない
                            北海道の魅力をあなたに。
                        </p>
                    </div>
                    <ul className='list-container sub-items-container'>
                        {HokkaidoTable.map((table, index) => (
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

                                <Link to={table.to} className="learn-more shop-link">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow" />
                                    </span>
                                    <span className="button-text">ショップで見る</span>
                                </Link>
                                <Link to={table.to} className='sp-button sp-shop-link'>
                                    <p>ショップで見る</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brand;
