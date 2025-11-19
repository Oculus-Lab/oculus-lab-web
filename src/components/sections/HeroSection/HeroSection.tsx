/**
 * HeroSection Component
 * Main hero section combining all hero sub-components
 */
import React from "react";
import { HeroTitle, HeroSubtitle, HeroCTA } from "./index";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "OculusLab",
  subtitle = "Explorando fronteras en investigación: desde el análisis del Alzheimer hasta ciberseguridad avanzada",
  showCTA = true,
}) => {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-4xl">
          <HeroTitle text={title} delay={0} />
          <div className="mt-6 md:mt-8">
            <HeroSubtitle text={subtitle} delay={0.2} />
          </div>
          {showCTA && (
            <div className="mt-10 md:mt-12">
              <HeroCTA delay={0.4} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
