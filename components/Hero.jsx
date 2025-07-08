// components/Hero.jsx
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = (e) => setIsMobile(e.matches);

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className={styles.heroSection} id="home">
      {!isMobile ? (
        <div className={styles.heroVideoWrapper}>
          <video
            className="heroVideo"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/Fallback.png"
          >
            <source src="/videos/Videolumecareportada.webm" type="video/webm" />
            <source src="/videos/Videolumecareportada.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className={styles.heroFallbackImageWrapper}>
          <Image
            src="/images/Cali-fallback.png"
            alt="LumeCare - Cali fallback"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      <div className={styles.heroOverlay}/>

      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>
          Your Transformation,<br /> Guided with LumeCare.
        </h1>
        <p className={styles.heroSubheadline}>
          Discover world-class aesthetic results with the confidence of dedicated,
          personal support. LumeCare is your trusted partner for a safe and empowering
          medical journey in Cali, Colombia.
        </p>
        <a
          href="#procedures"
          className={styles.heroCtaButton}
          aria-label="Explore our aesthetic procedures"
        >
          Explore Our Procedures
        </a>
      </div>
    </section>
  );
}