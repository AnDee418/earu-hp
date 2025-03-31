import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleTouch = (e) => {
        e.preventDefault(); // タップ後のクリックイベントを防ぐ
        setShowTooltip(!showTooltip);
    };

    return (
        <div
        className="tooltip-container"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={handleTouch}
        >
        {children}
        {showTooltip && <div className="tooltip">{content}</div>}
        </div>
    );
};

export default Tooltip;
