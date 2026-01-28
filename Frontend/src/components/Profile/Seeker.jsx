import React, { useState } from "react";

function Seeker() {
  const [formData, setFormData] = useState({
    fullName: "",
    headline: "",
    location: "",
    email: "",
    phone: "",
    portfolio: "",
    github: "",
    linkedin: "",
    twitter: "",
  });

  const [resumeName, setResumeName] = useState("");

  // Loading States
  const [loadingPersonal, setLoadingPersonal] = useState(false);
  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingSocial, setLoadingSocial] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) setResumeName(file.name);
  };

  // --- SAVE HANDLERS ---
  const savePersonal = (e) => {
    e.preventDefault();
    setLoadingPersonal(true);
    setTimeout(() => {
      setLoadingPersonal(false);
      alert("Personal Details Saved!");
    }, 1000);
  };

  const saveContact = (e) => {
    e.preventDefault();
    setLoadingContact(true);
    setTimeout(() => {
      setLoadingContact(false);
      alert("Contact Details Saved!");
    }, 1000);
  };

  const saveSocial = (e) => {
    e.preventDefault();
    setLoadingSocial(true);
    setTimeout(() => {
      setLoadingSocial(false);
      alert("Social Profiles Saved!");
    }, 1000);
  };

  return (
    <div>
      {/* --- 1. PERSONAL DETAILS --- */}
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <h5 className="fw-bold mb-4 text-dark">Personal Details</h5>

        <form onSubmit={savePersonal}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Full Name
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-person text-muted"></i>
              </span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Professional Headline
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-briefcase text-muted"></i>
              </span>
              <input
                type="text"
                name="headline"
                value={formData.headline}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Your professional title"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold text-secondary">
              Location
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-geo-alt text-muted"></i>
              </span>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="City, Country"
                required
              />
            </div>
          </div>

        
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm"
            disabled={loadingPersonal}
            style={{ transition: "all 0.3s ease" }}
          >
            {loadingPersonal ? (
              <span>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Saving...
              </span>
            ) : (
              <span>
                Save Personal Details
              </span>
            )}
          </button>
        </form>
      </div>

      {/* --- 2. CONTACT DETAILS --- */}
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <h5 className="fw-bold mb-4 text-dark">Contact Details</h5>

        <form onSubmit={saveContact}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Email Address
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-envelope text-muted"></i>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Phone Number
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-telephone text-muted"></i>
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold text-secondary">
              Portfolio URL
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-link-45deg text-muted"></i>
              </span>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Portfolio URL"
              />
            </div>
          </div>

          
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm"
            disabled={loadingContact}
            style={{ transition: "all 0.3s ease" }}
          >
            {loadingContact ? (
              <span>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Saving...
              </span>
            ) : (
              <span>
                Save Contact Details
              </span>
            )}
          </button>
        </form>
      </div>

      {/* --- 3. SOCIAL PROFILES --- */}
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <h5 className="fw-bold mb-4 text-dark">Social Profiles</h5>

        <form onSubmit={saveSocial}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              GitHub Profile
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-github text-muted"></i>
              </span>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Github Profile URL"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              LinkedIn Profile
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-linkedin text-muted"></i>
              </span>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="form-control bg-light border-0 shadow-none"
                placeholder="Linkedin Profile URL "
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm"
            disabled={loadingSocial}
            style={{ transition: "all 0.3s ease" }}
          >
            {loadingSocial ? (
              <span>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Saving...
              </span>
            ) : (
              <span>
                Save Social Profiles
              </span>
            )}
          </button>
        </form>
      </div>

      {/* --- 4. RESUME UPLOAD --- */}
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <h5 className="fw-bold mb-4 text-dark">Resume / CV</h5>

        <div
          className="p-4 text-center border rounded-3 bg-light position-relative hover-shadow transition-all"
          style={{
            borderStyle: "dashed",
            borderColor: resumeName ? "#0d6efd" : "#cbd5e1", 
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#f1f5f9";
            if (!resumeName) e.currentTarget.style.borderColor = "#0d6efd";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#f8fafc";
            if (!resumeName) e.currentTarget.style.borderColor = "#cbd5e1";
          }}
        >
          {resumeName ? (
            <div>
              <i className="bi bi-file-earmark-check-fill fs-1 text-primary mb-2"></i>
              <p className="small fw-bold text-dark mb-1">{resumeName}</p>
              <p className="extra-small text-muted mb-0">Ready to upload</p>
            </div>
          ) : (
            <div>
              <i className="bi bi-cloud-arrow-up-fill fs-1 text-secondary opacity-50 mb-2"></i>
              <p className="small fw-bold text-dark mb-1">
                Click to upload resume
              </p>
              <p className="extra-small text-muted mb-0">
                PDF or DOCX (Max 5MB)
              </p>
            </div>
          )}

          <input
            type="file"
            className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
          />
        </div>

        <button
          className="btn btn-primary w-100 rounded-pill mt-3 py-2 fw-bold shadow-sm"
          onClick={() => alert("Resume Uploaded!")}
        >
          Upload Resume
        </button>
      </div>
    </div>
  );
}

export default Seeker;
