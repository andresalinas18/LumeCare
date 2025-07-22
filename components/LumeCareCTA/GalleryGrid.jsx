// components/GalleryGrid.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const imageData = [
  {
    src: '/images/firstNew.webp',
    title: 'Beauty Meets Culture',
    description: 'In Cali, advanced aesthetic care blends with rich culture to create unforgettable wellness journeys.'
  },
  {
    src: '/images/secondNew.webp',
    title: 'World-Class Procedures',
    description: 'Cali hosts highly trained professionals and modern clinics trusted by international visitors.'
  },
  {
    src: '/images/fourthNew.webp',
    title: 'Safe & Modern',
    description: 'With top-tier medical facilities and friendly service, Cali is a rising hub for medical tourism.'
  },
  {
    src: '/images/fourthNews.webp',
    title: 'Affordable Excellence',
    description: 'Experience premium beauty treatments at accessible prices while enjoying Colombian warmth.'
  },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* GRID DE IMÁGENES */}
      <div className="grid grid-cols-6 grid-rows-4 gap-4 min-h-[750px]">
        {/* Imagen A */}
        <motion.div
          layoutId="image-0"
          className="col-span-4 row-span-2 relative cursor-pointer rounded-xl overflow-hidden shadow-xl"
          onClick={() => setSelected(0)}
        >
        <div className="absolute top-0 left-0 text-black text-sm md:text-base font-semibold px-3 py-1 rounded-br-lg z-10">
          Colombia Ranks Among <br />the Top Countries for Plastic <br />Surgery Worldwide
        </div>
            <Image
              src={imageData[0].src}
              alt="Image 0"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
        </motion.div>

        {/* Imagen B */}
        <motion.div
          layoutId="image-1"
          className="col-span-2 row-span-2 relative cursor-pointer rounded-xl overflow-hidden shadow-xl font-lato"
          onClick={() => setSelected(1)}
        >
        <div className="absolute top-0 left-0 text-black text-sm md:text-base font-semibold px-3 py-1 rounded-br-lg z-10">
          I flew to Colombia for a <br />$4,000 hysterectomy because <br />I couldn't afford it in the US. <br />I have no regrets.
        </div>
            <Image
              src={imageData[1].src}
              alt="Image 1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
        </motion.div>

        {/* Imagen C */}
        <motion.div
          layoutId="image-2"
          className="col-span-2 row-span-2 relative cursor-pointer rounded-xl overflow-hidden shadow-xl"
          onClick={() => setSelected(2)}
        >
        <div className="absolute top-0 left-0 text-black text-sm md:text-base font-semibold px-3 py-1 rounded-br-lg z-10">
          Colombia Ranks Among <br />the Top Countries for Plastic <br />Surgery Worldwide
        </div>
            <Image
              src={imageData[2].src}
              alt="Image 2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
        </motion.div>

        {/* Imagen D */}
        <motion.div
          layoutId="image-3"
          className="col-span-4 row-span-2 relative cursor-pointer rounded-xl overflow-hidden shadow-xl"
          onClick={() => setSelected(3)}
        >
        <div className="absolute top-0 left-0 text-black text-sm md:text-base font-semibold px-3 py-1 rounded-br-lg z-10">
          Colombia Ranks Among <br />the Top Countries for Plastic <br />Surgery Worldwide
        </div>
            <Image
              src={imageData[3].src}
              alt="Image 3"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
        </motion.div>
      </div>

      {/* IMAGEN EXPANDIDA */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-end justify-center pb-2 pointer-events-auto bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
                layoutId={`image-${selected}`}
                className="relative w-[90vw] h-[85vh] max-w-4xl max-h-[700px] rounded-xl overflow-hidden shadow-2xl bg-white"
                onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imageData[selected].src}
                alt={`Expanded Image ${selected}`}
                fill
                style={{ objectFit: 'cover' }}
              />

              {/* Capa de descripción con animación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute bottom-0 w-full bg-black/70 text-white p-4 text-sm leading-relaxed z-10"
              >
                <h3 className="text-lg font-semibold mb-1">{imageData[selected].title}</h3>
                <p>{imageData[selected].description}</p>
              </motion.div>

              {/* Botón de cerrar */}
              <button
                className="absolute top-2 right-4 text-white text-3xl font-bold z-20"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}