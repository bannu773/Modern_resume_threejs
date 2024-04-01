import React, { useState, useEffect } from 'react';
import "./Chatbot.scss";

const DotTypingAnimation = () => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount % 6) + 1); 
    }, 350); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dot-typing">
      {'.'.repeat(dotCount)}
    </div>
  );
};

export default DotTypingAnimation;