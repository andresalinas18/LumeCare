// components/WhyCali.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryGrid from './WhyCaliContent/GalleryGrid';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* VIDEO HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/Live.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-white text-center">
          <div className="relative flex items-center text-5xl md:text-7xl font-light leading-tight translate-x-20">
            <div className="relative h-[80px] md:h-[100px] w-[240px] overflow-hidden text-right font-lato">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[index].first}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="block font-bold pr-2"
                >
                  {phrases[index].first}
                </motion.span>
              </AnimatePresence>
            </div>

            <span className="px-1 text-white text-6xl font-light"></span>

            <div className="relative h-[80px] md:h-[100px] min-w-[400px] overflow-hidden text-left font-lora">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[index].second}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="block italic pl-2"
                >
                  {phrases[index].second}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 bg-white text-black font-medium px-6 py-3 rounded-full text-lg shadow-lg hover:bg-neutral-100 transition"
          >
            Schedule an Online Consultation
          </motion.button>
        </div>
      </section>

      {/* GALLERYGRID CON ANIMACIÓN */}
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