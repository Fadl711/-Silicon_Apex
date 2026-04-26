"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(67, 97, 238, 0.25)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 20,
        border: '1px solid var(--border)',
        background: 'var(--bg-2)',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Spotlight radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: -1,
          opacity,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          zIndex: 0,
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}
