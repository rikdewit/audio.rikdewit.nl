'use client';
import React, { useState, useEffect } from 'react';
import { LogoGraphic, LogoText } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startThreshold = 120;
  const activeScroll = Math.max(0, scrollY - startThreshold);
  
  const textOffset = activeScroll * 0.65; 
  const graphicOffset = activeScroll * 0.08;
  const taglineOffset = activeScroll * 0.25;
  
  const fadeRange = 500; 
  const progress = Math.min(1, activeScroll / fadeRange);
  const textOpacity = 1 - Math.pow(progress, 5); 

  const bgOffset1 = activeScroll * 0.01;
  const bgOffset2 = activeScroll * 0.02;

  // Trigger visualizer greeting animation when user is at the top
  const isAtTop = scrollY < 20;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div 
          className="absolute top-[20%] left-[15%] w-[400px] h-[400px] border border-black rounded-full transition-transform duration-75 ease-out" 
          style={{ transform: `translateY(${-bgOffset1}px)` }}
        />
        <div 
          className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] border border-black rounded-full transition-transform duration-75 ease-out" 
          style={{ transform: `translateY(${bgOffset2}px)` }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto">
          <div 
            className="relative z-20 bg-white w-full flex flex-col items-center pb-2"
            style={{ transform: `translateY(${graphicOffset}px)` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[1000px] bg-white -translate-y-full pointer-events-none" />
            <LogoGraphic 
              animate={isAtTop}
              className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[380px] mx-auto transition-all duration-500" 
            />
          </div>
          
          <div className="relative z-10 w-full flex justify-center mt-[-2px]">
            <div 
              style={{ 
                transform: `translateY(${-textOffset}px)`,
                opacity: textOpacity
              }}
              className="transition-all duration-75 ease-out w-full"
            >
              <h1 className="sr-only">Rik de Wit Audio - Professionele Geluidstechnicus</h1>
              <LogoText />
            </div>
          </div>
        </div>
        
        <div 
          className="relative z-0 mt-8 sm:mt-12 w-full flex flex-col items-center"
          style={{ 
            transform: `translateY(${-taglineOffset}px)`,
            opacity: Math.max(0, 1 - progress * 2.0) 
          }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed tracking-wide px-4">
            Professionele audio-oplossingen voor elk evenement. 
            <br />
            Kwaliteit, precisie en een passie voor geluid.
          </p>

          <div className="mt-12 sm:mt-16">
            <a 
              href="#diensten" 
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Double Button Structure */}
              <div className="relative">
                {/* The 'Fake Shadow' Layer */}
                <div className="absolute top-1.5 left-0 w-full h-full rounded-full bg-black" />
                
                {/* The Top Button Layer */}
                <div className="relative z-10 bg-white border border-black rounded-full px-10 sm:px-12 py-3 sm:py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-1.5 group-active:translate-y-1.5 group-active:bg-black">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black group-active:text-white transition-colors duration-300">
                    Werk met mij samen
                  </span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="mt-8 w-[1px] h-12 sm:h-16 bg-black/10 group-hover:h-24 group-hover:bg-black/30 transition-all duration-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;