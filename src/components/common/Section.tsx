/**
 * Section Component
 * Reusable section wrapper with customizable background and height
 */
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  bgColor = "bg-slate-900",
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`w-full min-h-[120vh] flex items-center justify-center ${bgColor} ${className}`}
    >
      {children}
    </section>
  );
};
