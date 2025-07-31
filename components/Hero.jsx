import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Evita hydration error: renderiza traducciones solo en cliente
  useEffect(() => {

    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Autoplay blocked, waiting for user interaction:", err);
        });
      }
    }
  }, []);

  return (
    <section
      id="LumeCare"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-none md:object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Fallback.png"
          src="/videos/Videolumecareportada.mp4"
          onLoadedData={() => setVideoLoaded(true)}
        >
          Your browser does not support the video tag.
        </video>

        {/* Poster fallback */}
        {!videoLoaded && (
          <img
            src="/images/Fallback.png"
            alt="LumeCare background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(46,46,46,0.45)] z-20" />

      {/* Content */}
      <div className="relative z-30 text-white text-center px-5">
        <h1 className="text-[2.5rem] text-white sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-lora font-medium italic whitespace-pre-line leading-[1.1] mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-[1.3rem] max-w-[700px] mx-auto mb-8 font-lora font-medium italic opacity-95">
          {t("hero.description")}
        </p>
        <a
          href="#procedures"
          aria-label={t("hero.cta_aria")}
          className="inline-block px-[38px] py-4 font-lato font-bold text-base text-white uppercase tracking-[1px] bg-primary rounded-[5px] no-underline transition duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}
