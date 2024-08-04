import React, { useState, useEffect } from 'react';

export function TypewriterEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <div className="text-xs font-mono">
      {displayedText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </div>
  );
}

export default TypewriterEffect;
