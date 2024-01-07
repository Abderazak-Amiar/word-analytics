function WordAnalytics() {
  return (
    <div>
      <header className="bg">
        <h1 className="first-heading">
          word <span className="first-heading--thin">analytics</span>
        </h1>
      </header>
      <section className="container">
        <textarea className="textarea" placeholder="Enter your text"></textarea>
        <div className="stats">
          <Stat label="Words" stat_number={0} />
          <Stat label="Characters" stat_number={0} />
          <Stat label="Instagram" stat_number={0} />
          <Stat label="Facebook" stat_number={0} />
        </div>
      </section>
      <footer className="footer">This is a word analytics app</footer>
    </div>
  );
}

export default WordAnalytics;

function Stat({ label, stat_number }) {
  return (
    <div className="stat">
      <p className="stat_number">{stat_number}</p>
      <h3 className="second-heading">{label}</h3>
    </div>
  );
}
