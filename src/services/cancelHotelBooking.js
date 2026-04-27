import { privateApi } from "./api";

export const cancelHotelBooking = async (bookingId) => {
  const response = await privateApi.post(
    "/api/hotels/hotel/send-change-request/",
    {
      BookingId: bookingId,
    },
  );

  console.log("AXIOS RAW RESPONSE:", response);

  return response.data; // ⚠️ VERY IMPORTANT
};
