/**
 * Button Component - Reusable button for CTAs
 */
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "border-white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "font-semibold transition-colors duration-300";

  const glassBase = "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20";
  const variantStyles = {
    primary: `${glassBase} shadow-lg`,
    secondary: "bg-slate-700/60 backdrop-blur-md border border-slate-600 text-white hover:bg-slate-700/70 rounded-lg",
    outline: "bg-transparent backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10",
    "border-white": "bg-transparent backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
