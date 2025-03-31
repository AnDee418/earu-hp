import React from 'react';
import '../../styles/_animaition.scss'

const ScrollDownIndicator = () => {
    return (
        <div className="motion-container">
            <span className="scroll-text">Scroll</span>
            <div className="scroll-line"></div> 
        </div>
    );
};

export default ScrollDownIndicator;