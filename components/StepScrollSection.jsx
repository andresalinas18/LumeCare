"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion'; // <-- Importar motion
import steps from "./StepScrollSection/stepData";
import StepItem from "./StepScrollSection/StepItem";

export default function StepScrollSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // La lógica del IntersectionObserver no cambia
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const step = entry.target.getAttribute("data-step");
          if (step) { setActiveIndex(Number(step)); }
        }
      });
    }, observerOptions);

    const sections = containerRef.current.querySelectorAll(".step-text-section");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  

  return (
    <section 
      ref={containerRef} 
      className="relative text-white w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/aboutUsFallback.jpg')" }} // <-- PON TU IMAGEN AQUÍ
      data-scroll-section="true" 
    >
        {/* CAMBIO 2: La capa de superposición. Esencial para la legibilidad y el estilo. */}
        {/* Esta capa se sitúa entre el fondo y el contenido. */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>

        {/* CAMBIO 3: El contenido ahora necesita un z-index más alto para situarse sobre la capa. */}
        <div className="relative z-20">

        {/* --- LAYOUT PARA ESCRITORIO --- */}
        <div className="hidden md:grid grid-cols-10">
          <div className="col-span-5 h-screen sticky top-0 flex items-center justify-center p-8">
            <div className="relative w-full h-[75%] rounded-3xl overflow-hidden shadow-2xl">
              {steps.map((step, i) => (
                // Reemplazamos `img` por `motion.img`
                <motion.img
                  key={step.imgSrc}
                  src={step.imgSrc}
                  alt={step.title}
                  // La animación se controla con la prop `animate`
                  animate={{
                    opacity: activeIndex === i ? 0.8 : 0,
                    scale: activeIndex === i ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Columna Derecha (Texto) - Sin cambios de lógica */}
          <div className="col-span-5">
            {steps.map((step, i) => (
              <div
                key={i}
                data-step={i}
                className="step-text-section min-h-screen flex items-center justify-center pl-10 pr-20 scroll-snap-align-start"
              >
                <StepItem
                  index={i}
                  title={step.title}
                  description={step.description}
                  isActive={activeIndex === i}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* --- LAYOUT PARA MÓVIL (Lo mantenemos simple, sin Framer Motion aquí) --- */}
        <div className="md:hidden">
          {steps.map((step, i) => (
              <div key={i} className="flex flex-col">
                  <div className="relative w-full h-96">
                      <img src={step.imgSrc} alt={step.title} className="w-full h-full object-cover"/>
                  </div>
                  <div className="bg-[#0a0a0a] p-8 -mt-10 relative z-10 rounded-t-2xl">
                      {/* Reutilizamos el StepItem pero le decimos que siempre esté activo */}
                      <StepItem
                          index={i}
                          title={step.title}
                          description={step.description}
                          isActive={true}
                      />
                  </div>
              </div>
          ))}
        </div>

        {/* --- CTA FINAL --- */}
        <div className="h-screen flex items-center justify-center text-center px-4 scroll-snap-align-start">
          <div>
            <h2 className="text-4xl font-bold font-lora mb-4">Ready to Begin?</h2>
            <p className="text-lg font-lato mb-8">
              Explore our procedures and start your transformation today.
            </p>
            <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              See Procedures
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}