/**
 * HeroTagline Component
 * Main tagline section with typewriter effect
 */
import React from "react";
import { useTypewriter } from "../../../hooks/useTypewriter";

interface HeroTaglineProps {
  text?: string;
}

export const HeroTagline: React.FC<HeroTaglineProps> = ({
  text = '"Romper barreras es el primer paso para crear nuevas realidades."',
}) => {
  const { displayedText } = useTypewriter({
    text,
    speed: 40,
    delay: 700,
  });

  return (
    <section className="px-8 md:px-20 pb-20">
      <p className="text-2xl md:text-4xl text-white w-full md:w-2/3 leading-tight font-light h-auto">
        {displayedText}
        {displayedText.length < text.length && (
          <span className="animate-pulse ml-1">|</span>
        )}
      </p>
    </section>
  );
};
