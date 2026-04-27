import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { publicApi } from "../../services/api";
import airports from "../../data/airports";
import { useFlightStore } from "../../store/flightStore";

const FlightsForm = () => {
  const navigate = useNavigate();

  // updated store usage
  const { setFlights, setPassengerCount } = useFlightStore();
  const [tripType, setTripType] = useState("oneway");
  const [travellersOpen, setTravellersOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departure_date: "",
    return_date: "",
  });

  const [originInput, setOriginInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");

  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const originRef = useRef();
  const destinationRef = useRef();
  const travellerRef = useRef();

  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Economy",
  });

  const cabinClassMap = {
    Economy: "2",
    "Premium Economy": "3",
    Business: "4",
    "First Class": "6",
  };

  /* CLICK OUTSIDE */

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (originRef.current && !originRef.current.contains(e.target))
        setOriginSuggestions([]);

      if (destinationRef.current && !destinationRef.current.contains(e.target))
        setDestinationSuggestions([]);

      if (travellerRef.current && !travellerRef.current.contains(e.target))
        setTravellersOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* SEARCH AIRPORT */

  const searchAirports = (query) => {
    if (!query) return [];

    const q = query.toLowerCase();

    return airports
      .filter(
        (airport) =>
          airport.city.toLowerCase().includes(q) ||
          airport.name.toLowerCase().includes(q) ||
          airport.country.toLowerCase().includes(q) ||
          airport.iata.toLowerCase().includes(q),
      )
      .slice(0, 8);
  };

  /* SWAP */

  const swapAirports = () => {
    setFormData((prev) => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin,
    }));

    setOriginInput(destinationInput);
    setDestinationInput(originInput);
  };

  /* SEARCH */
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!formData.origin || !formData.destination) {
      setError("Please select airports");
      return;
    }

    if (formData.origin === formData.destination) {
      setError("Origin and destination cannot be same");
      return;
    }

    if (!formData.departure_date) {
      setError("Please select departure date");
      return;
    }

    if (tripType === "roundtrip" && !formData.return_date) {
      setError("Please select return date");
      return;
    }

    setError("");
    setLoading(true);

    console.log("PAYLOAD:", {
      origin: formData.origin,
      destination: formData.destination,
      departure_date: formData.departure_date,
      return_date: tripType === "roundtrip" ? formData.return_date : null,
      adults: travellers.adults,
      children: travellers.children,
      infants: travellers.infants,
      flight_cabin_class: cabinClassMap[travellers.cabin],
    });
    try {
      const response = await publicApi.post("/api/airlines/search/", {
        origin: formData.origin,
        destination: formData.destination,
        departure_date: formData.departure_date,
        return_date: tripType === "roundtrip" ? formData.return_date : null,
        adults: travellers.adults,
        children: travellers.children,
        infants: travellers.infants,
        flight_cabin_class: cabinClassMap[travellers.cabin],
      });

      const data = response?.data;

      // ✅ SAFE PARSING (handles any API shape)
      const results =
        data?.Response?.Results?.flat?.() || data?.Response?.Results || [];

      if (!Array.isArray(results) || results.length === 0) {
        setError("No flights found");
        return;
      }

      setFlights({
        flights: results,
        traceId: data?.Response?.TraceId || null,
      });

      const totalTravellers =
        travellers.adults + travellers.children + travellers.infants;

      setPassengerCount(totalTravellers);

      navigate("/flights");
    } catch (err) {
      console.error("ERROR:", err);

      if (err.message === "Network Error") {
        setError("CORS error: Backend is blocking request");
      } else {
        setError(
          err?.response?.data?.error ||
            err?.response?.data?.message ||
            "Server error",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const updateCount = (type, value) => {
    setTravellers((prev) => {
      const updated = { ...prev };

      updated[type] = Math.max(0, prev[type] + value);

      // Minimum 1 adult
      if (updated.adults < 1) updated.adults = 1;

      // Infants cannot exceed adults
      if (updated.infants > updated.adults) {
        updated.infants = updated.adults;
      }

      const total = updated.adults + updated.children + updated.infants;

      if (total > 9) return prev;

      return updated;
    });
  };

  const totalTravellers =
    travellers.adults + travellers.children + travellers.infants;

  return (
    <div className="bg-(--bg-card) border border-(--border-soft) rounded-2xl shadow-2xl p-4 md:p-8 space-y-6 backdrop-blur-md">
      {/* TRIP TYPE */}

      <div className="flex gap-2 text-xs md:text-sm font-semibold">
        {["oneway", "roundtrip"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              setTripType(type);

              // ✅ FIX: clear return date when switching to one-way
              if (type === "oneway") {
                setFormData((prev) => ({
                  ...prev,
                  return_date: "",
                }));
              }
            }}
            className={`px-4 py-2 rounded-full transition ${
              tripType === type
                ? "bg-linear-to-r from-start to-end text-black"
                : "bg-(--bg-secondary)"
            }`}
          >
            {type === "oneway" ? "One Way" : "Round Trip"}
          </button>
        ))}
      </div>

      {error && (
        <div className="text-red-400 text-xs bg-red-900/20 border border-red-800 p-2 rounded-lg">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4"
      >
        {/* FROM */}

        <div className="relative md:col-span-5" ref={originRef}>
          <label className="text-xs text-(--text-muted)">From</label>

          <input
            type="text"
            placeholder="City or Airport"
            value={originInput}
            onChange={(e) => {
              const value = e.target.value;
              setOriginInput(value);
              setOriginSuggestions(searchAirports(value));
            }}
            className="rounded-xl p-3 text-sm w-full transition-all outline-none"
            style={{
              background: "var(--bg-main)",
              color: "var(--text-main)",
              border: "1px solid var(--border-soft)",
            }}
            onFocus={(e) => {
              e.target.style.border = "1px solid var(--gold-main)";
              e.target.style.boxShadow = "0 0 0 2px rgba(234,168,42,0.2)";
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid var(--border-soft)";
              e.target.style.boxShadow = "none";
            }}
          />

          {originSuggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-(--bg-card) border rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
              {originSuggestions.map((airport) => (
                <div
                  key={airport.iata}
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      origin: airport.iata,
                    }));

                    setOriginInput(`${airport.city} (${airport.iata})`);
                    setOriginSuggestions([]);
                  }}
                  className="p-3 hover:bg-(--bg-secondary) cursor-pointer border-b border-(--border-soft)"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{airport.city}</span>
                    <span className="font-semibold text-(--gold-main)">
                      {airport.iata}
                    </span>
                  </div>

                  <div className="text-xs text-(--text-muted)">
                    {airport.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SWAP */}

        <div className="flex justify-center items-end md:col-span-1">
          <button
            type="button"
            onClick={swapAirports}
            className="w-9 h-9 rounded-full border border-(--border-soft) flex items-center justify-center hover:bg-(--bg-secondary)"
          >
            ⇄
          </button>
        </div>

        {/* TO */}

        <div className="relative md:col-span-5" ref={destinationRef}>
          <label className="text-xs text-(--text-muted)">To</label>
          <input
            type="text"
            placeholder="City or Airport"
            value={destinationInput}
            onChange={(e) => {
              const value = e.target.value;
              setDestinationInput(value);
              setDestinationSuggestions(searchAirports(value));
            }}
            className="bg-(--bg-secondary) border border-(--border-soft) rounded-lg p-2.5 text-sm w-full"
          />

          {destinationSuggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-(--bg-card) border rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
              {destinationSuggestions.map((airport) => (
                <div
                  key={airport.iata}
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      destination: airport.iata,
                    }));

                    setDestinationInput(`${airport.city} (${airport.iata})`);
                    setDestinationSuggestions([]);
                  }}
                  className="p-3 hover:bg-(--bg-secondary) cursor-pointer border-b border-(--border-soft)"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{airport.city}</span>
                    <span className="font-semibold text-(--gold-main)">
                      {airport.iata}
                    </span>
                  </div>

                  <div className="text-xs text-(--text-muted)">
                    {airport.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DATES */}

        <div className="grid grid-cols-2 gap-3 md:col-span-6">
          <div>
            <label className="text-xs text-(--text-muted)">Departure</label>
            <input
              type="date"
              min={formData.departure_date || today}
              value={formData.departure_date}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  departure_date: e.target.value,
                  // ✅ auto reset invalid return date
                  return_date:
                    prev.return_date && prev.return_date < e.target.value
                      ? ""
                      : prev.return_date,
                }))
              }
              className="bg-(--bg-secondary) border border-(--border-soft) rounded-lg p-2.5 text-sm w-full text-white"
            />
          </div>

          <div>
            <label className="text-xs text-(--text-muted)">Return</label>
            <input
              type="date"
              disabled={tripType === "oneway"}
              value={formData.return_date}
              onChange={(e) =>
                setFormData({ ...formData, return_date: e.target.value })
              }
              className="bg-(--bg-secondary) border border-(--border-soft) rounded-lg p-2.5 text-sm w-full"
            />
          </div>
        </div>

        {/* TRAVELLERS */}
        <div className="relative md:col-span-3" ref={travellerRef}>
          <label className="text-xs text-(--text-muted)">
            Travellers & Class
          </label>

          <button
            type="button"
            onClick={() => setTravellersOpen(!travellersOpen)}
            className="bg-(--bg-secondary) border border-(--border-soft) rounded-lg p-2.5 text-sm w-full text-left"
          >
            {totalTravellers} Traveller{totalTravellers > 1 ? "s" : ""} ·{" "}
            {travellers.cabin}
          </button>

          {travellersOpen && (
            <div
              className="
                absolute bottom-full mb-2
                md:top-full md:bottom-auto md:mt-2 md:mb-0
                left-0
                w-full md:w-95
               bg-(--bg-card)
                border border-(--border-soft)
                rounded-2xl
                shadow-2xl
                p-4
                z-50
                max-h-[70vh]
                overflow-y-auto
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* TRAVELLERS */}
                <div className="space-y-3">
                  {/* Adults */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">Adults</p>
                      <p className="text-xs text-(--text-muted)">12+ years</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateCount("adults", -1)}
                        className="w-8 h-8 border border-(--border-soft) rounded-lg"
                      >
                        -
                      </button>

                      <span className="w-6 text-center">
                        {travellers.adults}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateCount("adults", 1)}
                        className="w-8 h-8 border border-(--border-soft) rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">Children</p>
                      <p className="text-xs text-(--text-muted)">2-11 years</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateCount("children", -1)}
                        className="w-8 h-8 border border-(--border-soft) rounded-lg"
                      >
                        -
                      </button>

                      <span className="w-6 text-center">
                        {travellers.children}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateCount("children", 1)}
                        className="w-8 h-8 border border-(--border-soft) rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">Infants</p>
                      <p className="text-xs text-(--text-muted)">
                        Under 2 years
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateCount("infants", -1)}
                        className="w-8 h-8 border border-(--border-soft) rounded-lg"
                      >
                        -
                      </button>

                      <span className="w-6 text-center">
                        {travellers.infants}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateCount("infants", 1)}
                        className="w-8 h-8 border border-(--border-soft) rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* CABIN CLASS */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-(--text-muted)">
                    Cabin Class
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {[
                      "Economy",
                      "Premium Economy",
                      "Business",
                      "First Class",
                    ].map((cabin) => (
                      <button
                        key={cabin}
                        type="button"
                        onClick={() =>
                          setTravellers({
                            ...travellers,
                            cabin,
                          })
                        }
                        className={`
                text-sm px-3 py-2 rounded-lg border transition text-center
                ${
                  travellers.cabin === cabin
                    ? "bg-linear-to-r from-start to-end text-black border-transparent"
                    : "border-(--border-soft) hover:bg-(--bg-secondary)"
                }
              `}
                      >
                        {cabin}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* DONE BUTTON */}
              <button
                type="button"
                onClick={() => setTravellersOpen(false)}
                className="w-full mt-4 bg-linear-to-r from-start to-end text-black rounded-lg py-2 font-semibold"
              >
                Done
              </button>
            </div>
          )}
        </div>
        {/* SEARCH */}

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-12 bg-linear-to-r from-start to-end text-black rounded-xl p-3 font-semibold text-base"
        >
          {loading ? "Searching Flights..." : "Search Flights"}
        </button>
      </form>
    </div>
  );
};

export default FlightsForm;
