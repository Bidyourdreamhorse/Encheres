import * as React from 'react';
import { theme } from '@ui/theme';

export default function Hero() {
  return (
    <div style={{ marginTop: 32, maxWidth: 720, lineHeight: 1.5 }}>
      <h1 style={{ color: theme.colors.gold, margin: 0, fontSize: 36 }}>BidYourDreamHorse</h1>
      <p style={{ color: theme.colors.offwhite }}>
        Plateforme d’enchères de chevaux — logo noir & or, authentification et annonces via Supabase.
      </p>
    </div>
  );
}
