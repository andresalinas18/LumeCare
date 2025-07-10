// components/WhyCali.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GalleryGrid from './WhyCaliContent';

export default function WhyCali() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const y = useTransform(scrollYProgress, [0, 0.3], ['0%', '-100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((value) => {
      setIsPinned(value > 0.3);
    });
  }, [scrollYProgress]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Video Background Section */}
      <section ref={sectionRef} className="relative h-screen w-full">
        <video
          className="absolute inset-0 object-cover w-full h-full z-0 brightness-[0.4]"
          src="/videos/why-cali.mp4"
          autoPlay
          loop
          muted
        />
        <motion.h2
          className="absolute top-1/2 left-1/2 text-white text-6xl font-bold -translate-x-1/2 -translate-y-1/2 z-10 tracking-widest"
          style={{ y, opacity }}
        >
          Why Cali
        </motion.h2>
      </section>

      {/* Sticky title once past threshold */}
      {isPinned && (
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm shadow-md">
          <h2 className="text-3xl font-semibold text-center py-4 text-black tracking-wider">
            Why Cali
          </h2>
        </div>
      )}

      {/* Why Cali Content */}
      <section className="px-4 py-16 bg-white">
        <GalleryGrid />
      </section>
    </div>
  );
}

