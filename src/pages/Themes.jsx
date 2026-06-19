import React, { useState, useRef, useEffect } from 'react';

const tracksData = [
  {
    id: 'forensic-tech',
    spell: 'Aparecium',
    title: 'Forensic Tech',
    house: 'Slytherin Track',
    class: 'slytherin',
    role: 'Solving Crime with Technology',
    desc: 'Solving crimes and uncovering digital footprints with the help of technology. Focuses on digital forensics, data extraction, analysis of cyber trails, and crime-solving automation.'
  },
  {
    id: 'edtech',
    spell: 'Lumos',
    title: 'EdTech',
    house: 'Ravenclaw Track',
    class: 'ravenclaw',
    role: 'Transforming Education',
    desc: 'Transforming education through technology-driven solutions. Focuses on personalized learning platforms, collaborative classroom tools, virtual study spaces, and educational systems.'
  },
  {
    id: 'open-innovation',
    spell: 'Alohomora',
    title: 'Open Innovation',
    house: 'Gryffindor Track',
    class: 'gryffindor',
    role: 'Creative Problem Solving',
    desc: 'Breaking barriers with creative, cross-domain problem-solving. A track without bounds, allowing developer-wizards to unlock solutions to any multi-disciplinary challenges.'
  },
  {
    id: 'web3',
    spell: 'Decentralia',
    title: 'Web3',
    house: 'Slytherin Track',
    class: 'slytherin',
    role: 'Decentralized & Trustless',
    desc: 'Building decentralized and trustless systems of the future. Focuses on smart contract development, cryptographically secure logs, decentralized protocols, and private blockchains.'
  },
  {
    id: 'ai-agri',
    spell: 'Herbivicus',
    title: 'AI in Agriculture',
    house: 'Hufflepuff Track',
    class: 'hufflepuff',
    role: 'Smart & Sustainable Farming',
    desc: 'Leveraging AI for smarter, sustainable farming practices. Focuses on computer vision for crop health, resource optimization, weather prediction models, and automated farming solutions.'
  },
  {
    id: 'generative-ai',
    spell: 'Conjurus',
    title: 'Generative AI',
    house: 'Gryffindor Track',
    class: 'gryffindor',
    role: 'Next-Gen AI Creativity',
    desc: 'Unlocking human creativity with next-gen AI capabilities. Focuses on large language models, image and media generation models, generative coding environments, and neural synthesizers.'
  },
  {
    id: 'robotics',
    spell: 'Locomotor',
    title: 'Robotics',
    house: 'Gryffindor Track',
    class: 'gryffindor',
    role: 'Intelligent Autonomous Machines',
    desc: 'Designing intelligent, autonomous, and human-assistive machines. Focuses on physical robot design, pathfinding algorithms, sensor integration, and human-machine interaction.'
  },
  {
    id: 'cybersecurity',
    spell: 'Cave Inimicum',
    title: 'Cybersecurity',
    house: 'Slytherin Track',
    class: 'slytherin',
    role: 'Protecting the Digital World',
    desc: 'Protecting the digital world with secure and resilient systems. Focuses on warding off attacks, network defenses, vulnerability scanners, cryptography, and secure key exchanges.'
  },
  {
    id: 'fintech',
    spell: 'Gringotts',
    title: 'FinTech',
    house: 'Ravenclaw Track',
    class: 'ravenclaw',
    role: 'Redefining Financial Services',
    desc: 'Redefining financial services with digital innovation. Focuses on secure transacting channels, smart ledger bookkeeping, payment gateways, and algorithmic trading.'
  },
  {
    id: 'campus-solutions',
    spell: 'Hogwarts',
    title: 'Campus Solutions',
    house: 'Hufflepuff Track',
    class: 'hufflepuff',
    role: 'Innovating for Connected Campuses',
    desc: 'Innovating for smarter, connected, and future-ready campuses. Focuses on student utility applications, resource allocators, campus security solutions, and connected classroom technologies.'
  }
];

const themeIcons = {
  'forensic-tech': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'edtech': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3a1 1 0 0 1 1-1h15v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
    </svg>
  ),
  'open-innovation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  ),
  'web3': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  'ai-agri': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <path d="M2 22c1.25-5.32 3.86-9.84 7.82-13.53C12.87 5.72 17.5 4 22 2c-2 4.5-3.72 9.13-6.47 12.18C12.16 17.86 7.68 20.75 2 22z" />
      <path d="M2 22l7-7" />
    </svg>
  ),
  'generative-ai': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <path d="M9.82 12l10.44-10.44a1.67 1.67 0 1 1 2.36 2.36L12.18 14.36z" />
      <path d="M2 22l6-6M3 13l2-2M13 3l-2 2M3 3h1M8 8H7M9 3v1M4 9v1" />
    </svg>
  ),
  'robotics': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  'cybersecurity': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'fintech': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M6 12h12M12 12l4-4M12 12l-4 4" />
    </svg>
  ),
  'campus-solutions': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="themes-card-svg">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
    </svg>
  )
};

function TrackCard({ track, onClick }) {
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!wrapper || !card) return;

    const onMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      const maxTilt = 12;
      const angleX = -((y - yc) / yc) * maxTilt;
      const angleY = ((x - xc) / xc) * maxTilt;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.03, 1.03, 1.03)`;
    };

    const onMouseEnter = () => {
      card.style.transition = 'none';
    };

    const onMouseLeave = () => {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseenter', onMouseEnter);
    wrapper.addEventListener('mouseleave', onMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('mouseenter', onMouseEnter);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={wrapperRef} 
      className="card-wrapper" 
      data-id={track.id} 
      data-house={track.class}
      onClick={() => onClick(track)}
    >
      <div ref={cardRef} className="card themes-card">
        <div className="themes-card-icon-wrapper">{themeIcons[track.id]}</div>
        <div className="card-details" style={{ transform: 'none', pointerEvents: 'none' }}>
          <p className="theme-spell">{track.spell}</p>
          <h2 className="character-name" style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{track.title}</h2>
          <p className="character-role">{track.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Themes() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedTrack(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="characters-section" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
      <h1 className="section-title">Hacking Themes</h1>
      
      <div className="cards-grid themes-grid">
        {tracksData.map(track => (
          <TrackCard 
            key={track.id} 
            track={track} 
            onClick={setSelectedTrack} 
          />
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedTrack && (
        <div 
          className="modal-overlay active" 
          onClick={(e) => {
            if (e.target.classList.contains('modal-overlay')) {
              setSelectedTrack(null);
            }
          }}
        >
          <div className="modal-content" style={{ maxWidth: '500px' }}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedTrack(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-right" style={{ flex: 1, padding: '10px' }}>
              <h3 style={{ fontSize: '2.5rem', fontFamily: 'HarryP' }}>{selectedTrack.title}</h3>
              <div className={`modal-house ${selectedTrack.class}`}>
                {selectedTrack.house} &mdash; Spell: {selectedTrack.spell}
              </div>
              <p style={{ marginTop: '10px' }}>{selectedTrack.desc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
