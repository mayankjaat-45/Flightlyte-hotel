import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-(--bg-main) py-25 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-(--font-heading) text-(--gold-main) mb-4">
            Contact Us
          </h2>
          <p className="text-(--text-muted) max-w-2xl mx-auto">
            Have questions about flights, hotels, or travel packages? Our travel
            experts are here to help you plan the perfect journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="
              bg-(--bg-card)
              border border-(--border-soft)
              rounded-3xl
              shadow-[0_25px_80px_rgba(0,0,0,0.7)]
              p-8 sm:p-10
            "
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send us a message
            </h3>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              {["name", "email", "subject"].map((field) => (
                <motion.input
                  key={field}
                  whileFocus={{ scale: 1.02 }}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="
                    bg-(--bg-secondary)
                    border border-(--border-soft)
                    rounded-xl
                    px-4 py-3
                    text-white
                    placeholder:text-(--text-muted)
                    focus:border-(--gold-main)
                    focus:ring-2 focus:ring-(--gold-shadow)
                    outline-none
                    transition
                  "
                />
              ))}

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="
                  bg-(--bg-secondary)
                  border border-(--border-soft)
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder:text-(--text-muted)
                  focus:border-(--gold-main)
                  focus:ring-2 focus:ring-(--gold-shadow)
                  outline-none
                  resize-none
                "
              />

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                type="submit"
                disabled={loading}
                className="
                  mt-2
                  w-full sm:w-fit
                  px-8 py-3
                  rounded-full
                  font-semibold
                  bg-linear-to-r from-start to-end
                  text-black
                  shadow-[0_10px_30px_rgba(234,168,42,0.45)]
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              flex flex-col justify-center
              bg-(--bg-card)
              border border-(--border-soft)
              rounded-3xl
              shadow-[0_25px_80px_rgba(0,0,0,0.7)]
              p-8 sm:p-10
              space-y-8
            "
          >
            {/* Email */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4"
            >
              <Mail className="text-(--gold-main) w-6 h-6 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <a
                  href="mailto:info@flyinglyte.com"
                  className="text-(--text-muted) hover:text-(--gold-main) hover:underline transition"
                >
                  info@flyinglyte.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4"
            >
              <Phone className="text-(--gold-main) w-6 h-6 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <a
                  href="tel:+919667455591"
                  className="text-(--text-muted) hover:text-(--gold-main) hover:underline transition"
                >
                  +91 9667455591
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4"
            >
              <MapPin className="text-(--gold-main) w-6 h-6 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Office</h4>
                <p className="text-(--text-muted)">
                  Gagan Vihar, New Delhi, India
                </p>
              </div>
            </motion.div>

            <div className="pt-4 border-t border-(--border-soft) text-(--text-muted)">
              Our team usually responds within 24 hours.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
