import { motion } from "framer-motion";

export default function StepItem({ index, title, description, isActive }) {
  return (
    <motion.div
      className="h-[80vh] flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex w-full max-w-6xl px-4">
        {/* Barra lateral con número */}
        <div className="flex flex-col items-center mr-8 w-12">
          <div
            className={`w-6 h-6 rounded-full transition-all duration-500 ${
              isActive ? "bg-gold scale-125" : "bg-gray-500 scale-75"
            }`}
          ></div>
          <span className="text-white mt-2 text-sm font-light">{index + 1}</span>
        </div>

        {/* Contenido */}
        <div className="text-white">
          <h3 className="text-3xl font-semibold font-lora mb-2">{title}</h3>
          <p className="text-lg leading-relaxed font-lato">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}