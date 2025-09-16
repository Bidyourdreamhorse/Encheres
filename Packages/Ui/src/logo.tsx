import * as React from 'react';

type Props = { variant?: 'gold-on-black' | 'black-on-gold'; size?: number };

export const Logo: React.FC<Props> = ({ variant = 'gold-on-black', size = 48 }) => {
  const isGoldOnBlack = variant === 'gold-on-black';
  const bg = isGoldOnBlack ? '#000000' : '#CC9A27';
  const fg = isGoldOnBlack ? '#CC9A27' : '#000000';
  return (
    <div style={{
      display:'inline-flex',
      alignItems:'center',
      gap:12,
      background:bg,
      color:fg,
      padding:8,
      borderRadius:12
    }}>
      {/* simple cheval stylisé en SVG */}
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path d="M10 38c6-8 12-12 20-12 8 0 16 6 24 4-3 6-8 10-14 12 2 4 1 10-6 10-8 0-10-7-10-12-6 2-10 0-14-2z"
              fill={fg}/>
        <circle cx="46" cy="26" r="2" fill={bg}/>
      </svg>
      <span style={{ fontWeight:800, fontSize:18, letterSpacing:0.5 }}>BidYourDreamHorse</span>
    </div>
  );
};
