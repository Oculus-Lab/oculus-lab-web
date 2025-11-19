/**
 * PartnersSection Component
 * Infinite scrolling ribbon of partner logos
 */
import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Partner {
  id: string;
  name: string;
  logo: string;
}

interface PartnersSectionProps {
  partners?: Partner[];
}

const DEFAULT_PARTNERS: Partner[] = [
  {
    id: "1",
    name: "Universidad Católica San Pablo",
    logo: "https://blog.ucsp.edu.pe/hubfs/logo-de-UCSP-16.png",
  },
  {
    id: "2",
    name: "GitHub",
    logo: "https://www.pngkey.com/png/full/183-1838196_github-white-logo-png.png",
  },
];

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  partners = DEFAULT_PARTNERS,
}) => {
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ribbonRef.current) return;

    const ribbon = ribbonRef.current;
    const items = ribbon.querySelectorAll(".partner-item");
    const itemWidth = (items[0] as HTMLElement).offsetWidth + 32; // width + gap
    const totalWidth = itemWidth * items.length;

    // Infinite animation
    gsap.fromTo(
      ribbon,
      { x: 0 },
      {
        x: -totalWidth / 2,
        duration: 40,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      gsap.killTweensOf(ribbon);
    };
  }, [partners]);

  return (
    <section className="w-full py-12 md:py-16 bg-black overflow-hidden">
      <div ref={ribbonRef} className="flex gap-8 md:gap-8 whitespace-nowrap">
        {/* Original set */}
        {partners.map((partner) => (
          <div key={`${partner.id}-1`} className="partner-item shrink-0">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 md:h-24 object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}

        {/* Duplicated set for infinite loop */}
        {partners.map((partner) => (
          <div key={`${partner.id}-2`} className="partner-item shrink-0">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 md:h-24 object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
