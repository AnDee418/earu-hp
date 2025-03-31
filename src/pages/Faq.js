import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {ScrollToTopButton} from '../components/SubPageNav';
import AccordionMenu from '../components/perts/accordion';
import BackgroundImage from '../components/perts/BackInsole';


const Faq = () => {

    const colorbox = 'rgba(18,126,210,0.2)'

    const items1 = [
        { 
            title: 'インソールはどのくらい持ちますか？', 
            content: '使用頻度などにより個人差が大きいものですが、一般的にはベーシックモデルでは1~2年、オーダーメイドモデルでは2~4年程度で交換が目安でございます。' },
        { 
            title: 'スポーツをしていない人でも使えますか？', 
            content: 'もちろんです！バランス補正が強みのインソールですので、パフォーマンス向上はもちろんですが、その他にもバランスが改善されることによって今まで特定の部位に集中していた負荷をバランスよく分散させる事で負担の軽減効果も期待できます。' },
        { 
            title: '自分でどのようにケアしたらいいですか？', 
            content: '洗濯機などは使用できません。よく絞った布などで優しく拭いていただいたり、アルコール成分の入っていない消臭スプレーをご使用ください。' },
    ];

    const items2 = [
        { 
            title: '予約は必要ですか？', 
            content: '基本的には不要です。会場により会員様限定の場合がございます。' },
        { 
            title: '測定にはどのくらいの時間がかかりますか？', 
            content: '測定は30秒ほどで完了します。その後データを基にお客様のバランスについてご説明させて頂きますので、余裕をもってお越しください。' },
        { 
            title: '測定が行えるのは測定会のみですか？', 
            content: <>札幌の本社や、各ショールームにて測定が行えます。オーダーメイドの申込や、現状確認の再測定など、ご気軽に<Link to="/contact">お問い合わせ</Link>ください。</> },
    ];

    const items3 = [
        { 
            title: '修理はどのくらいかかりますか？', 
            content: '通常１０日前後でのお送りとなります　※ご注文状況により変動がございます。' },
        { 
            title: 'どのくらいが修理の目安ですか？', 
            content: <>・表面が潰れてきて、芯材のあたり感が気になる。<br/>・インソールに穴が開いている。<br/>・素材がはがれてきている<br/>などの症状は修理をお勧めいたします。</> },
        { 
            title: '郵送以外でお渡しすることはできますか？', 
            content: '可能です。ショールームなどに直接お持ちいただいて状況の確認などを詳しく行い、エンジニアに伝えることができます。' },
    ];

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='motion-wrapper'
        >
            <div className='body'>
                <div className='body-wrapper'>
                    <ScrollToTopButton/>
                    <div className='faq-title-wrapper'>
                        <h1 className='sub-section-title'>Q&A</h1>
                        <p className='sub-section-subtitle'>よくあるご質問</p>
                        <p className='sub-section-message'>みなさまから寄せられた、質問と回答を掲載しております。</p>
                    </div>
                    <div className='faq-wrapper'>

                        <section className='faq-products section faq-sections' id='FaqProducts'>
                            <h1 className='faq-section-title'>for Producs</h1>
                            <p className='faq-section-subtitle'>商品についてのご質問</p>
                            <div className='profile-wrapper faq-contens'>
                                <AccordionMenu items={items1} />
                            </div>
                        </section>

                        <section className='faq-events section faq-sections' id='FaqEvents'>
                            <h1 className='faq-section-title'>for Events</h1>
                            <p className='faq-section-subtitle'>販売会についてのご質問</p>
                            <div className='faq-events-wrapper faq-contens'>
                                <AccordionMenu items={items2} />
                            </div>
                        </section>

                        <section className='faq-maintenance section faq-sections' id='FaqMaintenance'>
                            <h1 className='faq-section-title'>for Maintenance</h1>
                            <p className='faq-section-subtitle'>修理についてのご質問</p>
                            <div className='faq-maintenance-wrapper faq-contens'>
                                <AccordionMenu items={items3} />
                            </div>
                        </section>
                    </div>
                </div>
                <BackgroundImage colorBox={colorbox}/>
            </div>
        </motion.div>
    );
};

export default Faq;
