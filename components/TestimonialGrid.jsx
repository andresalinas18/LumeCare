// /components/TestimonialGrid.jsx

import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function TestimonialGrid() {
  const { t } = useTranslation("common");
  const testimonials = t("testimonials.items", { returnObjects: true });

  return (
    <section id="reviews" className="py-20 bg-background scroll-mt-[100px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-lora italic mb-12">
          {t("testimonials.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl shadow-md ${t.bg}`}
              whileHover={{
                rotate: [0, -1.5, 1.5, 0],
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-blue-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="mb-6 font-lato text-base leading-relaxed">{t.text}</p>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm opacity-80">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

