import { useLocation, useNavigate } from "react-router-dom";
import { useFlightStore } from "../../../store/flightStore";
import { privateApi } from "../../../services/api";
import { useState } from "react";

const ReviewBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    passengers,
    selectedSeats,
    selectedMeal,
    selectedFlight,
    traceId,
    resultIndex,
  } = location.state || {};

  const [loading, setLoading] = useState(false);
  const { isLcc, fareQuote } = useFlightStore();

  if (!passengers || !selectedFlight) {
    return (
      <div className="flex justify-center items-center h-screen">
        Missing booking data
      </div>
    );
  }

  /* ================= PRICE ================= */

  const pricing = fareQuote?.Pricing || {};

  // Total from API (ALREADY includes convenience fee)
  const baseTotal = pricing?.TotalPayable || 0;

  // Extract convenience fee separately (for display only)
  const convenienceFee = pricing?.ConvenienceFee || 0;

  // Optional: actual flight fare without fee
  const flightFare = baseTotal - convenienceFee;

  const seatPrice =
    selectedSeats?.reduce((sum, s) => sum + (s.Price || 0), 0) || 0;

  const mealPrice = Array.isArray(selectedMeal)
    ? selectedMeal.reduce((sum, m) => sum + (m.Price || 0), 0)
    : selectedMeal?.Price || 0;

  // Final total (DO NOT add convenience again)
  const totalPrice = baseTotal + seatPrice + mealPrice;

  /* ================= BOOK ================= */

  const handleBook = async () => {
    if (!traceId || !resultIndex) {
      alert("Session expired. Please search again.");
      navigate("/");
      return;
    }

    try {
      setLoading(true);

      /* ---------- FARE QUOTE ---------- */

      const quoteRes = await privateApi.post("/api/airlines/fare-quote/", {
        TraceId: traceId,
        ResultIndex: resultIndex,
      });

      const response =
        quoteRes?.data?.data?.Response || quoteRes?.data?.Response;

      if (!response || response.ResponseStatus !== 1) {
        throw new Error(response?.Error?.ErrorMessage || "Fare quote failed");
      }

      const newTraceId = response.TraceId;
      const newResultIndex = response.Results.ResultIndex;
      const fareBreakdown = response.Results.FareBreakdown || [];

      /* ---------- HELPERS ---------- */

      const getFareByPaxType = (paxType) =>
        fareBreakdown.find((f) => f.PassengerType === paxType) || {};

      const originCode =
        response.Results.Segments?.[0]?.[0]?.Origin?.Airport?.AirportCode;

      const destCode =
        response.Results.Segments?.[0]?.[0]?.Destination?.Airport?.AirportCode;

      /* ---------- PASSENGERS ---------- */

      const formattedPassengers = passengers.map((p, index) => {
        let paxType = 1;
        if (p.type === "child") paxType = 2;
        if (p.type === "infant") paxType = 3;

        const paxFare = getFareByPaxType(paxType);

        return {
          Title: p.title,
          FirstName: p.firstName,
          LastName: p.lastName,
          PaxType: paxType,
          Gender: p.gender?.toLowerCase() === "male" ? 1 : 2,
          DateOfBirth: p.dob
            ? new Date(p.dob).toISOString().split("T")[0]
            : "1990-01-01",
          AddressLine1: p.address || "Delhi",
          City: p.city || "Delhi",
          CountryCode: "IN",
          CountryName: p.country || "India",
          Nationality: p.nationality || "IN",
          CellCountryCode: "+91",
          ContactNo: p.phone,
          Email: p.email,
          IsLeadPax: index === 0,

          Fare: {
            BaseFare: paxFare?.BaseFare || 0,
            Tax: paxFare?.Tax || 0,
            YQTax: paxFare?.YQTax || 0,
          },

          ...(isLcc && {
            Baggage: [
              {
                WayType: 2,
                Code: "NoBaggage",
                Weight: "0",
                Currency: "INR",
                Price: 0,
                Origin: originCode,
                Destination: destCode,
              },
            ],

            MealDynamic: Array.isArray(selectedMeal)
              ? selectedMeal.map((m) => ({
                  WayType: 2,
                  Code: m.Code,
                  Quantity: 1,
                  Price: m.Price || 0,
                  Currency: "INR",
                  Origin: originCode,
                  Destination: destCode,
                }))
              : selectedMeal
                ? [
                    {
                      WayType: 2,
                      Code: selectedMeal.Code,
                      Quantity: 1,
                      Price: selectedMeal.Price || 0,
                      Currency: "INR",
                      Origin: originCode,
                      Destination: destCode,
                    },
                  ]
                : [],
          }),
        };
      });

      /* ---------- BOOK ---------- */

      let bookingData;

      if (isLcc) {
        const res = await privateApi.post("/api/airlines/booking/ticket/", {
          TraceId: newTraceId,
          ResultIndex: newResultIndex,
          IsPriceChangeAccepted: true,
          Passengers: formattedPassengers,
          SeatDynamic:
            selectedSeats?.map((s) => ({
              SeatCode: s.Code,
            })) || [],
        });

        bookingData =
          res?.data?.data?.Response || res?.data?.Response || res?.data;
      } else {
        const res = await privateApi.post("/api/airlines/book/", {
          TraceId: newTraceId,
          ResultIndex: newResultIndex,
          Passengers: formattedPassengers,
        });

        bookingData =
          res?.data?.data?.Response || res?.data?.Response || res?.data;
      }

      if (!bookingData) throw new Error("Booking failed");

      /* ---------- STORE ---------- */

      localStorage.setItem(
        "flightBookingData",
        JSON.stringify({
          booking: bookingData,
          pricing: {
            flightFare,
            convenienceFee,
            baseTotal,
            seatPrice,
            mealPrice,
            totalPrice,
          },
        }),
      );

      navigate("/booking-success");
    } catch (error) {
      console.error("BOOKING ERROR:", error);

      alert(
        error?.response?.data?.message || error?.message || "Booking failed",
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h2 className="text-xl font-bold mb-6">Review Booking</h2>

      {/* Passengers */}
      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <h3 className="font-semibold mb-3">Passengers</h3>
        {passengers.map((p, i) => (
          <div key={i} className="text-sm mb-2">
            {p.title} {p.firstName} {p.lastName}
            {selectedSeats?.[i] && (
              <span className="ml-2 text-blue-600">
                Seat {selectedSeats[i].Code}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <h3 className="font-semibold mb-3">Price</h3>

        <div className="flex justify-between">
          <span>Flight Fare</span>
          <span>₹{flightFare}</span>
        </div>

        {convenienceFee > 0 && (
          <div className="flex justify-between text-sm text-gray-600">
            <span>Convenience Fee</span>
            <span>₹{convenienceFee}</span>
          </div>
        )}

        {seatPrice > 0 && (
          <div className="flex justify-between">
            <span>Seats</span>
            <span>₹{seatPrice}</span>
          </div>
        )}

        {mealPrice > 0 && (
          <div className="flex justify-between">
            <span>Meals</span>
            <span>₹{mealPrice}</span>
          </div>
        )}

        <div className="border-t mt-3 pt-3 font-bold flex justify-between text-lg">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>

      <button
        onClick={handleBook}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </div>
  );
};

export default ReviewBooking;
