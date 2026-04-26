import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import TechBelt from '@/components/sections/TechBelt';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />

      <ServicesSection />
      <div className="section-divider" />

      <StatsSection />
      <TechBelt />
      <div className="section-divider" />

      <ProjectsSection />
      <div className="section-divider" />

      <TeamSection />
      <div className="section-divider" />

      <TestimonialsSection />
      <div className="section-divider" />

      <ContactSection />
    </>
  );
}
