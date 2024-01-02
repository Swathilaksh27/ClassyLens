import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

function EditCart() {
  const [cart, setCart] = useState({
    id: '',
    image: '',
    quantity: 0,
    title: '',
    price: 0,
    frameType: '',
    frameSize: '',
    brands: '',
    reviews: 0,
    ratings: '',
    bestSeller: false,
  });

  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/carts/getcart/${id}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, [id]);

  const handleSave = () => {
    axios.put(`http://localhost:8080/carts/${id}`, cart)  // Use PUT instead of POST
      .then(() => {
        nav('/Admineye');
      })
      .catch((error) => {
        console.error('Error updating cart:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle checkbox inputs separately
    setCart({
      ...cart,
      [name]: type === 'checkbox' ? checked : value,
    });
  };



  return (
    <div className="edit-cart">
    <div><AdminNavbar/></div>
      <h2>Edit Cart</h2>
      <div className="edit-form">
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={cart.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={cart.image} onChange={handleInputChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={cart.quantity} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={cart.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Frame Type:</label>
          <input type="text" name="frameType" value={cart.frameType} onChange={handleInputChange} />
        </div>
        <div>
          <label>Frame Size:</label>
          <input type="text" name="frameSize" value={cart.frameSize} onChange={handleInputChange} />
        </div>
        <div>
          <label>Brands:</label>
          <input type="text" name="brands" value={cart.brands} onChange={handleInputChange} />
        </div>
        <div>
          <label>Reviews:</label>
          <input type="number" name="reviews" value={cart.reviews} onChange={handleInputChange} />
        </div>
        <div>
          <label>Ratings:</label>
          <input type="text" name="ratings" value={cart.ratings} onChange={handleInputChange} />
        </div>
        <div>
          <label>Best Seller:</label>
          <input type="checkbox" name="bestSeller" checked={cart.bestSeller} onChange={handleInputChange} />
        </div>
        <div>
        
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditCart;
