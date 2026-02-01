import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="mono font-bold tracking-tighter uppercase text-lg">
          Rik de Wit <span className="font-light text-gray-400">Audio</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 flex gap-6">
            <span>KVK 99503778</span>
            <span>BTW NL005390615B58</span>
          </div>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Algemene Voorwaarden</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;