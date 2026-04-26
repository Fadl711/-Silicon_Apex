"use client";

import React from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import dynamic from 'next/dynamic';

const DarkVeil = dynamic(() => import('@/components/ui/DarkVeil'), { ssr: false });

// Inner wrapper so it can use useTheme (must be child of ThemeProvider)
function AppShell({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <>
      {/* Fixed full-page WebGL background — dark mode only */}
      {theme === 'dark' && (
        <div
          aria-hidden
          style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
        >
          <DarkVeil
            speed={0.5}
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            scanlineFrequency={0}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>
      )}

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell>{children}</AppShell>
      </LanguageProvider>
    </ThemeProvider>
  );
}
