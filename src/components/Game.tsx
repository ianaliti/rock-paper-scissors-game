import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Result from './Result';
import Scoreboard from './Scoreboard';
import '../styles/Game.css';

interface Choice {
    name: 'rock' | 'paper' | 'scissors';
    icon: any;
  }

// Define the choices for rock-paper-scissors
const choices: Choice[] = [
  { name: 'rock', icon: faHandRock },
  { name: 'paper', icon: faHandPaper },
  { name: 'scissors', icon: faHandScissors },
];

//Get randome computer choice
const getRandomChoice = (): Choice => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};


  // Function to determine the winner
  const determineWinner = (playerChoice: string, computerChoice: string): 'win' | 'lose' | 'draw' => {
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

interface GameProps {
  resetGame: () => void;
}

// Main Game component
const Game: React.FC<GameProps> = ({ resetGame }) => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<'win' | 'lose' | 'draw' | null>(null);
  const [score, setScore] = useState<{ player: number; computer: number }>({ player: 0, computer: 0 });

// Function to determine the result of the game
  const handleChoice = (choice: Choice) => {
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
