import React, { useState, useRef } from "react";
import Header from "../components/Header";
import EmployerSidebar from "../components/EmployerSidebar";

const EmployerProfile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    companySize: "",
    address: "",
    hrEmail: "",
    phone: "",
    linkedin: "",
    description: "",
  });

  const [coverImage, setCoverImage] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);

  // --- HANDLERS ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCoverClick = () => coverInputRef.current.click();
  const handleProfileClick = () => profileInputRef.current.click();

  const handleFileChange = (event, setImageFunction) => {
    const file = event.target.files[0];
    if (file) {
      setImageFunction(URL.createObjectURL(file));
    }
  };

  // --- (Handles Validation) ---
  const handleSubmit = (e) => {
    e.preventDefault(); // Browser prevents this if fields are empty

    setIsLoading(true);

    // Simulate Backend API Call
    setTimeout(() => {
      console.log("PAYLOAD SENT TO DATABASE:", {
        ...formData,
        profileImage,
        coverImage,
      });

      alert("Profile Updated Successfully!");
      setIsLoading(false);
    }, 2000);
  };

  const adminUser = {
    name: "Admin User",
    role: "Company Profile",
    initial: "A",
    avatarColor: "bg-dark",
  };

  return (
    <div className="d-flex min-vh-100 bg-light">
      <EmployerSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: isCollapsed ? "80px" : "260px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Header title="Company Profile" user={adminUser} />

        <div className="p-4 mx-auto" style={{ maxWidth: "1200px" }}>
          <input
            type="file"
            ref={coverInputRef}
            onChange={(e) => handleFileChange(e, setCoverImage)}
            style={{ display: "none" }}
            accept="image/*"
          />
          <input
            type="file"
            ref={profileInputRef}
            onChange={(e) => handleFileChange(e, setProfileImage)}
            style={{ display: "none" }}
            accept="image/*"
          />

          {/* --- HERO SECTION--- */}
          <div className="position-relative mb-5">
            <div
              className="rounded-4 overflow-hidden position-relative shadow-sm group"
              style={{ height: "240px" }}
            >
              <div
                className="w-100 h-100"
                style={{
                  backgroundImage: `url('${coverImage || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
                }}
              ></div>
              <button
                onClick={handleCoverClick}
                className="btn btn-light btn-sm position-absolute top-0 end-0 m-4 rounded-pill px-3 fw-bold shadow-sm"
              >
                <i className="bi bi-camera-fill me-2"></i> Change Cover
              </button>
            </div>
            <div className="px-4" style={{ marginTop: "-70px" }}>
              <div className="d-flex align-items-end position-relative">
                <div
                  className="position-relative cursor-pointer"
                  onClick={handleProfileClick}
                  title="Change Profile Photo"
                >
                  <div className="bg-white p-1 rounded-4 shadow-md">
                    <div
                      className="bg-light rounded-4 d-flex align-items-center justify-content-center overflow-hidden"
                      style={{ width: "140px", height: "140px" }}
                    >
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Logo"
                          className="w-100 h-100 object-fit-cover"
                        />
                      ) : (
                        <i
                          className="bi bi-buildings-fill text-secondary"
                          style={{ fontSize: "3.5rem" }}
                        ></i>
                      )}
                    </div>
                  </div>
                  <div
                    className="position-absolute bottom-0 end-0 mb-2 me-2 bg-white rounded-circle shadow-sm border d-flex align-items-center justify-content-center"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <i
                      className="bi bi-pencil-fill text-dark"
                      style={{ fontSize: "0.8rem" }}
                    ></i>
                  </div>
                </div>
                <div className="ms-4 mb-2 text-dark">
                  <h2 className="fw-bold mb-0">
                    {formData.companyName || "Company Name"}
                  </h2>
                  <div className="d-flex align-items-center mt-1 text-secondary">
                    <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 me-2">
                      {formData.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- MAIN FORMS --- */}
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-lg-8">
                
                <div className="card border-0 shadow-sm rounded-4 mb-4 p-4">
                  <h6 className="fw-bold mb-3 text-dark">About Company</h6>
                  <textarea
                    className="form-control bg-light border-0"
                    rows="5"
                    placeholder="Describe your company..."
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="card border-0 shadow-sm rounded-4 mb-4 p-4">
                  <h6 className="fw-bold mb-3 text-dark">
                    Company Information
                  </h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small text-secondary fw-bold">
                        Company Name <span className="text-danger">*</span>
                      </label>
                      
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small text-secondary fw-bold">
                        Industry <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select bg-light border-0"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Industry</option>
                        <option>Information Technology</option>
                        <option>Finance</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small text-secondary fw-bold">
                        Website URL
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Company Website URL"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        pattern="https?://.+" 
                        title="Include http:// or https://"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small text-secondary fw-bold">
                        Company Size <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select bg-light border-0"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Size</option>
                        <option>10-50 Employees</option>
                        <option>50-200 Employees</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-secondary fw-bold">
                        Company Address <span className="text-danger">*</span>
                      </label>
                      
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Company Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center mb-4">
                  
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2 w-100 fw-bold rounded-pill shadow-sm"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Saving...
                      </span>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 mb-4 p-4">
                  <h6 className="fw-bold mb-3 text-dark">Contact Details</h6>
                  <div className="mb-3">
                    <label className="form-label small text-secondary fw-bold">
                      HR Email <span className="text-danger">*</span>
                    </label>
                    {/* REQUIRED */}
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="HR Email Address"
                      name="hrEmail"
                      value={formData.hrEmail}
                      onChange={handleChange}
                      required
                      pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                      title="Please enter a valid email address."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small text-secondary fw-bold">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}" 
                      title="Please enter a valid 10-digit phone number."
                    />
                  </div>
                </div>

                {/* Social Profiles*/}
                <div className="card border-0 shadow-sm rounded-4 p-4">
                  <h6 className="fw-bold mb-3 text-dark">Social Profiles</h6>
                  <div className="mb-3">
                    <label className="form-label small text-secondary fw-bold">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Company LinkedIn URL"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      pattern="https?://.+" 
                      title="Include http:// or https://"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;
