import React, { useState } from 'react';
import '../utils/security_question.css';
import { useNavigate } from 'react-router-dom';

const SecurityQuestion = () => {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace this with actual backend verification
    if (answer.trim() === '') {
      alert('Please enter your answer.');
      return;
    }

    // Simulated correct answer flow
    navigate('/reset_password');
  };

  return (
    <div className="container">
      <img src="../utils/images/pawsionate-logo.png" alt="Logo" className="logo" />

      <h1>
        Please answer your security
        <br />
        question to continue
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="security">Security Question</label>
        <input
          type="text"
          id="security"
          name="security"
          value="In what city were you born?"
          readOnly
        />

        <label htmlFor="answer">Answer</label>
        <input
          type="text"
          id="answer"
          name="answer"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />

        <button type="submit" className="next-btn">
          Next
        </button>
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate('/forgot_password')}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default SecurityQuestion;
