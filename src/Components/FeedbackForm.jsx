import React, { useState } from 'react';
import './FeedbackForm.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the feedback in local storage
    localStorage.setItem('feedback', JSON.stringify(feedback));

    // Handle the submission logic here (e.g., send feedback to the server)
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          rows="4"
        />
        {/* Use a regular button for form submission */}
        <Link to="/home">
        <button type="submit">Submit Feedback</button></Link>
      </form>
      {/* Use Link for navigation */}
      <Link to="/home">Go to Home</Link>
      
    </div>
  );
};

export default FeedbackForm;
