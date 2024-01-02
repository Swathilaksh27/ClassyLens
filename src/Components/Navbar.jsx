// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import TemporaryDrawer from './TemporaryDrawer';
import { Link } from 'react-router-dom';
 // Import the TemporaryDrawer component

function Navbar() {
  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
  };

  return (
    <div>
      <nav className="navbar">
      
        <div className="navbar-container">
        <TemporaryDrawer />
          <h1 className="navbar-logo">CLASSY LENS</h1>
          <Link to="/home">
              <div  className="navbar-link">
                Home
              </div>
              </Link>
            
            <Link to="/about">
              <div className="navbar-link">
                About
              </div>
              </Link>
            

            
            
            {/* Add the TemporaryDrawer component here */}
            
         
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
