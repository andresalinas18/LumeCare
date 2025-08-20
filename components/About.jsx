// components/About.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation("common");
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = t("about.cards", { returnObjects: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const imageUrl = target.getAttribute("data-bg");
            if (imageUrl) {
              target.style.backgroundImage = `url('${imageUrl}')`;
              observer.unobserve(target);
            }
          }
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
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
      id="about"
      style={{ backgroundImage: "url('/images/aboutUsFallback.jpg')" }}
      className="bg-cover bg-center bg-fixed py-[120px] px-5"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-heading text-4xl md:text-[4rem] font-medium leading-[1.2] text-center text-text-color text-shadow-custom whitespace-pre-line">
            {t("about.heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Mobile Layout */}
            <div className="flex flex-col gap-4 md:hidden">
              <div
                data-bg={`/images/${activeIndex === 0 ? "securityFirstAlways.webp" : activeIndex === 1 ? "unwaveringTrust.webp" : activeIndex === 2 ? "trueEmpowerment.webp" : "absoluteTransparency.webp"}`}
                style={{ backgroundImage: `url('/images/${activeIndex === 0 ? "securityFirstAlways.webp" : activeIndex === 1 ? "unwaveringTrust.webp" : activeIndex === 2 ? "trueEmpowerment.webp" : "absoluteTransparency.webp"}')` }}
                className="relative w-full h-80 rounded-2xl overflow-hidden bg-cover bg-center shadow-lg transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h4 className="text-2xl text-white font-bold mb-2">{activeCard.title}</h4>
                  <p className="text-base leading-relaxed">{activeCard.text}</p>
                </div>
              </div>

              <div className="flex text-white justify-center gap-4 pt-2">
                {data.map((card, index) =>
                  index !== activeIndex ? (
                    <div
                      key={card.title}
                      ref={(el) => (cardsRef.current[index] = el)}
                      onClick={() => handleActivate(index)}
                      className="relative w-1/4 h-28 rounded-lg overflow-hidden bg-cover bg-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundImage: `url('/images/${
                          index === 0
                            ? "securityFirstAlways.webp"
                            : index === 1
                            ? "unwaveringTrust.webp"
                            : index === 2
                            ? "trueEmpowerment.webp"
                            : "absoluteTransparency.webp"
                        }')`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-2">
                        <h5 className="text-white text-xs text-center font-semibold">
                          {card.title}
                        </h5>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex w-full gap-4 h-[550px]">
              {data.map((card, index) => (
                <div
                  key={card.title}
                  ref={(el) => (cardsRef.current[data.length + index] = el)}
                  onMouseEnter={() => handleHover(index)}
                  onClick={() => handleActivate(index)}
                  className={`relative h-full rounded-[20px] overflow-hidden cursor-default bg-cover bg-center shadow-2xl transform-gpu transition-all duration-700 ease-custom-bezier grayscale ${
                    activeIndex === index ? "flex-[5] grayscale-0" : "flex-1"
                  }`}
                  style={{
                    backgroundImage: `url('/images/${
                      index === 0
                        ? "securityFirstAlways.webp"
                        : index === 1
                        ? "unwaveringTrust.webp"
                        : index === 2
                        ? "trueEmpowerment.webp"
                        : "absoluteTransparency.webp"
                    }')`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/85 to-transparent flex flex-col items-start text-left">
                    <h4
                      className={`text-white text-xl font-bold transition-all duration-500 ease-out ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0 max-h-[100px] delay-500"
                          : "opacity-0 translate-y-5 max-h-0"
                      }`}
                    >
                      {card.title}
                    </h4>
                    <p
                      className={`mt-2 text-[0.95rem] leading-relaxed transition-all duration-500 ease-out ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0 max-h-[200px] delay-500"
                          : "opacity-0 translate-y-5 max-h-0"
                      }`}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-2xl font-lora italic leading-relaxed mb-8 text-text-color">
              {t("about.missionIntro")}
            </p>
            <div className="pl-6 border-l-[3px] border-primary">
              <h3 className="text-[1.8rem] text-primary mb-2">
                {t("about.missionTitle")}
              </h3>
              <p className="text-text-color opacity-90">
                {t("about.missionText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
