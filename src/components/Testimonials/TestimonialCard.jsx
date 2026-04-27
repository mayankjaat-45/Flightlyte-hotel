import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="
        group
        relative
        rounded-3xl
        p-7
        text-center
        bg-(--bg-card)
        border border-(--border-soft)
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]
        hover:border-(--gold-main)
        transition-all
      "
    >
      {/* ✨ Gold hover glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition
          bg-[radial-gradient(circle_at_top,rgba(201,162,77,0.18),transparent_65%)]
        "
      />

      {/* Avatar */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="
          w-16 h-16
          mx-auto
          rounded-full
          mb-4
          border-2 border-(--gold-main)
          object-cover
        "
      />

      {/* Feedback */}
      <p className="text-(--text-muted) text-sm leading-relaxed mb-4">
        “{testimonial.feedback}”
      </p>

      {/* Name */}
      <h3
        className="
          font-semibold
          text-(--gold-main)
          text-base
        "
      >
        {testimonial.name}
      </h3>

      {/* Position */}
      <p className="text-xs text-(--text-muted) mt-1">
        {testimonial.position}
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
