import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { id: "hero", label: "Inicio" },
  { id: "reveal", label: "Descubre" },
  { id: "we-section", label: "Quiénes Somos" },
  { id: "lab-section", label: "Laboratorio" },
  { id: "why-partner", label: "Colaborar" },
  { id: "contacto", label: "Contacto" },
];

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return;

    if (isOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";

      // Animate in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        menuRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)", delay: 0.1 }
      );

      // Stagger animate menu items
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    } else {
      // Restore scrolling
      document.body.style.overflow = "auto";

      // Animate out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Glass dark overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

      {/* Menu content */}
      <div
        ref={menuRef}
        className="relative z-10 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-0 md:-right-16 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          aria-label="Cerrar menú"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Menu items */}
        <nav className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                onClick={() => handleNavigation(item.id)}
                className="block group cursor-pointer"
              >
                <div className="flex items-center justify-between px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <span className="text-2xl md:text-4xl font-medium text-white group-hover:text-white/90 transition-colors">
                    {item.label}
                  </span>
                  <span className="text-white/40 group-hover:text-white/60 transition-all transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
                {index < menuItems.length - 1 && (
                  <div className="h-px bg-white/10 mx-6" />
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Footer text */}
        <p className="text-center text-white/40 text-sm mt-6">
          Presiona ESC para cerrar
        </p>
      </div>
    </div>
  );
};
