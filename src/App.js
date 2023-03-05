import React, { useState } from "react";

import data from "./data";
function App() {
  const [loremText, setLoremText] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = +count;

    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    setLoremText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Bored of Lorem Ipsum text?</h3>
      <form className="lorem-form">
        <label htmlFor="count">Paraghraf</label>
        <input type="number" id="count" value={count} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit} className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {loremText.map((text, index) => (
          <p key={index}>{text} </p>
        ))}
      </article>
    </section>
  );
}

export default App;
