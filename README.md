A simple Rock-Paper-Scissors game built with React and TypeScript. This project showcases a classic game with a modern user interface, including score tracking and game result display.

## Features

- **Modern UI**: Stylish design with responsive layout.
- **Score Tracking**: Keep track of player and computer scores.
- **Game Results**: Display results and allow replay.
- **TypeScript**: Provides type safety for better development experience.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **FontAwesome**: Icon library for user interface elements.

Structure:
src/
components/
App.tsx: Main component that toggles between the landing page and game view.
Game.tsx: Game logic and UI component.
LandingPage.tsx: Initial page with the option to start the game.
Result.tsx: Component to display the result of the game.
Scoreboard.tsx: Component to display the current score.

styles/
App.css: Global styles.
Game.css: Styles specific to the Game component.
LandingPage.css: Styles for the LandingPage component.
Result.css: Styles for the Result component.
Scoreboard.css: Styles for the Scoreboard component.

Usage:
Start the Game: Click the "Start Game" button on the landing page.
Play the Game: Choose between Rock, Paper, or Scissors.
View Results: See the result of your choice and the computer's choice.
Replay: Click "Try Again" to play another round or return to the landing page.
