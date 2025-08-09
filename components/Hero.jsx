import { useTranslation } from "next-i18next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Hero() {
  const { t } = useTranslation("common");
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <section
      id="LumeCare"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Fallback.png"
          onCanPlayThrough={(e) =>
            e.currentTarget.classList.replace("opacity-0", "opacity-100")
          }
        >
          <source
            src="/videos/Videolumecareportada.webm"
            type='video/webm; codecs="vp9"'
          />
          <source
            src="/videos/Videolumecareportada.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(46,46,46,0.45)] z-20" />

      {/* Content */}
      <div className="relative z-30 text-center px-5 font-lora italic">
        <h1 className="text-white text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-medium whitespace-pre-line leading-[1.1] mb-6">
          {t("hero.title")}
        </h1>

        <p className="text-base sm:text-lg md:text-[1.3rem] max-w-[700px] mx-auto mb-8 font-medium opacity-95">
          {t("hero.description")}
        </p>

        <a
          href="#procedures"
          aria-label={t("hero.cta_aria")}
          className="inline-block px-[38px] py-4 font-lato font-bold text-base uppercase tracking-[1px] bg-primary rounded-[5px] no-underline transition duration-300 ease-in-out hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
        >
          {t("hero.cta")}
        </a>
      </div>

      {/* Speed Insights only in production */}
      {isProduction && <SpeedInsights />}
    </section>
  );
}
