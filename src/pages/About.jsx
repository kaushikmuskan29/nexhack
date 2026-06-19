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
              Welcome to NexHack 2026, the ultimate intersection of code and magic. This 24-hour hackathon gathers the most courageous developers, brilliant designers, and logical visionaries to build cutting-edge solutions for the modern world. Prepare for 24 hours of innovation to push your limits and create something extraordinary in our intense coding marathon.
            </p>
            <p className="object-description" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              Whether you are brewing deep learning algorithms, building cryptographically secure blockchains, or sculpting immersive interactive realities, NexHack provides the resources, mentorship, and magical atmosphere to turn your ideas into functional tech-spells. Level up your skills with our expert mentors and workshops, and compete for legendary loot and epic prizes including cash rewards and exclusive tech gear.
            </p>
          </div>
        </div>
      </div>
      <div className="glimpses-section">
        <h2 className="glimpses-title">Glimpses of HackForge</h2>
        
        {/* Row 1: Rightward Scrolling (Left to Right) */}
        <div className="glimpses-marquee row-right">
          <div className="glimpses-marquee-track scroll-right">
            {/* Set 1 */}
            <div className="glimpses-set">
              <div className="glimpses-card">
                <img src="/images/event1.png" alt="NexHack 1.0 Moment 1" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event2.png" alt="NexHack 1.0 Moment 2" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event3.png" alt="NexHack 1.0 Moment 3" className="glimpses-img" />
              </div>
            </div>
            {/* Set 2 */}
            <div className="glimpses-set">
              <div className="glimpses-card">
                <img src="/images/event1.png" alt="NexHack 1.0 Moment 1" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event2.png" alt="NexHack 1.0 Moment 2" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event3.png" alt="NexHack 1.0 Moment 3" className="glimpses-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Leftward Scrolling (Right to Left) */}
        <div className="glimpses-marquee row-left">
          <div className="glimpses-marquee-track scroll-left">
            {/* Set 1 */}
            <div className="glimpses-set">
              <div className="glimpses-card">
                <img src="/images/event3.png" alt="NexHack 1.0 Moment 3" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event2.png" alt="NexHack 1.0 Moment 2" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event1.png" alt="NexHack 1.0 Moment 1" className="glimpses-img" />
              </div>
            </div>
            {/* Set 2 */}
            <div className="glimpses-set">
              <div className="glimpses-card">
                <img src="/images/event3.png" alt="NexHack 1.0 Moment 3" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event2.png" alt="NexHack 1.0 Moment 2" className="glimpses-img" />
              </div>
              <div className="glimpses-card">
                <img src="/images/event1.png" alt="NexHack 1.0 Moment 1" className="glimpses-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
