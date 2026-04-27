import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useFlightStore } from "../../../store/flightStore";

const FlightsResults = () => {
  const navigate = useNavigate();

  const { flights, setFlight, traceId, selectedFlight } = useFlightStore();

  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortType, setSortType] = useState("cheapest");

  /* ---------------- REDIRECT GUARD ---------------- */

  useEffect(() => {
    if ((!flights || flights.length === 0) && !selectedFlight) {
      navigate("/");
    }
  }, [flights, selectedFlight, navigate]);

  /* ---------------- UTIL FUNCTIONS ---------------- */

  const formatTime = (iso) =>
    new Date(iso).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatDuration = (minutes) => {
    if (!minutes) return "-";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  };

  /* ---------------- AIRLINES LIST ---------------- */

  const allAirlines = useMemo(
    () =>
      [
        ...new Set(
          flights.map((f) => f?.Segments?.[0]?.[0]?.Airline?.AirlineName),
        ),
      ].filter(Boolean),
    [flights],
  );

  /* ---------------- PRICE RANGE ---------------- */

  const prices = flights.map((f) => f?.Fare?.PublishedFare || 0);

  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 100000;

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  /* ---------------- FILTER + SORT ---------------- */

  const filteredFlights = useMemo(() => {
    let result = flights.filter((flight) => {
      const segments = flight?.Segments?.[0] || [];

      const stops = segments.length - 1;
      const airline = segments?.[0]?.Airline?.AirlineName;
      const price = flight?.Fare?.PublishedFare || 0;

      const stopMatch =
        selectedStops.length === 0 || selectedStops.includes(stops);

      const airlineMatch =
        selectedAirlines.length === 0 || selectedAirlines.includes(airline);

      const priceMatch = price >= priceRange[0] && price <= priceRange[1];

      return stopMatch && airlineMatch && priceMatch;
    });

    if (sortType === "cheapest") {
      result.sort((a, b) => a.Fare.PublishedFare - b.Fare.PublishedFare);
    }

    if (sortType === "fastest") {
      result.sort((a, b) => {
        const aSeg = a.Segments[0];
        const bSeg = b.Segments[0];

        const aDuration =
          aSeg[aSeg.length - 1].AccumulatedDuration || aSeg[0].Duration;

        const bDuration =
          bSeg[bSeg.length - 1].AccumulatedDuration || bSeg[0].Duration;

        return aDuration - bDuration;
      });
    }

    return result;
  }, [flights, selectedStops, selectedAirlines, priceRange, sortType]);

  if (!flights || (!flights.length && !selectedFlight)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-(--bg-main) text-(--text-main)">
        No Flights Found
      </div>
    );
  }

  /* ---------------- FILTER CONTENT ---------------- */

  const FilterContent = () => (
    <div className="space-y-6 text-(--text-main)">
      {/* Stops */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-(--gold-main)">Stops</h4>

        {[0, 1].map((stop) => (
          <label key={stop} className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="checkbox"
              checked={selectedStops.includes(stop)}
              onChange={() =>
                setSelectedStops((prev) =>
                  prev.includes(stop)
                    ? prev.filter((s) => s !== stop)
                    : [...prev, stop],
                )
              }
            />

            {stop === 0 ? "Non Stop" : "1 Stop"}
          </label>
        ))}
      </div>

      {/* Airlines */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-(--gold-main)">
          Airlines
        </h4>

        {allAirlines.map((airline) => (
          <label key={airline} className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="checkbox"
              checked={selectedAirlines.includes(airline)}
              onChange={() =>
                setSelectedAirlines((prev) =>
                  prev.includes(airline)
                    ? prev.filter((a) => a !== airline)
                    : [...prev, airline],
                )
              }
            />

            {airline}
          </label>
        ))}
      </div>
    </div>
  );

  /* ---------------- MAIN UI ---------------- */

  return (
    <div className="min-h-screen bg-(--bg-main) pt-20 pb-24 text-(--text-main)">
      <div className="max-w-6xl mx-auto px-3 lg:px-4 py-6 grid lg:grid-cols-[260px_1fr] gap-6">
        {/* Desktop Filters */}

        <aside className="hidden lg:block bg-(--bg-card) p-6 rounded-xl border border-(--border-soft) h-fit sticky top-24">
          <h3 className="font-semibold text-lg mb-4 text-(--gold-main)">
            Filters
          </h3>
          <FilterContent />
        </aside>

        <main className="space-y-4">
          {filteredFlights.map((flight, index) => {
            const segments = flight?.Segments?.[0] || [];
            const first = segments?.[0];
            const last = segments?.[segments.length - 1];

            const stops = segments.length - 1;
            const duration = last.AccumulatedDuration || first.Duration;

            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className="bg-(--bg-card) rounded-xl border border-(--border-soft) p-5 hover:shadow-lg transition"
              >
                {/* Airline + Price */}

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`/airlines/${first?.Airline?.AirlineCode}.png`}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      alt={first?.Airline?.AirlineName || "Airline"}
                      className="h-6"
                    />

                    <div>
                      <p className="font-semibold text-(--gold-main)">
                        {first.Airline.AirlineName}
                      </p>

                      <p className="text-xs text-(--text-muted)">
                        {first.Airline.AirlineCode}-{first.Airline.FlightNumber}
                      </p>
                    </div>
                  </div>

                  <p className="text-xl font-bold text-(--gold-soft)">
                    ₹{flight.Fare.PublishedFare.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Time Row */}

                <div className="grid grid-cols-3 items-center text-center">
                  <div>
                    <p className="text-2xl font-bold">
                      {formatTime(first.Origin.DepTime)}
                    </p>

                    <p className="text-xs text-(--text-muted)">
                      {first.Origin.Airport.AirportCode}
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-xs text-(--text-muted)">
                    <span>{formatDuration(duration)}</span>

                    <div className="flex items-center w-full">
                      <div className="flex-1 h-0.5 bg-(--border-soft)"></div>✈
                      <div className="flex-1 h-0.5 bg-(--border-soft)"></div>
                    </div>

                    <span>{stops === 0 ? "Non Stop" : `${stops} Stop`}</span>
                  </div>

                  <div>
                    <p className="text-2xl font-bold">
                      {formatTime(last.Destination.ArrTime)}
                    </p>

                    <p className="text-xs text-(--text-muted)">
                      {last.Destination.Airport.AirportCode}
                    </p>
                  </div>
                </div>

                {/* Actions */}

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className="text-xs text-soft"
                  >
                    {isExpanded ? "Hide Details" : "View Details"}
                  </button>

                  <button
                    onClick={() => {
                      setFlight(flight);
                      navigate("/fare-rule");
                    }}
                    className="bg-linear-to-r from-start to-end text-black text-sm px-5 py-2 rounded-lg hover:opacity-90"
                  >
                    Book Now
                  </button>
                </div>

                {/* EXPANDED DETAILS */}

                {isExpanded && (
                  <div className="mt-4 border-t border-(--border-soft) pt-4 space-y-2 text-sm">
                    {segments.map((seg, i) => (
                      <div key={i} className="flex justify-between">
                        <span>
                          {seg.Origin.Airport.AirportCode} →
                          {seg.Destination.Airport.AirportCode}
                        </span>

                        <span>
                          {formatTime(seg.Origin.DepTime)} -
                          {formatTime(seg.Destination.ArrTime)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default FlightsResults;
