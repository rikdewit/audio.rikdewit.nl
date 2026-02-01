
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO } from '../constants';

const PortfolioCard: React.FC<{ item: any; index: number; isParentVisible: boolean }> = ({ item, index, isParentVisible }) => {
  const [entranceComplete, setEntranceComplete] = useState(false);
  const STAGGER_SPEED = 150;
  const ENTRANCE_DURATION = 1200;

  useEffect(() => {
    if (isParentVisible && !entranceComplete) {
      const timer = setTimeout(() => {
        setEntranceComplete(true);
      }, (index * STAGGER_SPEED) + ENTRANCE_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isParentVisible, entranceComplete, index]);

  const staggerDelay = !entranceComplete ? index * STAGGER_SPEED : 0;

  return (
    <div 
      className="group relative aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer rounded-sm shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      <img 
        src={item.imageUrl} 
        alt={item.title}
        style={{ 
          transitionDelay: isParentVisible ? `${staggerDelay}ms` : '0ms' 
        }}
        className={`w-full h-full object-cover transition-all duration-[1200ms] group-hover:duration-500 ease-out group-hover:scale-110 ${
          isParentVisible ? 'grayscale-0 scale-100' : 'grayscale scale-105 opacity-0'
        }`}
      />
      
      <div 
        style={{ 
          transitionDelay: isParentVisible ? `${staggerDelay + 200}ms` : '0ms' 
        }}
        className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-10 transition-all duration-[800ms] ease-out group-hover:from-black ${
          isParentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="text-white/60 text-[10px] uppercase tracking-[0.4em] mb-3 transform transition-transform duration-500 group-hover:-translate-y-1">{item.category}</span>
        <h4 className="text-white text-2xl font-medium tracking-wide mono transform transition-transform duration-500 group-hover:-translate-y-2">{item.title}</h4>
        
        <div 
          style={{ 
            transitionDelay: isParentVisible ? `${staggerDelay + 500}ms` : '0ms' 
          }}
          className={`h-[1px] bg-white/30 mt-4 transition-all duration-[1000ms] ease-out group-hover:bg-white/60 group-hover:scale-x-105 origin-left ${
            isParentVisible ? 'w-full' : 'w-0'
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
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            <PortfolioCard key={item.id} item={item} index={index} isParentVisible={sectionVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
