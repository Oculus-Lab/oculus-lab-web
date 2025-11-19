/**
 * HeroCTA Component
 * Call-to-action buttons container with staggered animations
 */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../../common";

interface HeroCTAProps {
  delay?: number;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({ delay = 0.4 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const buttons = containerRef.current.querySelectorAll("button");
      gsap.fromTo(
        buttons,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    }
  }, [delay]);

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row gap-4">
      <Button variant="primary" size="lg">
        Explorar Investigaciones
      </Button>
      <Button variant="outline" size="lg">
        Contactar
      </Button>
    </div>
  );
};
