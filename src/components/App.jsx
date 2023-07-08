import React, { useState } from "react";

function App() {
  let [setName, updateName] = useState("");
  const [buttonColor, setColor] = useState(true);
  function name(value) {
    console.log(value.value);

    // updateName(value);
  }

  function onMouseOver() {
    setColor(false);
  }

  function onMouseOut() {
    setColor(true);
  }

  return (
    <div className="container">
      <h1>Hello! {setName}</h1>
      <input type="text" placeholder="What's your name?" onChange={name} />
      <button
        style={{ backgroundColor: buttonColor ? "white" : "black" }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
