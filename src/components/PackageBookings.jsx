import { useQuery } from "@tanstack/react-query";
import { getPackageBookings } from "../services/bookingApi";
import { motion } from "framer-motion";

const PackageBookings = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["packageBookings"],
    queryFn: getPackageBookings,
  });

  if (isLoading)
    return (
      <div className="text-center text-gray-400 mt-20">
        Loading your bookings...
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-400 mt-20">
        Failed to load bookings
      </div>
    );

  if (!data.length)
    return (
      <div className="text-center text-gray-500 mt-24">
        No package bookings found
      </div>
    );

  return (
    <div className="px-2 sm:px-4 md:px-6">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((b, index) => (
          <motion.div
            key={b.booking_id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Top */}
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-lg font-semibold text-[#E6B35C] leading-snug">
                {b.package_name}
              </h2>

              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                Confirmed
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-4" />

            {/* Details */}
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="text-gray-400">Travel:</span> {b.travel_date}
              </p>

              <p>
                <span className="text-gray-400">Guests:</span> {b.adults} Adults
                • {b.children} Children
              </p>

              <p>
                <span className="text-gray-400">Total:</span>{" "}
                {b.total_passengers} Person(s)
              </p>

              <p>
                <span className="text-gray-400">Price:</span>{" "}
                <span className="text-white font-medium">
                  ₹ {b.total_price}
                </span>
              </p>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
              <span>{new Date(b.created_at).toLocaleDateString()}</span>
            </div>

            {/* Glow hover effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-[#E6B35C]/10 to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PackageBookings;
