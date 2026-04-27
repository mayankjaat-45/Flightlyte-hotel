import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-linear-to-b from-blue-50 to-white min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mt-1">
            Last Updated: <span className="font-medium">January 2026</span>
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Flyinglyte respects your privacy and is committed to protecting your
            personal data.
          </p>
        </motion.div>

        <div className="space-y-6">

          {/* Section 1 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white py-1 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              1. Information We Collect
            </h2>

            <h3 className="font-semibold mt-4">Personal Information</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Passport details (when required for bookings)</li>
            </ul>

            <h3 className="font-semibold mt-4">Booking Information</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Travel dates</li>
              <li>Destinations</li>
              <li>Flight preferences</li>
              <li>Hotel selections</li>
            </ul>

            <h3 className="font-semibold mt-4">Technical Information</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Cookies and usage data</li>
            </ul>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Process travel bookings</li>
              <li>Provide customer support</li>
              <li>Send booking confirmations</li>
              <li>Improve platform functionality</li>
              <li>Personalize travel recommendations</li>
            </ul>

            <p className="mt-4 text-gray-600">
              We may also use your information for marketing communications if
              you opt-in.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              3. Sharing Information
            </h2>
            <p className="text-gray-600 mb-3">
              Your data may be shared with:
            </p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Airlines</li>
              <li>Hotels</li>
              <li>Payment processors</li>
              <li>Travel service providers</li>
            </ul>

            <p className="mt-4 text-gray-600">
              Only the necessary information required to complete your booking
              is shared.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement industry-standard security measures including
              encryption and secure payment processing to protect your personal
              information. However, no system can guarantee absolute security.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              5. Cookies
            </h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Improve website performance</li>
              <li>Remember user preferences</li>
              <li>Analyze site usage</li>
            </ul>

            <p className="mt-4 text-gray-600">
              Users may control cookies through browser settings.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              6. Data Retention
            </h2>
            <p className="text-gray-600">
              We retain personal data only as long as necessary to provide
              services and comply with legal obligations.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              7. Your Rights
            </h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Request deletion of personal data</li>
              <li>Withdraw consent</li>
            </ul>
          </motion.div>

          {/* Section 8 */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              8. Contact
            </h2>

            <p className="text-gray-700">
              For privacy inquiries:
            </p>

            <div className="mt-3 space-y-2 text-gray-700">
              <p>
                📧 Email:{" "}
                <span className="font-medium">info@flyinglyte.com</span>
              </p>
              <p>
                🌐 Website:{" "}
                <span className="font-medium">www.flyinglyte.com</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;