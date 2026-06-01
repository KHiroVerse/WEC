import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">WEB3 EDUCATION CENTER</h1>
        <p className="hero-subtitle">by IDNFT</p>
        <p className="hero-description">A Place to Learn, Build, and Innovate.</p>
        <div className="hero-actions">
          <button className="video-button" onClick={toggleVideo}>
            <img src="/play.png" alt="play" className="video-button-icon" />
            Play Video
          </button>
        </div>
      </div>

      {isVideoOpen && (
        <div className="video-modal-overlay" onClick={toggleVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleVideo}>&times;</button>
            <video controls autoPlay className="hero-video">
              <source src="/TVC2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;