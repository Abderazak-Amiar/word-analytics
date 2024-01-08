import { useState } from 'react';
import { CONST } from '../lib/constants';

function WordAnalytics() {
  const [text, setText] = useState('');
  const nbr_characters = text.replaceAll(/\s/g, '').length;
  const nbr_words = wordCount(text);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  function wordCount(str) {
    return str.split(' ').filter(function (n) {
      return n != '';
    }).length;
  }
  return (
    <div>
      <header className="bg">
        <h1 className="first-heading">
          word <span className="first-heading--thin">analytics</span>
        </h1>
      </header>
      <section className="container">
        <textarea
          value={text}
          onChange={handleChange}
          className="textarea"
          placeholder="Enter your text"
          spellCheck={'false'}
        ></textarea>
        <div className="stats">
          <Stat label="Words" stat_number={nbr_words} />
          <Stat label="Characters" stat_number={nbr_characters} />
          <Stat
            label="Instagram"
            stat_number={CONST.INSTAGRAM_LIMIT - nbr_characters}
          />
          <Stat
            label="Facebook"
            stat_number={CONST.FACEBOOK_LIMIT - nbr_characters}
          />
        </div>
      </section>
      <footer className="footer">This is a word analytics app</footer>
    </div>
  );
}

function Stat({ label, stat_number }) {
  return (
    <div className="stat">
      <p className="stat_number">{stat_number}</p>
      <h3 className="second-heading">{label}</h3>
    </div>
  );
}
export default WordAnalytics;
