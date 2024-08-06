import React from 'react';
import '../styles/Result.css';


interface ResultProps {
  playerChoice: { name: string } | null;
  computerChoice: { name: string } | null;
  result: 'win' | 'lose' | 'draw' | null;
}

const Result: React.FC<ResultProps> = ({ playerChoice, computerChoice, result }) => {
//Return result message
  const getResultMessage = () => {
    if (result === 'win') return 'You Win!';
    if (result === 'lose') return 'You Lose!';
    return "It's a Draw!";
  };

  const resultClass = result === 'win' ? 'win' : result === 'lose' ? 'lose' : 'draw';

  return (
    <div className={`result ${resultClass}`}>
      <div className="player-choice">
        <p><strong>You chose:</strong> {playerChoice ? playerChoice.name : 'None'}</p>
      </div>
      <div className="computer-choice">
        <p><strong>Computer chose:</strong> {computerChoice ? computerChoice.name : 'None'}</p>
      </div>
      <h2>{getResultMessage()}</h2>
    </div>
  );
};

export default Result;
