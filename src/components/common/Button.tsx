/**
 * Button Component - Reusable button for CTAs
 */
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
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
  const baseStyles = "font-semibold transition-all duration-300 rounded-lg";

  const variantStyles = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl",
    secondary: "bg-slate-700 text-white hover:bg-slate-800",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
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
