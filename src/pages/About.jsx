import React from 'react';

export default function About() {
  return (
    <main className="objects-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 className="section-title" style={{ marginBottom: '40px' }}>About NexHack</h1>
      <div className="objects-container" style={{ gap: '0' }}>
        <div className="object-card" style={{ maxWidth: '800px', margin: '0 auto', float: 'none' }}>
          <div className="wand-decor" />
          <div className="object-card-content" style={{ textAlign: 'center', paddingLeft: '0' }}>
            <h2 className="object-title" style={{ fontSize: '2.8rem' }}>The Wizarding Hackathon</h2>
            <div className="object-divider" style={{ margin: '15px auto 25px auto' }} />
            <p className="object-description" style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Welcome to NexHack 2026, the ultimate intersection of code and magic. This 36-hour hackathon gathers the most courageous developers, brilliant designers, and logical visionaries to build cutting-edge solutions for the modern world.
            </p>
            <p className="object-description" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              Whether you are brewing deep learning algorithms, building cryptographically secure blockchains, or sculpting immersive interactive realities, NexHack provides the resources, mentorship, and magical atmosphere to turn your ideas into functional tech-spells.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
