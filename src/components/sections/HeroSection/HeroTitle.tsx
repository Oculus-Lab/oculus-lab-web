/**
 * HeroTitle Component
 * Main title for the hero section with animation
 */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroTitleProps {
  text: string;
  delay?: number;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ text, delay = 0 }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
        }
      );
    }
  }, [delay]);

  return (
    <h1
      ref={titleRef}
      className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 leading-tight"
    >
      {text}
    </h1>
  );
};
