/**
 * Navbar Component
 * Sticky navigation bar with glassmorphism effect
 */
import React, { useEffect, useRef, useState } from "react";
import { Box } from "lucide-react";
import gsap from "gsap";
import { MenuModal } from "./MenuModal";

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection || !navRef.current || !containerRef.current) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const shouldBeCompact = heroBottom < 100;

      if (shouldBeCompact !== isCompact) {
        setIsCompact(shouldBeCompact);

        if (shouldBeCompact) {
          // Animate to compact state
          gsap.to(containerRef.current, {
            width: "80%",
            marginLeft: "10%",
            borderRadius: "16px",
            duration: 0.6,
            ease: "power3.inOut",
          });

          // Add glass effect
          gsap.to(navRef.current, {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            duration: 0.6,
            ease: "power3.inOut",
            borderRadius: "16px",
          });
        } else {
          // Animate to full state
          gsap.to(containerRef.current, {
            width: "100%",
            marginLeft: "0%",
            borderRadius: "0px",
            duration: 0.6,
            ease: "power3.inOut",
          });

          // Remove glass effect
          gsap.to(navRef.current, {
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderColor: "rgba(255, 255, 255, 0)",
            duration: 0.6,
            ease: "power3.inOut",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCompact]);

  // Cerrar menú con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full z-40 transition-all duration-600"
      style={{
        marginLeft: "0%",
        width: "100%",
      }}
    >
      <nav
        ref={navRef}
        className="flex flex-row justify-between items-center px-8 md:px-12 py-4 md:py-6 mx-5 my-10 border-b border-transparent transition-all duration-600"
        style={{
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
      >
        {/* Logo Section */}
        <h1 className="text-2xl md:text-3xl text-white font-medium flex flex-row items-center gap-3">
          <Box className="w-6 md:w-7 h-6 md:h-7" />
          <span className="hidden sm:inline">OculusLab</span>
        </h1>

        {/* Menu Icon - Clickeable */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-end justify-center gap-1.5 group"
          aria-label="Abrir menú"
        >
          <div className="w-8 md:w-10 h-0.5 rounded-full bg-white transition-transform group-hover:translate-x-1"></div>
          <div className="w-6 md:w-8 h-0.5 rounded-full bg-white transition-transform group-hover:translate-x-1"></div>
        </button>
      </nav>
    </div>
    </>
  );
};
