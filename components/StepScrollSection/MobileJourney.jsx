// /components/MobileJourney.jsx 
"use client";
import { motion } from "framer-motion";
import steps from "./stepData";

export default function MobileJourney({
  titleOpacity,
  titleY,
  mobilePathLength,
  mobileStep1Opacity,
  mobileStep2Opacity,
  mobileStep3Opacity,
  mobileStep4Opacity,
}) {
  return (
    <div className="relative h-full w-full">

      <motion.div
        className="text-center pt-24 px-4 landscape:pt-8" 
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <h2 className="text-5xl landscape:text-4xl font-lora text-white">LumeCare</h2>
        <p className="text-xl landscape:text-base text-primary italic mt-1">It's Breaking the rules</p>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-48 landscape:pt-28">
        <svg width="60" height="100%" viewBox="0 0 60 800" preserveAspectRatio="xMidYMin meet">
          <motion.path
            d="M 30 0 C -20 150, 80 250, 30 400 S -20 550, 80 650, 30 800, 30 800"
            fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ pathLength: mobilePathLength }}
          />
        </svg>
      </div>
      
      <motion.div
        className="absolute w-[48%] flex items-start gap-3 top-[25%] landscape:top-[35%] left-[2%]"
        style={{ opacity: mobileStep1Opacity }}
      >
        <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center"><span className="text-sm font-bold text-primary">1</span></div>
        <div className="text-left">
          <h3 className="text-base font-lora font-medium text-white">{steps[0].title.split(':')[0]}</h3>
          <p className="text-xs font-lato text-white/70 mt-1">{steps[0].description}</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-[48%] flex flex-row-reverse items-start gap-3 top-[30%] landscape:top-[40%] right-[2%]"
        style={{ opacity: mobileStep2Opacity }}
      >
        <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center"><span className="text-sm font-bold text-primary">2</span></div>
        <div className="text-right">
          <h3 className="text-base font-lora font-medium text-white">{steps[1].title.split(':')[0]}</h3>
          <p className="text-xs font-lato text-white/70 mt-1">{steps[1].description}</p>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute w-[48%] flex items-start gap-3 top-[55%] landscape:top-[60%] left-[2%]"
        style={{ opacity: mobileStep3Opacity }}
      >
        <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center"><span className="text-sm font-bold text-primary">3</span></div>
        <div className="text-left">
          <h3 className="text-base font-lora font-medium text-white">{steps[2].title.split(':')[0]}</h3>
          <p className="text-xs font-lato text-white/70 mt-1">{steps[2].description}</p>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute w-[48%] flex flex-row-reverse items-start gap-3 top-[65%] landscape:top-[65%] right-[2%]"
        style={{ opacity: mobileStep4Opacity }}
      >
        <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center"><span className="text-sm font-bold text-primary">4</span></div>
        <div className="text-right">
          <h3 className="text-base font-lora font-medium text-white">{steps[3].title.split(':')[0]}</h3>
          <p className="text-xs font-lato text-white/70 mt-1">{steps[3].description}</p>
        </div>
      </motion.div>
    </div>
  );
}