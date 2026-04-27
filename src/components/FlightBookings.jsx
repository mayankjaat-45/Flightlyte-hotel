import { useQuery } from "@tanstack/react-query";
import { getFlightBookings } from "../services/bookingApi";


const FlightBookings = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["flightBookings"],
    queryFn: getFlightBookings,
  });

  if (isLoading) return <p>Loading flights...</p>;

  if (!data.length) return <p>No flight bookings</p>;

  return (
    <div className="space-y-4">
      {data.map((b, i) => (
        <div key={i} className="bg-white/5 p-5 rounded-xl">
          <p>
            <b>PNR:</b> {b.pnr}
          </p>
          <p>
            <b>Status:</b> {b.status}
          </p>
          <p>
            <b>Fare:</b> ₹ {b.fare}
          </p>
          <p>
            {b.from} → {b.to}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlightBookings;
