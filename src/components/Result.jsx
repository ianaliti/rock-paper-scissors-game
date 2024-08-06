import React from 'react';

const Result = ({ playerChoice, computerChoice, result }) => {
  const getResultMessage = () => {
    if (result === 'win') return 'You Win!';
    if (result === 'lose') return 'You Lose!';
    return "It's a Draw!";
  };

  return (
    <div className="result">
      <p>You chose: {playerChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      <h2>{getResultMessage()}</h2>
    </div>
  );
};

export default Result;
