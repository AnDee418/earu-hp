import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // 必要に応じて調整可能
    });

    return (
        <div ref={ref} className={`fade-in ${inView ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const ExpendBox = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // 必要に応じて調整可能
    });

    return (
        <div ref={ref} className={`expend-box ${inView ? 'is-expend' : ''}`}>
            {children}
        </div>
    );
};

export {FadeInSection,ExpendBox};
