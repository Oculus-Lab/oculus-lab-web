/**
 * HeroBackground Component
 * Video background with gradient overlay and loading management
 */
import React from "react";
import { useVideoLoader } from "../../../hooks/useVideoLoader";

interface HeroBackgroundProps {
  videoSrc?: string;
  onReady?: (ready: boolean) => void;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  videoSrc = "https://res.cloudinary.com/dzzvj8b6j/video/upload/c_scale,q_78,w_1651/v1763530498/3163534-uhd_2560_1440_30fps_msscdt.webm",
  onReady,
}) => {
  const { videoRef, state, handlers } = useVideoLoader();

  React.useEffect(() => {
    onReady?.(state.isReady);
  }, [state.isReady, onReady]);

  return (
    <>
      {/* Video Background - 120vh height to extend into next section */}
      <div className="absolute top-0 left-0 w-full h-[120vh] -z-20">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
          src={videoSrc}
          onCanPlay={handlers.onCanPlay}
          onProgress={handlers.onProgress}
          onError={handlers.onError}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-screen -z-10 bg-linear-to-t from-black to-transparent"></div>
    </>
  );
};
