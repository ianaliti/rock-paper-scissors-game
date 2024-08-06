import React, { useState } from 'react';
import LandingPage from './LandingPage';
import Game from './Game';
import '../App.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="app">
      {gameStarted ? <Game /> : <LandingPage startGame={startGame} />}
    </div>
  );
};

export default App;
