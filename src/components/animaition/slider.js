import React from 'react';
import '../../styles/_animaition.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoSlider = ({ videos }) => {
  return (
    <div className="slider-container">
      <div className="slider">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="slide"
          >
            <div className='slide-inner'>
              <img src={video.thumbnail} alt={video.title} />
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <p>{video.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;