import React, { type ReactNode } from "react";

interface BentoCardProps {
  title: string;
  description: string;
  visual?: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-2 row-span-1",
  large: "col-span-1 md:col-span-2 row-span-2",
};

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  visual,
  className = "",
  size = "small",
}) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl 
        bg-white/5 backdrop-blur-sm
        border border-white/10 
        p-6 md:p-8
        hover:bg-white/10 transition-all duration-300
        flex flex-col justify-between
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {/* Visual Content */}
      {visual && (
        <div className="flex-1 flex items-center justify-center mb-6">
          {visual}
        </div>
      )}

      {/* Text Content */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm md:text-base text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
