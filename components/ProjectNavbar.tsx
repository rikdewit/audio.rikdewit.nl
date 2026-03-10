'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoGraphic, LogoText } from '../constants';

interface ProjectNavbarProps {
  projectTitle?: string;
  darkBackground?: boolean;
  previousProject?: {
    slug: string;
    title: string;
  };
  nextProject?: {
    slug: string;
    title: string;
  };
}

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({
  projectTitle,
  darkBackground = false,
  previousProject,
  nextProject
}) => {
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
  const linkColor = isScrolled ? 'text-black' : 'text-white';
  const linkHoverColor = isScrolled ? 'hover:text-gray-400' : 'hover:text-gray-300';
  const disabledLinkColor = isScrolled ? 'text-black' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-[padding,background-color] duration-500 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <div className={`transition-all duration-500 origin-left overflow-hidden ${showSmallLogoGraphic ? 'w-24 md:w-32 opacity-100 scale-[0.85]' : 'w-0 opacity-0 scale-50'}`}>
            <LogoGraphic className="w-full" />
          </div>
          <div className={`transition-all duration-500 ${showSmallLogoGraphic ? '-ml-1 md:-ml-2' : 'ml-0'} ${showSmallLogoGraphic ? 'hidden md:block' : ''}`}>
            <LogoText size="sm" color={isScrolled ? 'black' : darkBackground ? 'white' : 'black'} compact={showSmallLogoGraphic} />
          </div>
        </Link>

        {/* Center - Project Title (only visible after scroll) */}
        {projectTitle && (
          <div className={`flex items-center transition-all duration-500 ${showSmallLogoGraphic ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors ${linkColor}`}>
              {projectTitle}
            </h1>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-6 md:gap-12">
          {/* Project Navigation */}
          <div className="flex items-center gap-6 md:gap-12">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${linkColor} ${linkHoverColor}`}
                title={`Vorig project: ${previousProject.title}`}
              >
                <span className="hidden md:inline">← Vorige</span>
                <span className="md:hidden">←</span>
              </Link>
            ) : (
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${disabledLinkColor}`}>
                <span className="hidden md:inline">← Vorige</span>
                <span className="md:hidden">←</span>
              </span>
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${linkColor} ${linkHoverColor}`}
                title={`Volgende project: ${nextProject.title}`}
              >
                <span className="hidden md:inline">Volgende →</span>
                <span className="md:hidden">→</span>
              </Link>
            ) : (
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${disabledLinkColor}`}>
                <span className="hidden md:inline">Volgende →</span>
                <span className="md:hidden">→</span>
              </span>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
