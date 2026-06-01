function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Digital Safety Starts Here</p>
          <h1>Stay Ahead of Cyber Threats</h1>
          <p className="lead">
            Learn practical habits to protect your identity, devices, and data in a connected world.
          </p>
          <a className="cta-button" href="#tips">Explore Safety Guide</a>
        </div>
        <div className="hero-card">
          <h3>Today\'s Status</h3>
          <p>Firewall: Active</p>
          <p>Backups: Scheduled</p>
          <p>Password Audit: Recommended</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
