// File: src/components/EmployerSidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

const EmployerSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/employer-dashboard", name: "Dashboard", icon: "bi-speedometer2" },
    { path: "/employer-profile", name: "Company Profile", icon: "bi-building-gear" },
    { path: "/employer-users", name: "Manage Users", icon: "bi-people-fill" },
    { path: "/admin-jobs", name: "Manage Jobs", icon: "bi-briefcase-fill" },
    { path: "/admin-reports", name: "Reports & Analytics", icon: "bi-bar-chart-fill" },
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
      <div 
        className={`d-flex align-items-center ${isCollapsed ? 'justify-content-center' : 'justify-content-between'} mb-5 mt-2`}
        style={{ height: "40px" }} 
      >
        {!isCollapsed && (
          <div className="d-flex align-items-center overflow-hidden">
             <h4 className="fw-bold m-0 text-nowrap">AdminPanel</h4>
          </div>
        )}
        <button
          className="btn btn-link text-white-50 p-0 d-flex align-items-center justify-content-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{ width: "40px", height: "40px" }}
        >
          <i className="bi bi-list fs-3"></i>
        </button>
      </div>

      <ul className="nav nav-pills flex-column mb-auto gap-2">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link
              to={item.path}
              className={`nav-link d-flex align-items-center admin-nav-link ${
                isActive(item.path)
                  ? "bg-primary text-white shadow active"
                  : "text-white-50"
              } ${isCollapsed ? 'justify-content-center px-0' : ''}`} 
            >
              <i className={`bi ${item.icon} fs-5 ${!isCollapsed ? 'me-3' : ''}`}></i>
              {!isCollapsed && <span className="text-nowrap">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployerSidebar;