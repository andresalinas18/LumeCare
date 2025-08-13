"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("common");
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const el = videoRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? el.play?.().catch(() => {}) : el.pause?.()),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      id="LumeCare"
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-black text-white"
    >
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Fallback.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          aria-hidden
        />
      </div>

      {/* Video background (horizontal only) */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <video
          ref={videoRef}
          className={`block absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          preload="metadata"
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          poster="/images/Fallback.jpg"
          onLoadedData={() => setReady(true)}
          onError={() => setReady(true)}
        >
          <source src="/videos/Videolumecareportada.webm" type="video/webm" />
          <source src="/videos/Videolumecareportada.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(46,46,46,0.45)] z-20" />

      {/* Content */}
      <div className="relative z-30 text-center px-5 font-lora italic">
        <h1 className="text-white text-[clamp(2.5rem,4vw,4.5rem)] font-medium whitespace-pre-line leading-[1.1] mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-[clamp(1rem,1.6vw,1.3rem)] max-w-[700px] mx-auto mb-8 font-medium opacity-95">
          {t("hero.description")}
        </p>
        <a
          href="#procedures"
          aria-label={t("hero.cta_aria")}
          className="inline-block px-[38px] py-4 font-lato font-bold text-base uppercase tracking-[1px] bg-primary rounded-[5px] no-underline transition duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
          onClick={() => {
            if (process.env.NODE_ENV === "production" && window.dataLayer) {
              window.dataLayer.push({ event: "hero_cta_click" });
            }
          }}
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}