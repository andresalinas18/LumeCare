"use client";
import { useEffect, useState, useRef } from "react";
import steps from "./StepScrollSection/stepData";
import StepItem from "./StepScrollSection/StepItem";

export default function StepScrollSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const step = entry.target.getAttribute("data-step");
        if (entry.isIntersecting && step) {
          setActiveIndex(Number(step));
        }
      });
    }, observerOptions);

    const sections = containerRef.current.querySelectorAll("[data-step]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white w-full">
      {steps.map((step, i) => (
        <div key={i} data-step={i}>
          <StepItem
            index={i}
            title={step.title}
            description={step.description}
            isActive={activeIndex === i}
          />
        </div>
      ))}

      {/* CTA final opcional */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-lora mb-4">Ready to Begin?</h2>
          <p className="text-lg font-lato mb-8">
            Explore our procedures and start your transformation today.
          </p>
          <button className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            See Procedures
          </button>
        </div>
      </div>
    </section>
  );
}