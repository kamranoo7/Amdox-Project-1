import React, { useState, useEffect } from "react";
import Sidebar from "../components/EmployerSidebar";
import Header from "../components/Header";
import JobForm from "../components/Jobs/JobForm";
import JobList from "../components/Jobs/JobList";

// --- CONSTANT: DEFAULT DATA (For First Time Visitors) ---
const DEFAULT_JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "6-10 LPA",
    jobType: "Full Time",
    qualification: "B.Tech",
    description:
      "We are looking for an experienced React Developer to join our team.",
    responsibilities: "- Develop UI components\n- Integrate APIs",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Pune",
    salary: "12-18 LPA",
    jobType: "Full Time",
    qualification: "M.Tech",
    description: "Node.js expert required for building scalable microservices.",
    responsibilities: "- Build RESTful APIs\n- Database optimization",
  },
];

function ManageJobs() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // --- ADMIN USER DATA ---
  const adminUser = {
    name: "Admin User",
    role: "Company Profile",
    initial: "A",
    avatarColor: "bg-dark",
  };

  // --- STATE MANAGEMENT ---
  const [showForm, setShowForm] = useState(false); // Toggle between List and Form
  const [editingJob, setEditingJob] = useState(null); // Stores the job being edited

  // --- 1. LOAD DATA (Smart Logic) ---
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("my_jobs_data");

    // IF NULL (User has never visited): Show Dummy Data
    if (!savedJobs) {
      return DEFAULT_JOBS;
    }

    // IF DATA EXISTS (Even if empty []): Load User's Data
    try {
      return JSON.parse(savedJobs);
    } catch (error) {
      return DEFAULT_JOBS; // Fallback if error
    }
  });

  // --- 2. SAVE DATA (Sync with LocalStorage) ---
  useEffect(() => {
    localStorage.setItem("my_jobs_data", JSON.stringify(jobs));
  }, [jobs]);

  // --- HANDLERS ---
  const handleCreateClick = () => {
    setEditingJob(null);
    setShowForm(true);
  };

  const handleEditClick = (job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingJob(null);
  };

  // --- SAVE LOGIC (Add or Update) ---
  const handleSaveJob = (jobData) => {
    if (jobData.id) {
      // Update Existing
      setJobs(jobs.map((j) => (j.id === jobData.id ? jobData : j)));
      alert("✅ Job Updated Successfully!");
    } else {
      // Create New
      const newJob = { ...jobData, id: Date.now() };
      setJobs([...jobs, newJob]);
      alert("✅ Job Posted Successfully!");
    }
    setShowForm(false);
  };

  // --- DELETE LOGIC (Professional: Allows Empty List) ---
  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this job listing?")) {
      const remainingJobs = jobs.filter((j) => j.id !== id);
      setJobs(remainingJobs);
    }
  };

  return (
    <div className="d-flex min-vh-100" style={{ background: "#f8fafc" }}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: isCollapsed ? "85px" : "260px",
          transition: "all 0.3s",
        }}
      >
        <Header title="Manage Jobs" user={adminUser} />

        <div className="p-4 p-lg-5">
          {/* --- VIEW 1: JOB LIST / EMPTY STATE --- */}
          {!showForm && (
            <div className="fade-in">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold text-dark m-0 ms-1">Job Listings</h4>
                </div>
                <button
                  onClick={handleCreateClick}
                  className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm"
                >
                  <i className="bi bi-plus-lg me-2"></i> Post New Job
                </button>
              </div>

              {/* 👇 LOGIC: Show List OR Show 'No Jobs' Image */}
              {jobs.length > 0 ? (
                <JobList
                  jobs={jobs}
                  onEdit={handleEditClick}
                  onDelete={handleDeleteClick}
                />
              ) : (
                
                <div className="text-center p-5 bg-white rounded-4 shadow-sm">
                
                  <div
                    className="mb-3 text-secondary"
                    style={{ opacity: "0.5" }}
                  >
                    <i
                      className="bi bi-briefcase text-secondary"
                      style={{ fontSize: "4rem" }}
                    ></i>
                  </div>

                  <h5 className="fw-bold text-dark">No Jobs Found</h5>
                  <p className="text-muted small">
                    Click "Post New Job" to create your first listing.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* --- VIEW 2: JOB FORM --- */}
          {showForm && (
            <div className="fade-in">
              <button
                onClick={handleCancel}
                className="btn btn-link text-decoration-none text-secondary mb-3 ps-0"
              >
                <i className="bi bi-arrow-left me-2"></i> Back to Job List
              </button>

              <JobForm
                currentJob={editingJob}
                onSave={handleSaveJob}
                onCancel={handleCancel}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageJobs;
