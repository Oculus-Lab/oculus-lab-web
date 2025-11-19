import {
  HeroSection,
  RevealSection,
  WeSection,
  LabSection,
  WhyPartnerSection,
  ContactSection,
  FooterSection,
} from "../components/sections";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <RevealSection />
      <WeSection description="Somos un equipo de investigación independiente formado por estudiantes y profesionales con iniciativa y visión. Nacimos con la idea de impulsar proyectos tecnológicos y científicos que unan diferentes disciplinas y generen impacto real." />
      <LabSection />
      <WhyPartnerSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}