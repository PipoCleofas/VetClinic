import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Replace this logic with real backend API validation
    if (username && password) {
      // Simulated login success
      navigate('/landing_page');
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img src="/images/pawsionate-logo.png" alt="Pawsionate Hands Logo" className="main-logo" />
      </div>

      <div className="right-panel">
        <img src="/images/dog.webp" alt="Dog Emoji" className="dog-emoji" />

        <h1>Welcome Back!</h1>
        <p>Please enter your details</p>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <a href="/forgot_password" className="forgot">Forgot your password?</a>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
