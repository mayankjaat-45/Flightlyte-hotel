import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import PackageCard from "./PackageCard";
import { publicApi } from "../../services/api";

const fetchPackages = async (page = 1, limit = 8, destination = "") => {
  const query = new URLSearchParams({
    page,
    page_size: limit,
    destination: destination || "",
  }).toString();

  const { data } = await publicApi.get(`/api/package/packages/?${query}`);

  console.log("API RESPONSE:", data);

  const packages = data?.data || data?.results || [];

  return {
    packages,
    totalPages: data?.total_pages || Math.ceil((data?.count || 0) / limit), // ✅ FIX
    currentPage: data?.current_page || page,
    next: data?.next,
    previous: data?.previous,
  };
};
const PackageSection = ({ limit = 8 }) => {
  const [page, setPage] = useState(1);
  const [destination, setDestination] = useState("");
  const [debouncedDestination, setDebouncedDestination] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedDestination(destination.trim()); // ✅ trim spaces
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [destination]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["packages", page, debouncedDestination, limit], // ✅ IMPORTANT
    queryFn: () => fetchPackages(page, limit, debouncedDestination),
    keepPreviousData: true,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load packages");
    }
  }, [isError]);

  const packages = data?.packages ?? [];
  const totalPages = data?.totalPages ?? 1;

  // Animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-20 md:pt-24 pb-10 bg-(--bg-main)">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--gold-main)">
            Curated Travel Packages
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-full max-w-xl">
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search destination, city or country..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-600 bg-(--bg-card) text-white 
  focus:outline-none focus:border-(--gold-main) focus:ring-1 focus:ring-(--gold-main)
  transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(limit)].map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-2xl bg-(--bg-card) animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Package Grid */}
        {!isLoading && packages.length > 0 && (
          <>
            <motion.div
              className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} variants={cardVariants} />
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={!data?.previous}
                className="px-6 py-2 rounded-lg border border-(--gold-main) text-(--gold-main)
                hover:bg-(--gold-main) hover:text-black transition disabled:opacity-40"
              >
                Previous
              </motion.button>

              <span className="text-white text-sm sm:text-base">
                Page {page} of {totalPages}
              </span>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={!data?.next}
                className="px-6 py-2 rounded-lg bg-(--gold-main) text-black
                hover:opacity-90 transition disabled:opacity-40"
              >
                Next
              </motion.button>
            </div>
          </>
        )}

        {/* Empty State */}
        {!isLoading && packages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-20 h-screen"
          >
            <p className="text-gray-400 text-lg">
              No packages found for this destination.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PackageSection;
