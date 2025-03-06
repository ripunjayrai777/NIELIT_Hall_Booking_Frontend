import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Seminar Hall Booking</h1>
      <div className="mt-5">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
