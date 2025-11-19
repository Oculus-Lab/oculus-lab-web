import { useScrollReveal } from "../../../hooks";

interface RevealSectionProps {
  message?: string;
  id?: string;
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  message = "Aquel que tiene un porqué para vivir se puede enfrentar a todos los 'cómos'",
  id = "reveal",
}) => {
  const { containerRef, textRef } = useScrollReveal();
  const words = message.split(" ");

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full h-[120vh] bg-black flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-32"
    >
      {/* Top transition layer - smooth fade from video to content */}
      <div className="absolute top-0 left-0 right-0 h-48 md:h-64 bg-linear-to-b from-black via-black/50 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p ref={textRef} className="text-4xl md:text-6xl text-white font-medium">
          {words.map((word, index) => (
            <span key={index} className="reveal-word">
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
