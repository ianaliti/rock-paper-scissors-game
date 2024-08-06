import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Result from './Result';
import Scoreboard from './Scoreboard';
import '../styles/Game.css';

const choices = [
  { name: 'rock', icon: faHandRock },
  { name: 'paper', icon: faHandPaper },
  { name: 'scissors', icon: faHandScissors },
];

const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return 'draw';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
};

const Game = ({ resetGame }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const handleChoice = (choice) => {
    const computerSelection = getRandomChoice();
    const gameResult = determineWinner(choice.name, computerSelection.name);

    setPlayerChoice(choice);
    setComputerChoice(computerSelection);
    setResult(gameResult);

    if (gameResult === 'win') {
      setScore({ ...score, player: score.player + 1 });
    } else if (gameResult === 'lose') {
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  return (
    <div className="game">
      <button className="return-button" onClick={resetGame}>
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </button>
      <Scoreboard score={score} />
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice.name} onClick={() => handleChoice(choice)}>
            <FontAwesomeIcon icon={choice.icon} size="4x" />
          </button>
        ))}
      </div>
      {result && (
        <Result
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      )}
    </div>
  );
};

export default Game;
