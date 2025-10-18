import React from "react";
import { useState } from "react";

import "./index.css"; // optional for custom styles
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Toggle Password Visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login Successful:", formData);
      alert("Login Successful ✅");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "12px" }}
      >
        <div className="text-center mb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            alt="Logo"
            width="70"
            className="mb-3"
          />
          <h4 className="fw-bold">Welcome Back</h4>
          <p className="text-muted">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email address</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaEnvelope color="#6c757d" />
              </span>
              <input
                type="email"
                name="email"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaLock color="#6c757d" />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              {/* 👁️ Toggle Eye Icon */}
              <span
                className="input-group-text bg-white"
                style={{ cursor: "pointer" }}
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaEyeSlash color="#6c757d" />
                ) : (
                  <FaEye color="#6c757d" />
                )}
              </span>

              <div className="invalid-feedback">{errors.password}</div>
            </div>
          </div>

          {/* Remember & Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="text-decoration-none small text-primary">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Login
          </button>

          {/* Divider */}
          <div className="text-center mt-3 text-muted small">or sign in with</div>

          {/* Social Buttons */}
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button type="button" className="btn btn-outline-dark w-50">
              Google
            </button>
            <button type="button" className="btn btn-outline-dark w-50">
              GitHub
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="small text-muted">
              Don’t have an account?{" "}
              <a href="#" className="text-decoration-none fw-semibold">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
