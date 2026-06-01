import React from 'react';
import './AllNews.css';

const AllNews = ({ onBack }) => {
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
    {
      id: 4,
      title: 'Web3 Ecosystem Growth in SE Asia',
      date: 'April 25, 2026',
      excerpt: 'Exploring the rapid expansion of blockchain adoption across Southeast Asian nations...',
    },
    {
      id: 5,
      title: 'Upcoming AI & Web3 Summit',
      date: 'April 10, 2026',
      excerpt: 'Join industry leaders for a deep dive into the convergence of AI and decentralized technologies...',
    },
  ];

  return (
    <div className="all-news-page">
      <header className="all-news-header">
        <button className="back-button" onClick={onBack}>&larr; Back to Home</button>
        <h1>All News</h1>
        <div className="all-news-line"></div>
      </header>

      <div className="all-news-container">
        <div className="all-news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="all-news-card">
              <div className="all-news-date">{item.date}</div>
              <h3 className="all-news-title">{item.title}</h3>
              <p className="all-news-excerpt">{item.excerpt}</p>
              <button className="all-news-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNews;