// /components/JourneyMapSection.jsx
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import DesktopJourney from "./StepScrollSection/DesktopJourney";
import MobileJourney from "./StepScrollSection/MobileJourney";

export default function JourneyMapSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const animations = {
    titleOpacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]),
    titleY: useTransform(scrollYProgress, [0, 0.05], [30, 0]),
    path1Length: useTransform(scrollYProgress, [0.05, 0.15], [0, 1]),
    step1Opacity: useTransform(scrollYProgress, [0.15, 0.25], [0, 1]),
    path2Length: useTransform(scrollYProgress, [0.30, 0.40], [0, 1]),
    step2Opacity: useTransform(scrollYProgress, [0.40, 0.50], [0, 1]),
    path3Length: useTransform(scrollYProgress, [0.55, 0.65], [0, 1]),
    step3Opacity: useTransform(scrollYProgress, [0.65, 0.75], [0, 1]),
    path4Length: useTransform(scrollYProgress, [0.80, 0.90], [0, 1]),
    step4Opacity: useTransform(scrollYProgress, [0.90, 1.0], [0, 1]),
    mobilePathLength: useTransform(scrollYProgress, [0.1, 0.8], [0, 1]),
    mobileStep1Opacity: useTransform(scrollYProgress, [0.1, 0.15], [0, 1]),
    mobileStep2Opacity: useTransform(scrollYProgress, [0.25, 0.30], [0, 1]),
    mobileStep3Opacity: useTransform(scrollYProgress, [0.4, 0.45], [0, 1]),
    mobileStep4Opacity: useTransform(scrollYProgress, [0.55, 0.65], [0, 1]),
  };

  return (
    <section
      id="yourJourney"
      ref={targetRef}
      className="relative h-[400vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/stepSectionBg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/80 z-10" />

      <div className="sticky top-0 h-screen w-full z-20">
        {/* Desktop */}
        <div className="hidden lg:block relative h-full w-full">
          <DesktopJourney {...animations} />
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative h-full w-full">
          <MobileJourney {...animations} />
        </div>
      </div>
    </section>
  );
}
