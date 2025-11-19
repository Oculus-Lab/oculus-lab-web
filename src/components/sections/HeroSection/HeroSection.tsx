/**
 * HeroSection Component
 * Full hero section with video background, tagline, loading bar, and zoom reveal effect
 */
import React, { useState } from "react";
import { useZoomReveal } from "../../../hooks/useZoomReveal";
import { LoadingBar } from "../../common";
import { HeroBackground } from "./HeroBackground";
import { HeroTagline } from "./HeroTagline";

interface HeroSectionProps {
  videoSrc?: string;
  tagline?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  videoSrc,
  tagline,
}) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const mainRef = useZoomReveal({
    duration: 1.2,
    delay: 0.3,
    blur: 20,
    scale: 1.1,
  });

  return (
    <>
      <LoadingBar isLoading={!isVideoReady} progress={isVideoReady ? 100 : 60} />
      <main
        ref={mainRef}
        className="hero-section w-full h-screen overflow-hidden relative flex flex-col justify-end"
      >
        <HeroBackground videoSrc={videoSrc} onReady={setIsVideoReady} />
        <HeroTagline text={tagline} />
      </main>
    </>
  );
};
