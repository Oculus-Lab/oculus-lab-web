import React, { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoSlideProps {
  videoSrc?: string;
  imageSrc?: string;
  poster?: string;
  alt?: string;
  overlayOpacity?: number;
  children?: ReactNode;
}

export const VideoSlide: React.FC<VideoSlideProps> = ({
  videoSrc,
  imageSrc,
  poster,
  alt = "Media",
  overlayOpacity = 0.4,
  children,
}) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slide = slideRef.current;
    const content = contentRef.current;

    if (!slide || !content) return;

    const ctx = gsap.context(() => {
      // Animar el contenido (ProjectCard) de abajo hacia arriba
      // cuando el usuario haya visto ~50% del video
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 100, // Comienza abajo (100px abajo)
        },
        {
          opacity: 1,
          y: 0, // Termina en su posición normal
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: slide,
            start: "center center", // Cuando el centro del slide está en el centro de la ventana
            toggleActions: "play none none none",
          },
        }
      );
    }, slide);

    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={slideRef}
      className="lab-slide relative shrink-0 w-screen h-screen overflow-hidden"
    >
      {/* Media: Video or Image */}
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={imageSrc ?? ""}
          alt={alt}
          className="w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content (Card, metadata, etc.) */}
      <div ref={contentRef}>{children}</div>
    </article>
  );
};
