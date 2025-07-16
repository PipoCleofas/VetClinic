import React, { useState } from 'react';
import './reset_password.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your own password validation here
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    // Optional: Add regex-based validation for complexity

    // Simulated password reset
    alert("Password reset successful!");
    navigate('/login');
  };

  return (
    <div className="reset-container reset-body">
      <img src="/images/pawsionate-logo.png" alt="Logo" className="logo" />

      <h1>Reset password.</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirm">Confirm Password</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <div className="requirements">
          <p>Minimum length: 8–12 characters</p>
          <ul>
            <li>At least one uppercase letter (A–Z)</li>
            <li>At least one lowercase letter (a–z)</li>
            <li>At least one number (0–9)</li>
            <li>At least one special character (e.g., ! @ # $ % ^ & *)</li>
          </ul>
          <p>No spaces allowed</p>
        </div>

        <button type="submit" className="reset-btn">Reset</button>
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate('/security_question')}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
