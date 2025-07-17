import React, { useEffect } from 'react';
import '../utils/style.css';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-page">
      {/* Logo */}
      <img className="logo" src="../utils/images/pawsionate-logo.png" alt="Pawsionate Hands Logo" />

      {/* Title */}
      <h1>Pawsionate Hands</h1>

      {/* Spinner */}
      <div className="spinner"></div>

      {/* Footer */}
      <footer>&copy; 2025 · Capstone</footer>
    </div>
  );
};

export default LoadingPage;
