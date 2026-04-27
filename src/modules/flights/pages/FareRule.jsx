import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicApi } from "../../../services/api";
import { useFlightStore } from "../../../store/flightStore";

const FareRule = () => {
  const navigate = useNavigate();

  const { traceId, resultIndex, selectedFlight } = useFlightStore();
  const [fareRules, setFareRules] = useState([]);
  const [openRule, setOpenRule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------------- FETCH FARE RULES ---------------- */

  useEffect(() => {
    if (!traceId || !resultIndex) return;

    const fetchFareRules = async () => {
      try {
        setLoading(true);

        const response = await publicApi.post("/api/airlines/fare-rule/", {
          TraceId: traceId,
          ResultIndex: resultIndex,
        });

        const rules = response?.data?.data?.Response?.FareRules || [];
        setFareRules(rules);
      } catch (err) {
        console.error(err);
        setError("Unable to load fare rules.");
      } finally {
        setLoading(false);
      }
    };

    fetchFareRules();
  }, [traceId, resultIndex]);

  /* ---------------- FLIGHT SEGMENT ---------------- */

  const segment = selectedFlight?.Segments?.[0]?.[0];

  /* ---------------- SESSION MISSING ---------------- */

  if (!traceId || resultIndex === null || resultIndex === undefined) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
        <p className="text-lg">Flight session expired.</p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-yellow-400"
        >
          Search Flights Again
        </button>
      </div>
    );
  }

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4 text-(--text-main)">
        <div className="w-10 h-10 border-4 border-gray-700 border-t-(--gold-main) rounded-full animate-spin"></div>
        <p className="text-sm text-(--text-muted)">Fetching Fare Rules...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--bg-main) text-(--text-main)">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-24 space-y-8">
        {/* Heading */}

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-(--gold-main)">
            Fare Rules
          </h1>

          <p className="text-sm text-(--text-muted) mt-1">
            Review the fare conditions before continuing your booking.
          </p>
        </div>

        {/* Flight Summary */}

        {selectedFlight && segment && (
          <div className="bg-(--bg-card) border border-(--border-soft) rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Route */}

              <div className="flex items-center justify-between md:justify-start gap-6 w-full md:w-auto">
                <div className="text-center">
                  <p className="text-xl font-bold text-(--gold-soft)">
                    {segment?.Origin?.Airport?.AirportCode}
                  </p>
                  <p className="text-xs text-(--text-muted)">
                    {segment?.Origin?.Airport?.CityName}
                  </p>
                </div>

                <div className="text-(--gold-main) text-xl">✈</div>

                <div className="text-center">
                  <p className="text-xl font-bold text-(--gold-soft)">
                    {segment?.Destination?.Airport?.AirportCode}
                  </p>
                  <p className="text-xs text-(--text-muted)">
                    {segment?.Destination?.Airport?.CityName}
                  </p>
                </div>
              </div>

              {/* Fare */}
            </div>
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="bg-red-500/10 text-red-400 border border-red-500/20 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Fare Rules */}

        <div className="space-y-4">
          {fareRules.length === 0 ? (
            <p className="text-sm text-(--text-muted)">
              No fare rules available for this flight.
            </p>
          ) : (
            fareRules.map((rule, index) => (
              <div
                key={index}
                className="bg-(--bg-card) border border-(--border-soft) rounded-xl shadow-sm"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenRule(openRule === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-(--gold-soft)">
                    Fare Rule {index + 1}
                  </span>

                  <span className="text-lg font-bold text-(--gold-main)">
                    {openRule === index ? "−" : "+"}
                  </span>
                </button>

                {/* Content */}
                {openRule === index && (
                  <div className="px-5 pb-5 pt-3 text-sm text-(--text-muted) leading-relaxed border-t border-(--border-soft)">
                    <div
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: rule?.FareRuleDetail || "No details available",
                      }}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sticky Booking Bar */}

      <div className="sticky bottom-0 bg-(--bg-card) border-t border-(--border-soft)">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/fare-quote")}
            className="w-full md:w-auto px-8 py-3 rounded-xl font-semibold text-black
            bg-linear-to-r from-start to-end
            hover:opacity-90 transition"
          >
            Continue Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default FareRule;
