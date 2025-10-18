import React, { useState } from "react";
import "./index.css";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
} from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ Toggle Password Visibility
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Name Validation
    if (!formData.name) {
      validationErrors.name = "Name is required";
    }

    // Email Validation
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Enter a valid email address";
    }

    // Password Validation
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    // ✅ If no errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("Signup Successful:", formData);
      alert("Signup Successful ✅");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        {/* LEFT SIDE */}
        <div className="col-md-6 mb-4">
          <h1 className="fw-bold">
            BEST UX/UI FASHION ECOMMERCE DASHBOARD & ADMIN PANEL
          </h1>
          <p style={{ color: "gray", fontSize: "18px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>

          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{ fontSize: "18px", textTransform: "none", mt: 2 }}
          >
            Go to Home
          </Button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
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
              <h4 className="fw-bold">Create Account</h4>
              <p className="text-muted">Please sign up to continue</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <FaUser color="#6c757d" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-3">
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

              {/* Confirm Password Field */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <FaLock color="#6c757d" />
                  </span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <span
                    className="input-group-text bg-white"
                    style={{ cursor: "pointer" }}
                    onClick={toggleConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash color="#6c757d" />
                    ) : (
                      <FaEye color="#6c757d" />
                    )}
                  </span>
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                </div>
              </div>

              {/* Remember me */}
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
              <button
                type="submit"
                className="btn btn-primary w-100 fw-semibold"
              >
                Sign Up
              </button>

              {/* Divider */}
              <div className="text-center mt-3 text-muted small">
                or sign up with
              </div>

              {/* Social Buttons */}
              <div className="d-flex justify-content-center gap-2 mt-3">
                <button type="button" className="btn btn-outline-dark w-50">
                  Google
                </button>
                <button type="button" className="btn btn-outline-dark w-50">
                  GitHub
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center mt-4">
                <p className="small text-muted">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none fw-semibold text-primary"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
