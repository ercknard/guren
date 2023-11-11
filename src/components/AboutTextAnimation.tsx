import React, { useState, useEffect } from "react";

const TypingAnimation: React.FC = () => {
  const textToTypes = [
    "Web Designer.",
    ".",
    "Developer.",
    ".",
    "Graphic Designer.",
    ".",
    "Editor.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;

    const typeNextCharacter = () => {
      if (currentIndex < textToTypes[currentTextIndex].length) {
        setTypedText(
          (prevTypedText) =>
            prevTypedText + textToTypes[currentTextIndex][currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setTypedText("");
          setCurrentIndex(0);
          setCurrentTextIndex(
            (prevTextIndex) => (prevTextIndex + 1) % textToTypes.length
          );
        }, 1000);
      }
    };

    const typingInterval = setInterval(typeNextCharacter, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, currentTextIndex]);

  return (
    <div>
      {" "}
      Aspiring <span className="text-effect"> {typedText} </span>{" "}
      <span className="to-blink">|</span>
    </div>
  );
};

export default TypingAnimation;
