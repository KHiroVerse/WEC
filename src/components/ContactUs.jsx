import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const contactActions = [
    { icon: '📧', label: 'Email Us', value: 'https://mail.google.com/mail/?view=cm&fs=1&to=hi@idnft.id' },
    { icon: '/IGLOGO.png', label: 'Instagram', value: 'https://www.instagram.com/web3educenter?igsh=OXp1czc2bnd5aGIy', isImage: true },
    { icon: '/LinkedINLOGO.png', label: 'LinkedIn', value: 'https://id.linkedin.com/company/idnft', isImage: true },
    { icon: '/X.png', label: 'Twitter', value: 'https://x.com/web3educenter', isImage: true },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="contact-line"></div>
        <div className="contact-content">
          <div className="contact-actions-grid">
            {contactActions.map((action, index) => (
              <a key={index} href={action.value} className="contact-button" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">
                  {action.isImage ? <img src={action.icon} alt={action.label} className="contact-icon-img" /> : action.icon}
                </span>
                <span className="contact-label">{action.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a 
        href="https://wa.me/qr/Q6UYR7VU6TNUA1" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src="/WALOGO.png" alt="WhatsApp" className="whatsapp-icon-img" />
      </a>
    </section>
  );
};

export default ContactUs;