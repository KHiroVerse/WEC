import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import ProgramPartners from './components/ProgramPartners';
import CommunityPartners from './components/CommunityPartners';
import JoinUs from './components/JoinUs';
import News from './components/News';
import Event from './components/Event';
import ProjectShowcase from './components/ProjectShowcase';
import ContactUs from './components/ContactUs';
import AllNews from './components/AllNews';
import AllEvents from './components/AllEvents';
import AllProjects from './components/AllProjects';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom <= 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <div ref={heroRef}>
              <Hero />
            </div>
            <Description />
            <ProgramPartners />
            <CommunityPartners />
            <JoinUs />
            <News onAllNewsClick={() => handleNavigate('all-news')} />
            <Event onAllEventsClick={() => handleNavigate('all-events')} />
            <ProjectShowcase onViewMoreClick={() => handleNavigate('all-projects')} />
            <ContactUs />
          </>
        );
      case 'all-news':
        return <AllNews onBack={() => handleNavigate('home')} />;
      case 'all-events':
        return <AllEvents onBack={() => handleNavigate('home')} />;
      case 'all-projects':
        return <AllProjects onBack={() => handleNavigate('home')} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar scrolled={isScrolled} onNavigate={handleNavigate} />
      {renderPage()}
    </>
  );
}

export default App;