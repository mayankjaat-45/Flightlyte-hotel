import React, { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaSuitcase,
  FaMoneyBillWave,
  FaUserTimes,
  FaUndo,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const sections = [
  {
    title: "Flights",
    icon: <FaPlane className="text-blue-500" />,
    content: (
      <>
        <p className="mb-3">
          Airline tickets may be refundable, partially refundable, or
          non-refundable depending on the fare rules.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Refundable fares</li>
          <li>Partially refundable fares</li>
          <li>Non-refundable fares</li>
        </ul>
        <p className="mt-3">
          Cancellation penalties may apply depending on airline policies.
          Flyinglyte will process cancellation requests according to airline
          fare rules.
        </p>
        <p className="mt-2 font-medium">
          Typical refund processing time: <span className="text-blue-600">7–21 business days</span>
        </p>
      </>
    ),
  },
  {
    title: "Hotels",
    icon: <FaHotel className="text-green-500" />,
    content: (
      <>
        <p className="mb-3">
          Hotel cancellations are governed by the hotel's cancellation policy.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Free cancellation within a specified time</li>
          <li>Partial refund</li>
          <li>Non-refundable bookings</li>
        </ul>
        <p className="mt-3">
          Customers should carefully review hotel cancellation terms before
          confirming their booking.
        </p>
      </>
    ),
  },
  {
    title: "Travel Packages",
    icon: <FaSuitcase className="text-purple-500" />,
    content: (
      <p>
        Packages may have customized cancellation policies depending on the
        included services such as flights, hotels, transfers, and tours.
        Cancellation fees may apply depending on when the request is made.
      </p>
    ),
  },
  {
    title: "Service Fees",
    icon: <FaMoneyBillWave className="text-yellow-500" />,
    content: (
      <p>
        Flyinglyte may charge a processing or service fee for handling booking
        changes, cancellations, or refund requests. These service fees may not
        be refundable.
      </p>
    ),
  },
  {
    title: "No-Show Policy",
    icon: <FaUserTimes className="text-red-500" />,
    content: (
      <p>
        Failure to check in for a flight, hotel stay, or tour may result in a
        no-show. In most cases, no-show bookings are considered non-refundable.
      </p>
    ),
  },
  {
    title: "Refund Method",
    icon: <FaUndo className="text-indigo-500" />,
    content: (
      <p>
        Refunds will generally be issued to the original payment method unless
        otherwise required by the payment provider or travel service provider.
      </p>
    ),
  },
];

const RefundPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-500 mt-2">
            Last Updated: <span className="font-medium">January 2026</span>
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Refund and cancellation policies depend on the travel service provider
          and fare rules associated with your booking. Please review the
          applicable policies carefully before making a reservation.
        </p>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((sec, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition"
              >
                <div className="flex items-center gap-3 font-semibold text-gray-700">
                  {sec.icon}
                  {sec.title}
                </div>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="p-4 text-gray-600 leading-relaxed bg-white">
                  {sec.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Support
          </h2>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              Email: <span className="font-medium">info@flyinglyte.com</span>
            </p>

            <p className="flex items-center gap-2">
              <FaGlobe className="text-blue-500" />
              Website: <span className="font-medium">www.flyinglyte.com</span>
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Legal Disclaimer
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Flyinglyte provides access to travel services offered by independent
            third-party providers including airlines, hotels, and
            transportation companies. Flyinglyte does not own, operate, or
            control these services.
          </p>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Users acknowledge that travel services are subject to the terms and
            conditions of the respective providers. Flyinglyte shall not be
            responsible for service disruptions, operational changes, or
            third-party actions beyond its control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;