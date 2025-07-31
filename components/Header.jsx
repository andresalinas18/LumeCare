// components/Header.jsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (isMenuOpen) {
      setIsVisible(true);
      return;
    }

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  const changeLanguage = () => {
    const newLocale = router.locale === 'en' ? 'es' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header
      id="home"
      className={`fixed top-[15px] left-[15px] right-[15px] z-[100] 
        bg-white/80 border border-white/20 rounded-lg 
        shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[12px]
        transition-transform duration-300 ease-in-out 
        ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+30px)]'}`}
    >
      <nav className="relative flex items-center h-[80px] px-6 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#LumeCare" aria-label="LumeCare - Go to homepage" className="block h-full max-h-[4.5rem]">
            <Image
              src="/images/LumeCareLogo.svg"
              alt="LumeCare Homepage"
              width={120}
              height={40}
              priority
              className="h-full w-auto max-h-[4.5rem] transition-transform duration-300 hover:scale-[1.05]"
            />
          </a>
        </div>

        {/* Center Nav - Desktop */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-[2.5rem] list-none m-0 p-0">
            <li><a href="#LumeCare" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">{t('nav.home')}</a></li>
            <li><a href="#about" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">{t('nav.about')}</a></li>
            <li><a href="#yourJourney" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">{t('nav.journey')}</a></li>
            <li><a href="#procedures" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">{t('nav.procedures')}</a></li>
            <li><a href="#reviews" onClick={handleLinkClick} className="text-text text-base font-normal transition-colors duration-300 hover:text-primary">{t('nav.reviews')}</a></li>
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Botón para cambiar idioma */}
          <button
            onClick={changeLanguage}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            {router.locale === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="inline-block px-6 py-2 text-white font-bold text-[0.9rem] uppercase tracking-[1px] bg-primary rounded-[5px] no-underline transition duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-[2px]"
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white rounded-b-lg shadow-lg py-6 px-6 flex flex-col gap-6 animate-slideDown z-[99]">
            <ul className="flex flex-col gap-4 text-center">
              <li><a href="#LumeCare" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">{t('nav.home')}</a></li>
              <li><a href="#about" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">{t('nav.about')}</a></li>
              <li><a href="#yourJourney" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">{t('nav.journey')}</a></li>
              <li><a href="#procedures" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">{t('nav.procedures')}</a></li>
              <li><a href="#reviews" onClick={handleLinkClick} className="text-text text-base font-normal hover:text-primary">{t('nav.reviews')}</a></li>
              <li>
                <a href="#contact" onClick={handleLinkClick} className="inline-block w-full text-center px-6 py-2 text-white font-bold text-[0.9rem] uppercase tracking-[1px] bg-primary rounded-[5px] transition duration-300 hover:bg-primary-dark">
                  {t('nav.contact')}
                </a>
              </li>
              {/* language button mobile menu */}
              <li>
                <button
                  onClick={() => {
                    changeLanguage();
                    handleLinkClick();
                  }}
                  className="inline-block w-full text-center px-6 py-2 text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  {router.locale === 'en' ? 'ES' : 'EN'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
