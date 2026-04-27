import React from "react";
import { motion } from "framer-motion";
import { Plane, Hotel, Package, Globe, Calendar } from "lucide-react";

const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: Plane,
      text: "Compare flights from leading global airlines",
    },
    {
      icon: Hotel,
      text: "Discover hotels across thousands of destinations",
    },
    {
      icon: Package,
      text: "Explore curated holiday packages",
    },
    {
      icon: Globe,
      text: "Access exclusive travel deals and limited-time offers",
    },
    {
      icon: Calendar,
      text: "Manage bookings and itineraries in one place",
    },
  ];

  return (
    <section className="py-24 px-6 bg-(--bg-main) text-(--text-main)">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ABOUT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className=" text-4xl md:text-6xl font-bold text-(--gold-main) mb-4">
            About Flyinglyte
          </h2>

          <h3 className="font-(--font-hero) text-md md:xl mb-4">
            Elevating the Way the World Travels
          </h3>

          <p className="text-(--text-muted) leading-relaxed mb-4">
            At Flyinglyte, we believe travel should be effortless, inspiring,
            and accessible. Our mission is to simplify the way people discover
            and book travel by bringing flights, hotels, and curated experiences
            together on a single trusted platform.
          </p>

          <p className="text-(--text-muted)">
            Whether you're planning a luxury getaway, a family vacation, or a
            quick business trip, Flyinglyte is designed to help you explore the
            world with confidence and convenience.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className=" text-3xl font-bold text-center md:text-left text-(--gold-main) mb-6">
              Our Vision
            </h2>

            <p className="text-(--text-muted) leading-relaxed mb-4">
              Our vision is to build a next-generation travel platform that
              combines smart technology, transparent pricing, and personalized
              recommendations to create a seamless travel experience.
            </p>

            <p className="text-(--text-muted)">
              We aim to make travel planning simpler while helping travelers
              unlock more opportunities to explore the world.
            </p>
          </div>

          <img
            src="/images/aboutImage.webp"
            alt="Travel"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* WHAT WE OFFER */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="font-bold text-3xl text-(--gold-main) text-center mb-8 md:mb-14">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-(--bg-card) border border-(--border-soft) rounded-xl p-6 hover:scale-105 transition"
                >
                  <Icon className="text-(--gold-soft) mb-2 md:mb-4" size={30} />

                  <p className="text-(--text-muted)">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
