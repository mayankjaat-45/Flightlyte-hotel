import React from "react";
import { ShieldCheck, FileText, UserCheck, Mail } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-white py-24 px-4">
      {/* Hero */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Last Updated: March 2026
        </p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">Flyinglyte</span>.
          Please read these terms carefully before using our platform.
        </p>
      </div>

      {/* Card Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-8">
        <Section icon={<FileText />} title="1. About Flyinglyte">
          <p>
            Flyinglyte provides an online platform that allows users to search,
            compare, and book travel services including flights, hotels,
            transportation, and travel packages offered by third-party
            providers.
          </p>
          <p>
            Flyinglyte acts as an intermediary between customers and travel
            service providers.
          </p>
        </Section>

        <Section icon={<UserCheck />} title="2. Eligibility">
          <p>By using this platform you confirm that:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>You are at least 18 years old.</li>
            <li>
              You have the legal capacity to enter into binding agreements.
            </li>
            <li>All information provided by you is accurate and complete.</li>
          </ul>
        </Section>

        <Section icon={<ShieldCheck />} title="3. Booking and Payments">
          <p>When you make a booking through Flyinglyte:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>You agree to pay the full amount displayed at checkout.</li>
            <li>
              Prices may include taxes, service fees, or third-party charges.
            </li>
            <li>Payment must be completed through approved payment methods.</li>
          </ul>

          <p className="mt-2">
            Bookings are confirmed only after successful payment and issuance of
            booking confirmation.
          </p>
        </Section>

        <Section title="4. Pricing and Availability">
          <p>
            Prices and availability are provided by third-party travel suppliers
            and may change without notice.
          </p>

          <p className="mt-2">Flyinglyte does not guarantee:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>
              Availability of flights or hotels until booking confirmation
            </li>
            <li>Price stability prior to payment completion</li>
          </ul>
        </Section>

        <Section title="5. Changes and Modifications">
          <p>
            Airlines, hotels, or travel providers may modify schedules,
            services, or availability.
          </p>
          <p>
            Flyinglyte is not responsible for operational changes made by
            third-party providers but will assist customers in resolving issues
            where possible.
          </p>
        </Section>

        <Section title="6. User Responsibilities">
          <p>Users agree not to:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>Use the platform for fraudulent bookings</li>
            <li>Attempt unauthorized access to system features</li>
            <li>Use automated scripts or bots to scrape data</li>
            <li>Violate any applicable laws</li>
          </ul>
        </Section>

        <Section title="7. Intellectual Property">
          <p>
            All content including logos, design, text, graphics, and software is
            the property of Flyinglyte or its licensors and protected by
            intellectual property laws.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>Flyinglyte shall not be liable for:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>Cancellations or delays caused by airlines or hotels</li>
            <li>
              Acts of force majeure including natural disasters or government
              restrictions
            </li>
            <li>Losses resulting from third-party service failures</li>
          </ul>

          <p className="mt-2">
            Our liability is limited to the amount paid for the booking.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These terms are governed by the laws of the jurisdiction in which
            Flyinglyte operates.
          </p>
          <p>
            Any disputes will be subject to the exclusive jurisdiction of the
            applicable courts.
          </p>
        </Section>

        <Section icon={<Mail />} title="10. Contact">
          <p>If you have questions regarding these Terms and Conditions:</p>

          <div className="bg-blue-50 p-4 rounded-xl mt-3">
            <p className="font-medium">Email: info@flyinglyte.com</p>
            <p className="font-medium">Website: www.flyinglyte.com</p>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ icon, title, children }) => {
  return (
    <div className="group border border-gray-100 rounded-xl p-5 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="text-blue-600 bg-blue-100 p-2 rounded-lg">{icon}</div>
        )}
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h2>
      </div>

      <div className="text-gray-600 leading-relaxed space-y-2 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
};

export default TermsConditions;
