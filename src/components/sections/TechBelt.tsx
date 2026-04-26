"use client";

import React from 'react';
import LogoLoop from '@/components/ui/LogoLoop';
import {
  Code2, Layers, Smartphone, Server, Database, Cloud, Zap, Box, GitBranch, Code, Activity
} from 'lucide-react';

const techItems = [
  { icon: <Code2 size={15} color="#4361EE" />, name: 'React' },
  { icon: <Layers size={15} color="#00B4D8" />, name: 'Next.js' },
  { icon: <Smartphone size={15} color="#027DFD" />, name: 'Flutter' },
  { icon: <Server size={15} color="#6DB33F" />, name: 'Node.js' },
  { icon: <Database size={15} color="#FF7950" />, name: 'Laravel' },
  { icon: <Database size={15} color="#336791" />, name: 'PostgreSQL' },
  { icon: <Server size={15} color="#47A248" />, name: 'MongoDB' },
  { icon: <Cloud size={15} color="#FF9900" />, name: 'AWS' },
  { icon: <Cloud size={15} color="#4285F4" />, name: 'Firebase' },
  { icon: <Zap size={15} color="#3178C6" />, name: 'TypeScript' },
  { icon: <Box size={15} color="#2496ED" />, name: 'Docker' },
  { icon: <GitBranch size={15} color="#F05032" />, name: 'Redis' },
  { icon: <Code size={15} color="#3776AB" />, name: 'Python' },
  { icon: <Activity size={15} color="#E535AB" />, name: 'GraphQL' },
];

const logos = techItems.map(item => ({
  node: (
    <div className="tech-item">
      {item.icon}
      {item.name}
    </div>
  ),
  title: item.name,
}));

export default function TechBelt() {
  return (
    <div className="tech-belt-wrapper">
      <LogoLoop
        logos={logos}
        speed={60}
        direction="left"
        logoHeight={40}
        gap={16}
        hoverSpeed={0}
        fadeOut
        fadeOutColor="var(--bg-0)"
        ariaLabel="Technologies we use"
      />
    </div>
  );
}
