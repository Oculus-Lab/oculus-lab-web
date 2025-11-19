/**
 * Custom React hooks
 */
import { useEffect, useRef } from "react";

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
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const useWindowSize = () => {
  const size = useRef<{ width: number; height: number }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      size.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size.current;
};
