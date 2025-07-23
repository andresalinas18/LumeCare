// /components/LumeCareCTA.jsx

"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryGrid from './LumeCareCTA/GalleryGrid';

export default function WhyCali() {
  const phrases = [
    { first: 'Live', second: 'empowered' },
    { first: 'Live', second: 'confidently' },
    { first: 'Live', second: 'beautifully' },
    { first: 'Move', second: 'forward' },
    { first: 'Move', second: 'freely' },
    { first: 'Move', second: 'with purpose' },
  ];

  const [index, setIndex] = useState(0);

  // Effect for cycling through the phrases array.
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [phrases.length]); // Dependency added for stability.

  return (
    <>
      {/* === VIDEO HERO SECTION === */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/Live.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Fallback.png" // Poster for faster initial load.
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-white text-center">
          {/* Main container for the animated text. Stacks vertically on mobile, horizontally on desktop. */}
          <div className="relative flex flex-col md:flex-row items-center text-5xl md:text-7xl font-light leading-tight md:translate-x-20">
            
            {/* First word container. */}
            <div className="relative h-[80px] md:h-[100px] w-auto md:w-[240px] overflow-hidden text-center md:text-right font-lato">
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

            {/* Spacer for desktop layout only. */}
            <span className="hidden md:inline px-1 text-white text-6xl font-light"></span>

            {/* Second word container. */}
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
            Schedule an Online Consultation
          </motion.a>
        </div>
      </section>

      {/* === GALLERY GRID SECTION === */}
      <section className="bg-white py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <GalleryGrid />
        </motion.div>
      </section>
    </>
  );
}