const tips = [
  "Use unique passwords with at least 12 characters.",
  "Enable two-factor authentication on important accounts.",
  "Keep your OS and browser updated.",
  "Never share OTPs or recovery codes."
];

function TipsSection() {
  return (
    <section id="tips" className="section section-alt">
      <div className="container">
        <h2>Smart Safety Habits</h2>
        <ul className="tips-list">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TipsSection;
