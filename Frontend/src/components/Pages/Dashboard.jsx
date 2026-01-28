import React, { useState } from "react";
import Sidebar from "../components/SeekerSidebar";
import Header from "../components/Header";
import chartImage from "../assets/profile-chart.png";

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  

  const stats = [
    { label: "APPLIED JOBS", value: 14, icon: "bi-send", color: "#0d6efd", bgColor: "#e7f1ff" },
    { label: "MY FOLLOWING", value: 28, icon: "bi-chat-square-text", color: "#6f42c1", bgColor: "#f3e8ff" },
    { label: "SAVED JOBS", value: 10, icon: "bi-star", color: "#fd7e14", bgColor: "#ffedd5" },
    { label: "MEETINGS", value: 2, icon: "bi-camera-video", color: "#198754", bgColor: "#dcfce7" },
  ];

  return (
    <div
      className="d-flex min-vh-100"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div 
        className="flex-grow-1" 
        style={{ 
          marginLeft: isCollapsed ? "85px" : "260px", 
          transition: "margin-left 0.3s ease-in-out" 
        }}
      >
        {/* --- HEADER --- */}
        <Header title="Dashboard" />
        
        <div className="px-4 px-lg-5 py-4 pb-5">
          
          <div className="row g-4 mb-5">
            {stats.map((stat) => (
              <div key={stat.label} className="col-md-6 col-lg-3">
                <div
                  className="card border-0 shadow-sm rounded-4 p-4 d-flex flex-row align-items-center justify-content-between bg-white zoom-effect"
                  style={{ transition: "all 0.3s ease-in-out", cursor: "pointer" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div>
                    <p className="text-muted small fw-bold mb-1">{stat.label}</p>
                    <h2 className="fw-bold mb-0">{stat.value}</h2>
                  </div>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "45px", height: "45px", backgroundColor: stat.bgColor, color: stat.color }}
                  >
                    <i className={`bi ${stat.icon} fs-5`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-8">
              <div className="bg-white rounded-4 p-4 shadow-sm h-100 border-0">
                <div className="d-flex justify-content-between align-items-center mb-4 px-2">
                  <div>
                    <h5 className="fw-bold text-dark mb-0">Your Profile Views</h5>
                    <p className="text-muted small mb-0">Weekly traffic overview</p>
                  </div>
                  <select className="form-select form-select-sm w-auto border-0 shadow-sm bg-light rounded-pill ps-3 pe-5 py-2 fw-bold text-secondary cursor-pointer">
                    <option>Last 30 days</option>
                    <option>Last 7 days</option>
                  </select>
                </div>

                <div className="w-100 text-center">
                  <img
                    src={chartImage}
                    alt="Profile Activity Chart"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "550px",
                      objectFit: "contain",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <h5 className="fw-bold text-dark mb-0">Recent Activity</h5>
                  <button className="btn btn-link text-muted p-0"><i className="bi bi-three-dots"></i></button>
                </div>

                <div className="text-center py-5">
                  <div className="mb-4">
                    <i className="bi bi-folder2-open display-4 text-light opacity-50"></i>
                  </div>
                  <p className="text-muted small mb-4">No recent applications found</p>

                  <button
                    className="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-sm mt-2 border-0"
                    style={{ backgroundColor: "#0d6efd", transition: "all 0.3s ease" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#0b5ed7";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 15px rgba(13, 110, 253, 0.3)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#0d6efd";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Browse All Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;