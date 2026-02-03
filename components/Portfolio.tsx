
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO } from '../constants';

const PortfolioCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        // Hogere drempel zodat de onderkant van de foto (waar de tekst staat) 
        // waarschijnlijk al in beeld is als de animatie start.
        threshold: 0.5, 
        rootMargin: '0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Bepaal de stagger op basis van de kolom (op desktop 3 kolommen, op tablet 2, op mobiel 1)
  const [staggerDelay, setStaggerDelay] = useState(0);

  useEffect(() => {
    const updateDelay = () => {
      const width = window.innerWidth;
      let columns = 1;
      if (width >= 1024) columns = 3;
      else if (width >= 768) columns = 2;
      
      setStaggerDelay((index % columns) * 150);
    };

    updateDelay();
    window.addEventListener('resize', updateDelay);
    return () => window.removeEventListener('resize', updateDelay);
  }, [index]);

  // Wacht tot de introductie-animatie klaar is en verwijder dan de delay
  useEffect(() => {
    if (isVisible) {
      // Maximaal ~1500ms (img duration) + stagger. We nemen ruim 2000ms + stagger
      // om zeker te zijn dat alles klaar is voordat we de delay weghalen.
      const timeout = setTimeout(() => {
        setIsAnimationComplete(true);
      }, staggerDelay + 2000);
      
      return () => clearTimeout(timeout);
    }
  }, [isVisible, staggerDelay]);

  return (
    <div 
      ref={cardRef}
      className="group relative aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer rounded-sm shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      <img 
        src={item.imageUrl} 
        alt={item.title}
        style={{ 
          transitionDelay: (isVisible && !isAnimationComplete) ? `${staggerDelay}ms` : '0ms' 
        }}
        className={`w-full h-full object-cover transition-all duration-[1500ms] ease-out group-hover:duration-500 group-hover:scale-110 ${
          isVisible ? 'grayscale-0 scale-100' : 'grayscale scale-105'
        }`}
      />
      
      <div 
        style={{ 
          transitionDelay: (isVisible && !isAnimationComplete) ? `${staggerDelay + 200}ms` : '0ms' 
        }}
        className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-10 transition-all duration-1000 ease-out group-hover:from-black ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <span className="text-white/60 text-[10px] uppercase tracking-[0.4em] mb-3 transform transition-transform duration-500 group-hover:-translate-y-1">{item.category}</span>
        <h4 className="text-white text-2xl font-medium tracking-wide mono transform transition-transform duration-500 group-hover:-translate-y-2">{item.title}</h4>
        
        <div 
          style={{ 
            transitionDelay: (isVisible && !isAnimationComplete) ? `${staggerDelay + 500}ms` : '0ms' 
          }}
          className={`h-[1px] bg-white/30 mt-4 transition-all duration-[1200ms] ease-out group-hover:bg-white/60 group-hover:scale-x-105 origin-left ${
            isVisible ? 'w-full' : 'w-0'
          }`}
        />
        
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
           <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">Bekijk project</span>
           <div className="w-4 h-[1px] bg-white" />
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-gray-400 mb-4">Portfolio</h2>
            <h3 className="text-5xl font-light tracking-tight leading-none mb-6">Gerealiseerde projecten</h3>
          </div>
          <div className="h-px bg-gray-200 flex-grow mx-12 hidden md:block" />
          <p className="text-gray-500 text-lg font-light">
            Een selectie van evenementen en producties waar ik trots op ben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PORTFOLIO.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
