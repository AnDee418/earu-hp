import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { ScrollToTopButton } from '../components/SubPageNav';
import OverViewLink from '../components/perts/OverVIewLink';
import { FadeInSection } from '../components/animaition/fade-in';
import ScrollDownIndicator from '../components/animaition/ScrollDown';
import Popup from '../components/perts/PopUps/PopUp';

import CEO from '../assets/images/thumbnail/サムネイル.jpg';
import Nishida from '../assets/images/staff/Nishida.jpg';
import Haga from '../assets/images/staff/Haga.jpg';
import Anzai from '../assets/images/staff/Anzai.jpg';
import Itami from '../assets/images/staff/Itami.jpg';
import Oikawa from '../assets/images/staff/Oikawa.jpg';
import Watanabe from '../assets/images/staff/Watanabe.jpg';
import Narita from '../assets/images/staff/Narita.jpg';
import Takahashi from '../assets/images/staff/Takahashi.jpg';
import Hirayama from '../assets/images/staff/Hirayama.jpg';
import Haruki from '../assets/images/staff/Haruki.jpg';
import Nakata from '../assets/images/staff/Nakata.jpg';
import Gotoh from '../assets/images/staff/Gotoh.jpg';
import Hatakeyama from '../assets/images/staff/Hatakeyama.jpg';
import Nagao from '../assets/images/staff/Nagao.jpg';
import Noguchi from '../assets/images/staff/Noguchi.jpg';
import Kawai from '../assets/images/staff/Kawai.jpg';

const staffList = [
    // {
    //     image: Saitoh,
    //     name: "斉藤　孝行",
    //     engName: "SAITOH TAKAYUKI",
    //     title: "代表取締役社長",
    //     birth: "1987年",
    //     from: "北海道小樽市",
    //     email: "t-saitoh@earu-first.com",
    //     region: "代表取締役社長"
    // },
    {
        image: Gotoh,
        name: "後藤　和俊",
        engName: "GOTOH KAZUTOSHI",
        title: "インソールエンジニア",
        birth: "1970年",
        from: "北海道月形町",
        email: "k-gotoh@earu-first.com",
        region: "製造責任者"
    },
    {
        image: Nishida,
        name: "西田　和弘",
        engName: "NISHIDA KAZUHIRO",
        title: "本社部長/札幌支店長",
        birth: "1987年",
        from: "北海道札幌市",
        career: ["北海学園大学 経済学部卒"],
        email: "k-nishida@earu-first.com",
        region: "北海道エリア"
    },
    {
        image: Anzai,
        name: "安西　秀和",
        engName: "ANZAI HIDEKAZU",
        newStamp: "NEW",
        title: "営業員/エンジニア",
        birth: "1998年",
        from: "北海道南富良野町",
        career: ["高校在学時インターハイ３年連続出場（カヌースプリント）", "高校在学時国体３年連続出場（カヌースプリント）"],
        email: "h-anzai@earu-first.com",
        region: "北海道エリア"
    },
    {
        image: Itami,
        name: "伊丹　雄太",
        engName: "ITAMI YUTA",
        title: "営業マネージャー",
        birth: "1985年",
        from: "神奈川県秦野市",
        career: ["法政大学 経営学部卒"],
        qualification: "スポーツシューフィッターMASTER TECHNICIAN",
        email: "y-itami@earu-first.com",
        region: "東北エリア"
    },
    {
        image: Oikawa,
        name: "及川　颯人",
        engName: "OIKAWA HAYATO",
        title: "営業マネージャー",
        birth: "1999年",
        from: "宮城県仙台市",
        career: ["宮城県Jr選手権準優勝", "宮城県インドア大会3位（テニス）"],
        qualification: "スポーツシューフィッターMASTER TECHNICIAN",
        email: "h-oikawa@earu-first.com",
        region: "東北エリア"
    },
    {
        image: Haga,
        name: "羽賀　勇喜",
        engName: "HAGA YUKI",
        title: "営業員",
        birth: "2000年",
        from: "青森県",
        career: ["2017年春季東北大会出場（野球）"],
        email: "y-haga@earu-first.com",
        region: "東北エリア"
    },
    {
        image: Watanabe,
        name: "渡邉　将也",
        engName: "WATANABE MASAYA",
        title: "東京支店長",
        birth: "1989年",
        from: "埼玉県草加市",
        career: ["国際武道大学体育学部卒"],
        email: "m-watanabe@earu-first.com",
        region: "関東エリア"
    },
    {
        image: Hirayama,
        name: "平山　輝樹",
        engName: "HIRAYAMA TERUKI",
        title: "営業顧問",
        birth: "1970年",
        from: "北海道小樽市",
        career: ["北照高校卒", "フットアドバイザー歴13年"],
        email: "t-hirayama@earu-first.com",
        region: "関東エリア"
    },
    {
        image: Narita,
        name: "成田　陽翆",
        engName: "NARITA YOUSUI",
        title: "営業リーダー",
        birth: "1983年",
        from: "青森県",
        career: ["アルペンスキー回転競技全中7位・大回転競技9位", "ジュニアオリンピック大回転優勝・回転4位", "全日本スキー技術戦出場"],
        email: "y-narita@earu-first.com",
        region: "関東エリア"
    },
    {
        image: Takahashi,
        name: "高橋　卓",
        engName: "TAKAHASHI TAKU",
        title: "業務リーダー",
        birth: "1977年",
        from: "新潟県",
        career: ["フットアドバイザー歴10年"],
        email: "t-takahashi@earu-first.com",
        region: "関東エリア"
    },
    {
        image: Nakata,
        name: "中田　嘉範",
        engName: "NAKATA YOSHINORI",
        title: "業務顧問",
        birth: "1964年",
        from: "北海道旭川市",
        career: ["明治大学政経学部経済学科卒"],
        email: "y-nakata@earu-first.com",
        region: "関東エリア"
    },
    {
        image: Hatakeyama,
        name: "畠山　祥喜",
        newStamp: "NEW",
        engName: "HATAKEYAMA YOSHIKI",
        title: "営業員",
        birth: "1991年",
        from: "千葉県野田市",
        career: ["テニスコーチ歴8年","スポーツ店勤務歴2年"],
        email: "y-hatakeyama@earu-first.com",
        region: "関東エリア"
    },
    {
        image: Nagao,
        name: "永尾　翔",
        newStamp: "NEW",
        engName: "NAGAO KAKERU",
        title: "営業員",
        birth: "2003年",
        from: "長崎県長崎市",
        career: ["長崎県大会ベスト4（バドミントン）"],
        email: "k-nagao@earu-first.com",
        region: "関東エリア"
    },
    {
        image: Haruki,
        name: "斉藤　春樹",
        engName: "SAITOH HARUKI",
        title: "名古屋支店長",
        birth: "1991年",
        from: "北海道札幌市",
        career: ["2008年：15人制ラグビー高校日本代表",
            "2012年：15人制ラグビー20歳以下日本代表候補",
            "2015年：7人制ラグビー日本代表",
            "2016年：15人制ラグビー関東代表",
            "2016年：リオデジャネイロオリンピック7人制ラグビー日本代表候補"
        ],
        email: "h-saitoh@earu-first.com",
        region: "関西・中部エリア"
    },
    {
        image: Kawai,
        name: "河合　晋吾",
        engName: "KAWAI SHINGO",
        title: "営業員",
        birth: "1997年",
        from: "埼玉県所沢市",
        career: ["千葉リゾート＆スポーツ専門学校卒"],
        email: "s-kawai@earu-first.com",
        region: "関西・中部エリア"
    },
    {
        image: Noguchi,
        name: "野口　和裕",
        engName: "NOGUCHI KAZUHIRO",
        title: "営業リーダー",
        birth: "1970年",
        from: "大阪府八尾市",
        qualification: "シューフィッター（FHA）",
        career: ["桃山学院大学卒"],
        email: "k-noguchi@earu-first.com",
        region: "関西・中部エリア"
    },
];


const AboutUs = () => {
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0); // 追加

    const handleStaffClick = (staff) => {
        if (staff.name && window.innerWidth < 1200) {
            setScrollPosition(window.scrollY); // スクロール位置を保存
            setSelectedStaff(staff);
        }
    };

    const closePopup = () => {
        setSelectedStaff(null);
    };

    useEffect(() => {
        if (selectedStaff !== null) {
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
            window.scrollTo(0, scrollPosition);
        }

        return () => {
            // クリーンアップ
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [selectedStaff, scrollPosition]);

    const regions = [ "製造責任者", "北海道エリア", "東北エリア", "関東エリア", "関西・中部エリア", "九州エリア"]; 
    // "代表取締役社長",

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='motion-wrapper'
        >
            <div className='body'>
                <ScrollToTopButton />
                <div className='sub-top-wrapper about-top'>
                    <h1 className='sub-page-title'>ABOUT US</h1>
                    <h2 className='sub-page-subtitle'>エアル・ファーストとは</h2>
                    <ScrollDownIndicator />
                </div>
                <FadeInSection>
                    <section className='message section' id='Message'>
                        <h1 className='sub-section-title'>MESSAGE</h1>
                        <p className='sub-section-subtitle'>エアル・ファーストとは</p>
                        <div className='message-wrapper'>
                            <h2>歩みを支え、
                                <br />感動の一歩を
                                <br />共に創る。
                            </h2>
                            <p className='message-detail'>
                                弊社は2005年に開業し、「生活・仕事での心の癒し」をテーマに光触媒アートフラワーの販売及びレンタル事業を開始しました。その後、衛生関連商品の取り扱いを経て、2007年よりオーダーメイドインソール事業を全国展開しました。2010年には自社オリジナルのインソールを発売し、現在ではスポーツ用、お子様用、ビジネス用など、多彩なインソールを提供しています。これは、多くの方々の支えによるものであり、深く感謝しております。
                                <br />
                                <br />資本力や全国的な取引先には乏しいものの、2013年より自社オリジナル販売管理システムの構築を開始し、2年に一度のアップグレードを重ねてきました。2021年には購入ユーザー様のアフターフォローにも対応できるシステムを計画的に改善しました。このシステムにより、お客様は過去のインソールデータを簡単に閲覧でき、安心とインソールの必要性を理解いただけるようになっています。
                                <br />
                                <br />これからも「健康・元気・感謝」をキーワードに、細やかなサービスと柔軟な活動で皆様に感動を届ける企業を目指し挑戦を続けて参ります。弊社のインソールブランド「FOOT-K」の"K"は「感動・感謝」を意味しており、その名に恥じない企業を目指します。エアル・ファーストへの変わらぬご支援、ご愛顧を何卒宜しくお願い致します。
                            </p>
                        </div>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='achiievements secsion' id='Achievements'>
                        <h1 className='sub-section-title'>ACHIEVEMENTS</h1>
                        <p className='sub-section-subtitle'>実績</p>
                        <ul className='achive-wrapper'>
                            <li className='achive-cintainer'>
                                <div className='achieve-number'>
                                    <h3>10</h3>
                                    <p className='unit'>万</p>
                                </div>
                                <p className='number-detail'>年間測定人数</p>
                            </li>
                            <li className='achive-cintainer'>
                                <div className='achieve-number'>
                                    <h3>46</h3>
                                    <p className='unit'>社</p>
                                </div>
                                <p className='number-detail'>パートナー企業</p>
                            </li>
                            <li className='achive-cintainer'>
                                <div className='achieve-number'>
                                    <h3>15</h3>
                                    <p className='unit'>万</p>
                                </div>
                                <p className='number-detail'>累計オーダー作成数</p>
                            </li>
                        </ul>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='history section' id='History'>
                        <h1 className='sub-section-title'>HISTORY</h1>
                        <p className='sub-section-subtitle'>実績</p>
                        <p className='history-text'>２００５年、北海道札幌市で「生活・仕事での心の癒し」をテーマに光触媒アートフラワーの販売及びレンタルを主力とした事業を開始し、その後衛生関連商品の取り扱いを経て２００７年よりオーダーメイドインソール事業を全国的にスタートしました。さらに２０１０年にインソールメーカーとして自社オリジナル商品を発売するに至りました。</p>
                        <ul className='history-time-table'>
                            <li>
                                <p className='year'>2005年</p>
                                <p className='history-event'>札幌市でフラワー（販売・レンタル）を開始</p>
                            </li>
                            <li>
                                <p className='year'>2007年</p>
                                <p className='history-event'>インソール事業及びスポーツ商材の販売を開始</p>
                            </li>
                            <li>
                                <p className='year'>2010年</p>
                                <p className='history-event'>東京支店（千代田区西神田）開設</p>
                                <p className='history-event'>本社事務所を現住所に移転</p>
                            </li>
                            <li>
                                <p className='year'>2011年</p>
                                <p className='history-event'>東京事務所（板橋区徳丸）開設</p>
                                <p className='history-event'>東京ショールームを現住所に移転</p>
                            </li>
                            <li>
                                <p className='year'>2012年</p>
                                <p className='history-event'>トリガーポイントパフォーマンスセラピー販売を開始</p>
                            </li>
                            <li>
                                <p className='year'>2013年</p>
                                <p className='history-event'>第1次自社販売システム（販売受発注管理・製造管理システム）稼働開始</p>
                                <p className='history-event'>国際武道大学山本教授とインソール開発研究開始</p>
                                <p className='history-event'>福岡事業所（福岡市早良区）6月開設</p>
                                <p className='history-event'>仙台ショールーム（仙台市青葉区）8月開設</p>
                                <p className='history-event'>スポーツオーソリティ幕張12月出店</p>
                            </li>
                            <li>
                                <p className='year'>2015年</p>
                                <p className='history-event'>BLITZインソール販売開始</p>
                                <p className='history-event'>第2次自社システム（販売受発注管理・製造管理システム）稼働開始</p>
                            </li>
                            <li>
                                <p className='year'>2017年</p>
                                <p className='history-event'>BLITZ-JUNIOR・FOOT-Kシューズ販売開始</p>
                                <p className='history-event'>MOBOT販売開始</p>
                                <p className='history-event'>第3次自社システム（販売受発注管理・製造管理システム）稼働開始</p>
                            </li>
                            <li>
                                <p className='year'>2018年</p>
                                <p className='history-event'>オールラウンド汎用インソール販売開始</p>
                            </li>
                            <li>
                                <p className='year'>2019年</p>
                                <p className='history-event'>名古屋事業所（名古屋市中区）4月開設</p>
                            </li>
                            <li>
                                <p className='year'>2020年</p>
                                <p className='history-event'>ドラックストア向けインソール販売開始</p>
                                <p className='history-event'>全国百貨店販売開始</p>
                            </li>
                            <li>
                                <p className='year'>2021年</p>
                                <p className='history-event'>第4次自社システム（販売受発注管理・製造管理システム）稼働開始</p>
                            </li>
                            <li>
                                <p className='year'>2025年</p>
                                <p className='history-event'>総業20周年を迎えHPをリニューアルオープン</p>
                            </li>
                        </ul>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='speach section' id='Speach'>
                        <h1 className='sub-section-title'>SPEACH</h1>
                        <p className='sub-section-subtitle'>社長あいさつ</p>
                        <div className='speach-wrapper'>
                            <div className='speach-container'>
                                <div className='speach-image'>
                                    <img src={CEO} alt="Saitoh" />
                                </div>
                                <p>
                                    平素は格別のお引き立てを賜り、誠にありがとうございます。
                                    弊社は創業以来、「私たちの使命は、取扱商品の生産及び販売活動を通じて
                                    社会・健康生活の向上を計り、お客様、お取引先様、社会の皆様から信頼
                                    を得続ける発展して行く」という経営理念のもと必死に取り組んでまいりました。
                                    創業時のフラワー事業(生活関連)をスタートし、インソール販売事業、本社所在地である
                                    「北海道」の原材料とした商品販売と事業を展開して参りました。
                                    インソールメーカーとしては類を見ない札幌、仙台、東京、名古屋、大阪に人員を配置し全国のフィットネスクラブ様、テニス関連施設様、ゴルフ関連施設様、百貨店様
                                    を中心に販売活動を行えるまでになりました。
                                    2025年8月には弊社創業20周年を迎える事となり、事業を継続させて頂きました
                                    多くのお客様、お取引様には感謝申し上げます。
                                    これからの事業展開は弊社の若い社員が先頭に立ち、皆様から「心から喜んで」頂ける
                                    新しい「健康生活」の提供が可能な企業を目指し、たゆまぬ努力を続けてまいります。
                                    今後とも皆様のご愛顧の程、宜しくお願い致します。
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeInSection>
                <section className='staff section' id='Staff'>
                    <h1 className='sub-section-title'>STAFF</h1>
                    <p className='sub-section-subtitle'>社員紹介</p>
                    <div className='staff-wrapper'>
                        {regions.map((region, regionIndex) => {
                            const filteredStaffList = staffList.filter(staff => staff.region === region);
                            return (
                                <div key={regionIndex} className="region-wrapper">
                                    <div className="area-title-container">
                                        <p className="area-title">{region}</p>
                                    </div>
                                    <FadeInSection>
                                        <div
                                            className={`area-wrapper ${filteredStaffList.length === 1 ? 'single-column' : filteredStaffList.length === 2 ? 'double-column' : 'triple-column'
                                                }`}
                                        >
                                            {filteredStaffList.map((staff, index) => (
                                                <div
                                                    key={index}
                                                    className="staff-container"
                                                    onClick={() => handleStaffClick(staff)}
                                                >
                                                    <div className="image-container">
                                                        {staff.image && (
                                                            <img src={staff.image} alt={staff.name} />
                                                        )}
                                                    </div>
                                                    <ul className="hovered-detail">
                                                        {staff.birth && (
                                                            <li className="hovered-detail-items">
                                                                <p className="label">生まれ</p>
                                                                <p className="inform">{staff.birth}</p>
                                                            </li>
                                                        )}
                                                        {staff.from && (
                                                            <li className="hovered-detail-items">
                                                                <p className="label">出身地</p>
                                                                <p className="inform">{staff.from}</p>
                                                            </li>
                                                        )}
                                                        {Array.isArray(staff.career) && staff.career.length > 0 && (
                                                            <li className="hovered-detail-items">
                                                                <p className="label">経歴</p>
                                                                <p className="inform">
                                                                    {staff.career.map((item, index) => (
                                                                        <React.Fragment key={index}>
                                                                            {item}
                                                                            {index < staff.career.length - 1 && <br />}
                                                                        </React.Fragment>
                                                                    ))}
                                                                </p>
                                                            </li>
                                                        )}
                                                        {staff.qualification && (
                                                            <li className="hovered-detail-items">
                                                                <p className="label">資格</p>
                                                                <p className="inform">
                                                                    {staff.qualification}
                                                                </p>
                                                            </li>
                                                        )}
                                                        {staff.email && (
                                                            <li className="hovered-detail-items">
                                                                <p className="label">e-mail</p>
                                                                <p className="inform">{staff.email}</p>
                                                            </li>
                                                        )}
                                                    </ul>
                                                    <div className="staff-detail">
                                                        <h5>
                                                            {staff.categoly && (
                                                                <p className="agent-icon">{staff.categoly}</p>
                                                            )}
                                                            {staff.newStamp && (
                                                                <p className="new-staff">{staff.newStamp}</p>
                                                            )}
                                                            {staff.title}
                                                        </h5>
                                                        <h4>{staff.name}</h4>
                                                        <p className="eng-name">{staff.engName}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </FadeInSection>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <Popup isOpen={selectedStaff !== null} onClose={closePopup} staff={selectedStaff} />
                <OverViewLink />
            </div>
        </motion.div>
    );
};

export default AboutUs;
