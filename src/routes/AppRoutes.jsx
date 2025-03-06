import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute role="admin" />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route element={<PrivateRoute role="user" />}>
          <Route path="/user" element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
