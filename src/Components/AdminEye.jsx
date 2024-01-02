import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CartList.css';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

function AdminEye() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/carts')
      .then((response) => {
        setCarts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/carts/${id}`)
      .then(() => {
        // Update the UI by filtering out the deleted cart
        setCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting cart:', error);
      });
  };

  return (
    <div>
    <div><AdminNavbar/></div>
      <h2>Eyeglass List</h2>
    
      <Link to="/add-frame">Add Frame</Link> {/* Use Link to navigate to the AddFrame page */}
      
      <div className="grid-container">
        {carts.map((cart) => (
          <div key={cart.id} className="grid-item">
            <h3>{cart.title}</h3>
            <img src={cart.image} alt={cart.title} />
            <p>Price: ${cart.price}</p>
            <div className="button-container">
              <Link to={`/edit/${cart.id}`}>
                <button className="edit-button">Edit</button>
              </Link>
              <button className="delete-button" onClick={() => handleDelete(cart.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminEye;
