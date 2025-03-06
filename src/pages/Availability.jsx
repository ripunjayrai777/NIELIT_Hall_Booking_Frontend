import { useState, useEffect } from "react";
import axios from "axios";

const Availability = () => {
  const [date, setDate] = useState("");
  const [availability, setAvailability] = useState([]);

  const checkAvailability = () => {
    axios
      .get(`/api/bookings/availability?date=${date}`)
      .then((res) => setAvailability(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Check Hall Availability</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 mt-4"
      />
      <button
        onClick={checkAvailability}
        className="ml-2 bg-blue-500 text-white px-4 py-2"
      >
        Check Availability
      </button>

      <div className="mt-6">
        {availability.length === 0 ? (
          <p>No data available</p>
        ) : (
          availability.map((slot, index) => (
            <p key={index} className="bg-white p-2 mt-2 rounded shadow-md">
              {slot.time} - {slot.status}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Availability;
