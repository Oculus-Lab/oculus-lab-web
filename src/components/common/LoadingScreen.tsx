import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box } from "lucide-react";
import { useLoading } from "../../context/useLoadingContext";

interface Particle {
  id: number;
  left: number;
  top: number;
}

// Generar partículas con valores predefinidos
const PARTICLES: Particle[] = [
  { id: 0, left: 15, top: 20 },
  { id: 1, left: 75, top: 15 },
  { id: 2, left: 25, top: 80 },
  { id: 3, left: 85, top: 70 },
  { id: 4, left: 50, top: 30 },
];

export function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline principal
      const tl = gsap.timeline();

      // Animación de entrada - orbes flotantes
      for (let i = 0; i < 3; i++) {
        tl.to(
          orbsRef.current[i],
          {
            y: -30,
            opacity: 0.6,
            duration: 0.8,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          },
          i * 0.2
        );
      }

      // Rotación continua del contenedor central
      gsap.to(".loading-cube", {
        rotation: 360,
        duration: 3,
        ease: "none",
        repeat: -1,
      });

      // Animación de glow pulsante
      gsap.to(".loading-glow", {
        opacity: 0.8,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Animación de texto
      gsap.to(textRef.current, {
        opacity: 1,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Simular carga completada (remover después de 3 segundos en demo)
      gsap.delayedCall(3, () => {
        // Notificar que terminó la carga para ejecutar animaciones
        setIsLoading(false);

        tl.to(containerRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => setIsVisible(false),
        });
      });
    });

    return () => ctx.revert();
  }, [setIsLoading]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
    >
      {/* Fondo con gradientes sútiles */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Gradiente radial sutil */}
        <div className="absolute inset-0 bg-radial-at-center from-purple-950/20 via-black to-black" />

        {/* Grilla de líneas sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Contenedor central */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Cubo animado con glow */}
        <div className="relative">
          {/* Glow de fondo */}
          <div
            className="loading-glow absolute inset-0 blur-3xl rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
              width: "120px",
              height: "120px",
            }}
          />

          {/* Cubo principal */}
          <div className="loading-cube relative w-20 h-20 flex items-center justify-center">
            {/* Orbes flotantes alrededor */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) orbsRef.current[i] = el;
                }}
                className="absolute w-2 h-2 rounded-full backdrop-blur-md border border-white/30 bg-white/10"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 120}deg) translateX(45px)`,
                }}
              />
            ))}

            {/* Icono del cubo */}
            <div className="relative z-20 flex items-center justify-center">
              <div className="absolute inset-0 blur-xl bg-linear-to-br from-purple-600/40 to-transparent rounded-lg" />
              <Box className="w-10 h-10 text-white relative z-20" strokeWidth={1.5} />
            </div>
          </div>

          {/* Anillo de vidrio */}
          <div
            className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-md"
            style={{
              boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1)",
            }}
          />
        </div>

        {/* Texto de estado */}
        <div className="flex flex-col items-center gap-4">
          <div ref={textRef} className="text-center">
            <p className="text-white/80 text-sm font-light tracking-widest uppercase">
              Cargando
            </p>
            <p className="text-white/40 text-xs mt-2 font-light">
              Preparando la realidad extendida
            </p>
          </div>

          {/* Indicadores de progreso minimalistas */}
          <div className="flex gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-1 bg-white/20 rounded-full"
                style={{
                  width: "12px",
                  animation: `pulse ${0.6 + i * 0.1}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Línea de vidrio decorativa */}
        <div className="absolute bottom-0 w-32 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Efecto de partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float-particle ${3 + particle.id}s infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scaleY(0.5);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
