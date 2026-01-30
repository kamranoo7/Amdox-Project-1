import React, { useState, useEffect } from "react";

function JobForm({ currentJob, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    location: "",
    salary: "",
    jobType: "",
    qualifications: "",
    description: "",
    responsibilities: "",
    status: "Active",
  });

  // Load data if editing
  useEffect(() => {
    if (currentJob) {
      setFormData(currentJob);
    }
  }, [currentJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
      <h5 className="fw-bold mb-4 text-dark border-bottom pb-3">
        {currentJob ? "Edit Job Details" : "Create New Job Listing"}
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Side Inputs */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">
                Job Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control bg-light border-0 py-2"
                placeholder="Ex: Senior React Dev"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">
                Location <span className="text-danger">*</span>
              </label>
              <select 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange} 
                  className="form-select bg-light border-0 py-2" 
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Remote">Remote</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Surat">Surat</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Noida">Noida</option>                
                  <option value="Indore">Indore</option>
                  <option value="Jaipur">Jaipur</option>
               </select>

            </div>
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">
                Salary Range <span className="text-danger">*</span>
              </label>
              <select
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="form-select bg-light border-0 py-2"
                required
              >
                <option value="">Select Salary Range</option>
                <option value="0-3 LPA">0 - 3 LPA (Intern/Fresher)</option>
                <option value="3-6 LPA">3 - 6 LPA (Junior)</option>
                <option value="6-10 LPA">6 - 10 LPA (Mid-Level)</option>
                <option value="10-15 LPA">10 - 15 LPA (Senior)</option>
                <option value="15-25 LPA">15 - 25 LPA (Lead)</option>
                <option value="25+ LPA">25+ LPA (Executive)</option>
              </select>
            </div>

            {/* Job Type */}
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">
                Job Type <span className="text-danger">*</span>
              </label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="form-select bg-light border-0 py-2"
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Freelancer</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="col-md-6">
             
              {/* Job Status */}
             <div className="mb-3">
               <label className="form-label small fw-bold text-secondary">Job Status <span className="text-danger">*</span></label>
               <select 
                  name="status" 
                  value={formData.status} 
                  onChange={handleChange} 
                  className="form-select bg-light border-0 py-2" 
                  required 
               >
                  <option value="Active">Active (Open)</option>
                  <option value="Inactive">Inactive (Closed)</option>
               </select>
             </div>          
             
             {/* Description & Responsibilities */}
             <div className="mb-3">
               <label className="form-label small fw-bold text-secondary">Description <span className="text-danger">*</span></label>
               <textarea name="description" value={formData.description} onChange={handleChange} className="form-control bg-light border-0" rows="3" placeholder="Overview..." required></textarea>
             </div>
             <div className="mb-3">
               <label className="form-label small fw-bold text-secondary">Responsibilities <span className="text-danger">*</span></label>
               <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} className="form-control bg-light border-0" rows="3" placeholder="Tasks..." required></textarea>
             </div>
          </div>
        </div>

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-danger rounded-pill px-4 fw-bold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary rounded-pill px-5 fw-bold shadow-sm"
          >
            {currentJob ? "Update Job" : "Post Job"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
