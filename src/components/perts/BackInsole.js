// BackgroundImage.js
import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = ({ colorBox }) => {
    return (
        <div className='background-image-wrapper'>
            <div className='background-colorbox color-box1'
            style={{ backgroundColor: colorBox }}
            >
            </div>
            <div className='background-colorbox color-box2'
            style={{ backgroundColor: colorBox }}
            >
            </div>
        </div>
    );
    };

BackgroundImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default BackgroundImage;