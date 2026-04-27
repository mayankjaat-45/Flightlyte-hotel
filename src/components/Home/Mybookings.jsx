import { useState } from "react";
import PackageBookings from "../PackageBookings";
import FlightBookings from "../FlightBookings";
import HotelBookings from "../HotelBookings";

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("packages");

  const tabs = ["packages", "flights", "hotels"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-[#E6B35C] mb-6">My Bookings</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full capitalize transition ${
              activeTab === tab
                ? "bg-[#E6B35C] text-black"
                : "bg-white/10 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "packages" && <PackageBookings/>}
      {activeTab === "flights" && <FlightBookings/>}
      {activeTab === "hotels" && <HotelBookings/>}
    </div>
  );
};

export default MyBookings;
