// /components/Procedures.jsx
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function Procedures() {
  const [active, setActive] = useState(null);
  const { t } = useTranslation("common");

  const data = t("procedures.items", { returnObjects: true });

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="procedures"
      aria-label={t("procedures.ariaLabel")}
      className="section-anchor w-full bg-background py-16 sm:py-24 md:py-0 md:min-h-screen md:flex md:items-center"
    >
      <div className="w-full max-w-8xl mx-auto px-3 flex flex-col md:flex-row md:h-[95vh] gap-6">
        {data.map((item, index) => {
          const isActive = active === index;
          return (
            <article
              key={item.name}
              className={`
                relative rounded-xl overflow-hidden cursor-pointer
                transition-all duration-700 ease-custom-bezier
                group
                ${isActive ? "md:flex-5" : "md:flex-1"}
              `}
              onClick={() => handleToggle(index)}
            >
              <div className="w-full h-full flex flex-col md:flex-row">
                {/* Images and titles*/}
                <div
                  className={`
                    relative w-full bg-cover bg-center 
                    transition-all duration-700 ease-custom-bezier
                    ${isActive ? "md:w-3/5 h-64 md:h-full" : "h-32 md:h-full"}
                  `}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  {!isActive && (
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center p-4">
                      <h2 className="font-lato-bold text-white text-3xl font-medium capitalize">
                        {item.name}
                      </h2>
                      <div className="mt-2 w-9 h-9 border-2 border-white rounded-full flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110">
                        +
                      </div>
                    </div>
                  )}
                </div>

                {/* Panel */}
                <div
                  className={`
                    bg-white text-text p-6 md:p-8 
                    ${isActive ? "block animate-fadeIn" : "hidden"}
                  `}
                >
                  <h2 className="text-2xl md:text-3xl font-lora font-medium mb-4 capitalize">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-base">
                    {item.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
