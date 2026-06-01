import React from 'react';
import './Event.css';

const Event = ({ onAllEventsClick }) => {
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
  ];

  return (
    <section id="event" className="event-section">
      <div className="event-container">
        <h2>Upcoming Events</h2>
        <div className="event-line"></div>
        <div className="event-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-info">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">📍 {event.location}</p>
                <p className="event-description">{event.description}</p>
                <button className="event-button">Register Now</button>
              </div>
            </div>
          ))}
        </div>
        <button className="all-events-button" onClick={onAllEventsClick}>
          View All Events
        </button>
      </div>
    </section>
  );
};

export default Event;