/**
 * WeWantSection Component
 * Static motivation card + animated energy line that lights up the grid beneath
 */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GlassCard {
  id: string;
  text: string;
}

interface WeWantSectionProps {
  id?: string;
  mainCard?: GlassCard;
  gridCards?: GlassCard[];
  tagline?: string;
}

const GlassCard: React.FC<{
  card: GlassCard;
  isMainCard?: boolean;
  onClick?: () => void;
}> = ({ card, isMainCard = false, onClick }) => {
  return (
    <div
      className={`relative group cursor-pointer rounded-3xl flex items-center justify-center overflow-hidden transition-all duration-300 ${
        isMainCard ? "w-64 h-64 md:w-80 md:h-80" : "w-full h-48 md:h-56"
      }`}
      onClick={onClick}
    >
      <div
        className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
          isMainCard
            ? "bg-white/10 backdrop-blur-md border border-white/30 group-hover:bg-white/20 group-hover:border-white/50"
            : "bg-white/5 backdrop-blur-sm border border-white/20 group-hover:bg-white/15 group-hover:border-white/40"
        }`}
      />

      <div className="absolute inset-4 bg-linear-to-br from-white/20 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 text-center">
        <p
          className={`font-bold text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-105 ${
            isMainCard ? "text-5xl md:text-6xl" : "text-2xl md:text-3xl font-semibold"
          }`}
        >
          {card.text}
        </p>
      </div>
    </div>
  );
};

export const WeWantSection: React.FC<WeWantSectionProps> = ({
  id = "we-want-section",
  mainCard = { id: "main", text: "Motivación" },
  gridCards = [
    { id: "1", text: "Innovación" },
    { id: "2", text: "Excelencia" },
    { id: "3", text: "Transparencia" },
    { id: "4", text: "Impacto" },
    { id: "5", text: "Colaboración" },
    { id: "6", text: "Pasión" },
  ],
  tagline = "Sé tu mismo",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const overlay = overlayRef.current;

    if (!container || !line || !overlay) return;

    gsap.set(line, { transformOrigin: "top center", scaleY: 0 });
    gsap.set(overlay, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(line, { scaleY: 1, duration: 1, ease: "none" }).to(
      overlay,
      { opacity: 1, duration: 0.6, ease: "power1.out" },
      "-=0.2"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full bg-black flex flex-col items-center justify-start overflow-hidden"
      style={{ minHeight: "220vh" }}
    >
      <div className="w-full flex flex-col items-center">
        {/* Static Motivation Card */}
        <div className="w-full h-screen flex items-center justify-center sticky top-0 z-20">
          <GlassCard card={mainCard} isMainCard={true} />
        </div>

        {/* Animated energy line */}
  <div className="w-full flex justify-center -mt-28 md:-mt-52 z-10 pointer-events-none">
          <div className="relative h-[50vh] md:h-[60vh] w-1 flex justify-center">
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <div
              ref={lineRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-linear-to-b from-white via-white/80 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.7)] blur-sm origin-top"
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white/30 blur-3xl opacity-80 pointer-events-none" />
          </div>
        </div>

        {/* Grid + light fill */}
        <div className="relative w-full max-w-5xl px-4 md:px-8 pb-24 mt-16">
          <div
            ref={overlayRef}
            className="absolute inset-0 rounded-[36px] bg-linear-to-b from-white/15 via-white/5 to-transparent blur-3xl opacity-0 transition-opacity duration-500 pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {gridCards.map((card) => (
              <GlassCard key={card.id} card={card} />
            ))}
          </div>

          <div className="relative z-10 text-center mt-24">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              {tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-black pointer-events-none" />
    </section>
  );
};
