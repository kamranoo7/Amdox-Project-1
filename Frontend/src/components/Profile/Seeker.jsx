import React, { useState, useRef } from "react";

// 👇 Receive 'onSave' prop from Parent
function Seeker({ details, onChange, onSave }) {
  
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  // --- FORM SUBMIT HANDLER ---

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload
    onSave(); // Call the Parent's Save Logic
  };

  // --- RESUME LOGIC ---
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setResumeFile(file);
  };

  const handleResumeButtonClick = (e) => {
    // Prevent this specific button from submitting the form
    e.preventDefault(); 
    if (!resumeFile) {
      fileInputRef.current.click();
    } else {
      alert("✅ Resume Uploaded Successfully!");
    }
  };

  return (
    <div>
      
      <form id="profile-form" onSubmit={handleSubmit}>
        
        {/* --- 1. PERSONAL DETAILS --- */}
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
          <h5 className="fw-bold mb-4 text-dark">Personal Details</h5>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Full Name <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-person text-muted"></i></span>
              <input
                type="text"
                name="fullName"
                value={details.fullName || ""}
                onChange={onChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Your full name"
                required 
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Professional Headline <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-briefcase text-muted"></i></span>
              <input
                type="text"
                name="headline"
                value={details.headline || ""}
                onChange={onChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Your professional title"
                required 
              />
            </div>
          </div>

          <div className="mb-0">
            <label className="form-label small fw-bold text-secondary">
              Location <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-geo-alt text-muted"></i></span>
              <input
                type="text"
                name="location"
                value={details.location || ""}
                onChange={onChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="City, Country"
                required 
              />
            </div>
          </div>
        </div>

        {/* --- 2. CONTACT DETAILS --- */}
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
          <h5 className="fw-bold mb-4 text-dark">Contact Details</h5>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Email Address <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-envelope text-muted"></i></span>
              <input
                type="email"
                name="email"
                value={details.email || ""}
                onChange={onChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Email Address"
                required 
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Phone Number <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-telephone text-muted"></i></span>
              <input
                type="tel"
                name="phone"
                value={details.phone || ""}
                onChange={onChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Phone Number"
                required 
              />
            </div>
          </div>

          <div className="mb-0">
            <label className="form-label small fw-bold text-secondary">Portfolio URL</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-link-45deg text-muted"></i></span>
              <input type="url" name="portfolio" value={details.portfolio || ""} onChange={onChange} className="form-control bg-light border-0 shadow-none" placeholder="Portfolio URL" />
            </div>
          </div>
        </div>

        {/* --- 3. SOCIAL PROFILES (Optional) --- */}
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
          <h5 className="fw-bold mb-4 text-dark">Social Profiles</h5>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">GitHub Profile</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-github text-muted"></i></span>
              <input type="url" name="github" value={details.github || ""} onChange={onChange} className="form-control bg-light border-0 shadow-none" placeholder="Github Profile URL" />
            </div>
          </div>
          <div className="mb-0">
            <label className="form-label small fw-bold text-secondary">LinkedIn Profile</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><i className="bi bi-linkedin text-muted"></i></span>
              <input type="url" name="linkedin" value={details.linkedin || ""} onChange={onChange} className="form-control bg-light border-0 shadow-none" placeholder="Linkedin Profile URL" />
            </div>
          </div>
        </div>

        {/* --- 4. RESUME --- */}
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
          <h5 className="fw-bold mb-4 text-dark">Resume / CV</h5>
          <div
            className="p-4 text-center border rounded-3 bg-light position-relative hover-shadow transition-all"
            style={{ borderStyle: "dashed", borderColor: resumeFile ? "#0d6efd" : "#cbd5e1", cursor: "pointer", transition: "all 0.3s ease" }}
            onClick={() => fileInputRef.current.click()} 
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#f1f5f9"; if (!resumeFile) e.currentTarget.style.borderColor = "#0d6efd"; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#f8fafc"; if (!resumeFile) e.currentTarget.style.borderColor = "#cbd5e1"; }}
          >
            {resumeFile ? (
              <div><i className="bi bi-file-earmark-check-fill fs-1 text-primary mb-2"></i><p className="small fw-bold text-dark mb-1">{resumeFile.name}</p><p className="extra-small text-muted mb-0">Click to change</p></div>
            ) : (
              <div><i className="bi bi-cloud-arrow-up-fill fs-1 text-secondary opacity-50 mb-2"></i><p className="small fw-bold text-dark mb-1">Click to select resume</p><p className="extra-small text-muted mb-0">PDF or DOCX (Max 5MB)</p></div>
            )}
            <input type="file" ref={fileInputRef} className="d-none" accept=".pdf,.doc,.docx" onChange={handleFileSelect} />
          </div>
          <button 
            type="button" 
            
            className="btn btn-primary w-100 rounded-pill mt-3 py-2 fw-bold shadow-sm" 
            onClick={handleResumeButtonClick}
          >
            
            {resumeFile ? "Upload Resume" : "Select Resume"}
          </button>
        </div>

      </form>
    </div>
  );
}

export default Seeker;
