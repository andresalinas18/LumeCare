"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import LumeCareLogo from '/public/images/LumeCareLogo.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- States for scroll-based header visibility ---
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- Handles header visibility on scroll ---
  const handleScroll = () => {
    // Keep header visible if mobile menu is open
    if (isMenuOpen) {
      setIsVisible(true);
      return;
    }

    const currentScrollY = window.scrollY;
    // Hide header on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  // --- Effect to attach and clean up the scroll listener ---
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  // This effect handles body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      id="home"
      // --- Applies transition and visibility classes based on state ---
      className={`
        fixed top-[15px] left-[15px] right-[15px] z-[100] 
        bg-white/80 border border-white/20 rounded-lg 
        shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[12px]
        transition-transform duration-300 ease-in-out 
        ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+30px)]'}
      `}
    >
      <nav className="relative flex items-center h-[80px] px-6 justify-between">
        {/* Logo (izquierda) */}
        <div className="flex items-center">
          <a href="#home" aria-label="LumeCare - Go to homepage" className="block h-full max-h-[4.5rem]">
            <Image
              src={LumeCareLogo}
              alt="LumeCare Homepage"
              priority
              className="h-full w-auto max-h-[4.5rem] transition-transform duration-300 hover:scale-[1.05]"
            />
          </a>
        </div>

        {/* Center Nav - Desktop */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-[2.5rem] list-none m-0 p-0">
            <li><a href="#home" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">Home</a></li>
            <li><a href="#procedures" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">Procedures</a></li>
            <li><a href="#about" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">About</a></li>
            <li><a href="#why-cali" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">Why Cali?</a></li>
          </ul>
        </div>

        {/* Contact Button - Desktop (derecha) */}
        <div className="hidden lg:flex items-center">
          <a href="#contact" onClick={handleLinkClick} className="inline-block px-6 py-2 text-white font-bold text-[0.9rem] uppercase tracking-[1px] bg-primary rounded-[5px] no-underline transition duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-[2px]">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-3xl" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white rounded-b-lg shadow-lg py-6 px-6 flex flex-col gap-6 animate-slideDown z-[99]">
            <ul className="flex flex-col gap-4 text-center">
              <li><a href="#home" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">Home</a></li>
              <li><a href="#procedures" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">Procedures</a></li>
              <li><a href="#about" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">About</a></li>
              <li><a href="#why-cali" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">Why Cali?</a></li>
              <li>
                <a href="#contact" onClick={handleLinkClick} className="inline-block w-full text-center px-6 py-2 text-white font-bold text-[0.9rem] uppercase tracking-[1px] bg-primary rounded-[5px] transition duration-300 hover:bg-primary-dark">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}