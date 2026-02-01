import React, { useMemo } from 'react';
import { Service, PortfolioItem } from './types';

// Raw data for the rectangles that fill the logo
const BAR_DATA = [
  { x: 11.4219, w: 12 }, { x: 41.4219, w: 6 }, { x: 53.4219, w: 18 },
  { x: 63.4375, w: 12 }, { x: 93.4375, w: 6 }, { x: 117.438, w: 6 },
  { x: 115.453, w: 6 }, { x: 127.453, w: 12 }, { x: 157.453, w: 18 },
  { x: 167.469, w: 12 }, { x: 185.469, w: 12 }, { x: 209.469, w: 12 },
  { x: 219.484, w: 6 }, { x: 231.484, w: 12 }, { x: 261.484, w: 6 },
  { x: 271.5, w: 6 }, { x: 295.5, w: 12 }, { x: 313.5, w: 6 },
  { x: 323.516, w: 12 }, { x: 341.516, w: 12 }, { x: 365.516, w: 12 },
  { x: 375.531, w: 18 }, { x: 399.531, w: 6 }, { x: 423.531, w: 12 },
  { x: 427.547, w: 12 }, { x: 457.547, w: 6 }, { x: 481.547, w: 6 },
  { x: 479.562, w: 12 }, { x: 497.562, w: 18 }, { x: 533.562, w: 6 }
];

export const LogoGraphic: React.FC<{ className?: string; animate?: boolean }> = ({ 
  className = "", 
  animate = false 
}) => {
  // Merge overlapping or strictly adjacent bars into single units
  const mergedBars = useMemo(() => {
    const sorted = [...BAR_DATA].sort((a, b) => a.x - b.x);
    const result: { x: number; w: number }[] = [];
    if (sorted.length === 0) return result;
    
    let current = { ...sorted[0] };
    for (let i = 1; i < sorted.length; i++) {
      const next = sorted[i];
      // If the next bar overlaps or is essentially adjacent to the current one
      if (next.x <= current.x + current.w + 1.5) {
        const newEnd = Math.max(current.x + current.w, next.x + next.w);
        current.w = newEnd - current.x;
      } else {
        result.push(current);
        current = { ...next };
      }
    }
    result.push(current);
    return result;
  }, []);

  return (
    <div className={`aspect-[551/129] relative ${className}`}>
      <style>{`
        @keyframes visualizer-wave-clean {
          0% { transform: scaleY(1); }
          30% { transform: scaleY(0.3); }   /* Higher lower bound for a more substantial feel */
          70% { transform: scaleY(1.25); }  /* Single dynamic overshoot peak */
          100% { transform: scaleY(1); }    /* Settle directly to final state */
        }
        
        .visualizer-bar {
          /* Fixed bottom reference in SVG coordinates (y ~ 120 is the bottom edge) */
          transform-origin: center 120px; 
          transition: transform 0.3s ease-out;
        }

        .animate-visualizer .visualizer-bar {
          /* Simplified duration (1.6s) for a snappy, clean singular wave */
          animation: visualizer-wave-clean 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
      <svg 
        viewBox="0 0 551 129" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Black Bars - Static container */}
        {mergedBars.map((bar, i) => (
          <rect 
            key={`black-${i}`}
            x={bar.x} 
            y="2.15997" 
            width={bar.w} 
            height="118" 
            fill="black"
          />
        ))}

        <mask id="mask0_rik" maskUnits="userSpaceOnUse" x="0" y="0" width="551" height="129">
          <path d="M27 42H0V128.5H550.5V4H517.5V9.5H491.5V39H467V57H443V51.5H409.5V39H393.5V0H357.5V9.5H335.5V15.5H318.5V31H307.5V44H285.5L281 47H267V42H244V29H225.5V24.5H198.5V42H179V51.5H147.5V42H122.5V47H103.5V20.5H85V1.5H47V24.5H27V42Z" fill="white"/>
        </mask>
        
        <g mask="url(#mask0_rik)" style={{ filter: 'saturate(1.3)' }} className={animate ? 'animate-visualizer' : ''}>
          <defs>
            <linearGradient id="rik_gradient" x1="0" y1="0" x2="551" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#87E8A0" />
              <stop offset="100%" stopColor="#71E2E4" />
            </linearGradient>
          </defs>
          {/* Foreground Gradient Bars - Unified logical units with harmonic ocean-ripple sequence */}
          {mergedBars.map((bar, i) => (
            <rect 
              key={`gradient-${i}`}
              x={bar.x - 3.5} 
              y="2.15997" 
              width={bar.w} 
              height="118" 
              fill="url(#rik_gradient)"
              className="visualizer-bar"
              style={{ 
                // Delay multiplier set to 0.0012 for a fluid wave travel speed across the bars
                animationDelay: animate ? `${bar.x * 0.0012}s` : '0s'
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export const LogoText: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'lg' }) => {
  if (size === 'sm') {
    return (
      <div className="flex flex-col">
        <span className="mono font-bold text-lg md:text-xl tracking-tight uppercase leading-none">
          Rik de Wit
        </span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium leading-none mt-1">
          Audio
        </span>
      </div>
    );
  }

  return (
    <div className="text-center w-full max-w-lg relative mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] font-normal uppercase mono leading-none mb-3 whitespace-nowrap text-black">
        RIK DE WIT
      </h1>
      <div className="w-[35%] sm:w-[40%] md:w-1/2 h-[1px] bg-black/30 mx-auto mb-3 transition-all duration-500" />
      <h2 className="text-lg sm:text-xl md:text-2xl tracking-[0.8em] font-light uppercase mono leading-none ml-[0.8em] text-black/80">
        AUDIO
      </h2>
    </div>
  );
};

export const Logo: React.FC<{ className?: string; hideText?: boolean; isNavbar?: boolean }> = ({ 
  className = "", 
  hideText = false,
  isNavbar = false 
}) => (
  <div className={`flex flex-col items-center transition-all duration-300 ${className}`}>
    <LogoGraphic className={`w-full ${isNavbar ? 'max-w-[280px]' : 'max-w-[340px] md:max-w-[420px]'} mb-4`} />
    {!hideText && <LogoText />}
  </div>
);

export const SERVICES: Service[] = [
  { id: 'live-mixing', title: 'Live Mixing', description: 'Het mixen van audio bij live evenementen en optredens voor een kristalhelder geluid.', icon: 'Mic2' },
  { id: 'evenementen', title: 'Evenementen', description: 'Complete audio-oplossingen voor elk type evenement, van klein tot groot.', icon: 'Speaker' },
  { id: 'technische-ondersteuning', title: 'Technische Ondersteuning', description: 'Professionele ondersteuning en technisch advies voor al uw audio-vraagstukken.', icon: 'Settings' }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', category: 'Live Mixing', title: 'Concertgebouw Live' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800', category: 'Evenementen', title: 'Bedrijfsfeest XL' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800', category: 'Support', title: 'Studio Inrichting' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', category: 'Live Mixing', title: 'Festival Zomer' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800', category: 'Evenementen', title: 'Product Lancering' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800', category: 'Support', title: 'Technisch Advies' },
];