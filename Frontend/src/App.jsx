import { Routes, Route } from 'react-router-dom';
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import "./index.css";

function App() {
  return (
    
     <div className="w-100 min-vh-100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
