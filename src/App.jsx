import React, { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function updateCount(){
    setCount(count + multiplier);
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Sushi Selector</h1>
        <h2>Count: {count}</h2>
        <img onClick={updateCount} src="./sushi.webp" alt="" className="sushi" />
      </div>
    </div>
  )
}

export default App
