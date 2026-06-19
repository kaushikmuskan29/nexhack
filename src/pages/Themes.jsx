import React, { useState, useRef, useEffect } from 'react';

const tracksData = [
  {
    id: 'forensic-tech',
    spell: 'Aparecium',
    title: 'Forensic Tech',
    role: 'Solving Crime with Technology',
    accent: '#eeb939',
    desc: 'Solving crimes and uncovering digital footprints with the help of technology. Focuses on digital forensics, data extraction, analysis of cyber trails, and crime-solving automation.'
  },
  {
    id: 'edtech',
    spell: 'Lumos',
    title: 'EdTech',
    role: 'Transforming Education',
    accent: '#eeb939',
    desc: 'Transforming education through technology-driven solutions. Focuses on personalized learning platforms, collaborative classroom tools, virtual study spaces, and educational systems.'
  },
  {
    id: 'open-innovation',
    spell: 'Alohomora',
    title: 'Open Innovation',
    role: 'Creative Problem Solving',
    accent: '#eeb939',
    desc: 'Breaking barriers with creative, cross-domain problem-solving. A track without bounds, allowing developer-wizards to unlock solutions to any multi-disciplinary challenges.'
  },
  {
    id: 'web3',
    spell: 'Decentralia',
    title: 'Web3',
    role: 'Decentralized & Trustless',
    accent: '#eeb939',
    desc: 'Building decentralized and trustless systems of the future. Focuses on smart contract development, cryptographically secure logs, decentralized protocols, and private blockchains.'
  },
  {
    id: 'ai-agri',
    spell: 'Herbivicus',
    title: 'AI in Agriculture',
    role: 'Smart & Sustainable Farming',
    accent: '#eeb939',
    desc: 'Leveraging AI for smarter, sustainable farming practices. Focuses on computer vision for crop health, resource optimization, weather prediction models, and automated farming solutions.'
  },
  {
    id: 'generative-ai',
    spell: 'Conjurus',
    title: 'Generative AI',
    role: 'Next-Gen AI Creativity',
    accent: '#eeb939',
    desc: 'Unlocking human creativity with next-gen AI capabilities. Focuses on large language models, image and media generation models, generative coding environments, and neural synthesizers.'
  },
  {
    id: 'robotics',
    spell: 'Locomotor',
    title: 'Robotics',
    role: 'Intelligent Autonomous Machines',
    accent: '#eeb939',
    desc: 'Designing intelligent, autonomous, and human-assistive machines. Focuses on physical robot design, pathfinding algorithms, sensor integration, and human-machine interaction.'
  },
  {
    id: 'cybersecurity',
    spell: 'Cave Inimicum',
    title: 'Cybersecurity',
    role: 'Protecting the Digital World',
    accent: '#eeb939',
    desc: 'Protecting the digital world with secure and resilient systems. Focuses on warding off attacks, network defenses, vulnerability scanners, cryptography, and secure key exchanges.'
  },
  {
    id: 'fintech',
    spell: 'Gringotts',
    title: 'FinTech',
    role: 'Redefining Financial Services',
    accent: '#eeb939',
    desc: 'Redefining financial services with digital innovation. Focuses on secure transacting channels, smart ledger bookkeeping, payment gateways, and algorithmic trading.'
  },
  {
    id: 'campus-solutions',
    spell: 'Hogwarts',
    title: 'Campus Solutions',
    role: 'Innovating for Connected Campuses',
    accent: '#eeb939',
    desc: 'Innovating for smarter, connected, and future-ready campuses. Focuses on student utility applications, resource allocators, campus security solutions, and connected classroom technologies.'
  }
];

function TrackCard({ track, index, onClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const angleX = -((y - yc) / yc) * 6;
      const angleY = ((x - xc) / xc) * 6;
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-4px)`;
    };

    const onMouseLeave = () => {
      card.style.transition = 'transform 0.5s ease, border-color 0.35s ease, box-shadow 0.35s ease, opacity 0.7s, scale 0.7s';
      card.style.transform = '';
    };

    const onMouseEnter = () => {
      card.style.transition = 'border-color 0.35s ease, box-shadow 0.35s ease';
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);
    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="theme-track-card"
      onClick={() => onClick(track)}
    >
      {/* Number */}
      <span className="theme-track-number">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Large decorative spell name */}
      <div className="theme-track-spell-bg" aria-hidden="true">
        {track.spell}
      </div>

      {/* Bottom content */}
      <div className="theme-track-text">
        <div className="theme-track-divider" />
        <h2 className="theme-track-title">{track.title}</h2>
        <p className="theme-track-role">{track.role}</p>
      </div>
    </div>
  );
}

export default function Themes() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedTrack(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="themes-page">
      {/* Header */}
      <div className="themes-header">
        <p className="themes-eyebrow">The Grand Hall of Tracks</p>
        <h1 className="section-title" style={{ marginBottom: '18px' }}>Hacking Themes</h1>
        <p className="themes-subheading">
          Ten magical disciplines. Choose your track and cast your spell upon the world.
        </p>
        <div className="themes-header-divider" />
      </div>

      {/* Grid */}
      <div className="theme-tracks-grid">
        {tracksData.map((track, i) => (
          <TrackCard
            key={track.id}
            track={track}
            index={i}
            onClick={setSelectedTrack}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedTrack && (
        <div
          className="modal-overlay active"
          onClick={(e) => {
            if (e.target.classList.contains('modal-overlay')) setSelectedTrack(null);
          }}
        >
          <div className="modal-content theme-modal-content">
            <button
              className="modal-close"
              onClick={() => setSelectedTrack(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="theme-modal-body" style={{ width: '100%' }}>
              <p style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: '0.75rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--gryffindor-accent)',
                marginBottom: '12px',
                opacity: 0.8
              }}>
                ✦ {selectedTrack.spell}
              </p>
              <h3 style={{
                fontFamily: 'HarryP, "Cinzel Decorative", serif',
                fontSize: '3rem',
                color: 'var(--color-text-light)',
                letterSpacing: '2px',
                lineHeight: 1.1,
                marginBottom: '8px'
              }}>
                {selectedTrack.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '24px'
              }}>
                {selectedTrack.role}
              </p>
              <div style={{
                width: '50px',
                height: '2px',
                background: 'linear-gradient(90deg, var(--gryffindor-accent), transparent)',
                marginBottom: '22px',
                borderRadius: '2px'
              }} />
              <p className="object-description" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                {selectedTrack.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
