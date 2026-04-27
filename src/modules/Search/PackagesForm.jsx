import { useState } from "react";

const PackagesForm = ({ onSearch }) => {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(destination);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4">
      <input
        type="text"
        placeholder="Search destination (Goa, Manali, Bali...)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full max-w-md border rounded-lg p-3"
      />

      <button
        type="submit"
        className="bg-linear-to-r from-start to-end text-white rounded-lg px-6 py-3 font-semibold"
      >
        Explore
      </button>
    </form>
  );
};

export default PackagesForm;
