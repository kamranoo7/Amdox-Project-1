import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ title, user }) => { // <--- 1. ADD 'user' HERE
  const [showDropdown, setShowDropdown] = useState(false);

  // --- 2. DEFINE DEFAULT DATA ---
  // If no user is passed (like on Candidate pages), use this default:
  const defaultUser = {
    name: "Demo User",
    role: "Guest Account",
    initial: "D",
    avatarColor: "bg-primary"
  };

  // If 'user' prop exists, use it. Otherwise, use 'defaultUser'.
  const activeUser = user || defaultUser; 

  return (
    <header className="bg-white border-bottom px-4 py-2 sticky-top shadow-sm d-flex justify-content-between align-items-center" style={{ zIndex: 100 }}>
      {/* Title Section */}
      <div>
        <h4 className="fw-bold text-dark mb-0">{title}</h4>
      </div>

      {/* Right Actions */}
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-light rounded-circle border shadow-sm position-relative">
          <i className="bi bi-bell-fill text-secondary"></i>
        </button>

        {/* User Dropdown */}
        <div 
          className="position-relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="d-flex align-items-center gap-2 border-start ps-3 cursor-pointer py-2">
            <div className="text-end d-none d-md-block">
              
              <p className="fw-bold text-dark mb-0 small">{activeUser.name}</p>
              <p className="text-muted extra-small mb-0">{activeUser.role}</p>
            </div>
            
            
            <div className={`rounded-circle ${activeUser.avatarColor} text-white d-flex align-items-center justify-content-center fw-bold shadow-sm`} style={{ width: "40px", height: "40px" }}>
              {activeUser.initial}
            </div>
          </div>

          {/* Logout Menu */}
          {showDropdown && (
            <div className="position-absolute end-0 top-100 bg-white rounded-3 shadow-lg border p-2" style={{ width: "180px", zIndex: 1050 }}>
              <Link to="/" className="dropdown-item rounded-2 py-2 text-danger small fw-bold text-decoration-none">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;