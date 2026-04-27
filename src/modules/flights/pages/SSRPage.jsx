import { useEffect, useState } from "react";
import { privateApi } from "../../../services/api";
import { useFlightStore } from "../../../store/flightStore";
import { useNavigate } from "react-router-dom";

const SSRPage = () => {
  const {
    traceId,
    resultIndex,
    selectedSeats,
    selectedMeals,
    setSelectedMeals,
    setSelectedSeats,
    calculateSSRTotal,
    passengerCount,
    fareQuote,
  } = useFlightStore();

  const [meals, setMeals] = useState([]);
  const [seatRows, setSeatRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  /* ---------------- Session Guard ---------------- */

  useEffect(() => {
    if (!traceId || !resultIndex) {
      navigate("/");
    }
  }, [traceId, resultIndex, navigate]);

  /* ---------------- Seat Click ---------------- */

  const handleSeatClick = (seat) => {
    const exists = selectedSeats.find((s) => s.Code === seat.Code);

    let updatedSeats;

    if (exists) {
      updatedSeats = selectedSeats.filter((s) => s.Code !== seat.Code);
    } else {
      if (selectedSeats.length >= passengerCount) {
        alert(`You can select only ${passengerCount} seats`);
        return;
      }
      updatedSeats = [...selectedSeats, seat];
    }

    setSelectedSeats(updatedSeats);
    setTimeout(() => calculateSSRTotal(), 0);
  };

  /* ---------------- Meal Click ---------------- */

  const handleMealSelect = (meal) => {
    const exists = selectedMeals.find((m) => m.Code === meal.Code);

    let updatedMeals;

    if (exists) {
      updatedMeals = selectedMeals.filter((m) => m.Code !== meal.Code);
    } else {
      if (selectedMeals.length >= passengerCount) {
        alert(`You can select only ${passengerCount} meals`);
        return;
      }
      updatedMeals = [...selectedMeals, meal];
    }

    setSelectedMeals(updatedMeals);
    setTimeout(() => calculateSSRTotal(), 0);
  };

  /* ---------------- Seat Renderer ---------------- */

  const renderSeat = (seat) => {
    const unavailable = seat.AvailablityType === 0;
    const isSelected = selectedSeats.some((s) => s.Code === seat.Code);
    const price = seat?.Price || 0;

    return (
      <button
        key={seat.Code}
        disabled={unavailable}
        onClick={() => handleSeatClick(seat)}
        className={`w-12 h-12 rounded-md text-[10px] flex flex-col justify-center items-center border transition
        ${
          unavailable
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isSelected
              ? "bg-green-600 text-white border-green-600"
              : price > 0
                ? "bg-yellow-400 text-black"
                : "bg-white hover:bg-gray-100"
        }`}
      >
        <span className="font-semibold">{seat.Code}</span>
        {price > 0 && <span className="text-[9px]">₹{price}</span>}
      </button>
    );
  };

  /* ---------------- Fetch SSR ---------------- */

  const fetchSSR = async () => {
    try {
      setLoading(true);

      const res = await privateApi.post("/api/airlines/ssr/", {
        TraceId: traceId,
        ResultIndex: resultIndex,
      });

      const response = res?.data?.Response;

      // ✅ Meals FIX
      const mealList = response?.MealDynamic?.[0] || [];
      setMeals(mealList);

      // ✅ Seats
      const rows = response?.SeatDynamic?.[0]?.SegmentSeat?.[0]?.RowSeats || [];

      const parsedRows = rows.map((row) => row.Seats || []);
      setSeatRows(parsedRows);
    } catch (err) {
      console.error("SSR fetch error:", err);
      setError("Failed to load SSR data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (traceId && resultIndex) fetchSSR();
  }, [traceId, resultIndex]);

  /* ---------------- Price Calculation ---------------- */

  const baseTotal = fareQuote?.Pricing?.TotalPayable || 0;

  const seatsTotal = selectedSeats.reduce((a, s) => a + (s.Price || 0), 0);

  const mealsTotal = selectedMeals.reduce((a, m) => a + (m.Price || 0), 0);

  const finalTotal = baseTotal + seatsTotal + mealsTotal;

  /* ---------------- UI ---------------- */

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 animate-pulse text-lg">
          Loading Add-ons...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        {error}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
      <h2 className="text-xl md:text-2xl font-bold mb-8">Select Add-ons</h2>

      {/* ---------------- Meals ---------------- */}

      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Meals</h3>

        {meals.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {meals.map((meal) => {
              const isSelected = selectedMeals.some(
                (m) => m.Code === meal.Code,
              );

              return (
                <button
                  key={meal.Code}
                  onClick={() => handleMealSelect(meal)}
                  className={`border rounded-lg p-3 text-sm text-left transition
                  ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <p className="font-medium">
                    {meal.AirlineDescription || meal.Code}
                  </p>

                  {meal.Price > 0 && (
                    <p className="text-xs mt-1">₹{meal.Price}</p>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500">No meals available.</p>
        )}
      </div>

      {/* ---------------- Seats ---------------- */}

      <div>
        <h3 className="text-lg font-semibold mb-2">Seat Selection</h3>

        <p className="text-sm text-gray-600 mb-4 text-center">
          Seats Selected: {selectedSeats.length} / {passengerCount}
        </p>

        {seatRows.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="min-w-162.5 flex flex-col items-center">
              {seatRows.map((row, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <div className="w-8 text-xs text-gray-500 text-right">
                    {i + 1}
                  </div>

                  <div className="flex gap-2">
                    {row.slice(0, 3).map(renderSeat)}
                  </div>

                  <div className="w-6"></div>

                  <div className="flex gap-2">
                    {row.slice(3).map(renderSeat)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">No seats available</p>
        )}
      </div>

      {/* ---------------- Price Summary ---------------- */}

      <div className="mt-8 p-5 border rounded-lg bg-white">
        <h4 className="font-semibold mb-3">Price Summary</h4>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Flight Fare</span>
            <span>₹ {baseTotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Seats</span>
            <span>₹ {seatsTotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Meals</span>
            <span>₹ {mealsTotal}</span>
          </div>

          <div className="border-t pt-2 flex justify-between font-bold text-lg">
            <span>Total Payable</span>
            <span>₹ {finalTotal}</span>
          </div>
        </div>
      </div>

      {/* ---------------- Sticky Footer ---------------- */}

      <div className="sticky bottom-0 bg-white pt-6 mt-10 border-t flex justify-between items-center">
        <div className="text-lg font-bold">₹ {finalTotal}</div>

        <button
          disabled={selectedSeats.length !== passengerCount}
          onClick={() => navigate("/passenger-details")}
          className="bg-blue-600 hover:bg-blue-700
          disabled:bg-gray-300 text-white px-6 py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SSRPage;
