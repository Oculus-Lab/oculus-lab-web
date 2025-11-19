/**
 * WeSection Component
 * "Quiénes Somos" section with image and text layout
 * 110% viewport height with 50/50 split: image on left, text on right
 */
import React from "react";
import { useScrollReveal } from "../../../hooks";

interface WeSectionProps {
  id?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
}

export const WeSection: React.FC<WeSectionProps> = ({
  id = "we-section",
  description = "Somos un equipo apasionado por la innovación y la excelencia. Nuestro objetivo es crear soluciones que impacten positivamente en el mundo. Creemos en la importancia de la calidad, la transparencia y el trabajo en equipo. Cada miembro aporta su experiencia y creatividad para llevar a cabo proyectos que marcan la diferencia. Con una visión clara y una misión enfocada, trabajamos día a día para superar expectativas y generar valor genuino.",
}) => {
  const { containerRef } = useScrollReveal();

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full h-screen bg-black flex flex-col md:flex-row items-stretch overflow-hidden"
    >
      {/* Image Container - Left Half */}
      <div className="w-full h-full overflow-hidden relative group">
        <img
          src="https://t3.ftcdn.net/jpg/07/56/99/60/360_F_756996062_yAGxQhANfqC6JuRtUzHikH92xm6P9ney.jpg"
          alt="Quiénes somos"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient for better text readability transition */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-transparent" />
      </div>

      {/* Text Container - Right Half */}
      <div className="w-full h-full bg-black flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12 relative z-10">
        <div className="max-w-lg text-left">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
      <span className="absolute bottom-0 right-0 text-white/70 font-bold text-4xl md:text-8xl z-20">Research</span>
    </section>
  );
};
