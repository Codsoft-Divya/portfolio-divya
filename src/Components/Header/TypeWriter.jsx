import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;