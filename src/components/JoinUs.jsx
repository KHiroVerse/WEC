import React from 'react';
import './JoinUs.css';

const JoinUs = () => {
  const joinOptions = [
    'as Program Partner (Sponsorship)',
    'as Speaker (Mentor)',
    'as University Partner',
  ];

  return (
    <section className="join-us-section">
      <div className="join-us-container">
        <h2>Join Us</h2>
        <p className="join-us-subtitle">Join to support us</p>
        <div className="join-us-line"></div>
        <div className="join-us-buttons">
          {joinOptions.map((option, index) => (
            <button key={index} className="join-us-button">
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;