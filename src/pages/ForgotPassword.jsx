import React, { useState } from 'react';
import '../utils/forgot-password.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add validation with backend/database here
    // Example:
    // axios.post('/api/validate-user', { username, name })
    //   .then(res => navigate('/security_question'))
    //   .catch(err => alert("Invalid credentials"));

    console.log('Submitted:', { username, name });
    navigate('/security_question');
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-body">
      <div className="forgot-container">
        <img src="../utils/images/pawsionate-logo.png" alt="Logo" className="logo" />
        <h1>Forgot password?</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button type="submit" className="next-btn">Next</button>
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
