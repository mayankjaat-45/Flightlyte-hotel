"use client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { privateApi } from "../../../services/api";

const FlightBookingDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        let bookingId = id;
        let pnr = null;

        if (!bookingId) {
          const saved = JSON.parse(
            localStorage.getItem("flightBookingData") || "{}",
          );
          bookingId = saved?.booking_id;
          pnr = saved?.pnr;
        }

        if (!bookingId || !pnr) return navigate("/");

        const res = await privateApi.post("/airlines/booking-details/", {
          BookingId: bookingId,
          PNR: pnr,
        });

        if (res.data?.success) {
          setData(res.data.data);
        } else throw new Error("Fetch failed");
      } catch (err) {
        console.error(err);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id, navigate]);

  if (loading)
    return <div className="text-white text-center py-24">Loading...</div>;

  if (!data)
    return <div className="text-white text-center py-24">Not Found</div>;

  const itinerary = data?.Response?.FlightItinerary;
  const passengers = itinerary?.Passenger || [];
  const segments = itinerary?.Segments || [];
  const fare = itinerary?.Fare || {};

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white px-4 md:px-10 py-24">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="bg-[#15151C] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl text-yellow-400">
            ✈️ {itinerary?.Origin} → {itinerary?.Destination}
          </h2>

          <div className="text-sm text-gray-400 mt-3 space-y-1">
            <p>PNR: {itinerary?.PNR}</p>
            <p>Booking ID: {itinerary?.BookingId}</p>
            <p>Invoice: {itinerary?.InvoiceNo}</p>
            <p>Status: {itinerary?.Status === 5 ? "Confirmed" : "Pending"}</p>
          </div>
        </div>

        {/* FLIGHT SEGMENTS */}
        {segments.map((seg, i) => (
          <div
            key={i}
            className="bg-[#15151C] p-6 rounded-2xl border border-gray-800"
          >
            <h3 className="text-yellow-300 mb-3">
              {seg.Airline.AirlineName} ({seg.Airline.AirlineCode}-
              {seg.Airline.FlightNumber})
            </h3>

            <p>
              {seg.Origin.Airport.CityName} → {seg.Destination.Airport.CityName}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Departure: {new Date(seg.Origin.DepTime).toLocaleString()}
            </p>

            <p className="text-sm text-gray-400">
              Arrival: {new Date(seg.Destination.ArrTime).toLocaleString()}
            </p>

            <p className="text-sm mt-2">
              🧳 Baggage: {seg.Baggage} | Cabin: {seg.CabinBaggage}
            </p>
          </div>
        ))}

        {/* PASSENGERS */}
        <div className="bg-[#15151C] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-yellow-300 mb-3">Passengers</h3>

          {passengers.map((p, i) => (
            <div key={i} className="text-sm py-2 border-b border-gray-800">
              <p>
                {p.Title} {p.FirstName} {p.LastName}
                {p.IsLeadPax && " (Lead)"}
              </p>

              <p className="text-gray-400 text-xs">
                Ticket: {p.Ticket?.TicketNumber}
              </p>

              <p className="text-gray-400 text-xs">
                Fare: ₹ {Math.round(p.Fare?.PublishedFare || 0)}
              </p>
            </div>
          ))}
        </div>

        {/* PRICE */}
        <div className="bg-yellow-400/10 p-6 rounded-3xl border border-yellow-400/20">
          <h3 className="text-yellow-300 mb-3 font-semibold">Price Summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Base Fare</span>
              <span>₹ {Math.round(fare.BaseFare || 0)}</span>
            </div>

            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹ {Math.round(fare.Tax || 0)}</span>
            </div>

            <div className="flex justify-between">
              <span>Baggage</span>
              <span>₹ {Math.round(fare.TotalBaggageCharges || 0)}</span>
            </div>

            <div className="flex justify-between">
              <span>Meals</span>
              <span>₹ {Math.round(fare.TotalMealCharges || 0)}</span>
            </div>

            <hr className="border-gray-700" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-yellow-400">
                ₹ {Math.round(fare.PublishedFare || 0)}
              </span>
            </div>
          </div>
        </div>

        {/* FARE RULES */}
        <div className="bg-[#15151C] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-yellow-300 mb-3">Fare Rules</h3>

          <div
            className="text-sm text-gray-400"
            dangerouslySetInnerHTML={{
              __html: itinerary?.FareRules?.[0]?.FareRuleDetail || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightBookingDetails;
