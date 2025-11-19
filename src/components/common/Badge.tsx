/**
 * Badge Component - Display tags or labels
 */
import React from "react";

interface BadgeProps {
  text: string;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
  className = "",
}) => {
  const variantStyles = {
    primary: "bg-blue-500/20 text-blue-300 border border-blue-500/50",
    secondary: "bg-slate-600/30 text-slate-200 border border-slate-600/50",
    accent: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm ${variantStyles[variant]} ${className}`}
    >
      {text}
    </span>
  );
};
