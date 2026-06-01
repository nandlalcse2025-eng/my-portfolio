const threats = [
  "Phishing Emails",
  "Malware Downloads",
  "Weak Password Attacks",
  "Public Wi-Fi Snooping"
];

function ThreatsSection() {
  return (
    <section id="threats" className="section">
      <div className="container">
        <h2>Common Cyber Threats</h2>
        <div className="grid cards-grid">
          {threats.map((threat) => (
            <article className="card" key={threat}>
              <h3>{threat}</h3>
              <p>
                Recognize this attack pattern early and apply basic checks before clicking links or opening files.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreatsSection;
