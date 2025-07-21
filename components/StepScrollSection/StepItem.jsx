import { motion } from 'framer-motion';

// 1. Definimos las "variantes" de la animación. Es como un objeto de estilos para la animación.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Anima los hijos con un desfase de 0.1s entre cada uno
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring', // ¡Animación de resorte!
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function StepItem({ index, title, description, isActive }) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    // 2. Usamos motion.div y le pasamos nuestras variantes
    // Se anima automáticamente de "hidden" a "visible" cuando `isActive` cambia.
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
      className="max-w-md" // El resto de clases de layout se mantienen
    >
      <motion.span variants={itemVariants} className="block text-primary text-3xl font-bold font-lato">
        {formattedIndex}
      </motion.span>
      
      <motion.h3 variants={itemVariants} className="font-lora text-4xl md:text-5xl font-medium mt-4 mb-6 text-white">
        {title}
      </motion.h3>
      
      <motion.p variants={itemVariants} className="font-lato text-lg md:text-xl leading-relaxed">
        {description}
      </motion.p>
    </motion.div>
  );
}