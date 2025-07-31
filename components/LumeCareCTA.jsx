import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function LumeCareCTA() {
  const { t } = useTranslation("common");

  const phrases = t("cta.phrases", { returnObjects: true });

  const [index, setIndex] = useState(0);

  // Cycle through phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/Live.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/LiveThumbnail.jpg"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-white text-center">
        <div className="relative flex flex-col md:flex-row items-center text-5xl md:text-7xl font-light leading-tight md:translate-x-20">
          {/* First word */}
          <div className="relative h-[80px] md:h-[100px] w-auto md:w-[300px] overflow-hidden text-center md:text-right font-lato">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[index].first}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block font-bold md:pr-2"
              >
                {phrases[index].first}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="hidden md:inline px-1 text-white text-6xl font-light"></span>

          {/* Second word */}
          <div className="relative h-[80px] md:h-[100px] w-auto md:min-w-[400px] overflow-hidden text-center md:text-left font-lora">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[index].second}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block italic md:pl-2"
              >
                {phrases[index].second}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 bg-white text-black font-medium px-6 py-3 rounded-full text-lg shadow-lg hover:bg-neutral-100 transition"
        >
          {t("cta.button")}
        </motion.a>
      </div>
    </section>
  );
}
