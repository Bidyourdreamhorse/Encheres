import * as React from 'react';
import { Logo } from '@ui/Logo';
import { theme } from '@ui/theme';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main style={{ minHeight:'100vh', background: theme.colors.black, color: theme.colors.gold, padding: '40px 24px' }}>
      <Logo size={40} />
      <Hero />
      <section style={{ marginTop: 48 }}>
        <a href="https://app.bidyourdreamhorse.com" style={{ color: theme.colors.gold, fontWeight: 700 }}>
          Ouvrir l’app web → 
        </a>
      </section>
    </main>
  );
}
