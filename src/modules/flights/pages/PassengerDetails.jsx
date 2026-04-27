import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useFlightStore } from "../../../store/flightStore";

const PassengerDetails = () => {
  const navigate = useNavigate();

  const {
    selectedFlight,
    selectedSeats,
    selectedMeal,
    passengerCount,
    traceId,
    resultIndex,
  } = useFlightStore();

  /* ---------------- INITIAL STATE ---------------- */

  const [passengers, setPassengers] = useState(
    Array.from({ length: passengerCount }, () => ({
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "Male",
      dob: "",
      passport: "",
      passportIssueDate: "",
      passportExpiry: "",
      nationality: "IN",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "India",
    })),
  );

  /* ---------------- HANDLE CHANGE ---------------- */

  const handleChange = (index, e) => {
    const updated = [...passengers];

    updated[index][e.target.name] =
      e.target.name === "passport"
        ? e.target.value.toUpperCase().trim()
        : e.target.value;

    setPassengers(updated);
  };

  /* ---------------- SEGMENTS ---------------- */

  const segments = useMemo(() => {
    return (
      selectedFlight?.segments || selectedFlight?.Segments?.flat(Infinity) || []
    );
  }, [selectedFlight]);

  /* ---------------- COUNTRY HELPER ---------------- */

  const getCountry = (seg, type) => {
    return (
      seg?.[type]?.CountryCode ||
      seg?.[type]?.Airport?.CountryCode ||
      seg?.[type]?.Airport?.Country?.CountryCode ||
      null
    );
  };

  /* ---------------- INTERNATIONAL CHECK ---------------- */

  const isInternational = useMemo(() => {
    if (!segments.length) return false;

    return segments.some((seg) => {
      const originCountry = getCountry(seg, "Origin");
      const destCountry = getCountry(seg, "Destination");

      if (!originCountry || !destCountry) return false;

      return originCountry !== destCountry;
    });
  }, [segments]);

  /* ---------------- DEBUG ---------------- */

  useEffect(() => {
    console.log(
      "Segments Debug:",
      segments.map((s) => ({
        from: s?.Origin?.AirportCode,
        to: s?.Destination?.AirportCode,
        fromCountry: getCountry(s, "Origin"),
        toCountry: getCountry(s, "Destination"),
      })),
    );

    console.log("isInternational:", isInternational);
  }, [segments, isInternational]);

  /* ---------------- CLEAR PASSPORT FOR DOMESTIC ---------------- */

  useEffect(() => {
    if (!isInternational) {
      setPassengers((prev) =>
        prev.map((p) => ({
          ...p,
          passport: "",
          passportIssueDate: "",
          passportExpiry: "",
        })),
      );
    }
  }, [isInternational]);

  /* ---------------- VALIDATION ---------------- */

  const validatePassengers = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passportRegex = /^[A-Z0-9]{6,9}$/;

    for (let p of passengers) {
      if (!p.firstName || !p.lastName) {
        alert("First Name and Last Name are required");
        return false;
      }

      if (!emailRegex.test(p.email)) {
        alert("Invalid email format");
        return false;
      }

      if (!phoneRegex.test(p.phone)) {
        alert("Phone must be 10 digits");
        return false;
      }

      if (!p.address || !p.city) {
        alert("Address and City are required");
        return false;
      }

      /* -------- INTERNATIONAL -------- */

      if (isInternational) {
        if (!p.passport || !p.passportIssueDate || !p.passportExpiry) {
          alert("Passport details are required for international travel");
          return false;
        }

        if (!passportRegex.test(p.passport)) {
          alert("Invalid passport format");
          return false;
        }

        const expiry = new Date(p.passportExpiry);
        const today = new Date();
        const sixMonthsLater = new Date();
        sixMonthsLater.setMonth(today.getMonth() + 6);

        if (expiry < sixMonthsLater) {
          alert("Passport must be valid for at least 6 months");
          return false;
        }
      } else {

      /* -------- DOMESTIC -------- */
        if (p.passport || p.passportIssueDate || p.passportExpiry) {
          if (!p.passport || !p.passportIssueDate || !p.passportExpiry) {
            alert("Complete passport details or remove them");
            return false;
          }
        }
      }
    }

    return true;
  };

  /* ---------------- CONTINUE ---------------- */

  const handleContinue = () => {
    if (!validatePassengers()) return;

    navigate("/review-booking", {
      state: {
        passengers,
        selectedSeats,
        selectedMeal,
        selectedFlight,
        traceId,
        resultIndex,
      },
    });
  };

  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500";

  /* ---------------- UI ---------------- */

  return (
    <div className="bg-gray-50 min-h-screen pb-32">
      <div className="max-w-5xl mx-auto px-4 pt-28">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Passenger Details
        </h2>

        <p className="text-gray-500 text-sm mt-1">Enter traveler information</p>

        <p className="text-xs mt-2 text-blue-500">
          {isInternational ? "International Flight ✈️" : "Domestic Flight 🇮🇳"}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-6">
        {passengers.map((passenger, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl p-5 md:p-8 mb-6"
          >
            <h3 className="text-lg font-semibold mb-4">
              Passenger {index + 1}
              {selectedSeats?.[index] && (
                <span className="text-sm text-blue-600 ml-2">
                  (Seat {selectedSeats[index].Code})
                </span>
              )}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium">Title</label>
                <select
                  name="title"
                  value={passenger.title}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                >
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Gender</label>
                <select
                  name="gender"
                  value={passenger.gender}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">First Name *</label>
                <input
                  name="firstName"
                  value={passenger.firstName}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name *</label>
                <input
                  name="lastName"
                  value={passenger.lastName}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={passenger.dob}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Nationality</label>
                <input
                  name="nationality"
                  value={passenger.nationality}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              {isInternational && (
                <>
                  <div>
                    <label className="text-sm font-medium">
                      Passport Number *
                    </label>
                    <input
                      name="passport"
                      value={passenger.passport}
                      onChange={(e) => handleChange(index, e)}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Passport Issue Date *
                    </label>
                    <input
                      type="date"
                      name="passportIssueDate"
                      value={passenger.passportIssueDate}
                      onChange={(e) => handleChange(index, e)}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Passport Expiry *
                    </label>
                    <input
                      type="date"
                      name="passportExpiry"
                      value={passenger.passportExpiry}
                      onChange={(e) => handleChange(index, e)}
                      className={inputStyle}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="text-sm font-medium">Email *</label>
                <input
                  name="email"
                  value={passenger.email}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone *</label>
                <input
                  name="phone"
                  value={passenger.phone}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Address *</label>
                <input
                  name="address"
                  value={passenger.address}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium">City *</label>
                <input
                  name="city"
                  value={passenger.city}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Country</label>
                <input
                  name="country"
                  value={passenger.country}
                  onChange={(e) => handleChange(index, e)}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4">
        <div className="max-w-5xl mx-auto flex justify-end">
          <button
            onClick={handleContinue}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Continue to Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
