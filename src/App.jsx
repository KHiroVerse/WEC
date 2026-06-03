import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import AdminLogin from './components/AdminLogin';

const Home = ({ onNavigate, heroRef }) => {
  return (
    <>
      <div ref={heroRef}>
        <Hero />
      </div>
      <Description />
      <ProgramPartners />
      <CommunityPartners />
      <JoinUs />
      <News onAllNewsClick={() => onNavigate('/all-news')} />
      <Event onAllEventsClick={() => onNavigate('/all-events')} />
      <ProjectShowcase onViewMoreClick={() => onNavigate('/all-projects')} />
      <ContactUs />
    </>
  );
};

const AppContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom <= 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Re-run when path changes to reset scroll state if needed

  const handleNavigate = (path, anchor) => {
    if (anchor) {
      // For anchor links, we use window.location to ensure the hash is handled by the browser
      // and the page scrolls to the element.
      window.location.href = `${path}${anchor}`;
    } else {
      navigate(path);
    }
  };

  // Check if we are on the home page to show the Navbar with scroll effect
  const showNavbar = location.pathname === '/' || 
                    location.pathname === '/all-news' || 
                    location.pathname === '/all-events' || 
                    location.pathname === '/all-projects';

  return (
    <>
      {showNavbar && <Navbar scrolled={isScrolled} onNavigate={handleNavigate} />}
      <Routes>
        <Route
          path="/"
          element={<Home heroRef={heroRef} onNavigate={handleNavigate} />}
        />
        <Route
          path="/all-news"
          element={<AllNews onBack={() => navigate('/')} />}
        />
        <Route
          path="/all-events"
          element={<AllEvents onBack={() => navigate('/')} />}
        />
        <Route
          path="/all-projects"
          element={<AllProjects onBack={() => navigate('/')} />}
        />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;