import React from 'react';

const sponsorsData = [
  { 
    id: 'gringotts', 
    name: 'Gringotts Bank', 
    type: 'Gold Sponsor', 
    desc: 'Providing secure vault transaction ledgers, digital gold APIs, and major cash prize funding for fintech innovations.' 
  },
  { 
    id: 'ollivanders', 
    name: 'Ollivanders', 
    type: 'Hardware & IoT Sponsor', 
    desc: 'Maker of fine wands since 382 B.C. Supplying interactive wands, accelerometer controllers, and custom SDKs for motion track developers.' 
  },
  { 
    id: 'weasleys', 
    name: "Weasleys' Wizard Wheezes", 
    type: 'Creativity Partner', 
    desc: 'Sponsoring the most innovative, humorous, and entertaining hacks. Encouraging developers to push boundaries and bring magic to life.' 
  },
  { 
    id: 'prophet', 
    name: 'The Daily Prophet', 
    type: 'Official Media Partner', 
    desc: 'Covering live updates, project reviews, and interviewing the winning wizards of NexHack 2026.' 
  }
];

export default function Sponsors() {
  return (
    <main className="objects-section">
      <h1 className="section-title">Sponsors</h1>
      <div className="objects-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        {sponsorsData.map(sponsor => (
          <div key={sponsor.id} className="object-card" style={{ padding: '30px' }}>
            <div className="wand-decor" style={{ height: '50px' }} />
            <div className="object-card-content" style={{ paddingLeft: '15px' }}>
              <h2 className="object-title" style={{ fontSize: '2.2rem', marginBottom: '5px' }}>{sponsor.name}</h2>
              <h3 className="character-role" style={{ fontSize: '0.85rem', color: '#ae0001', letterSpacing: '1.5px', marginBottom: '15px', fontWeight: 'bold' }}>{sponsor.type}</h3>
              <p className="object-description" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>{sponsor.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
