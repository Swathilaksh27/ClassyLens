import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./AdminEye.css"

function CartList() {
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

  return (
    <div>
      
      <ul className="cart-list">
        {carts.map((cart) => (
          <li className="cart-item" key={cart.id}>
            <h3>{cart.title}</h3>
            <Link to={`/carddetails/${cart.id}`}>
              {/* Ensure you are rendering the correct property for the image URL */}
              <img src={cart.image} alt="" />
            </Link>
            <h2>Price: ${cart.price}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
