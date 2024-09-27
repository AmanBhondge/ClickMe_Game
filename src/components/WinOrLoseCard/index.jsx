import React from 'react';
import './index.css';

const WinOrLoseCard = ({ score, isWon, onClickPlayAgain }) => {
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png';
  const gameStatus = isWon ? 'You Won' : 'You Lose';
  const scoreLabel = isWon ? 'Best Score' : 'Score';

  return (
    <div className="win-or-lose-card">
      <div className="details-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  );
};

export default WinOrLoseCard;