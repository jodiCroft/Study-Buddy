import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [cardsets, setCardsets] = useState([]);

  useEffect(() =>
    fetch("http://localhost:3000/cardsets")
      .then((res) => res.json())
      .then(console.log)
  );

  return (
    <div>
      <h1>Flashcard Generator App</h1>
    </div>
  );
};

export default App;
