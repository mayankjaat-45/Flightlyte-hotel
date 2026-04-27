import { ShieldCheck, Headset, Wallet, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    desc: "Unbeatable prices on flights, hotels, and holiday packages.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Partners",
    desc: "Verified airlines and hotels for a safe travel experience.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Travel experts available anytime to assist you.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Industry-grade security for all your transactions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-[var(--bg-main)] overflow-hidden">
      {/* Gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,168,42,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold-main)] mb-3">
            Why Choose Us
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Travel crafted with trust, comfort and premium service
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.97 }}
                className="
                  bg-[var(--bg-card)]
                  border border-[var(--border-soft)]
                  rounded-3xl
                  p-8
                  text-center
                  shadow-[0_25px_70px_rgba(0,0,0,0.7)]
                  cursor-pointer
                  group
                "
              >
                <div
                  className="
                    w-16 h-16 mx-auto mb-6
                    flex items-center justify-center
                    rounded-full
                    bg-linear-to-r from-[var(--color-start)] to-[var(--color-end)]
                    text-black
                    shadow-[0_10px_30px_rgba(234,168,42,0.5)]
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
