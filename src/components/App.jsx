import React, { useState } from "react";

function App() {
  let [name, updateName] = useState("");
  let [heading, setHeading] = useState("");
  const [buttonColor, setColor] = useState(true);
  function setName(event) {
    updateName(event.target.value);
  }

  function headingText(event) {
    setHeading(name);

    event.preventDefault();
  }

  function onMouseOver() {
    setColor(false);
  }

  function onMouseOut() {
    setColor(true);
  }

  return (
    <div className="container">
      <h1>Hello! {heading}</h1>
      <form onSubmit={headingText}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={setName}
          value={name}
        />
        <button
          style={{ backgroundColor: buttonColor ? "white" : "black" }}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
