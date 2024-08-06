import React, { useState } from 'react';
import LandingPage from './LandingPage';
import Game from './Game';
import '../styles/App.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
  };

  return (
    <div className="app">
      {gameStarted ? <Game resetGame={resetGame} /> : <LandingPage startGame={startGame} />}
    </div>
  );
};

export default App;

