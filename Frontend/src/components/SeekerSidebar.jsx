import React from "react";
import { Link, useLocation } from "react-router-dom";

function SeekerSidebar({ isCollapsed, setIsCollapsed }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: "bi-speedometer2", path: "/dashboard" },
    { name: "My Profile", icon: "bi-person", path: "/profile" },
    { name: "My Jobs", icon: "bi-briefcase", path: "#" },
    { name: "Find Jobs", icon: "bi-search", path: "#" },
    { name: "Saved Jobs", icon: "bi-bookmark-heart", path: "#" },
    { name: "Messages", icon: "bi-chat-dots", path: "#" },
    { name: "Meetings", icon: "bi-camera-video", path: "#" },
    
  ];

  return (
    <div
      className="d-flex flex-column text-white p-3 vh-100 position-fixed"
      style={{
        width: isCollapsed ? "80px" : "260px",
        backgroundColor: "#1e293b",
        transition: "width 0.3s ease",
        zIndex: 1000,
      }}
    >
      {/* Hamburger Toggle */}
      <div
        className={`d-flex align-items-center mb-4 px-2 ${isCollapsed ? "justify-content-" : "justify-content-between"}`}
      >
        {!isCollapsed && (
          <h4 className=" fw-bold text-primary mb-0 overflow-hidden text-nowrap align-text">
          JobPortal 
          </h4>
        )}
        <button
          className="btn border-0 p-0 text-white-50"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className="bi bi-list fs-3"></i>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-grow-1 overflow-hidden px-1">
        <ul className="nav nav-pills flex-column gap-1">
          {menuItems.map((item) => {

            const currentPath = location.pathname.toLowerCase();
            const itemPath = item.path.toLowerCase();

            const isActive =
              currentPath === itemPath || 
              (currentPath === "/" && item.name === "Dashboard");
            
            return (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.path}
                  className="nav-link d-flex align-items-center gap-3 py-2 px-3 rounded-3 transition-all"
                  style={{
                    color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                    backgroundColor: isActive ? "#0d6efd" : "transparent",
                    fontWeight: isActive ? "700" : "500",
                    borderRadius: "10px", 
                    justifyContent: isCollapsed ? "center" : "flex-start",
                    transition: "all 0.3s ease",
                    boxShadow: isActive ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "none",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; 
                      e.currentTarget.style.color = "#ffffff"; 
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                    }
                  }}
                >
                  <i className={`bi ${item.icon} fs-5`}></i>
                  {!isCollapsed && (
                    <span className="fw-bold text-nowrap">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SeekerSidebar;
