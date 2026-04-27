import React from "react";
import { testimonials } from "../components/Testimonials/Testimonials";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 bg-[var(--bg-main)] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,168,42,0.08),transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-center
            font-[var(--font-heading)]
            text-3xl sm:text-4xl
            text-[var(--gold-main)]
            mb-16
          "
        >
          What Our Travelers Say
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
