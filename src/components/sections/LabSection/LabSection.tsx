/**
 * LabSection Component
 * "Desde el laboratorio" horizontal scroll gallery controlled by vertical scroll
 */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VideoSlide } from "./VideoSlide";
import { ProjectCard } from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

interface LabProject {
  id: string;
  videoSrc?: string;
  src?: string;
  poster?: string;
  // Card data
  title: string;
  shortDescription?: string;
  date?: string;
  author?: string;
  github?: string;
  linkedin?: string;
}

interface LabSectionProps {
  id?: string;
  title?: string;
  description?: string;
  projects?: LabProject[];
}

const FALLBACK_PROJECTS: LabProject[] = [
  {
    id: "project-1",
    videoSrc:
      "https://res.cloudinary.com/dzzvj8b6j/video/upload/c_scale,q_58,w_886/v1763581970/cerebro_celeste_eeg_ph6uvi.webm",
    title: "Neuro EEG Lab",
    shortDescription:
      "Sistema avanzado de electroencefalografía para experiencias neurales inmersivas.",
    date: "Octubre 2025",
    author: "Oculus Lab",
    github: "https://github.com/Oculus-Lab/neuro-eeg-lab",
  },
  {
    id: "project-2",
    videoSrc: "https://res.cloudinary.com/dzzvj8b6j/video/upload/ac_none,q_97/v1763584130/Generaci%C3%B3n_de_Video_de_Ondas_Desordenadas_gpzalh.webm",
    title: "Pyceptron",
    shortDescription:
      "Estudio y desarrollo de algoritmos de entrenamiento de perceptrones multicapa.",
    date: "Octubre 2025",
    author: "TechAtlasDev",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export const LabSection: React.FC<LabSectionProps> = ({
  id = "lab-section",
  title = "Desde el laboratorio",
  description = "Historias que inician desde ideas creativas, son prototipadas y evolucionan hasta convertirse en proyectos completos con el trabajo en equipo.",
  projects = FALLBACK_PROJECTS,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    const sticky = stickyRef.current;

    if (!section || !slider || !sticky) return;

    const slides = slider.querySelectorAll<HTMLElement>(".lab-slide");
    if (!slides.length) return;

    const totalWidth = (slides.length - 1) * 100;

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        xPercent: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + window.innerWidth * slides.length,
          scrub: 1,
          pin: sticky,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative w-full bg-black text-white"
      style={{ minHeight: `${(projects.length+1) * 100}vh` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black via-black to-black" />

      <div ref={stickyRef} className="sticky top-0 h-screen flex flex-col">
        <div className="relative flex-1 overflow-hidden">
          <div ref={sliderRef} className="absolute inset-0 flex items-stretch">
            {/* Intro slide */}
            <article className="lab-slide shrink-0 w-screen h-screen flex flex-col items-start justify-center px-6 md:px-12 lg:px-20 bg-black">
              <p className="text-xs uppercase tracking-[0.5em] text-purple-400/80 mb-4">Laboratorio</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
              <p className="text-base md:text-xl text-white/80 max-w-3xl leading-relaxed">{description}</p>
            </article>

            {projects.map((project) => (
              <VideoSlide
                key={project.id}
                videoSrc={project.videoSrc}
                imageSrc={project.src}
                poster={project.poster}
                alt={project.title}
              >
                <ProjectCard
                  data={{
                    title: project.title,
                    shortDescription: project.shortDescription,
                    date: project.date,
                    author: project.author,
                    github: project.github,
                    linkedin: project.linkedin,
                  }}
                />
              </VideoSlide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
