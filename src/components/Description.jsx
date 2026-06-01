import React, { useState, useRef } from 'react';
import './Description.css';

const Description = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        // Unmute and Play
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      } else {
        // Pause
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section id="about" className="description-section">
      <div className="description-container">
        <div className="description-text">
          <h2>About us</h2>
          <p>
            The Web3 Education Center (WEC) is a pioneering initiative by IDNFT in collaboration with leading Indonesian universities and Web3 and AI industry partners. Our mission is to build Indonesia’s next generation of blockchain and AI talent through education, innovation, and direct industry collaboration.
WEC serves as a physical and digital hub for students to learn, collaborate, and create within the Web3 and AI ecosystem, connecting developers, creators and builders through educational programs; workshops, research, hackathon and build real projects.
By partnering with the Web3 Education Center (WEC), industry players can directly engage with the academic ecosystem, strengthen brand adoption, and contribute to the advancement of blockchain and AI education and adoption in Indonesia.
At the same time, universities can connect directly with the Web3 industry ecosystem, support students in developing relevant skills, and accessing broader career opportunities.

          </p>
        </div>
        <div className="description-media">
          <div className="video-wrapper">
            <video 
              ref={videoRef}
              loop 
              muted 
              playsInline 
              className="description-video"
            >
              <source src="/EKRAF.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <button className="play-button" onClick={togglePlay} aria-label="Play">
                <img src="/play.png" alt="play" className="play-icon-img" />
              </button>
            )}
            <div className="video-controls">
              <button 
                className="unmute-button" 
                onClick={toggleMute} 
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>
          <p className="video-caption">Video Tapping WAMENKRAF for WEC 2026</p>
        </div>
      </div>
    </section>
  );
};

export default Description;