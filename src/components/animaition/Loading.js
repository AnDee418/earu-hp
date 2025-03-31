import React from 'react';
import '../../styles/perts-style/_Loading.scss'; // スタイルシートをインポート

const Loading = ({ progress, isComplete, boxesOut }) => { // プロパティを受け取るように変更
    return (
        <div className={`loading-overlay ${isComplete ? 'fade-out' : ''} ${boxesOut ? 'slide-out' : ''}`}>
            <div className="loader"></div>
            <div className="loading-percentage">{progress}%</div> {/* パーセント表示を追加 */}
            <div className="loading-box left-box"></div> {/* 左のボックスを追加 */}
            <div className="loading-box right-box"></div> {/* 右のボックスを追加 */}
        </div>
    );
};

export default Loading;

