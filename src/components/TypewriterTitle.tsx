import React, { useState, useEffect } from "react";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

interface TypewriterTitleProps {
  text: string;
  delay: number;
}

const TypewriterTitle: React.FC<TypewriterTitleProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // Añade un pequeño retraso antes de quitar el cursor
      const cursorTimeout = setTimeout(() => {
        setIsTypingComplete(true);
      }, 500); // 500ms de retraso, ajusta según prefieras

      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className={specialElite.className}>
      <h1 className="mb-8 font-bold text-5xl text-center text-gray-700">
        {currentText}
        {!isTypingComplete && (
          <span className="text-typewriter-ink animate-blink">|</span>
        )}
      </h1>
    </div>
  );
};

export default TypewriterTitle;
