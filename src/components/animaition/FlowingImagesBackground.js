import React, { useEffect, useRef } from 'react';
import backgroundTexts from '../../assets/svg/earufirst-loop-text.svg'

const FlowingImagesText = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = 'translateZ(0)';
    }
  }, []);

  return (
    <div className='follow-text-wrapper'>
        <div className='follow-text-container'>
            <div className="follow-text-slider" ref={sliderRef}>
              <img 
                src={backgroundTexts} 
                alt='background' 
                className='loop-text'
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              />
              <img 
                src={backgroundTexts} 
                alt='background' 
                className='loop-text loop-text2'
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              />
            </div>
        </div>
    </div>
  );
};

export {FlowingImagesText};