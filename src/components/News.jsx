import React from 'react';
import './News.css';

const News = ({ onAllNewsClick }) => {
  const newsItems = [
    {
      id: 1,
      title: 'WEC Announces New Web3 Curriculum',
      date: 'May 20, 2026',
      excerpt: 'We are excited to announce the launch of our latest blockchain development course...',
    },
    {
      id: 2,
      title: 'Successful Hackathon in Jakarta',
      date: 'May 15, 2026',
      excerpt: 'The recent WEC hackathon saw incredible talent and innovative Web3 solutions...',
    },
    {
      id: 3,
      title: 'New University Partnership Established',
      date: 'May 10, 2026',
      excerpt: 'WEC has signed a new MOU with a leading Indonesian university to expand AI education...',
    },
  ];

  return (
    <section id="news" className="news-section">
      <div className="news-container">
        <h2>Latest News</h2>
        <div className="news-line"></div>
        <div className="news-grid">
          {newsItems.slice(0, 3).map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-date">{item.date}</div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-excerpt">{item.excerpt}</p>
              <button className="read-more-button">Read More</button>
            </div>
          ))}
        </div>
        <button className="all-news-button" onClick={onAllNewsClick}>
          View All News
        </button>
      </div>
    </section>
  );
};

export default News;