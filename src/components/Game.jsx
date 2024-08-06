import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faArrowLeft, faRedo } from '@fortawesome/free-solid-svg-icons';
import Result from './Result';
import Scoreboard from './Scoreboard';
import '../styles/Game.css';

// Define the choices for rock-paper-scissors
const choices = [
  { name: 'rock', icon: faHandRock },
  { name: 'paper', icon: faHandPaper },
  { name: 'scissors', icon: faHandScissors },
];

//Get randome computer choice
const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};


  // Function to determine the winner
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

// Main Game component
const Game = ({ resetGame }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });

// Function to determine the result of the game
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

  const handleTryAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScore({ player: 0, computer: 0 })
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
      {result && (
        <button className="try-again-button" onClick={handleTryAgain}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default Game;
