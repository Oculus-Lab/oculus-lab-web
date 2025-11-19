/**
 * useScrollReveal Hook
 * Reveals text smoothly as user scrolls through a section using GSAP
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    // Get all words
    const words = text.querySelectorAll(".reveal-word");
    if (words.length === 0) return;

    // Initial state - all words hidden
    gsap.set(words, { opacity: 0.1, scale: 0.50 });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        end: "center center",
        scrub: 1, // smooth scrubbing
        markers: false,
      },
    });

    // Animate each word to revealed state
    words.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        },
        index * 0.05 // stagger words
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { containerRef, textRef };
};
