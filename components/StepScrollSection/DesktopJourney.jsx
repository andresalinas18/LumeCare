// /components/StepScrollSection/DesktopJourney.jsx
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function DesktopJourney({
  titleOpacity,
  titleY,
  path1Length,
  step1Opacity,
  path2Length,
  step2Opacity,
  path3Length,
  step3Opacity,
  path4Length,
  step4Opacity,
}) {
  const { t } = useTranslation("common");
  const steps = t("journey.steps", { returnObjects: true });

  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute top-16 left-16 text-left"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <h2 className="text-6xl font-lora text-white">{t("journey.title")}</h2>
        <p className="text-2xl text-primary italic mt-1">{t("journey.subtitle")}</p>
      </motion.div>

      <div className="flex h-full w-full items-center justify-center">
        <div className="w-full max-w-4xl h-full">
          <svg width="100%" height="100%" viewBox="0 0 900 600">
            <motion.path d="M 100 150 C 0 250, 200 350, 100 450" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ pathLength: path1Length }} />
            <motion.path d="M 100 450 Q 300 430, 600 450" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ pathLength: path2Length }} />
            <motion.path d="M 600 450 C 700 350, 500 250, 600 150" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ pathLength: path3Length }} />
            <motion.path d="M 600 150 C 800 150, 850 300, 700 450" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ pathLength: path4Length }} />
          </svg>
        </div>
      </div>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="absolute text-center"
          style={{
            opacity: [step1Opacity, step2Opacity, step3Opacity, step4Opacity][index],
            ...(index === 0 && { top: "460px", left: "100px" }),
            ...(index === 1 && { top: "460px", left: "610px" }),
            ...(index === 2 && { top: "130px", left: "700px", x: "-50%" }),
            ...(index === 3 && { top: "300px", right: "50px" }),
          }}
        >
          <span className="block text-xl font-bold text-primary mb-2">{index + 1}.</span>
          <h3 className="font-lora text-2xl font-medium text-white">
            {step.title.split(":")[0]}
          </h3>
          <p className="font-lato text-base text-white/70 mt-3 max-w-xs">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
