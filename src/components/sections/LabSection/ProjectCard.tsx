import { forwardRef } from "react";
import { Github, Linkedin } from "lucide-react";

export interface ProjectCardData {
  title: string;
  shortDescription?: string;
  date?: string;
  author?: string;
  github?: string;
  linkedin?: string;
}

interface ProjectCardProps {
  data: ProjectCardData;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute bottom-12 left-8 right-8 md:left-16 md:right-16 w-fit"
      >
        {/* Glass morphism card */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4 max-w-lg w-fit flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-white">
            {data.title}
          </h3>

          {data.shortDescription && (
            <p className="text-sm md:text-base text-white/90">
              {data.shortDescription}
            </p>
          )}

          {/* Meta info: Date & Author */}
          <div className="flex items-center gap-4 text-xs md:text-sm text-white/60">
            {data.date && (
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-white/40" />
                {data.date}
              </span>
            )}
            {data.author && (
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-white/40" />
                {data.author}
              </span>
            )}
          </div>

          {/* Social links */}
          {(data.github || data.linkedin) && (
            <div className="flex items-center gap-3">
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} className="text-white" />
                </a>
              )}
              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="text-white" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
