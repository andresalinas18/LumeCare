import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import styles from '../styles/Header.module.css'; 
import LumeCareLogo from '/public/images/LumeCareLogo.svg'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header} id="home">
      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <a href="#home" aria-label="LumeCare - Go to homepage">
            <Image 
              src={LumeCareLogo} 
              alt="LumeCare Homepage" 
              priority 
            />
          </a>
        </div>

        <button
          className={styles.menuIcon} 
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="main-nav"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'} 
        </button>

        <div className={`${styles.navContent} ${isMenuOpen ? styles.open : ''}`}>
          <ul id="main-nav" className={styles.navLinks}>
            <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#procedures" onClick={handleLinkClick}>Procedures</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#why-cali" onClick={handleLinkClick}>Why Cali?</a></li>
          </ul>
          <a href="#contact" className={styles.navCtaButton} onClick={handleLinkClick}>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}