import React, { useEffect, useState } from 'react';
import '../../styles/perts-style/_backSlide.scss';

const FlowingImages = ({ imagesLeft, onImagesLoaded }) => {
    const [currentIndexLeft, setCurrentIndexLeft] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [scale, setScale] = useState(1.3);
    const [currentBreakpoint, setCurrentBreakpoint] = useState('xxl');

    // Define breakpoints matching the SCSS breakpoints
    const breakpoints = {
        xs: 380,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
    };

    // Define translate positions for each breakpoint
    const translatePositions = {
        xxl: { x: windowWidth * 0.9, y: windowHeight * 0.9 },
        xl: { x: windowWidth * 0.85, y: windowHeight * 0.85 },
        lg: { x: windowWidth * 0.8, y: windowHeight * 0.8 },
        md: { x: windowWidth * 0.75, y: windowHeight * 0.75 },
        sm: { x: windowWidth * 0.7, y: windowHeight * 0.7 },
        xs: { x: windowWidth * 0.65, y: windowHeight * 0.65 },
    };

    useEffect(() => {
        const intervalLeft = setInterval(() => {
            setCurrentIndexLeft((prevIndex) => (prevIndex + 1) % imagesLeft.length);
        }, 5000); // Images change every 5 seconds

        return () => {
            clearInterval(intervalLeft);
        };
    }, [imagesLeft.length]);

    useEffect(() => {
        let loadedImages = 0;
        const totalImages = imagesLeft.length;

        const handleImageLoad = () => {
            loadedImages += 1;
            if (loadedImages === totalImages) {
                onImagesLoaded(); // Notify when all images are loaded
            }
        };

        imagesLeft.forEach((image) => {
            const img = new Image();
            img.src = image;
            img.onload = handleImageLoad;
        });
    }, [imagesLeft, onImagesLoaded]);

    useEffect(() => {
        const determineBreakpoint = (width) => {
            if (width <= breakpoints.xs) return 'xs';
            if (width <= breakpoints.sm) return 'sm';
            if (width <= breakpoints.md) return 'md';
            if (width <= breakpoints.lg) return 'lg';
            if (width <= breakpoints.xl) return 'xl';
            return 'xxl';
        };

        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            setWindowHeight(window.innerHeight);
            
            // Determine current breakpoint
            const bp = determineBreakpoint(width);
            setCurrentBreakpoint(bp);

            // Calculate new scale based on window width
            const calculatedScale = 0.8 + ((width - 800) / 1200) * 0.5;
            const newScale = Math.max(0.8, Math.min(1.3, calculatedScale));
            setScale(newScale);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="image-split-screen">
            <div className="screen-clip">
                <div className="image-container">
                    {imagesLeft.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`slide-${index}`}
                            className={index === currentIndexLeft ? 'active' : ''}
                            onLoad={() => console.log(`Image ${index} loaded`)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlowingImages;
