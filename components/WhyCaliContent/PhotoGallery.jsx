'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/breast-real.png',
  '/images/face.webp',
  '/images/trueEmpowerment.webp',
  '/images/breast.webp',
  '/images/smileFace.webp',
];
export default function PhotoGallery() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const getIndex = (offset) =>
    (current + offset + images.length) % images.length;

  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden select-none">

        {/* Zona clic izquierda */}
        <div
          className="absolute left-0 top-0 h-full w-1/2 z-20 cursor-pointer"
          onClick={() => paginate(-1)}
        />

        {/* Zona clic derecha */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 z-20 cursor-pointer"
          onClick={() => paginate(1)}
        />

        {/* Imagen izquierda */}
        <img
          src={images[getIndex(-1)]}
          alt="Prev"
          className="absolute left-4 w-1/4 h-[70%] object-cover rounded-lg opacity-30 blur-sm scale-75 z-0"
        />

        {/* Imagen central */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Cali ${current}`}
            className="relative w-2/4 h-full object-cover rounded-lg shadow-lg z-10"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
        </AnimatePresence>

        {/* Imagen derecha */}
        <img
          src={images[getIndex(1)]}
          alt="Next"
          className="absolute right-4 w-1/4 h-[70%] object-cover rounded-lg opacity-30 blur-sm scale-75 z-0"
        />
      </div>

      {/* Botones (opcional mantenerlos) */}
        <div className="flex justify-between w-full mt-6 px-6">
  {/* Botón izquierdo */}
            <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                <button
                onClick={() => paginate(-1)}
                className="text-4xl text-gray-600 group-hover:text-black transition"
                >
                &lt;
                </button>
                <span className="text-sm mt-0.5 text-gray-500 group-hover:text-black transition">
                Prev
                </span>
            </div>

            {/* Botón derecho */}
            <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                <button
                onClick={() => paginate(1)}
                className="text-4xl text-gray-600 group-hover:text-black transition"
                >
                &gt;
                </button>
                <span className="text-sm mt-0.5 text-gray-500 group-hover:text-black transition">
                Next
                </span>
            </div>
        </div>
    </div>
  );
}