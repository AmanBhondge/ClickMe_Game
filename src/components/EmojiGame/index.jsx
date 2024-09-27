import React, { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';
import EmojiCard from '../EmojiCard';
import WinOrLoseCard from '../WinOrLoseCard';

const EmojiGame = ({ emojisList }) => {
  const [clickedEmojis, setClickedEmojis] = useState([]);
  const [topScore, setTopScore] = useState(0);
  const [isGameInProgress, setIsGameInProgress] = useState(true);

  const shuffledEmojisList = () => {
    return emojisList.sort(() => Math.random() - 0.5);
  };

  const handleEmojiClick = (id) => {
    if (clickedEmojis.includes(id)) {
      setIsGameInProgress(false);
      setTopScore(Math.max(topScore, clickedEmojis.length));
    } else {
      setClickedEmojis((prev) => [...prev, id]);
      if (clickedEmojis.length === emojisList.length - 1) {
        setIsGameInProgress(false);
        setTopScore(emojisList.length);
      }
    }
  };

  const handlePlayAgain = () => {
    setClickedEmojis([]);
    setIsGameInProgress(true);
  };

  return (
    <div className="app-container">
      <NavBar
        topScore={topScore}
        isGameInProgress={isGameInProgress}
        currentScore={clickedEmojis.length}
      />
      <div className="emoji-game-body">
        {isGameInProgress ? (
          <ul className="emojis-list-container">
            {shuffledEmojisList().map((emoji) => (
              <EmojiCard
                key={emoji.id}
                emojiDetails={emoji}
                onClick={handleEmojiClick}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            score={clickedEmojis.length}
            isWon={clickedEmojis.length === emojisList.length}
            onClickPlayAgain={handlePlayAgain}
          />
        )}
      </div>
    </div>
  );
};

export default EmojiGame;