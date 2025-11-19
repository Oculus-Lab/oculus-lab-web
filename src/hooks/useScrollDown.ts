/**
 * useScrollDown Hook
 * Animates an element downward as user scrolls, following the scroll progress
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollDownConfig {
  startDistance?: number; // pixels to move down
  ease?: string;
}

export const useScrollDown = ({ startDistance = 300, ease = "power2.out" }: UseScrollDownConfig = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const container = containerRef.current;

    if (!element || !container) return;

    // Create animation that moves element down based on scroll
    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: startDistance,
        ease: ease,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: `+=${startDistance * 2}`,
          scrub: 1,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [startDistance, ease]);

  return { elementRef, containerRef };
};
