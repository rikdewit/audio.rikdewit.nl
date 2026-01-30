import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen flex items-center py-20 px-6 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer rounded-sm"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-white/60 text-xs uppercase tracking-[0.3em] mb-3">{item.category}</span>
                <h4 className="text-white text-2xl font-medium tracking-wide mono">{item.title}</h4>
                <div className="w-0 group-hover:w-full h-[1px] bg-white/30 mt-4 transition-all duration-700 delay-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;