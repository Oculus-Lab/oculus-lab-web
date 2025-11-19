/**
 * FooterSection Component
 * Full screen footer with background image and overlay content
 */
import React from "react";

interface FooterSectionProps {
  id?: string;
  backgroundImage?: string;
}

const DEFAULT_BG =
  "/image.png";

export const FooterSection: React.FC<FooterSectionProps> = ({
  id = "footer",
  backgroundImage = DEFAULT_BG,
}) => {
  return (
    <footer
      id={id}
      className="relative w-full h-screen text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold pt-10">Construyamos lo imposible</h2>
        <p className="max-w-2xl text-base md:text-lg text-white/80">
          Exploramos tecnología, diseño y narrativa para crear experiencias inmersivas. Si quieres colaborar, compartir ideas
          o impulsar un proyecto, estamos a un mensaje de distancia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-wide text-white/70">
          <a href="mailto:hola@oculuslab.dev" className="hover:text-white transition-colors">
            hola@oculuslab.dev
          </a>
          <span className="opacity-50">/</span>
          <a href="https://github.com/Oculus-Lab" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <span className="opacity-50">/</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} OculusLab. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
