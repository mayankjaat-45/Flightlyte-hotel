import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CTASection = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919667455591"; // your whatsapp number

    const text = `
New Custom Travel Request ✈️

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Travel Date: ${formData.date}

Requirements:
${formData.message}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <section className="relative py-20 px-4 bg-(--bg-main) overflow-hidden">
        {/* Gold spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,168,42,0.25),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto bg-(--bg-card) border border-(--border-soft) rounded-3xl px-6 sm:px-12 py-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
        >
          <h2 className="font-(--font-heading) text-3xl sm:text-4xl lg:text-5xl text-(--gold-main) mb-4">
            Craft Your Perfect Journey With Us
          </h2>

          <p className="text-(--text-muted) text-sm sm:text-lg mb-10 max-w-xl mx-auto">
            Exclusive deals, seamless bookings, and unforgettable travel
            experiences.
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setOpen(true)}
            className="px-10 py-4 rounded-full font-semibold bg-linear-to-r from-start to-end text-black shadow-[0_20px_50px_rgba(234,168,42,0.6)] hover:shadow-[0_25px_70px_rgba(234,168,42,0.8)] transition"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 60 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-full max-w-xl max-h-[90vh] overflow-y-auto bg-(--bg-card) border border-(--border-soft) rounded-2xl p-6 sm:p-8 relative shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-(--border-soft) text-gray-400 hover:text-white hover:border-(--gold-main) transition"
              >
                ✕
              </button>

              <h3 className="text-2xl sm:text-3xl font-semibold text-(--gold-main) mb-2">
                Request Custom Package
              </h3>

              <p className="text-(--text-muted) text-sm mb-6">
                Tell us your travel plans and we’ll design the perfect trip for
                you.
              </p>

              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="col-span-1 sm:col-span-2 w-full px-4 py-3 rounded-xl bg-black/30 border border-(--border-soft) text-white placeholder:text-gray-200 focus:outline-none focus:border-(--gold-main) focus:ring-2 focus:ring-(--gold-main)/40 transition"
                />

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-(--border-soft) text-white placeholder:text-gray-200 focus:outline-none focus:border-(--gold-main) focus:ring-2 focus:ring-(--gold-main)/40 transition"
                />

                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-(--border-soft) text-white placeholder:text-gray-200 focus:outline-none focus:border-(--gold-main) focus:ring-2 focus:ring-(--gold-main)/40 transition"
                />

                <input
                  type="text"
                  name="destination"
                  onChange={handleChange}
                  placeholder="Preferred Destination"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-(--border-soft) text-white placeholder:text-gray-200 focus:outline-none focus:border-(--gold-main) focus:ring-2 focus:ring-(--gold-main)/40 transition"
                />

                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  placeholder="Preferred Date"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-(--border-soft) text-white focus:outline-none focus:border-(--gold-main) focus:ring-2 focus:ring-(--gold-main)/40 transition"
                />

                <textarea
                  placeholder="Travel Requirements"
                  name="message"
                  onChange={handleChange}
                  className="col-span-1 sm:col-span-2 w-full px-4 py-3 rounded-xl bg-black/30 border border-(--border-soft) text-white placeholder:text-gray-200 focus:outline-none focus:border-(--gold-main) focus:ring-2 focus:ring-(--gold-main)/40 h-28 resize-none transition"
                />

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  type="submit"
                  className="col-span-1 sm:col-span-2 mt-2 py-3 rounded-full font-semibold bg-linear-to-r from-start to-end text-black shadow-[0_15px_40px_rgba(234,168,42,0.6)] hover:shadow-[0_20px_60px_rgba(234,168,42,0.8)] transition"
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CTASection;
