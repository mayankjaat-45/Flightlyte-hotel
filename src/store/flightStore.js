import { create } from "zustand";

export const useFlightStore = create((set, get) => ({
  flights: [],
  selectedFlight: null,
  traceId: null,
  resultIndex: null,
  fareQuote: null,
  isLcc: null,

  // ✅ SSR STATE
  selectedMeals: [], // array instead of single
  selectedSeats: [],
  ssrTotal: 0,

  passengerCount: 1,

  clearBookings: () => {
    localStorage.removeItem("bookings");
    set({ bookings: [] });
  },

  setFlights: ({ flights, traceId }) =>
    set({
      flights: flights || [],
      traceId: traceId || null,
    }),

  setFlight: (flight) =>
    set({
      selectedFlight: flight || null,
      resultIndex:
        flight && flight.ResultIndex !== undefined ? flight.ResultIndex : null,
      isLcc: flight?.IsLCC ?? null,
    }),

  setFareQuote: (fareQuote) => set({ fareQuote }),

  setPassengerCount: (count) => set({ passengerCount: count }),

  // ✅ Meals (MULTI)
  setSelectedMeals: (meals) => set({ selectedMeals: meals }),

  // ✅ Seats
  setSelectedSeats: (seats) => set({ selectedSeats: seats }),

  // ✅ SSR total (centralized)
  calculateSSRTotal: () => {
    const { selectedSeats, selectedMeals } = get();

    let total = 0;

    selectedSeats.forEach((seat) => {
      total += Number(seat.Price || 0);
    });

    selectedMeals.forEach((meal) => {
      total += Number(meal.Price || 0);
    });

    set({ ssrTotal: total });
  },

  clearFlights: () =>
    set({
      flights: [],
      selectedFlight: null,
      traceId: null,
      resultIndex: null,
      fareQuote: null,
      selectedMeals: [],
      selectedSeats: [],
      ssrTotal: 0,
      passengerCount: 1,
    }),

  resetBooking: () =>
    set({
      selectedFlight: null,
      resultIndex: null,
      fareQuote: null,
      selectedMeals: [],
      selectedSeats: [],
      ssrTotal: 0,
    }),
}));
