// AdminFeedback.jsx

import React from 'react';
import AdminNavbar from './AdminNavbar';

const AdminFeedback = () => {
  // Fetch feedback data from local storage
  const feedback = localStorage.getItem('feedback') || ''; // Use getItem directly for strings

  return (
    
    <div className="feedback-display-container">
    <div><AdminNavbar/></div>
      <h2>Feedback Display</h2>
      <p>Your Feedback:</p>
      <p>{feedback}</p>
    </div>
  );
};

export default AdminFeedback;
