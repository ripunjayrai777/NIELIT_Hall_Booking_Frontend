import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings/requests")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleStatusChange = (id, status) => {
    axios
      .post(`http://localhost:5000/api/bookings/${id}/status`, { status })
      .then(() =>
        setBookings((prev) =>
          prev.map((b) => (b._id === id ? { ...b, status } : b))
        )
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="p-4 bg-white rounded shadow-md mb-4"
          >
            <p>
              <strong>User:</strong> {booking.user}
            </p>
            <p>
              <strong>Hall:</strong> {booking.hall}
            </p>
            <p>
              <strong>Time:</strong> {booking.time}
            </p>
            <p>
              <strong>Status:</strong> {booking.status}
            </p>
            <div className="mt-2">
              <button
                onClick={() => handleStatusChange(booking._id, "approved")}
                className="bg-green-500 text-white px-4 py-2 mr-2"
              >
                Approve
              </button>
              <button
                onClick={() => handleStatusChange(booking._id, "rejected")}
                className="bg-red-500 text-white px-4 py-2"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
