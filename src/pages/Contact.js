import React, { useState, useEffect } from 'react';
import AccordionMenu from '../components/perts/accordion';
import BackgroundImage from '../components/perts/BackInsole';
import { motion } from 'framer-motion';

import Agreed from '../components/sections/AgreeCheck'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [selectedInquiry, setSelectedInquiry] = useState('');

    const handleInquiryChange = (inquiry) => {
        setSelectedInquiry(inquiry);
    };

    const items1 = [
        { 
            title: 'インソールはどのくらい持ちますか？', 
            content: '使用頻度などにより個人差が大きいものですが、一般的にはベーシックモデルでは1~2年、オーダーメイドモデルでは2~4年程度で交換が目明日でございます。' },
        { 
            title: 'スポーツをしていない人でも使えますか？', 
            content: 'もちろんです！バランス補正が強みのインソールですので、パフォーマンス向上はもちろんですが、その他にもバランスが改善されることによって今まである場所に集中していた負荷をから全体に分散させる事で負担の軽減効果も期待できます。' },
        { 
            title: '自分でどのようにケアしたらいいですか？', 
            content: '洗濯機などは使用できません。よく絞った布などで優しく拭いていただいたり、アルコール成分の入っていない除菌スプレーをご使用ください。詳しくは下の動画ギャラリーの「お手入れ方法」の動画をご覧ください。' },
    ];

    const colorbox = 'rgba(255,134,10,0.2)'


    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='motion-wrapper'
        >
            <section className='section contact'>
                <div className="body-wrapper">
                    <div className='contact-wrapper'>
                        <div className='contact-titles'>
                            <h1 className='sub-section-title'>CONTACT</h1>
                            <p className='sub-section-subtitle'>お問い合わせ</p>
                        </div>
                        <div className='popurer-q'>
                            <h3>こんな質問ではありませんか？</h3>
                            <AccordionMenu items={items1}/>
                            <div className='faq-link-box'>
                                <Link to="/faq" className='faq-link'>よくある質問を見る<FontAwesomeIcon icon={faChevronRight} /></Link>
                            </div>
                        </div>
                        <Agreed onInquiryChange={handleInquiryChange}/>
                    </div>
                </div>
                <BackgroundImage colorBox={colorbox}/>
            </section>
        </motion.div>
    );
};

export default Contact;