import React from 'react';

export default function Navbar({ activeSection, onNavClick }) {
  return (
    <header>
      <div className="navbar-capsule">
        {/* Left Logo (Geeta University) */}
        <div className="navbar-logo-left" onClick={() => onNavClick('home')}>
          <img src="/images/gu_logo.png" alt="Geeta University" className="nav-logo-img" />
        </div>

        {/* Navigation Links */}
        <nav className="nav-links-container">
          <button
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => onNavClick('about')}
          >
            About
          </button>
          <button
            className={`nav-link ${activeSection === 'themes' ? 'active' : ''}`}
            onClick={() => onNavClick('themes')}
          >
            Themes
          </button>
          <button
            className={`nav-link ${activeSection === 'prizes' ? 'active' : ''}`}
            onClick={() => onNavClick('prizes')}
          >
            Prizes
          </button>
          <button
            className={`nav-link ${activeSection === 'sponsors' ? 'active' : ''}`}
            onClick={() => onNavClick('sponsors')}
          >
            Sponsors
          </button>
          <button
            className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}
            onClick={() => onNavClick('team')}
          >
            Team
          </button>
          <button
            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
            onClick={() => onNavClick('faq')}
          >
            FAQ
          </button>
          <button
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => onNavClick('contact')}
          >
            Contact
          </button>
        </nav>

        {/* Right Logo (Geeta Technical Hub) */}
        <div className="navbar-logo-right">
          <img src="/images/gth.png" alt="Geeta Technical Hub" className="nav-logo-img" />
        </div>
      </div>
    </header>
  );
}

