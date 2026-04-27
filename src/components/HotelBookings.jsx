import { useQuery } from "@tanstack/react-query";
import { getHotelBookings } from "../services/bookingApi";

const HotelBookings = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["hotelBookings"],
    queryFn: getHotelBookings,
  });

  if (isLoading)
    return (
      <div className="text-center py-10 text-gray-400">Loading bookings...</div>
    );

  const confirmedBookings = data.filter((b) => b.status === "CONFIRMED");

  if (!confirmedBookings.length)
    return (
      <div className="text-center py-10 text-gray-400">
        No confirmed bookings found
      </div>
    );

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
        My Bookings
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {confirmedBookings.map((b) => {
          return (
            <div
              key={b.id}
              className="bg-linear-to-br from-[#111] to-[#1a1a1a] 
              border border-white/10 rounded-2xl p-5 
              shadow-lg hover:shadow-xl hover:scale-[1.02] 
              transition-all duration-300 space-y-4"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  Booking ID: {b.booking_id || "N/A"}
                </span>
                <span className="text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-1 rounded-full">
                  CONFIRMED
                </span>
              </div>

              {/* Booking Code */}
              <p className="text-xs text-gray-500 break-all">
                {b.booking_code}
              </p>

              {/* Guests Section */}
              <div>
                <p className="text-sm text-gray-400 mb-2">
                  Guests ({b.passengers?.length || 0})
                </p>

                <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                  {b.passengers?.map((p, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center text-sm p-2 rounded-lg ${
                        p.LeadPassenger
                          ? "bg-green-400/10 border border-green-400/20"
                          : "bg-white/5"
                      }`}
                    >
                      <div>
                        <p className="text-white">
                          {[p.Title, p.FirstName, p.LastName]
                            .filter(Boolean)
                            .join(" ")}
                        </p>
                        {p.Age && (
                          <p className="text-xs text-gray-400">Age: {p.Age}</p>
                        )}
                      </div>

                      {p.LeadPassenger && (
                        <span className="text-xs text-green-400">Lead</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Row */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-400">Nationality</p>
                  <p className="text-white font-medium">
                    {b.guest_nationality}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">Booked On</p>
                  <p className="text-white font-medium">
                    {new Date(b.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Booking Details */}
              <div className="text-sm space-y-1">
                {b.confirmation_no && (
                  <p>
                    <span className="text-gray-400">Confirmation:</span>{" "}
                    <span className="text-white">{b.confirmation_no}</span>
                  </p>
                )}

                {b.booking_ref_no && (
                  <p>
                    <span className="text-gray-400">Ref No:</span>{" "}
                    <span className="text-white">{b.booking_ref_no}</span>
                  </p>
                )}

                {b.invoice_number && (
                  <p>
                    <span className="text-gray-400">Invoice:</span>{" "}
                    <span className="text-white">{b.invoice_number}</span>
                  </p>
                )}

                {b.hotel_booking_status && (
                  <p>
                    <span className="text-gray-400">Hotel Status:</span>{" "}
                    <span className="text-green-400">
                      {b.hotel_booking_status}
                    </span>
                  </p>
                )}
              </div>

              {/* Footer */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelBookings;
