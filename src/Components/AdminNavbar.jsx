import React from 'react';
import SideBar from './Sidebar';
import { Link } from 'react-router-dom';
const handleClick = () => {
  // Add logic to handle the button click, e.g., navigation to the home page
  console.log('Home button clicked!');
};
const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: 'transparent', // Green color, you can change it
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};
const AdminNavbar = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
        <div className="navbar-container">
          <div><SideBar /></div>
          <Link to="/admin-home">
          <button onClick={handleClick} style={buttonStyle}>
      Home
    </button>
    </Link>
          <div className="navbar-content" style={{ color: 'white', fontSize: '24px' }}>
            {/* Adjust the fontSize value based on your preference */}
            <p style={{ fontSize:'24px' ,color: 'white'}}>Welcome, Admin</p>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
