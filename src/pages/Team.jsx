import React, { useState, useRef, useEffect } from 'react';

const teamData = [
  {
    id: 'harry-potter',
    name: 'Harry Potter',
    house: 'Gryffindor House / AI Track Lead',
    class: 'gryffindor',
    role: 'AI & Intellect Lead',
    image: '/images/harry_potter.png',
    desc: 'The lead builder for the AI track at NexHack. Drawing inspiration from Gryffindor courage, this track focuses on developing state-of-the-art neural networks, generative AI agents, and custom machine learning pipelines to solve complex automation challenges.'
  },
  {
    id: 'ron-weasley',
    name: 'Ron Weasley',
    house: 'Gryffindor House / UI Lead',
    class: 'gryffindor',
    role: 'Frontend & Design Lead',
    image: '/images/ron_weasley.png',
    desc: 'The frontend lead for the Gryffindor track. Focused on highly responsive interface designs, custom web structures, and wizarding animation systems. This category challenges builders to create stunning user journeys with zero loading latency.'
  },
  {
    id: 'hermione-granger',
    name: 'Hermione Granger',
    house: 'Gryffindor House / Logic Expert',
    class: 'gryffindor',
    role: 'Core Algorithms Lead',
    image: '/images/hermione_granger.png',
    desc: 'The supreme authority on data logic and parsing algorithms at NexHack. This track focuses on backend optimizations, search queries, database design, and algorithmic efficiency to scale wizarding applications to millions of active queries.'
  },
  {
    id: 'albus-dumbledore',
    name: 'Albus Dumbledore',
    house: 'Hogwarts / Grand Judge',
    class: 'hogwarts',
    role: 'Open Track Director',
    image: '/images/albus_dumbledore.png',
    desc: "The chief panel organizer and final arbiter of NexHack 2026. Under Dumbledore's guidance, the Open Track welcomes any innovative software solution that breaks the mold of conventional engineering and crafts true magic."
  },
  {
    id: 'severus-snape',
    name: 'Severus Snape',
    house: 'Slytherin House / Cryptographer',
    class: 'slytherin',
    role: 'Blockchain & Security Lead',
    image: '/images/severus_snape.png',
    desc: 'The lead instructor for the Slytherin Cryptography track. Focused on high-security vaults, smart contract execution, distributed databases, and zero-knowledge proofs. Builders must design secure code that blocks all intrusion attempts.'
  },
  {
    id: 'lord-voldemort',
    name: 'Lord Voldemort',
    house: 'Slytherin House / Red Team Lead',
    class: 'slytherin',
    role: 'Cyber Defense Advisor',
    image: '/images/lord_voldemort.png',
    desc: 'The ultimate adversarial simulator for our cybersecurity track. Teams will audit, reverse-engineer, and fortify critical wizarding endpoints to withstand high-volume distributed server attacks and protect the integrity of the magic system.'
  }
];

function TeamCard({ member, onClick }) {
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
      data-id={member.id} 
      data-house={member.class}
      onClick={() => onClick(member)}
    >
      <div ref={cardRef} className="card">
        <div className="card-image-container">
          <img src={member.image} alt={member.name} className="character-portrait" />
        </div>
        <img src={member.image} alt={member.name} className="character-popout" />
        <div className="card-details">
          <h2 className="character-name">{member.name}</h2>
          <p className="character-role">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="characters-section">
      <h1 className="section-title">Organizing Committee</h1>
      
      <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '1400px' }}>
        {teamData.map(member => (
          <TeamCard 
            key={member.id} 
            member={member} 
            onClick={setSelectedMember} 
          />
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedMember && (
        <div 
          className="modal-overlay active" 
          onClick={(e) => {
            if (e.target.classList.contains('modal-overlay')) {
              setSelectedMember(null);
            }
          }}
        >
          <div className="modal-content">
            <button 
              className="modal-close" 
              onClick={() => setSelectedMember(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-left">
              <img src={selectedMember.image} alt={selectedMember.name} />
            </div>
            <div className="modal-right">
              <h3>{selectedMember.name}</h3>
              <div className={`modal-house ${selectedMember.class}`}>
                {selectedMember.house}
              </div>
              <p>{selectedMember.desc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
