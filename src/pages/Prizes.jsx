import React, { useState, useEffect, useRef } from 'react';

const objectsData = [
  {
    id: 'galleons',
    rank: '2nd',
    title: '2nd Prize: Galleon Pool',
    subtitle: 'Grand Runners-Up',
    description: 'A massive cash prize pool distributed in golden wizarding Galleons. Awarded to the runner-up projects that demonstrate stellar execution, usability, and technical integration.',
    image: '/images/galleon.png',
    alt: 'Embossed Golden Galleon Coin',
    class: 'left-card'
  },
  {
    id: 'snitch',
    rank: '1st',
    title: '1st Prize: Golden Snitch',
    subtitle: 'Ultimate Champions',
    description: 'Awarded to the single team that catches the Golden Snitch—achieving absolute victory as the Grand Champion of NexHack 2026. This prize celebrates the team that showcases the most polished, complete, and visionary project of the hackathon.',
    image: '/images/snitch.png',
    alt: 'Flying Golden Snitch with wings',
    class: 'center-card'
  },
  {
    id: 'wand',
    rank: '3rd',
    title: '3rd Prize: Elder Wand',
    subtitle: 'Technical Mastery',
    description: 'The supreme prize for the developers who wield unmatched mastery over their codebase. Awarded to the team that builds the most architecturally sound, clean, and optimized code, demonstrating absolute dominance in software engineering.',
    image: '/images/elder_wand.png',
    alt: 'The Elder Wand resting',
    class: 'right-card'
  }
];

function PrizeCard({ obj, onClick, unfolded }) {
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!wrapper || !card || !unfolded) return;

    // Only apply 3D tilt on desktop (width > 768px)
    const isTouch = window.matchMedia('(max-width: 768px)').matches;
    if (isTouch) return;

    const onMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      const maxTilt = 15;
      const angleX = -((y - yc) / yc) * maxTilt;
      const angleY = ((x - xc) / xc) * maxTilt;
      
      card.style.zIndex = '15';
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05) translateY(-12px)`;
    };

    const onMouseEnter = () => {
      card.style.transition = 'transform 0.1s ease, border-color 0.4s ease, box-shadow 0.4s ease';
    };

    const onMouseLeave = () => {
      card.style.zIndex = '';
      card.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.25, 1), border-color 0.4s ease, box-shadow 0.4s ease';
      
      // Reset to original fanned rotation angles
      let baseRotation = 'rotate(0deg)';
      if (obj.class === 'left-card') baseRotation = 'rotate(-4deg)';
      if (obj.class === 'right-card') baseRotation = 'rotate(4deg)';
      if (obj.class === 'center-card') baseRotation = 'translateY(0) scale(1.02)';
      
      card.style.transform = baseRotation;
    };

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseenter', onMouseEnter);
    wrapper.addEventListener('mouseleave', onMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('mouseenter', onMouseEnter);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [unfolded, obj.class]);

  return (
    <div 
      ref={wrapperRef} 
      className="prize-cinematic-wrapper"
      onClick={() => onClick(obj)}
    >
      <div 
        ref={cardRef} 
        className={`prize-cinematic-card ${obj.class}`}
      >
        <div className="prize-card-glow-backdrop" />
        <div className="prize-card-inner">
          <div className="prize-card-badge">{obj.rank}</div>
          <div className="prize-card-img-wrapper">
            <img src={obj.image} alt={obj.alt} className="prize-card-img" />
          </div>
          <h2 className="prize-card-title">{obj.title}</h2>
          <p className="prize-card-subtitle">{obj.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Prizes() {
  const [unfolded, setUnfolded] = useState(false);
  const containerRef = useRef(null);
  const [selectedPrize, setSelectedPrize] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUnfolded(true);
        }
      },
      {
        threshold: 0.15
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <main className="objects-section" ref={containerRef}>
      <h1 className="section-title">NexHack Rewards</h1>

      <div className={`prizes-cinematic-row ${unfolded ? 'unfolded' : ''}`}>
        {objectsData.map((obj) => (
          <PrizeCard
            key={obj.id}
            obj={obj}
            unfolded={unfolded}
            onClick={setSelectedPrize}
          />
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedPrize && (
        <div 
          className="modal-overlay active" 
          onClick={(e) => {
            if (e.target.classList.contains('modal-overlay')) {
              setSelectedPrize(null);
            }
          }}
        >
          <div className="modal-content" style={{ maxWidth: '600px' }}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedPrize(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', padding: '20px' }}>
              <img src={selectedPrize.image} alt={selectedPrize.alt} style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain', filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.5))' }} />
            </div>
            <div className="modal-right">
              <h3 style={{ fontSize: '2.4rem', fontFamily: 'HarryP', marginBottom: '5px' }}>{selectedPrize.title}</h3>
              <div className="modal-house gryffindor" style={{ letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '15px' }}>
                Rank: {selectedPrize.rank} &mdash; {selectedPrize.subtitle}
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#d1d5db' }}>{selectedPrize.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
