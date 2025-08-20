"use client";

import { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Check } from "lucide-react";

export default function StoryStepper({ bgSrc = "/images/stepSectionBg.webp" }) {
  const { t } = useTranslation("common");

  const journey = {
    title: t("journey.title"),
    cta: t("journey.cta"),
    steps: t("journey.steps", { returnObjects: true }) ?? [],
  };

  const steps = useMemo(
    () => (Array.isArray(journey.steps) ? journey.steps : []),
    [journey.steps]
  );

  const [active, setActive] = useState(0);
  const safeActive = Math.min(active, steps.length - 1);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((v) => Math.min(v + 1, steps.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((v) => Math.max(v - 1, 0));
      }
    },
    [steps.length]
  );

  return (
    <section
      id="yourJourney"
      className="relative w-full min-h-[100svh] text-white flex flex-col justify-center"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgSrc}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
        {/* 1️⃣ TÍTULO */}
        <div className="flex justify-center items-center w-full">
          <h2 className="text-center font-lora text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-wide text-white">
            {journey.title.split("LumeCare")[0]}
            <span className="text-[#C9A475]">LumeCare</span>
            {journey.title.split("LumeCare")[1]}
          </h2>
        </div>

        {/* 2️⃣ STEPPER */}
        <div className="flex justify-center w-full">
          {/* Desktop */}
          <div
            role="tablist"
            aria-label="Roadmap"
            className="hidden lg:flex justify-between items-center w-full max-w-[1000px] gap-24"
            onKeyDown={onKeyDown}
          >
            {steps.map((s, i) => {
              const isActive = i === safeActive;
              const isCompleted = i < safeActive;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center relative flex-1"
                >
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`step-panel-${i}`}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center focus:outline-none"
                  >
                    <span className="mb-4 text-center text-[13px] leading-snug text-white/85 max-w-[10rem] min-h-[40px]">
                      {s.label ?? s.title}
                    </span>

                    <span
                      className={[
                        "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200 z-10 relative hover:ring-white/40 hover:scale-105",
                        isActive
                          ? "bg-gradient-to-b from-[#C9A475] to-[#B58E5E] text-white shadow-[0_10px_24px_rgba(0,0,0,.3)] ring-2 ring-white/20"
                          : isCompleted
                          ? "bg-black/20 ring-2 ring-[#EFD8C5]/50 text-[#EBD4BD]"
                          : "bg-black/20 ring-2 ring-white/20 text-white/60",
                      ].join(" ")}
                    >
                      {isCompleted ? (
                        <Check className="w-8 h-8" />
                      ) : (
                        <span className="font-semibold">Step {i + 1}</span>
                      )}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-6 lg:hidden relative w-full">
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/12" />
            {steps.map((s, i) => {
              const isActive = i === safeActive;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-start gap-5 text-left relative"
                >
                  <span
                    className={`flex-shrink-0 mt-1 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? "bg-gradient-to-b from-[#C9A475] to-[#B58E5E] border-white/20 text-white"
                        : "border-white/30 bg-white/10 text-white/60"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-lora font-semibold text-base text-white">
                      {s.title}
                    </div>
                    <div className="text-sm text-white/80">{s.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3️⃣ DESCRIPCIÓN SOLO DESKTOP */}
        <div className="hidden lg:flex justify-center w-full">
          {steps[safeActive] && (
            <div
              id={`step-panel-${safeActive}`}
              className="mt-10 ml-10 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10 p-6 md:p-8 min-h-[230px]"
            >
              <h3 className="text-[clamp(1.25rem,2.2vw,1.6rem)] font-lora font-semibold tracking-wide mb-3 text-white">
                {steps[safeActive].title}
              </h3>
              <p className="text-white/85 leading-7 max-w-[760px]">
                {steps[safeActive].description}
              </p>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block px-7 py-3 rounded-md font-lato font-bold uppercase tracking-[.12em] bg-gradient-to-b from-[#C9A475] to-[#B58E5E] hover:brightness-110 transition shadow-[0_10px_24px_rgba(0,0,0,.25)]"
                >
                  {journey.cta}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* CTA SOLO MOBILE */}
        <div className="lg:hidden flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-block px-7 py-3 rounded-md font-lato font-bold uppercase tracking-[.12em] bg-gradient-to-b from-[#C9A475] to-[#B58E5E] hover:brightness-110 transition shadow-[0_10px_24px_rgba(0,0,0,.25)]"
          >
            {journey.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
