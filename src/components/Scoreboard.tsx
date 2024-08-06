import React from 'react';
import '../styles/Scoreboard.css';

interface ScoreboardProps {
  score: {
    player: number;
    computer: number;
  };
}
// Scoreboard component to display the current score
const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
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
