import React from 'react';

const LandingPage = ({ startGame }) => {
  return (
    <div className="landing-page">
      <h1>Rock-Paper-Scissors: The Ultimate Showdown!</h1>
      <button onClick={startGame}>Play Now</button>
    </div>
  );
};

export default LandingPage;
