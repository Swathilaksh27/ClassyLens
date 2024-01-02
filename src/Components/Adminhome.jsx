// AdminHome.js

import React from 'react';

import AdminNavbar from './AdminNavbar';

const AdminHome = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://assets.website-files.com/5ae6eab61e42af074cd77589/5afe6f35e888f59fcc0b182f_eyebasic_frames_direct_review.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust as needed
  };
  return (
    <div style={backgroundStyle}>
      <AdminNavbar />
      
      {/* Your Admin Home content goes here */}
      
      {/* Add more content as needed */}
    </div>
  );
};

export default AdminHome;
