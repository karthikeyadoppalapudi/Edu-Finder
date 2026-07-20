import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-root">
      <div className="forgot-card">
        <Link to="/login" className="back-link">
          ← Back to sign in
        </Link>

        <h1>Reset your password</h1>
        <p className="forgot-subtitle">
          Enter your email and we’ll send you a link to reset your password
        </p>

        <div className="forgot-field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <button className="forgot-btn">Send reset link</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
