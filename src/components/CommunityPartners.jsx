import React from 'react';
import './CommunityPartners.css';
const CommunityPartners = () => {
  const partners = [
    { name: 'Dev Web3 Jogja', logo: '/Dev Web3 Jogja.png' },
    { name: 'Explore Cyptopedia', logo: '/Explore Cyptopedia.png' },
    { name: 'Manexus', logo: '/Manexus.png' },
    { name: 'Pingo Ind', logo: '/Pingo Ind.png' },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2>Our Community Partners</h2>
        <div className="partners-title-line"></div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;