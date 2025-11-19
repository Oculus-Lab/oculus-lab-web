/**
 * Custom React hooks
 */
import { useEffect, useState } from "react";

export { useLenis } from "./useLenis";
export { useVideoLoader } from "./useVideoLoader";
export { useZoomReveal } from "./useZoomReveal";
export { useTypewriter } from "./useTypewriter";
export { useScrollReveal } from "./useScrollReveal";

export const useScrollTrigger = (callback: () => void, threshold: number = 0.5) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    }, { threshold });

    const elements = document.querySelectorAll("[data-scroll-trigger]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [callback, threshold]);
};

export const usePrevious = <T,>(value: T): T | undefined => {
  const [previous, setPrevious] = useState<T | undefined>(undefined);

  useEffect(() => {
    setPrevious(value);
  }, [value]);

  return previous;
};

export const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
