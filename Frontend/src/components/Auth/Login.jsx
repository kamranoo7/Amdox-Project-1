import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authIllustration from "../../assets/Login.svg";

function Login() {
  const navigate = useNavigate();

  // --- STATE ---
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // --- TOAST STATE ---
  const [showToast, setShowToast] = useState(false); // Initially False
  const [toastMessage, setToastMessage] = useState("");

  // --- HANDLER ---
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");

   try {
      // 1. Call the Backend API
      let response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass: password }), // Note: backend expects 'pass'
      });

      let data = await response.json();

      if (response.ok) {
        // 2. Login Success
        
        // Save Token and Role to LocalStorage (Browser Memory)
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);

        setToastMessage("Login successful! Redirecting...");
        setShowToast(true);

        // 3. Redirect based on Role after a short delay
        setTimeout(() => {
          setShowToast(false);
          
          if (data.role === "Employer") {
            navigate("/employer-dashboard");
          } else {
            // Default to Seeker dashboard
            navigate("/dashboard");
          }
        }, 2000);

      } else {
        // 4. Login Failed (Wrong password or User not found)
        setError(data.msg || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please check your server connection.");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light p-3 bg-gradient-primary position-relative">
      
      {showToast && (
        <div
          className="toast-container position-fixed top-0 end-0 p-3"
          style={{ zIndex: 1060 }}
        >
          
          <div className="toast show toast-slide-in align-items-center text-white bg-success border-0 shadow-lg">
            <div className="d-flex">
              <div className="toast-body fw-bold">
                <i className="bi bi-check-circle-fill me-2"></i>
                {toastMessage}
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      )}

      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden w-100"
        style={{ maxWidth: "1000px", minHeight: "600px" }}
      >
        <div className="row g-0">
          <div
            className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-5"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="text-center">
              <img
                src={authIllustration}
                alt="Login Illustration"
                className="img-fluid mb-4"
                style={{ maxHeight: "350px" }}
              />
              <h4 className="fw-bold text-dark">Find Your Dream Job</h4>
              <p className="text-secondary medium px-3">
                Connect with top employers and take the next step in your
                career.
              </p>
            </div>
          </div>

          <div className="col-md-6 bg-white d-flex align-items-center justify-content-center p-4 p-md-5">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <div className="mb-4 text-start">
                <h2 className="fw-bold text-dark">Welcome Back!👋</h2>
                <p className="text-secondary medium">
                  Please sign in to access your dashboard and latest
                  opportunities.
                </p>
              </div>

              {/* Error Message Display */}
              {error && (
                <div className="alert alert-danger py-2 small border-0 shadow-sm mb-3">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold mb-1 text-dark small">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control py-2 shadow-none border-light-subtle"
                    placeholder="Enter Email Address"
                    required
                    pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                    title="Please enter a valid email address (e.g., user@example.com)."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold mb-1 text-dark small">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control py-2 shadow-none border-end-0 border-light-subtle"
                      placeholder="Enter Password"
                      required
                      pattern=".{6,}"
                      title="Password must be at least 6 characters."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input shadow-none"
                      type="checkbox"
                      id="remember"
                    />
                    <label
                      className="form-check-label medium text-secondary"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="#"
                    className="text-primary medium text-decoration-none fw-bold"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 mb-3 fw-bold shadow-sm"
                >
                  Sign in
                </button>

                <div className="d-flex align-items-center my-3">
                  <hr className="flex-grow-1 text-muted opacity-25" />
                  <span
                    className="mx-3 text-secondary small fw-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    or
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
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary fw-bold text-decoration-none"
                  >
                    Sign up
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

export default Login;
