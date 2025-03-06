import { useState } from "react";
import axios from "axios";

const BookingPage = () => {
  const [hall, setHall] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    axios
      .post("/api/bookings/request", { hall, date, time })
      .then((res) => alert("Booking requested successfully!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Book a Seminar Hall</h1>
      <form onSubmit={handleBooking} className="mt-4">
        <input
          type="text"
          placeholder="Hall Name"
          value={hall}
          onChange={(e) => setHall(e.target.value)}
          className="border p-2 w-full my-2"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full my-2"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 w-full my-2"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 w-full"
        >
          Request Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
