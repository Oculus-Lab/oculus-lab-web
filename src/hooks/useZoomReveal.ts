/**
 * useZoomReveal Hook
 * Manages zoom out and blur effect on initial load
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLoading } from "../context/useLoadingContext";

interface ZoomRevealConfig {
  duration?: number;
  delay?: number;
  blur?: number;
  scale?: number;
}

export const useZoomReveal = (config: ZoomRevealConfig = {}) => {
  const {
    duration = 1.2,
    delay = 0.3,
    blur = 20,
    scale = 1.1,
  } = config;

  const { isLoading } = useLoading();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || isLoading) return;

    gsap.fromTo(
      elementRef.current,
      {
        scale,
        filter: `blur(${blur}px)`,
      },
      {
        scale: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power2.inOut",
      }
    );
  }, [duration, delay, blur, scale, isLoading]);

  return elementRef;
};
