import { useEffect, useState } from "react";

interface CustomCursorProps {
  size?: number;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  size = 16,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Ocultar cursor nativo en todos los elementos
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsExpanded(!!isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateCursorStyle);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateCursorStyle);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-9999"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isExpanded ? 2 : 1})`,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Glass cursor */}
      <div
        className="rounded-full backdrop-blur-md border-2 border-white/40"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: `
            0 0 20px rgba(255, 255, 255, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.15)
          `,
        }}
      />
    </div>
  );
};
