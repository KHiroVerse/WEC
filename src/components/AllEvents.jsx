import React from 'react';
import './AllEvents.css';

const AllEvents = ({ onBack }) => {
  const events = [
    {
      id: 1,
      title: 'Web3 & AI Hackathon 2026',
      date: 'August 15-17, 2026',
      location: 'Jakarta, Indonesia',
      description: 'Join us for a three-day intensive hackathon focused on building innovative Web3 and AI solutions.',
    },
    {
      id: 2,
      title: 'Blockchain Developers Meetup',
      date: 'September 5, 2026',
      location: 'Online',
      description: 'A networking event for developers interested in exploring the latest trends in blockchain technology.',
    },
    {
      id: 3,
      title: 'AI for Web3 Workshop',
      date: 'October 12, 2026',
      location: 'Surabaya, Indonesia',
      description: 'Hands-on workshop covering the integration of AI models into decentralized applications.',
    },
    {
      id: 4,
      title: 'Ethereum Ecosystem Summit',
      date: 'November 20-22, 2026',
      location: 'Bali, Indonesia',
      description: 'A premier gathering of Ethereum developers, researchers, and enthusiasts to discuss the future of the network.',
    },
    {
      id: 5,
      title: 'DeFi Mastery Masterclass',
      date: 'December 5, 2026',
      location: 'Online',
      description: 'Deep dive into decentralized finance protocols, liquidity mining, and advanced trading strategies.',
    },
    {
      id: 6,
      title: 'NFT & Digital Art Showcase',
      date: 'January 15, 2027',
      location: 'Bandung, Indonesia',
      description: 'Celebrating the intersection of art and blockchain with renowned digital artists and collectors.',
    },
    {
      id: 7,
      title: 'Web3 Security Seminar',
      date: 'February 10, 2027',
      location: 'Jakarta, Indonesia',
      description: 'Learn about smart contract security and best practices to protect your digital assets.',
    },
    {
      id: 8,
      title: 'Metaverse Builder Day',
      date: 'March 22, 2027',
      location: 'Online',
      description: 'A day of building and exploring the next generation of immersive virtual worlds.',
    },
    {
      id: 9,
      title: 'Crypto Networking Night',
      date: 'April 5, 2027',
      location: 'Bali, Indonesia',
      description: 'Connect with founders, investors, and developers in the crypto space.',
    },
  ];

  return (
    <div className="all-events-page">
      <header className="all-events-header">
        <button className="back-button" onClick={onBack}>&larr; Back to Home</button>
        <h1>All Events</h1>
        <div className="all-events-line"></div>
      </header>

      <div className="all-events-container">
        <div className="all-events-grid">
          {events.map((event) => (
            <div key={event.id} className="all-events-card">
              <div className="all-events-date">{event.date}</div>
              <h3 className="all-events-title">{event.title}</h3>
              <p className="all-events-location">📍 {event.location}</p>
              <p className="all-events-description">{event.description}</p>
              <button className="all-events-button">Register Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;