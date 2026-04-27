import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("flightBookingData"));

    if (!stored) {
      navigate("/");
      return;
    }

    console.log("BOOKING DATA:", stored);

    setBooking(stored.booking || stored); // backward compatible
    setPricing(stored.pricing || null);
  }, []);

  if (!booking) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading ticket...
      </div>
    );
  }

  // ✅ FLEXIBLE ITINERARY EXTRACTION
  const itinerary =
    booking?.FlightItinerary ||
    booking?.Response?.FlightItinerary ||
    booking?.data?.Response?.FlightItinerary ||
    booking?.data?.data?.Response?.FlightItinerary ||
    null;

  // ✅ PASSENGERS
  const passengers = Array.isArray(itinerary?.Passenger)
    ? itinerary.Passenger
    : itinerary?.Passenger
      ? [itinerary.Passenger]
      : [];

  // ✅ SEGMENTS
  const segments = itinerary?.Segments?.flat?.() || [];

  const fare = itinerary?.Fare || {};

  const pnr = itinerary?.PNR || booking?.PNR || booking?.BookingId || "N/A";

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* SUCCESS */}
      <div className="bg-green-100 p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-bold text-green-700">
          🎉 Booking Confirmed
        </h2>
        <p className="mt-2">
          PNR: <span className="font-bold text-blue-600">{pnr}</span>
        </p>
      </div>

      {/* FLIGHT SEGMENTS */}
      {segments.length > 0 ? (
        segments.map((seg, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow mb-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">
                  {seg?.Airline?.AirlineName} ({seg?.Airline?.AirlineCode})
                </h3>
                <p className="text-sm text-gray-500">
                  Flight {seg?.Airline?.FlightNumber}
                </p>
              </div>
              <div className="text-sm text-gray-500">{seg?.Duration} mins</div>
            </div>

            <div className="flex justify-between mt-4">
              <div>
                <p className="text-xl font-bold">
                  {seg?.Origin?.Airport?.AirportCode}
                </p>
                <p>{seg?.Origin?.Airport?.CityName}</p>
                <p className="text-sm">
                  {seg?.Origin?.DepTime
                    ? new Date(seg.Origin.DepTime).toLocaleString()
                    : "N/A"}
                </p>
              </div>

              <div className="text-center">✈</div>

              <div className="text-right">
                <p className="text-xl font-bold">
                  {seg?.Destination?.Airport?.AirportCode}
                </p>
                <p>{seg?.Destination?.Airport?.CityName}</p>
                <p className="text-sm">
                  {seg?.Destination?.ArrTime
                    ? new Date(seg.Destination.ArrTime).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 mb-4">
          No flight segment data found
        </div>
      )}

      {/* PASSENGERS */}
      <div className="bg-white p-5 rounded-xl shadow mb-4">
        <h3 className="font-semibold mb-3">Passengers</h3>

        {passengers.length > 0 ? (
          passengers.map((p, i) => (
            <div key={i} className="flex justify-between text-sm mb-2">
              <span>
                {p?.Title} {p?.FirstName} {p?.LastName}
              </span>
              <span>Ticket: {p?.Ticket?.TicketNumber || pnr}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No passenger data</p>
        )}
      </div>

      {/* ✅ PRICE BREAKDOWN (UPDATED) */}
      <div className="bg-white p-5 rounded-xl shadow mb-4">
        <h3 className="font-semibold mb-3">Fare Details</h3>

        <div className="flex justify-between text-sm">
          <span>Base Fare</span>
          <span>₹{pricing?.baseFare ?? fare?.BaseFare ?? 0}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>₹{fare?.Tax ?? 0}</span>
        </div>

        {pricing?.seatPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span>Seat Charges</span>
            <span>₹{pricing.seatPrice}</span>
          </div>
        )}

        {pricing?.mealPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span>Meal Charges</span>
            <span>₹{pricing.mealPrice}</span>
          </div>
        )}

        {pricing?.convenienceFee > 0 && (
          <div className="flex justify-between text-sm">
            <span>Convenience Fee</span>
            <span>₹{pricing.convenienceFee}</span>
          </div>
        )}

        <div className="flex justify-between font-bold mt-2 text-lg">
          <span>Total Paid</span>
          <span>₹{pricing?.totalPrice ?? fare?.PublishedFare ?? 0}</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Print Ticket
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-gray-300 px-5 py-2 rounded-lg"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
