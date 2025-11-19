/**
 * useTypewriter Hook
 * Creates a realistic typewriter effect with irregular typing
 */
import { useState, useEffect } from "react";

interface TypewriterConfig {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
}: TypewriterConfig) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;

        // Random delay for realistic typing
        const randomDelay = speed + Math.random() * 60 - 30;
        const extraPause = Math.random() > 0.95 ? 150 : 0;

        timeoutId = setTimeout(typeNextCharacter, randomDelay + extraPause);
      } else {
        setIsComplete(true);
      }
    };

    const startTimeout = setTimeout(() => {
      typeNextCharacter();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};
