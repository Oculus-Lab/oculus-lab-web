/**
 * HeroNav Component
 * Navigation bar with branding
 */
import React from "react";
import { Box } from "lucide-react";

export const HeroNav: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between px-8 md:px-20 py-8 md:py-20">
      {/* Logo Section */}
      <h1 className="text-3xl md:text-4xl text-white font-medium flex flex-row items-center gap-4">
        <Box className="w-8 md:w-10 h-8 md:h-10" />
        OculusLab
      </h1>

      {/* Menu Icon */}
      <div className="flex flex-col items-end justify-center gap-2">
        <div className="w-12 md:w-16 h-1 rounded-2xl bg-white"></div>
        <div className="w-10 md:w-12 h-1 rounded-2xl bg-white"></div>
      </div>
    </nav>
  );
};
