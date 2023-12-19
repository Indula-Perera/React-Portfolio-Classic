// TypingText.js
import React, { useState, useEffect } from 'react';

const TypingText = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const permanentText = "I ";

  useEffect(() => {
    let index = 0;
    let messageIndex = currentMessageIndex;

    const typingInterval = setInterval(() => {
      setDisplayedText(permanentText + messages[messageIndex].substring(0, index));
      index++;

      if (index > messages[messageIndex].length) {
        setTimeout(() => {
          index = 0;
          messageIndex = (messageIndex + 1) % messages.length;
          setCurrentMessageIndex(messageIndex);
        }, 1000); // Wait for 1 second between messages
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [messages, currentMessageIndex]);

  return <span className="home__education">{displayedText}</span>;
};

export default TypingText;
