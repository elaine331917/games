import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from './game-components/tictactoe.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/games" element={<App />} />
        <Route path="/games/tictactoe" element={<TicTacToe />} />
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

