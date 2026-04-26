"use client";

import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import LogoLoop from '@/components/ui/LogoLoop';
import {
  ReactLogo, NextjsLogo, FlutterLogo, NodejsLogo, LaravelLogo,
  PostgresLogo, MongoLogo, AWSLogo, FirebaseLogo, TypeScriptLogo,
  DockerLogo, RedisLogo, PythonLogo, GraphQLLogo,
  TailwindLogo, FigmaLogo, KubernetesLogo, VueLogo
} from '@/components/ui/TechLogos';

const ALL_LOGOS = [
  { Logo: ReactLogo, name: 'React', color: '#61DAFB' },
  { Logo: NextjsLogo, name: 'Next.js', color: '#ffffff' },
  { Logo: TypeScriptLogo, name: 'TypeScript', color: '#3178C6' },
  { Logo: TailwindLogo, name: 'Tailwind CSS', color: '#38BDF8' },
  { Logo: VueLogo, name: 'Vue.js', color: '#42B883' },
  { Logo: NodejsLogo, name: 'Node.js', color: '#539E43' },
  { Logo: LaravelLogo, name: 'Laravel', color: '#FF2D20' },
  { Logo: PythonLogo, name: 'Python', color: '#3776AB' },
  { Logo: FlutterLogo, name: 'Flutter', color: '#54C5F8' },
  { Logo: PostgresLogo, name: 'PostgreSQL', color: '#336791' },
  { Logo: MongoLogo, name: 'MongoDB', color: '#47A248' },
  { Logo: RedisLogo, name: 'Redis', color: '#E74C3C' },
  { Logo: AWSLogo, name: 'AWS', color: '#FF9900' },
  { Logo: FirebaseLogo, name: 'Firebase', color: '#FFCA28' },
  { Logo: DockerLogo, name: 'Docker', color: '#2496ED' },
  { Logo: KubernetesLogo, name: 'Kubernetes', color: '#326CE5' },
  { Logo: FigmaLogo, name: 'Figma', color: '#F24E1E' },
  { Logo: GraphQLLogo, name: 'GraphQL', color: '#E10098' },
];

const ROW1 = ALL_LOGOS.slice(0, 9);
const ROW2 = ALL_LOGOS.slice(9);

function makeLogo({ Logo, name, color }: { Logo: () => React.JSX.Element; name: string; color: string }) {
  return {
    node: (
      <div className="tech-logo-pill">
        <div className="tech-logo-icon"><Logo /></div>
        <span className="tech-logo-name" style={{ color }}>{name}</span>
      </div>
    ),
    title: name,
  };
}

export default function TechBelt() {
  const { t } = useLanguage();
  return (
    <section className="tech-belt-section">
      <div className="container">
        <div className="tech-belt-header">
          <div className="eyebrow">{t('tech_belt_eyebrow')}</div>
          <h3 className="tech-belt-title">{t('tech_belt_title')}</h3>
        </div>
      </div>
      <div className="tech-belt-tracks">
        <div className="tech-track">
          <LogoLoop logos={ROW1.map(makeLogo)} speed={55} direction="left" logoHeight={50} gap={12} hoverSpeed={0} fadeOut fadeOutColor="var(--bg-1)" ariaLabel="Frontend stack" />
        </div>
        <div className="tech-track">
          <LogoLoop logos={ROW2.map(makeLogo)} speed={45} direction="left" logoHeight={50} gap={12} hoverSpeed={0} fadeOut fadeOutColor="var(--bg-1)" ariaLabel="Backend stack" />
        </div>
      </div>
    </section>
  );
}
