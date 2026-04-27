import { useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { publicApi } from "../../../services/api";
import { useFlightStore } from "../../../store/flightStore";
import { useAuthStore } from "../../../store/authStore";

const FareQuote = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state || {};
  const { traceId, resultIndex, setFareQuote, selectedFlight } =
    useFlightStore();
  const { token } = useAuthStore();

  const [fareQuote, setLocalFareQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------------- PAGE GUARD ---------------- */

  useEffect(() => {
    if (!token) {
      navigate("/login", { state: { redirectTo: location.pathname } });
      return;
    }

    if (!traceId || !resultIndex || !selectedFlight) {
      navigate("/", { replace: true });
      return;
    }
  }, [token, traceId, resultIndex, selectedFlight, navigate]);

  /* ---------------- FETCH FARE QUOTE ---------------- */

  useEffect(() => {
    const fetchFareQuote = async () => {
      try {
        setLoading(true);

        const res = await publicApi.post("/api/airlines/fare-quote/", {
          TraceId: traceId,
          ResultIndex: resultIndex,
        });

        const results = res.data?.data?.Response?.Results;

        if (results) {
          setLocalFareQuote(results);
          setFareQuote(results); // save in zustand
        }
      } catch (err) {
        console.error("FareQuote error:", err);
        setError("Unable to fetch fare quote.");
      } finally {
        setLoading(false);
      }
    };

    if (traceId && resultIndex) {
      fetchFareQuote();
    }
  }, [traceId, resultIndex, setFareQuote]);

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4 text-(--text-main)">
        <div className="w-10 h-10 border-4 border-gray-700 border-t-(--gold-main) rounded-full animate-spin"></div>
        <p className="text-sm text-(--text-muted)">Fetching Fare Quote...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-400">{error}</div>;
  }

  const segments = fareQuote?.Segments?.[0] || [];
  const fare = fareQuote?.Fare;
  const pricing = fareQuote?.Pricing;

  return (
    <div className="min-h-screen bg-(--bg-main) text-(--text-main)">
      <div className="max-w-6xl mx-auto px-4 py-24 space-y-8">
        {/* Heading */}

        <div>
          <h1 className="text-3xl font-bold text-(--gold-main)">Fare Quote</h1>

          <p className="text-sm text-(--text-muted)">
            Review the final price before continuing booking.
          </p>
        </div>

        {/* Flight Segments */}

        <div className="space-y-4">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-(--bg-card) border border-(--border-soft) rounded-xl p-5"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Airline */}

                <div>
                  <p className="font-semibold text-(--gold-soft)">
                    {segment.Airline.AirlineName}
                  </p>

                  <p className="text-sm text-(--text-muted)">
                    {segment.Airline.AirlineCode} {segment.Airline.FlightNumber}
                  </p>
                </div>

                {/* Route */}

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-lg font-bold">
                      {segment.Origin.Airport.AirportCode}
                    </p>

                    <p className="text-xs text-(--text-muted)">
                      {new Date(segment.Origin.DepTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="text-(--gold-main)">✈</div>

                  <div className="text-center">
                    <p className="text-lg font-bold">
                      {segment.Destination.Airport.AirportCode}
                    </p>

                    <p className="text-xs text-(--text-muted)">
                      {new Date(segment.Destination.ArrTime).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </p>
                  </div>
                </div>

                {/* Duration */}

                <div className="text-sm text-(--text-muted)">
                  Duration: {Math.floor(segment.Duration / 60)}h{" "}
                  {segment.Duration % 60}m
                </div>
              </div>

              {/* Baggage */}

              <div className="mt-3 text-xs text-(--text-muted)">
                Baggage: {segment.Baggage} | Cabin: {segment.CabinBaggage}
              </div>
            </div>
          ))}
        </div>

        {/* Fare Breakdown */}

        <div className="bg-(--bg-card) border border-(--border-soft) rounded-xl p-6">
          <h2 className="text-lg font-semibold text-(--gold-soft) mb-4">
            Fare Breakdown
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Flight Fare</span>
              <span>₹ {pricing?.TBOFare}</span>
            </div>

            <div className="flex justify-between">
              <span>Convenience Fee</span>
              <span>
                ₹{" "}
                {pricing?.ConvenienceFee
                  ? pricing.ConvenienceFee.toFixed(2)
                  : "0.00"}
              </span>
            </div>

            <div className="border-t border-(--border-soft) pt-3 flex justify-between text-lg font-bold text-(--gold-main)">
              <span>Total Payable</span>
              <span>₹ {pricing?.TotalPayable}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Booking Bar */}

      <div className="sticky bottom-0 bg-(--bg-card) border-t border-(--border-soft)">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold text-(--gold-main)">
            ₹ {pricing?.TotalPayable}
          </div>

          <button
            onClick={() => navigate("/ssr")}
            className="px-8 py-3 rounded-xl font-semibold text-black
            bg-linear-to-r from-start to-end
            hover:opacity-90 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FareQuote;
