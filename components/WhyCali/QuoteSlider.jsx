// components/QuoteSlider.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "La libertad de cuidarte donde realmente importa.",
  "Cali es confianza, experiencia y resultados.",
  "Porque lo importante es sentirte bien contigo.",
  "Donde la belleza y la salud van de la mano.",
];

export default function QuoteSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevQuote = quotes[(index - 1 + quotes.length) % quotes.length];
  const currentQuote = quotes[index];
  const nextQuote = quotes[(index + 1) % quotes.length];

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 relative overflow-hidden">
      {/* Cita anterior (arriba, pequeña) */}
      <motion.p
        key={prevQuote}
        className="text-sm text-gray-500 opacity-60 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        "{prevQuote}"
      </motion.p>

      {/* Cita actual (grande y clara) */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentQuote}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black max-w-2xl leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          "{currentQuote}"
        </motion.h2>
      </AnimatePresence>

      {/* Cita siguiente (abajo, borrosa) */}
      <motion.p
        key={nextQuote}
        className="text-xs text-gray-400 opacity-30 mt-4 blur-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        "{nextQuote}"
      </motion.p>
    </div>
  );
}