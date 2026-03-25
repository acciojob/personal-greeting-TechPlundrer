
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <label>Enter your name:</label>
      <br/>
        <input
        type ="text"
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
