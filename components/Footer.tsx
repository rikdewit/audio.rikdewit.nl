import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="mono font-bold tracking-tighter uppercase text-lg">
          Rik de Wit <span className="font-light text-gray-400">Audio</span>
        </div>
        
        <div className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400">
          &copy; {currentYear} Rik de Wit Audio. Alle rechten voorbehouden.
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