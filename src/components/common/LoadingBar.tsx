/**
 * LoadingBar Component
 * Progress bar that shows while video and content are loading
 */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingBarProps {
  isLoading: boolean;
  progress: number;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({
  isLoading,
  progress,
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [progress]);

  useEffect(() => {
    if (containerRef.current) {
      if (isLoading) {
        gsap.to(containerRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.3,
        });
      } else {
        gsap.to(containerRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.6,
          delay: 0.2,
        });
      }
    }
  }, [isLoading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center opacity-0 pointer-events-none"
    >
      {/* Progress Bar */}
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-linear-to-r from-blue-400 to-cyan-400"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-slate-400 text-sm">
        {Math.round(progress)}%
      </p>
    </div>
  );
};
