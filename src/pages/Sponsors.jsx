import React from 'react';

/* Replace src values with actual logo image paths when available */
const sponsorTiers = [
  {
    tier: 'Gold Sponsors',
    icon: '✦',
    accentColor: '#eeb939',
    size: 'large',
    sponsors: [
      { id: 'gringotts',  src: null, role: 'Title Sponsor' },
      { id: 'ollivanders', src: null, role: 'Hardware Sponsor' },
    ]
  },
  {
    tier: 'Platform Partner',
    icon: '◈',
    accentColor: '#c084fc',
    size: 'medium',
    sponsors: [
      { id: 'ministry', src: null, role: 'Cloud Partner' },
      { id: 'flourish',  src: null, role: 'Platform Partner' },
    ]
  },
  {
    tier: 'Special Sponsors',
    icon: '⬡',
    accentColor: '#38bdf8',
    size: 'medium',
    sponsors: [
      { id: 'weasleys',  src: null, role: 'Creativity Sponsor' },
      { id: 'honeyduke', src: null, role: 'Food Sponsor' },
      { id: 'quidditch', src: null, role: 'Sports-Tech Sponsor' },
    ]
  },
];

const communityPartners = [
  { id: 'prophet',    src: null },
  { id: 'hogsmead',   src: null },
  { id: 'sorting',    src: null },
  { id: 'three-b',    src: null },
  { id: 'divination', src: null },
  { id: 'patronus',   src: null },
  { id: 'leaky',      src: null },
  { id: 'floo',       src: null },
];

function LogoCard({ sponsor, size, accentColor }) {
  return (
    <div className="sponsor-card-wrap">
      <a
        href="#"
        className={`sponsor-logo-card sponsor-logo-card--${size}`}
        style={{ '--accent': accentColor }}
      >
        {sponsor.src
          ? <img src={sponsor.src} alt="sponsor logo" className="sponsor-logo-img" />
          : <div className="sponsor-logo-placeholder" />
        }
      </a>
      {sponsor.role && (
        <p className="sponsor-role-label">{sponsor.role}</p>
      )}
    </div>
  );
}

function TierSection({ tier }) {
  return (
    <div className="sponsor-tier">
      <div className="sponsor-tier-header">
        <span className="sponsor-tier-icon" style={{ color: tier.accentColor }}>{tier.icon}</span>
        <h2 className="sponsor-tier-title" style={{ color: tier.accentColor }}>{tier.tier}</h2>
        <div className="sponsor-tier-line" style={{ background: `linear-gradient(90deg, ${tier.accentColor}50, transparent)` }} />
      </div>

      <div className={`sponsor-tier-grid sponsor-tier-grid--${tier.size}`}>
        {tier.sponsors.map(s => (
          <LogoCard key={s.id} sponsor={s} size={tier.size} accentColor={tier.accentColor} />
        ))}
      </div>
    </div>
  );
}

function CommunityMarquee() {
  const accentColor = '#34d399';
  const row1 = [...communityPartners, ...communityPartners];
  const row2 = [...communityPartners, ...communityPartners].reverse();

  return (
    <div className="sponsor-tier">
      <div className="sponsor-tier-header">
        <span className="sponsor-tier-icon" style={{ color: accentColor }}>○</span>
        <h2 className="sponsor-tier-title" style={{ color: accentColor }}>Community Partners</h2>
        <div className="sponsor-tier-line" style={{ background: `linear-gradient(90deg, ${accentColor}50, transparent)` }} />
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track--left">
          {row1.map((p, i) => (
            <a key={i} href="#" className="marquee-logo-card" style={{ '--accent': accentColor }}>
              {p.src
                ? <img src={p.src} alt="partner logo" className="sponsor-logo-img" />
                : <div className="sponsor-logo-placeholder" />
              }
            </a>
          ))}
        </div>

        <div className="marquee-track marquee-track--right">
          {row2.map((p, i) => (
            <a key={i} href="#" className="marquee-logo-card" style={{ '--accent': accentColor }}>
              {p.src
                ? <img src={p.src} alt="partner logo" className="sponsor-logo-img" />
                : <div className="sponsor-logo-placeholder" />
              }
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <main className="objects-section sponsors-page">
      {/* Header */}
      <div className="themes-header" style={{ marginBottom: '70px' }}>
        <p className="themes-eyebrow">Powered By</p>
        <h1 className="section-title" style={{ marginBottom: '16px' }}>Sponsors</h1>
        <p className="themes-subheading">
          The wizarding world behind NexHack 2026 — organisations that believe in the next generation of builders.
        </p>
        <div className="themes-header-divider" />
      </div>

      {/* Tier sections */}
      <div className="sponsors-tiers-wrapper">
        {sponsorTiers.map((tier, i) => (
          <TierSection key={i} tier={tier} />
        ))}
        <CommunityMarquee />
      </div>

      {/* ── Become a Sponsor CTA ── */}
      <div className="sponsor-cta-block">
        {/* Animated bg orbs */}
        <div className="cta-orb cta-orb--gold" />
        <div className="cta-orb cta-orb--purple" />

        {/* Left: copy */}
        <div className="cta-left">
          <p className="themes-eyebrow" style={{ marginBottom: '14px', textAlign: 'left' }}>
            ✦ &nbsp;Join the Magic
          </p>
          <h2 className="sponsor-cta-title">Become a<br />Sponsor</h2>
          <p className="sponsor-cta-desc">
            Partner with NexHack 2026 and place your brand at the heart of
            innovation. Connect with 500+ developers, designers, and future
            tech leaders — all in one spellbinding weekend.
          </p>

          {/* Perks */}
          <ul className="cta-perks">
            <li><span className="cta-perk-dot" />Brand visibility across all event materials</li>
            <li><span className="cta-perk-dot" />Direct access to top engineering talent</li>
            <li><span className="cta-perk-dot" />Dedicated sponsor booth & demo session</li>
            <li><span className="cta-perk-dot" />Social media features & post-event report</li>
          </ul>

          {/* Actions */}
          <div className="sponsor-cta-actions">
            <a href="mailto:sponsors@nexhack.in" className="register-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Contact Us
            </a>
            <a href="#" className="sponsor-cta-link">Download Sponsorship Kit →</a>
          </div>
        </div>

        {/* Right: stats */}
        <div className="cta-right">
          <div className="cta-stats-grid">
            {[
              { value: '500+', label: 'Participants' },
              { value: '10',   label: 'Tracks' },
              { value: '24hrs',label: 'of Hacking' },
              { value: '₹2L+', label: 'Prize Pool' },
            ].map((s, i) => (
              <div key={i} className="cta-stat-card">
                <span className="cta-stat-value">{s.value}</span>
                <span className="cta-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="cta-quote">
            <span className="cta-quote-mark">"</span>
            <p>The best way to predict the future is to sponsor the people who will build it.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

