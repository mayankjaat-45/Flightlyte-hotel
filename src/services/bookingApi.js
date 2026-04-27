// services/bookingApi.js
import { privateApi } from "./api";

export const getPackageBookings = async () => {
  const res = await privateApi.get("/api/package/bookings/my/");
  return res.data || [];
};

export const getFlightBookings = async () => {
  const res = await privateApi.get("/api/flight/bookings/my/");
  return res.data?.data || res.data || [];
};

export const getHotelBookings = async () => {
  const res = await privateApi.get("/api/hotels/my-bookings/");
  return res.data?.data || [];
};
