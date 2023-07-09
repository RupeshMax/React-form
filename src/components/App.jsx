import React, { useState } from "react";

function App() {
  const [text, updateText] = useState("");
  const [buttonColor, setColor] = useState(true);
  const [contacts, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function onMouseOver() {
    setColor(false);
  }

  function onMouseOut() {
    setColor(true);
  }

  function handleClick(event) {
    updateText("Thank you!!");

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello! {contacts.fName} {contacts.lName}
      </h1>
      <p>{contacts.email}</p>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="fName"
          placeholder="First name"
          onChange={updateContact}
          value={contacts.fName}
        />
        <input
          type="text"
          name="lName"
          placeholder="Last name"
          onChange={updateContact}
          value={contacts.lName}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Id"
          onChange={updateContact}
          value={contacts.email}
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
      <h1>{text}</h1>
    </div>
  );
}

export default App;
