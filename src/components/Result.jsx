import React from 'react';
import '../styles/Result.css';

const Result = ({ playerChoice, computerChoice, result }) => {
  const getResultMessage = () => {
    if (result === 'win') return 'You Win!';
    if (result === 'lose') return 'You Lose!';
    return "It's a Draw!";
  };

  const resultClass = result === 'win' ? 'win' : result === 'lose' ? 'lose' : 'draw';

  return (
    <div className={`result ${resultClass}`}>
      <div className="player-choice">
        <p><strong>You chose:</strong> {playerChoice.name}</p>
      </div>
      <div className="computer-choice">
        <p><strong>Computer chose:</strong> {computerChoice.name}</p>
      </div>
      <h2>{getResultMessage()}</h2>
    </div>
  );
};

export default Result;
