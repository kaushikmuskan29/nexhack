import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WandCursor from './components/WandCursor';
import Home from './pages/Home';
import About from './pages/About';
import Themes from './pages/Themes';
import Prizes from './pages/Prizes';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'themes', 'prizes', 'sponsors', 'team', 'faq', 'contact'];
          const viewportCenter = window.innerHeight / 2;

          let currentSection = 'home';
          const debugInfo = [];
          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              debugInfo.push(`${id}: top=${Math.round(rect.top)}, bottom=${Math.round(rect.bottom)}`);
              if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                currentSection = id;
              }
            }
          }
          console.log(`Scroll Spy active=${currentSection} scrollY=${window.scrollY} vpCenter=${viewportCenter}`, debugInfo);
          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial call
    handleScroll();

    // Call after a short delay once React layout mounts completely
    const timer = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Global Custom Cursor */}
      <WandCursor />

      {/* Global Background */}
      <div className="global-bg-container">
        {/* Video Background for Home section */}
        <div className={`bg-layer video-bg ${activeSection === 'home' ? 'active' : ''}`}>
          <video
            src="/images/nexhack.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
          />
          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(10, 20, 40, 0.35) 0%, rgba(3, 3, 5, 0.95) 90%)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Image Background for all other sections */}
        <div className={`bg-layer home-bg ${activeSection !== 'home' ? 'active' : ''}`} />
      </div>

      {/* Floating Capsule Header */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Stacked View Sections */}
      <div id="home" className={activeSection === 'home' ? 'active' : ''}>
        <Home />
      </div>
      <div id="about" className={activeSection === 'about' ? 'active' : ''}>
        <About />
      </div>
      <div id="themes" className={activeSection === 'themes' ? 'active' : ''}>
        <Themes />
      </div>
      <div id="prizes" className={activeSection === 'prizes' ? 'active' : ''}>
        <Prizes />
      </div>
      <div id="sponsors" className={activeSection === 'sponsors' ? 'active' : ''}>
        <Sponsors />
      </div>
      <div id="team" className={activeSection === 'team' ? 'active' : ''}>
        <Team />
      </div>
      <div id="faq" className={activeSection === 'faq' ? 'active' : ''}>
        <FAQ />
      </div>
      <div id="contact" className={activeSection === 'contact' ? 'active' : ''}>
        <Contact />
      </div>
    </>
  );
}
