import React from "react";
import { BentoCard } from "./BentoCard";
import { Users, Target, BookOpen } from "lucide-react";

// Visual para "Crecimiento continuo" - Chart morado minimalista moderno
const GrowthChart = () => (
  <div className="w-full h-32 relative flex items-center justify-center">
    <svg viewBox="0 0 240 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* Gradiente vertical para el área */}
        <linearGradient id="purpleVerticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        
        {/* Gradiente para la línea */}
        <linearGradient id="purpleLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="1" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Grid lines minimalistas */}
      {[30, 60, 90].map((y) => (
        <line
          key={y}
          x1="20"
          y1={y}
          x2="220"
          y2={y}
          stroke="rgba(168, 85, 247, 0.1)"
          strokeWidth="1"
        />
      ))}
      
      {/* Área bajo la curva con gradiente vertical */}
      <path
        d="M 20,110 L 20,95 Q 50,85 70,75 T 110,55 Q 140,40 170,30 T 220,15 L 220,110 Z"
        fill="url(#purpleVerticalGradient)"
      />
      
      {/* Línea principal con efecto glow - SIN PUNTOS */}
      <path
        d="M 20,95 Q 50,85 70,75 T 110,55 Q 140,40 170,30 T 220,15"
        fill="none"
        stroke="url(#purpleLineGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glow)"
      />
    </svg>
  </div>
);

// Visual para "Investigación con propósito" - Documentos/Research
const ResearchVisual = () => (
  <div className="w-full h-32 flex items-center justify-center gap-3">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="relative"
        style={{
          animation: `float 3s ease-in-out ${i * 0.3}s infinite`,
        }}
      >
        <div className="w-16 h-20 rounded-lg bg-purple-500/20 border border-purple-500/30 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
          <BookOpen size={20} className="text-purple-400" />
          <div className="w-10 h-1 bg-purple-400/40 rounded" />
          <div className="w-8 h-1 bg-purple-400/30 rounded" />
        </div>
      </div>
    ))}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
    `}</style>
  </div>
);

// Visual para "Talento interdisciplinario" - Íconos de personas conectadas
const TeamVisual = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="relative w-40 h-32">
      {/* Líneas de conexión */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 128">
        <line x1="40" y1="40" x2="80" y2="64" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
        <line x1="120" y1="40" x2="80" y2="64" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
        <line x1="80" y1="64" x2="80" y2="90" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
      </svg>
      
      {/* Nodos de personas */}
      {[
        { x: "25%", y: "25%", delay: "0s" },
        { x: "75%", y: "25%", delay: "0.2s" },
        { x: "50%", y: "50%", delay: "0.4s" },
        { x: "50%", y: "75%", delay: "0.6s" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-500/40 flex items-center justify-center backdrop-blur-sm"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            animation: `pulse 2s ease-in-out ${pos.delay} infinite`,
          }}
        >
          <Users size={16} className="text-purple-400" />
        </div>
      ))}
    </div>
  </div>
);

// Visual para "Resultados medibles" - Métricas con gráficos
const MetricsVisual = () => (
  <div className="w-full h-32 flex items-center justify-center gap-4">
    {[
      { height: "60%", label: "Papers" },
      { height: "85%", label: "Models" },
      { height: "70%", label: "Datasets" },
    ].map((bar, i) => (
      <div key={i} className="flex flex-col items-center gap-2 h-full justify-end pb-4">
        <div
          className="w-12 bg-linear-to-t from-purple-600 to-purple-400 rounded-t-lg transition-all duration-1000"
          style={{
            height: bar.height,
            animation: `grow 1.5s ease-out ${i * 0.2}s forwards`,
            transformOrigin: "bottom",
          }}
        />
        <span className="text-[10px] text-purple-300/60 font-medium">{bar.label}</span>
      </div>
    ))}
    <style>{`
      @keyframes grow {
        from { transform: scaleY(0); opacity: 0; }
        to { transform: scaleY(1); opacity: 1; }
      }
    `}</style>
  </div>
);

// Visual para "Impacto real" - Target con ondas
const ImpactVisual = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="relative w-24 h-24">
      {/* Ondas de impacto */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 border-2 border-purple-500 rounded-full"
          style={{
            animation: `ripple 3s ease-out ${i * 1}s infinite`,
          }}
        />
      ))}
      
      {/* Centro - Target */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-purple-500/30 flex items-center justify-center border-2 border-purple-500/50">
          <Target size={28} className="text-purple-400" />
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes ripple {
        0% {
          transform: scale(0.5);
          opacity: 1;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }
    `}</style>
  </div>
);

interface WhyPartnerSectionProps {
  id?: string;
}

export const WhyPartnerSection: React.FC<WhyPartnerSectionProps> = ({
  id = "why-partner",
}) => {
  return (
    <section
      id={id}
      className="relative w-full min-h-screen bg-black text-white py-20 md:py-64 px-6 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/10 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
         <p className="text-xs uppercase tracking-[0.5em] text-purple-400/50 mb-4">
            Por qué colaborar
          </p>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Por qué colaborar?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Colaborar con nosotros es unirse a proyectos que avanzan, crecen y generan impacto real desde el primer día.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
          {/* Top Row */}
          <BentoCard
            size="medium"
            title="Investigación con propósito"
            description="Proyectos reales. Resultados reales. Un equipo que construye antes que hablar."
            visual={<ResearchVisual />}
          />

          <BentoCard
            size="small"
            title="Talento interdisciplinario"
            description="Todo ser humano tiene convicciones, y nosotros nos encargamos de encontrar a los que comparten las nuestras."
            visual={<TeamVisual />}
          />

          {/* Middle Row */}
          <BentoCard
            size="small"
            title="Crecimiento continuo"
            description="Aprendizaje, disciplina y evolución en cada proyecto."
            visual={<GrowthChart />}
          />

          <BentoCard
            size="small"
            title="Resultados medibles"
            description="Publicaciones, modelos, datasets y herramientas open-source."
            visual={<MetricsVisual />}
          />

          <BentoCard
            size="small"
            title="Impacto real"
            description="Tecnología que mejora vidas, no solo portafolios."
            visual={<ImpactVisual />}
          />
        </div>
      </div>
    </section>
  );
};
