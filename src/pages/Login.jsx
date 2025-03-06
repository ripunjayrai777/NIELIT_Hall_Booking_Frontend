import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      role: email.includes("admin") ? "admin" : "user",
    };
    login(userData);
    navigate(userData.role === "admin" ? "/admin" : "/user");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full my-2"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full my-2"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
