import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from './game-components/tictactoe.js';
import Hangman from './game-components/hangman/hangman';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/games" element={<App />} />
        <Route path="/games/tictactoe" element={<TicTacToe />} />
        <Route path="/games/hangman" element={<Hangman />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

