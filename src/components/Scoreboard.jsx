import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ score }) => {
  return (
    <div className="scoreboard">
      <div className="score player">
        <p>Player</p>
        <h2>{score.player}</h2>
      </div>
      <div className="score computer">
        <p>Computer</p>
        <h2>{score.computer}</h2>
      </div>
    </div>
  );
};

export default Scoreboard;
