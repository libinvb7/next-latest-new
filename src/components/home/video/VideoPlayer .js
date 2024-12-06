import React from 'react';

const VideoPlayer = () => {
    return (
        <video autoPlay muted loop className='datapoint-video'>
            <source src="//assets/videos/interactive-dashboards.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
