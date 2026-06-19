import React, { useState, useRef, useEffect } from 'react';

const tracksData = [
  {
    id: 'gryffindor-ai',
    letter: 'G',
    title: 'Gryffindor: AI & ML',
    house: 'Gryffindor Track',
    class: 'gryffindor',
    role: 'Artificial Intelligence',
    desc: 'Brave builders pushing the boundaries of machine intelligence. Focuses on neural networks, large language models, autonomous agents, and smart automation pipelines to solve real-world problems.'
  },
  {
    id: 'slytherin-web3',
    letter: 'S',
    title: 'Slytherin: Web3 & Audit',
    house: 'Slytherin Track',
    class: 'slytherin',
    role: 'Blockchain & Security',
    desc: 'Resourceful engineers securing the decentralized wizarding vaults. Focuses on smart contract development, cryptographical protocols, decentralization, security audits, and privacy networks.'
  },
  {
    id: 'ravenclaw-dev',
    letter: 'R',
    title: 'Ravenclaw: AR/VR',
    house: 'Ravenclaw Track',
    class: 'ravenclaw',
    role: 'Metaverse & Game Design',
    desc: 'Intellectual visionaries sculpting new immersive dimensions. Focuses on virtual and augmented reality environments, interactive spatial designs, game development, and 3D modeling.'
  },
  {
    id: 'hufflepuff-impact',
    letter: 'H',
    title: 'Hufflepuff: Social Good',
    house: 'Hufflepuff Track',
    class: 'hufflepuff',
    role: 'Sustainability & Tech',
    desc: 'Loyal and dedicated developers working for the global community. Focuses on green tech, assistive accessibility tools, public educational resources, and social impact applications.'
  }
];

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
      
      const maxTilt = 15;
      const angleX = -((y - yc) / yc) * maxTilt;
      const angleY = ((x - xc) / xc) * maxTilt;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.04, 1.04, 1.04)`;
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
        <div className="themes-card-letter">{track.letter}</div>
        <div className="card-details" style={{ transform: 'none', pointerEvents: 'none' }}>
          <h2 className="character-name" style={{ fontSize: '1.9rem', marginBottom: '8px' }}>{track.title}</h2>
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
    <main className="characters-section">
      <h1 className="section-title">Hacking Themes</h1>
      
      <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '1400px' }}>
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
                {selectedTrack.house}
              </div>
              <p>{selectedTrack.desc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
