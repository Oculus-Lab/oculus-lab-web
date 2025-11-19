/**
 * HeroSubtitle Component
 * Subtitle for the hero section
 */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroSubtitleProps {
  text: string;
  delay?: number;
}

export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({
  text,
  delay = 0.2,
}) => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
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
    <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
      {text}
    </p>
  );
};
