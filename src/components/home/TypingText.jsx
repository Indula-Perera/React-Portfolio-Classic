// TypingText.js
import React, { useState, useEffect } from 'react';

const TypingText = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isFlashing, setIsFlashing] = useState(false);
  const permanentText = "I ";

  useEffect(() => {
    let index = 0;
    let messageIndex = currentMessageIndex;

    const typingInterval = setInterval(() => {
      setDisplayedText(permanentText + messages[messageIndex].substring(0, index));
      index++;

      if (index > messages[messageIndex].length) {
        setIsFlashing(true);

        setTimeout(() => {
          setIsFlashing(false);
        }, 500); // Flashing duration

        setTimeout(() => {
          index = 0;
          messageIndex = (messageIndex + 1) % messages.length;
          setCurrentMessageIndex(messageIndex);
        }, 1000); // Wait for 1 second between messages
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [messages, currentMessageIndex]);

  return (
    <span className={`home__education ${isFlashing ? 'flashing-text' : ''}`}>
      {displayedText}
    </span>
  );
};

export default TypingText;
