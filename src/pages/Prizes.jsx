import React from 'react';

const objectsData = [
  {
    id: 'howler',
    title: 'The Howler (Best Pitch)',
    description: 'Awarded to the team that delivers the most vocal, creative, and memorable project demonstration. Like the roaring scarlet wizarding letter, your presentation must capture the attention of everyone in the Great Hall and leave a lasting impression.',
    image: '/images/howler.png',
    alt: 'Screaming Howler Envelope'
  },
  {
    id: 'galleons',
    title: 'Galleon Pool (Grand Bounty)',
    description: 'A massive cash prize pool of $15,000 USD distributed in golden wizarding Galleons. Awarded to the top projects across the general categories that demonstrate stellar execution, usability, and technical integration.',
    image: '/images/galleon.png',
    alt: 'Embossed Golden Galleon Coin'
  },
  {
    id: 'snitch',
    title: 'Golden Snitch (Ultimate Winner)',
    description: 'Awarded to the single team that catches the Golden Snitch—achieving absolute victory as the Grand Champion of NexHack 2026. This prize celebrates the team that showcases the most polished, complete, and visionary project of the hackathon.',
    image: '/images/snitch.png',
    alt: 'Flying Golden Snitch with wings'
  },
  {
    id: 'wand',
    title: 'Elder Wand (Clean Code Mastery)',
    description: 'The supreme prize for the developers who wield unmatched mastery over their codebase. Awarded to the team that builds the most architecturally sound, clean, and optimized code, demonstrating absolute dominance in software engineering.',
    image: '/images/elder_wand.png',
    alt: 'The Elder Wand resting'
  }
];

export default function Prizes() {
  return (
    <main className="objects-section">
      <h1 className="section-title">NexHack Rewards</h1>

      <div className="objects-container">
        {objectsData.map((obj, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <section 
              key={obj.id} 
              className={`object-row ${isReverse ? 'reverse' : ''}`}
              aria-labelledby={`${obj.id}-title`}
            >
              <div className="object-card">
                <div className="wand-decor" />
                <div className="object-card-content">
                  <h2 id={`${obj.id}-title`} className="object-title">
                    {obj.title}
                  </h2>
                  <div className="object-divider" />
                  <p className="object-description">
                    {obj.description}
                  </p>
                </div>
              </div>
              <div className="object-image-side">
                <div className="object-img-wrapper">
                  <div className="object-glow-backdrop" />
                  <img 
                    src={obj.image} 
                    alt={obj.alt} 
                    className="object-img" 
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
