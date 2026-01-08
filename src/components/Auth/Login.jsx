import { useState } from "react";
import { Link } from "react-router-dom";
import authIllustration from "../../assets/Login.svg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light p-3">
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

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold mb-1 text-dark small">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control py-2 shadow-none border-light-subtle"
                    placeholder="Enter Email Address"
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
                    />
                    <span
                      className="input-group-text bg-white border-start-0 border-light-subtle text-secondary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye" : "bi-eye-slash"
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
