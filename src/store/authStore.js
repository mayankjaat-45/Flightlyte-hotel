import { create } from "zustand";

const getStoredUser = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const useAuthStore = create((set, get) => ({
  user: getStoredUser(),
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  // ✅ ADD THIS
  bookings: JSON.parse(localStorage.getItem("userBookings")) || [],
  // Save user object
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  // Save access token
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  // Save refresh token
  setRefreshToken: (refreshToken) => {
    localStorage.setItem("refreshToken", refreshToken);
    set({ refreshToken });
  },

  // Save both tokens together
  setTokens: (access, refresh) => {
    localStorage.setItem("token", access);
    localStorage.setItem("refreshToken", refresh);
    set({ token: access, refreshToken: refresh });
  },

  // ✅ SET ALL BOOKINGS (after login fetch)
  setBookings: (bookings) => {
    localStorage.setItem("userBookings", JSON.stringify(bookings));
    set({ bookings });
  },

  // ✅ ADD SINGLE BOOKING (after success page)
  addBooking: (booking) => {
    const existing = get().bookings || [];

    const alreadyExists = existing.some(
      (b) => b.bookingId === booking.bookingId,
    );

    if (alreadyExists) return;

    const updated = [booking, ...existing];

    localStorage.setItem("userBookings", JSON.stringify(updated));
    set({ bookings: updated });
  },

  // ✅ CLEAR BOOKINGS (optional)
  clearBookings: () => {
    localStorage.removeItem("userBookings");
    set({ bookings: [] });
  },

  // Clear everything on logout
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userBookings"); // ✅ important

    set({
      user: null,
      token: null,
      refreshToken: null,
      bookings: [],
    });
  },
}));
