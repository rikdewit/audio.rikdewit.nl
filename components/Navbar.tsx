
'use client';
import React, { useState, useEffect } from 'react';
import { LogoGraphic, LogoText } from '../constants';

interface NavbarProps {
  darkBackground?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkBackground = false }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 50;
  const showSmallLogoGraphic = scrollY > 320;
  const linkColor = isScrolled ? 'text-black' : darkBackground ? 'text-white' : 'text-black';
  const linkHoverColor = isScrolled ? 'hover:text-gray-400' : darkBackground ? 'hover:text-gray-300' : 'hover:text-gray-400'; 

  const navLinks = [
    { name: 'Diensten', href: '#diensten' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-[padding,background-color] duration-500 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <div className={`transition-all duration-500 origin-left overflow-hidden ${showSmallLogoGraphic ? 'w-24 md:w-32 opacity-100 scale-[0.85]' : 'w-0 opacity-0 scale-50'}`}>
            <LogoGraphic className="w-full" />
          </div>
          <div className={`transition-all duration-500 ${showSmallLogoGraphic ? '-ml-1 md:-ml-2' : 'ml-0'}`}>
            <LogoText size="sm" color={isScrolled ? 'black' : darkBackground ? 'white' : 'black'} compact={showSmallLogoGraphic} />
          </div>
        </a>
        
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.href === '#diensten') {
                    window.dispatchEvent(new Event('trigger-services-animation'));
                }
              }}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${linkColor} ${linkHoverColor}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden flex space-x-4">
          <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-4 py-2 rounded-full">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
