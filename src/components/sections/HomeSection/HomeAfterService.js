import React, { useEffect, useRef } from 'react';
import { WhiteButton } from '../../perts/button';
import { useInView } from 'react-intersection-observer'; 
import {FadeInSection} from '../../animaition/fade-in'; // FadeInSectionコンポーネントをインポート

import '../../../styles/section/_HomeAfterService.scss'

import GotohCrafting from '../../../assets/images/Afterservice/GotohCrafting.webp';
import ASM from '../../../assets/images/Afterservice/AfterServiceMain.webp';
import Factory from '../../../assets/images/Afterservice/factry.webp';


const HomeAfterService = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '-50px 0px'
    });

    const wrapperRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.style.transform = 'translateZ(0)';
        }
    }, []);

    const titleText = "AFTER SERVICE";
    
    return (
        <div ref={ref} className="home-after-service-wrapper" style={{ transform: 'translateZ(0)' }}>
            <div 
                className={`blank-side ${inView ? 'animate' : ''}`}
                style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            >
                <img 
                    src={GotohCrafting} 
                    alt="" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src={ASM} 
                    alt="" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src={Factory} 
                    alt="" 
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div 
                className={`text-side-wrapper ${inView ? 'animate' : ''}`}
                style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            >
                <div className="text-side-title">
                    <h3 
                        className="has-title"
                        ref={titleRef}
                        style={{
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        {titleText.split('').map((char, index) => (
                            <span
                                key={index}
                                style={{
                                    transform: 'translateZ(0)',
                                    backfaceVisibility: 'hidden',
                                    animationDelay: `${index * 0.05}s`
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h3>
                    <FadeInSection>
                        <h1 className="has-massage">
                            あなたのお気に入りを
                            <br />その先もサポート。
                        </h1>
                    </FadeInSection>
                </div>
                <FadeInSection>
                    <p>
                        生活と共にあなたの心に寄り添うものだからこそ、
                        <br />ご購入後もあなたに寄り添いしっかりサポートいたします。
                    </p>
                </FadeInSection>
                <WhiteButton to='/after-service' text="詳しく知る" />
            </div>
        </div>
    );
};

export default HomeAfterService;
