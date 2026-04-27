import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  CreditCard,
} from "lucide-react";

const PackageBookingSuccess = () => {
  const { bookingId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-center px-6">
        Booking details not available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--bg-main) text-white flex items-center justify-center px-4 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-(--bg-card) rounded-2xl shadow-2xl border border-(--border-soft) overflow-hidden"
      >
        {/* HEADER */}
        <div className="text-center border-b border-gray-700 px-6 py-8 md:p-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <CheckCircle size={70} className="text-green-400 mx-auto mb-4" />
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-bold text-green-400">
            Booking Confirmed
          </h1>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Your trip has been successfully reserved.
          </p>

          <div className="mt-4 inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-semibold">
            Booking ID : #{bookingId}
          </div>
        </div>

        {/* BODY */}
        <div className="p-5 md:p-10 space-y-8">
          {/* PACKAGE SUMMARY */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-black/30 border border-gray-700 rounded-xl p-5 md:p-6"
          >
            <h2 className="text-lg font-semibold text-(--gold-main) mb-5">
              Package Summary
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-(--gold-main) mt-1" />
                <div>
                  <p className="text-gray-400">Travel Date</p>
                  <p className="font-semibold">{booking.travel_date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users size={18} className="text-(--gold-main) mt-1" />
                <div>
                  <p className="text-gray-400">Passengers</p>
                  <p className="font-semibold">
                    {booking.total_passengers} ({booking.adults} Adults,{" "}
                    {booking.children} Children)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard size={18} className="text-(--gold-main) mt-1" />
                <div>
                  <p className="text-gray-400">Total Price</p>
                  <p className="font-bold text-(--gold-main) text-lg">
                    ₹{Number(booking.total_price).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-400">Package</p>
                <p className="font-semibold">{booking.package_name}</p>
              </div>
            </div>
          </motion.div>

          {/* CUSTOMER DETAILS */}
          <div className="border-t border-gray-700 pt-6">
            <h2 className="text-lg font-semibold text-(--gold-main) mb-5">
              Customer Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm md:text-base">
              <motion.div whileHover={{ y: -3 }} className="flex gap-3">
                <User size={18} className="text-(--gold-main) mt-1" />
                <div>
                  <p className="text-gray-400">Name</p>
                  <p className="font-semibold">{booking.customer.name}</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="flex gap-3">
                <Mail size={18} className="text-(--gold-main) mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-semibold">{booking.customer.email}</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="flex gap-3">
                <Phone size={18} className="text-(--gold-main) mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-semibold">{booking.customer.phone}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* SPECIAL REQUEST */}
          {booking.request && (
            <div className="border-t border-gray-700 pt-6">
              <h2 className="text-lg font-semibold text-(--gold-main) mb-3">
                Special Request
              </h2>

              <p className="text-gray-300 text-sm md:text-base bg-black/30 border border-gray-700 p-4 rounded-lg">
                {booking.request}
              </p>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/packages")}
              className="w-full bg-linear-to-r from-start to-end text-black font-semibold py-3 rounded-xl"
            >
              Explore More Packages
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/")}
              className="w-full border border-gray-600 hover:bg-gray-700 py-3 rounded-xl"
            >
              Back to Home
            </motion.button>
          </div>

          {/* FOOTER */}
          <div className="text-center pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Our travel expert will contact you shortly to confirm your trip ✈️
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PackageBookingSuccess;
