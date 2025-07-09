// components/WhyCali.jsx
'use client';
import { motion } from 'framer-motion';

export default function WhyCali() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fondo video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/Cali.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Texto centrado */}
      <motion.div
        className="z-20 relative h-full flex flex-col items-center justify-center text-white text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold leading-[1.2] md:leading-[1.2] tracking-wide text-[var(--color-background)]">
          <span className="block font-[var(--font-headings)] text-4x4">Your journey</span>
          <span className="block font-[var(--font-headings)] text-4x4">starts in Cali</span>
          <span className="block"></span>
        </h1>
      </motion.div>
    </section>
  );
}