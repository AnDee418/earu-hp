import React from 'react';
import { Link } from 'react-router-dom';

const OverViewLink = () => {
    return (
        <div className="overview-link">
            <Link to="/overview">
                <h1>OVERVIEW</h1>
                <h3>会社概要</h3>
            </Link>
        </div>
    );
};

export default OverViewLink;
