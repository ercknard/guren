import React, { useState, useEffect } from "react";

const HomeTypingAnimation: React.FC = () => {
  const textToType = "ERCKNARD GUREN";
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const typingSpeed = 300; // Adjust the typing speed in milliseconds

    const typeNextCharacter = () => {
      if (isErasing) {
        // Erasing
        if (currentIndex > 0) {
          setTypedText((prevTypedText) => prevTypedText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          // Switch to typing mode
          setIsErasing(false);
        }
      } else {
        // Typing
        if (currentIndex < textToType.length) {
          setTypedText(
            (prevTypedText) => prevTypedText + textToType[currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          // Switch to erasing mode
          setIsErasing(true);
        }
      }
    };

    const typingInterval = setInterval(typeNextCharacter, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, isErasing]);
  return (
    <div>
      {" "}
      <span className="text-effect"> {typedText} </span>{" "}
      <span className="to-blink">|</span>
    </div>
  );
};

export default HomeTypingAnimation;
