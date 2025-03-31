import React, { useEffect, useState }  from 'react';
import '../../styles/_animaition.scss';

const ScrollDownIndicator = () => {
    return (
        <div className="scroll-down-indicator">
            <div className='arrow-container'>
                <div className="arrow"></div>
            </div>
            <p>Scroll Down</p>
        </div>
    );
};

const IconOnly = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // スクロール位置が100ピクセルを超えたら状態を更新
            if (window.scrollY > 32) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // クリーンアップ: コンポーネントのアンマウント時にイベントリスナーを削除
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`icon-scroll-down ${isScrolled ? 'scrolledChange' : ''}`}>
            <div className='arrow-container'>
                <div className="arrow"></div>
            </div>
        </div>
    );
};

export { ScrollDownIndicator, IconOnly };