// Payment.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Payment.css"
// ... (import statements)

function Payment() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    number: "",
    email: "",
    address1: "",
    address2: "",
    pincode: "",
    district: "",
    state: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API to save the payment details
      const response = await axios.post("http://localhost:8080/auth/checkout/create", formData);
      console.log("Checkout data saved:", response.data);

      // Retrieve cart items from local storage
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Save the order details to local storage for order history
      const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
      const order = {
        orderId: response.data.paymentId, // Assuming paymentId is unique for each order
        timestamp: new Date().toISOString(),
        items: cartItems,
        // Add other details if needed
        shippingAddress: formData,
      };
      orderHistory.push(order);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
      localStorage.setItem("shippingAddress", JSON.stringify(formData));
      // Clear the cart after the order is placed
      localStorage.removeItem("cartItems");

      // Redirect to the home page or any other page
      navigate("/card");
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error creating payment:", error);
    }
  };

  

  return (
    <>
      <div className="payment-container">
        <div className="address">
          <h1 className="ships">Shipping Address</h1>
          <form className="shipping-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              className="input"
              required
              value={formData.fname}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="input"
              required
              value={formData.lname}
              onChange={handleChange}
            />

            <div id="radio">
              <label>Gender</label>
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                required
                onChange={handleChange}
              />
              <label htmlFor="Male">Male</label>
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female"
                required
                onChange={handleChange}
              />
              <label htmlFor="Female">Female</label>
            </div>

            <input
              className="input"
              type="number"
              name="number"
              placeholder="Number"
              required
              value={formData.number}
              onChange={handleChange}
            />

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <hr />

            <input
              className="input"
              type="text"
              name="address1"
              placeholder="Address Line 1"
              required
              value={formData.address1}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="address2"
              placeholder="Address Line 2"
              required
              value={formData.address2}
              onChange={handleChange}
            />

            <br />

            <input
              className="input"
              type="text"
              name="pincode"
              placeholder="PinCode"
              required
              value={formData.pincode}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="district"
              placeholder="City/District"
              required
              value={formData.district}
              onChange={handleChange}
            />

            <br />

            <input
              className="input"
              type="text"
              name="state"
              placeholder="State"
              required
              value={formData.state}
              onChange={handleChange}
            />

            <br />

            <button className="shipping-btn" type="submit">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Payment;
