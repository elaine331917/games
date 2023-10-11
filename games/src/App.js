import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Card from './card';

function App() {
  
  const [textToType, setTextToType] = useState("Let's play :)");
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < textToType.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prevTypedText) => prevTypedText + textToType.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100); // Adjust the speed here

      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, textToType]);

  return (
    <div className="App">
      <div id="text-container">{typedText}</div>
      <div id="choose">Choose your game:</div>
      <div className="games-grid">
        <Card game="tictactoe"/>
        <Card game="hangman"/>
      </div>
      
    </div>
  );
}

export default App;
