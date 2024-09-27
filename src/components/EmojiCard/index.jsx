import React from 'react';
import './index.css';

const EmojiCard = ({ emojiDetails, onClick }) => {
  const { id, emojiName, emojiUrl } = emojiDetails;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={handleClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  );
};

export default EmojiCard;