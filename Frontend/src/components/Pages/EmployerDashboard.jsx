// File: src/Pages/EmployerDashboard.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 
import EmployerSidebar from "../components/EmployerSidebar";

function EmployerDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // --- ADMIN DATA FOR HEADER ---
  const adminUser = {
    name: "Admin User",
    role: "Super Admin",
    initial: "A",
    avatarColor: "bg-dark"
  };

  const stats = [
    { title: "Total Candidates", value: "1,250", icon: "bi-people-fill", color: "bg-primary", trend: "+5% this week" },
    { title: "Active Jobs", value: "892", icon: "bi-briefcase-fill", color: "bg-success", trend: "+12 new today" },
    { title: "Companies", value: "54", icon: "bi-building-fill", color: "bg-warning", trend: "Stability" },
    { title: "Pending Reviews", value: "18", icon: "bi-exclamation-circle-fill", color: "bg-danger", trend: "Needs Action" },
  ];

  const recentActivity = [
    { id: 1, user: "Kush Patel", action: "Applied for React Dev", time: "2 mins ago", status: "New" },
    { id: 2, user: "TechSolutions Inc.", action: "Posted 'Senior Backend Eng'", time: "15 mins ago", status: "Posted" },
    { id: 3, user: "Rahul Sharma", action: "Updated Profile", time: "1 hour ago", status: "Updated" },
    { id: 4, user: "Design Studio", action: "Reported a bug", time: "3 hours ago", status: "Issue" },
  ];

  return (
    <div className="d-flex min-vh-100 bg-light">
      <EmployerSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: isCollapsed ? "80px" : "260px",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* --- USED REUSABLE HEADER --- */}
        <Header title="Dashboard Overview" user={adminUser} />

        <div className="p-4 p-lg-5">
          {/* STATS */}
          <div className="row g-4 mb-5">
            {stats.map((stat, index) => (
              <div className="col-md-6 col-xl-3" key={index}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 zoom-effect">
                  <div className="card-body p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-secondary small fw-bold mb-1">{stat.title}</p>
                      <h3 className="fw-bold text-dark mb-1">{stat.value}</h3>
                      <p className="extra-small text-muted mb-0">
                        <i className="bi bi-graph-up-arrow me-1 text-success"></i> {stat.trend}
                      </p>
                    </div>
                    <div className={`rounded-4 d-flex align-items-center justify-content-center text-white ${stat.color}`} style={{ width: "50px", height: "50px" }}>
                      <i className={`bi ${stat.icon} fs-4`}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RECENT ACTIVITY */}
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm rounded-4 bg-white h-100">
                <div className="card-header bg-white border-0 py-3 px-4 d-flex justify-content-between align-items-center">
                  <h6 className="fw-bold text-dark mb-0">Recent Platform Activity</h6>
                  <button className="btn btn-light btn-sm rounded-pill fw-bold text-primary small">View All</button>
                </div>
                <div className="table-responsive">
                  <table className="table align-middle table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="border-0 small fw-bold text-secondary ps-4">User / Company</th>
                        <th className="border-0 small fw-bold text-secondary">Action</th>
                        <th className="border-0 small fw-bold text-secondary">Time</th>
                        <th className="border-0 small fw-bold text-secondary pe-4 text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentActivity.map((item) => (
                        <tr key={item.id}>
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{ width: "35px", height: "35px" }}>
                                <span className="fw-bold text-dark small">{item.user.charAt(0)}</span>
                              </div>
                              <span className="fw-bold text-dark small">{item.user}</span>
                            </div>
                          </td>
                          <td className="text-secondary small">{item.action}</td>
                          <td className="text-muted small">{item.time}</td>
                          <td className="pe-4 text-end">
                            <span className="badge rounded-pill bg-light text-dark border fw-normal">{item.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 bg-primary text-white p-4 mb-4">
                <h5 className="fw-bold mb-2">Need to post an update?</h5>
                <p className="small opacity-75 mb-4">Create global announcements for all job seekers.</p>
                <button className="btn btn-light text-primary fw-bold w-100 rounded-pill shadow-sm">Create Announcement</button>
              </div>

              <div className="card border-0 shadow-sm rounded-4 bg-white p-4">
                <h6 className="fw-bold text-dark mb-3">Platform Data Quality</h6>
                <div className="mb-3">
                    <div className="d-flex justify-content-between small mb-1">
                        <span className="text-secondary">Avg. Profile Completion</span>
                        <span className="text-primary fw-bold">78%</span>
                    </div>
                    <div className="progress" style={{height: "6px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "78%"}}></div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between small mb-1">
                        <span className="text-secondary">Verified Users</span>
                        <span className="text-success fw-bold">92%</span>
                    </div>
                    <div className="progress" style={{height: "6px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "92%"}}></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboard;
