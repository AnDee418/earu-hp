// ParallaxComponent.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer'; 

import {Button} from '../../perts/button';
import '../../../styles/section/_HomeProduct.scss';

const ParallaxComponent = ({ images }) => {
    const [productimage, imageInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [productText, TextInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    return (
        <div className="parallax-container">
            <div 
                ref={productText} 
                className={`text-content ${TextInView ? 'animate' : ''}`}>
                <h1>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>D</span>
                    <span>U</span>
                    <span>C</span>
                    <span>T</span>
                    <span>S</span>
                </h1>
                <h2><span>歩みを支える</span>
                    <br/><span>生活を豊かにする</span>
                    <br/><span>あなたに寄り添う<br className='sp-break'/>ブランドへ</span>
                </h2>
                <p>私たちはインソールを中心として、
                    <br/>人々の健康と豊かな生活を支える為の
                    <br/>プロダクトの開発と取扱いをしています。
                </p>
                <Button href="/products" text="ブランド一覧"/>
            </div>
            <div className="image-content">
                {images.map((image,index) => (
                    <img 
                    key={index} 
                    src={image} 
                    ref={productimage} 
                    className={`HomeProductImage ${imageInView ? 'animate' : ''}`}
                    alt="" />
                ))}
            </div>
        </div>
    );
};

export default ParallaxComponent;
