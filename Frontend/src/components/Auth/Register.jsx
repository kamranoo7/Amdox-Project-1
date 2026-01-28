import { useState } from "react";
import { Link } from "react-router-dom";
import authIllustration from "../../assets/Sign-up.svg";

function Register() {
  const [role, setRole] = useState("seeker");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      role: role === "seeker" ? "Candidate" : "Employer",
    };

    try {
      const res = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.msg);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light p-3 bg-gradient-primary">
      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden w-100"
        style={{ maxWidth: "1000px", minHeight: "600px" }}
      >
        <div className="row g-0 h-100">
          <div
            className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-5"
            style={{ backgroundColor: "#f8f9fa", minHeight: "600px" }}
          >
            <div className="text-center">
              <img
                src={authIllustration}
                alt="Register Illustration"
                // className="img-fluid mb-4"
                className="img-fluid auth-illustration"
                style={{ maxHeight: "400px" }}
              />
              <h4 className="fw-bold text-dark">Join Our Community</h4>
              <p className="text-secondary medium px-3">
                Create an account to explore thousands of job opportunities and
                hire top talent.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 bg-white d-flex align-items-center justify-content-center p-4 p-md-5"
            style={{ minHeight: "600px" }} // Ensures right side matches left side height
          >
            <div className="w-100" style={{ maxWidth: "420px" }}>
              <div className="mb-4 text-start">
                <h3 className="fw-bold text-dark">Get Started🚀</h3>
                <p className="text-secondary medium">
                  Create an account to find your dream job or hire top talent.
                </p>
              </div>

              <div className="d-flex gap-2 mb-4">
                <button
                  type="button"
                  className={`btn btn-sm w-50 py-2 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 ${
                    role === "seeker" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setRole("seeker")}
                >
                  <i className="bi bi-person-fill"></i>
                  Job Seeker
                </button>
                <button
                  type="button"
                  className={`btn btn-sm w-50 py-2 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 ${
                    role === "employer" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setRole("employer")}
                >
                  <i className="bi bi-briefcase-fill"></i>
                  Employer
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold mb-1 text-dark small">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    pattern="[A-Za-z ]{3,}"
                    title="Please enter at least 3 letters."
                    className="form-control py-2 shadow-none border-light-subtle"
                    placeholder="Enter Full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold mb-1 text-dark small">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control py-2 shadow-none border-light-subtle"
                    placeholder="Enter Email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                    title="Please enter a valid email address (e.g., user@example.com)."
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold mb-1 text-dark small">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      name="pass"
                      value={formData.pass}
                      onChange={handleChange}
                      required
                      pattern=".{6,}"
                      title="Password must be at least 6 characters."
                      type={showPassword ? "text" : "password"}
                      className="form-control py-2 shadow-none border-end-0 border-light-subtle"
                      placeholder="Enter Password"
                    />
                    <span
                      className="input-group-text bg-white border-start-0 border-light-subtle text-secondary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye-slash" : "bi-eye"
                        }`}
                      ></i>
                    </span>
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input shadow-none"
                    type="checkbox"
                    id="terms"
                  />
                  <label
                    className="form-check-label medium text-secondary"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <span className="text-primary fw-bold">
                      Terms & Service
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 mb-3 fw-bold shadow-sm"
                >
                  Sign up as {role === "seeker" ? "Candidate" : "Employer"}
                </button>

                <div className="d-flex align-items-center my-3">
                  <hr className="flex-grow-1 text-muted opacity-25" />
                  <span
                    className="mx-3 text-secondary small fw-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    OR
                  </span>
                  <hr className="flex-grow-1 text-muted opacity-25" />
                </div>

                {/* --- SOCIAL ICONS --- */}
                <div className="d-flex justify-content-center gap-3">
                  {/* Google */}
                  <button
                    type="button"
                    className="btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow-sm border-0 transition-all social-btn social-google"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#fff",
                    }}
                    aria-label="Sign in with Google"
                  >
                    <i className="bi bi-google text-danger fs-5"></i>
                  </button>

                  {/* LinkedIn */}
                  <button
                    type="button"
                    className="btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow-sm border-0 transition-all social-btn social-linkedin"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#fff",
                    }}
                    aria-label="Sign in with LinkedIn"
                  >
                    <i className="bi bi-linkedin text-primary fs-5"></i>
                  </button>

                  {/* GitHub */}
                  <button
                    type="button"
                    className="btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow-sm border-0 transition-all social-btn social-github"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#fff",
                    }}
                    aria-label="Sign in with GitHub"
                  >
                    <i className="bi bi-github text-dark fs-5"></i>
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="medium text-secondary mb-0">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="text-primary fw-bold text-decoration-none"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
