import React from "react";
import "../../styles/perts-style/_SubmitButton.scss"

const SubmitButton = () => {
    return (
        <button type="submit" className="container">
            <a href="#" className="button type--C">
            <div className="button__line" />
            <div className="button__line" />
            <span className="button__text">問い合わせする</span>
            <div className="button__drow1" />
            <div className="button__drow2" />
            </a>
        </button>
    );
};

export default SubmitButton;
