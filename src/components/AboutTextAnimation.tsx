import React, { useState, useEffect } from "react";

const TypingAnimation: React.FC = () => {
  const textToType = "This is a typing animation!";
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // Adjust the typing speed in milliseconds

    const typeNextCharacter = () => {
      if (currentIndex < textToType.length) {
        setTypedText(
          (prevTypedText) => prevTypedText + textToType[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };

    const typingInterval = setInterval(typeNextCharacter, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return <div>{typedText}</div>;
};

export default TypingAnimation;
