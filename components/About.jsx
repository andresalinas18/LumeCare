import { useEffect, useRef, useState } from 'react';

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
      { rootMargin: '100px', threshold: 0.1 }
    );

    const currentRefs = cardsRef.current;
    currentRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [data]);

  const handleActivate = (index) => {
    setActiveIndex(index);
  };

  const handleHover = (index) => {
    if (window.innerWidth < 768) return;
    setActiveIndex(index);
  };

  const activeCard = data[activeIndex];

  return (
    <section 
      style={{ backgroundImage: "url('/images/aboutUsFallback.jpg')" }}
      className="bg-cover bg-center bg-fixed py-[120px] px-5"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-heading text-4xl md:text-[4rem] font-medium leading-[1.2] text-center text-text-color text-shadow-custom">
            More Than an Agency. <br />
            <span className="italic font-semibold">We're Your Partners in Transformation.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            {/* === LAYOUT FOR MOVIL (VISIBLE BY DEFAULT, HIDDEN FOR DESKTOP) === */}
            <div className="flex flex-col gap-4 md:hidden">
              
              {/* main card (Active)*/}
              <div
                data-bg={activeCard.bg}
                style={{ backgroundImage: `url('${activeCard.bg}')`}} 
                className="relative w-full h-80 rounded-2xl overflow-hidden bg-cover bg-center shadow-lg transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2 text-white">{activeCard.title}</h4>
                  <p className="text-base leading-relaxed">{activeCard.text}</p>
                </div>
              </div>

              {/* inactive cards */}
              <div className="flex justify-center gap-4 pt-2">
                {data.map((card, index) => {
                  if (index === activeIndex) {
                    return null;
                  }

                  return (
                    <div
                      key={card.key}
                      ref={(el) => (cardsRef.current[index] = el)}
                      data-bg={card.bg}
                      onClick={() => handleActivate(index)}
                      className="relative w-1/4 h-28 rounded-lg overflow-hidden bg-cover bg-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-2">
                        <h5 className="text-white text-xs text-center font-semibold">{card.title}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* === LAYOUT FOR DESKTOP === */}
            <div className="hidden md:flex w-full gap-4 h-[550px]">
              {data.map((card, index) => (
                <div
                  key={card.key}
                  ref={(el) => (cardsRef.current[data.length + index] = el)}
                  data-bg={card.bg}
                  onMouseEnter={() => handleHover(index)}
                  onClick={() => handleActivate(index)}
                  className={`
                    relative h-full rounded-[20px] overflow-hidden cursor-default 
                    bg-cover bg-center shadow-2xl transform-gpu
                    transition-all duration-700 ease-custom-bezier
                    grayscale
                    ${activeIndex === index ? 'flex-[5] grayscale-0' : 'flex-1'}
                  `}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/85 to-transparent flex flex-col items-start text-left">
                    <h4 className={`text-white text-xl font-bold transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-100 translate-y-0 max-h-[100px] delay-500' : 'opacity-0 translate-y-5 max-h-0'}`}>
                      {card.title}
                    </h4>
                    <p className={`mt-2 text-[0.95rem] leading-relaxed transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-100 translate-y-0 max-h-[200px] delay-500' : 'opacity-0 translate-y-5 max-h-0'}`}>
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* --- MISSION TEXT --- */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-2xl font-lora italic leading-relaxed mb-8 text-text-color">
              LumeCare wasn't created to be just another service. It was born from a deeply personal purpose: to make the dream of aesthetic transformation a reality that is safe, human, and truly empowering.
            </p>
            <div className="pl-6 border-l-[3px] border-primary">
              <h3 className="text-[1.8rem] text-primary mb-2">Our Mission</h3>
              <p className="text-text-color opacity-90">
                By building exclusive partnerships with board-certified specialists in Cali and dedicating ourselves to warm, personal support, we uphold an unwavering commitment to ethics, health, and your authentic beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}