import { LampContainer } from "../../common/Lamp";
import { Button } from "../../common/Button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="relative w-full bg-black text-white">
      <LampContainer className="pt-[70vh]">
        <div className="mt-52 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
            Únete a la nueva era
          </h2>
          <p className="text-white/80 max-w-2xl text-base md:text-lg leading-relaxed">
            ¿Tienes ideas innovadoras? ¿Quieres explorar nuevas tecnologías? 
            <span className="block mt-2 font-semibold text-white">
              Lo único que necesitas es querer aprender.
            </span>
          </p>

          {/* Contact Form */}
          <form className="w-full max-w-md mt-8 space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
            />
            <textarea
              placeholder="Cuéntanos tu idea o por qué quieres unirte..."
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
            <Button
              variant="outline"
              className="w-full"
            >
              Enviar
            </Button>
          </form>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Oculus-Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="mailto:contact@oculuslab.dev"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} className="text-white" />
            </a>
          </div>
        </div>
      </LampContainer>


      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
    </section>
  );
}