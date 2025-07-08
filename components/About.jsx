import { useEffect, useRef, useState } from 'react';
import style from '../styles/About.module.css';

export default function About() {
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      key: 'card-1',
      title: 'Security First, Always.',
      text: 'Your health is non-negotiable. We meticulously vet every credential and protocol to ensure your absolute safety.',
      bg: '/images/securityFirstAlways.webp',
    },
    {
      key: 'card-2',
      title: 'Unwavering Trust.',
      text: 'We build relationships on radical honesty and open communication, from your first chat to your follow-up.',
      bg: '/images/unwaveringTrust.webp',
    },
    {
      key: 'card-3',
      title: 'True Empowerment.',
      text: 'We provide clear, comprehensive information, giving you the power to make confident decisions about your body.',
      bg: '/images/trueEmpowerment.webp',
    },
    {
      key: 'card-4',
      title: 'Absolute Transparency.',
      text: 'No hidden fees. No surprises. We provide detailed, all-inclusive quotes so you know exactly what to expect.',
      bg: '/images/absoluteTransparency.webp',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const imageUrl = target.getAttribute('data-bg');
            if (imageUrl) {
              target.style.backgroundImage = `url('${imageUrl}')`;
              observer.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleActivate = (index) => {
    setActiveIndex(index);
  };

  const handleHover = (index) => {
    if (window.innerWidth > 768) {
      setActiveIndex(index);
    }
  };

  return (
    <section id={style.about} className={style.aboutSectionUnified}>
      <div className={style.unifiedContentContainer}>
        {/* HEADLINE */}
        <div className={style.manifestoWrapper}>
          <h2 className={style.manifestoHeadline}>
            More Than an Agency. <br />
            <span>We're Your Partners in Transformation.</span>
          </h2>
        </div>

        <div className={style.mainContentGrid}>
          {/* CAROUSEL */}
          <div className={style.valueCarouselContainer}>
            {data.map((card, index) => (
              <div
                key={card.key}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`${style.valueCarouselCard} ${index === activeIndex ? style.active : ''}`}
                data-bg={card.bg}
                onMouseEnter={() => handleHover(index)}
                onClick={() => handleActivate(index)}
              >
                <div className={style.cardContent}>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MISSION TEXT */}
          <div className={style.aboutTextContent}>
            <p className={style.aboutIntro}>
              LumeCare wasn't created to be just another service. It was born from a deeply personal purpose: to make the dream of aesthetic transformation a reality that is safe, human, and truly empowering.
            </p>
            <div className={style.aboutMission}>
              <h3>Our Mission</h3>
              <p>
                By building exclusive partnerships with board-certified specialists in Cali and dedicating ourselves to warm, personal support, we uphold an unwavering commitment to ethics, health, and your authentic beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}