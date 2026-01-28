import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import EmployerDashboard from "./Pages/EmployerDashboard.jsx";  
import EmployerProfile from "./Pages/EmployerProfile.jsx";
import Profile from "./Pages/Profiles.jsx";

function App() {
  return (
    <div className="w-100 min-vh-100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
