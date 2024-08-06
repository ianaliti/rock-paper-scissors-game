import React from 'react';
import '../styles/LandingPage.css';

interface LandingPageProps {
  startGame: () => void;
}
const LandingPage: React.FC<LandingPageProps> = ({ startGame }) => { 
  return (
    <div className="landing-page">
      <h1>Rock-Paper-Scissors: The Ultimate Showdown!</h1>
      <button onClick={startGame}>Play Now</button>
    </div>
  );
};

export default LandingPage;
