import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminCheckout() {
  const [checkoutData, setCheckoutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/checkout/all');
        setCheckoutData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Checkout Data</h1>
      <ul>
        {checkoutData.map((checkout) => (
          <li key={checkout.id}>
            <strong>ID:</strong> {checkout.id}
            <br />
            <strong>First Name:</strong> {checkout.fname}
            <br />
            <strong>Last Name:</strong> {checkout.lname}
            <br />
            <strong>Gender:</strong> {checkout.gender}
            <br />
            <strong>Email:</strong> {checkout.email}
            <br />
            <strong>Phone Number:</strong> {checkout.number}
            <br />
            <strong>Address 1:</strong> {checkout.address1}
            <br />
            <strong>Address 2:</strong> {checkout.address2}
            <br />
            <strong>Pincode:</strong> {checkout.pincode}
            <br />
            <strong>District:</strong> {checkout.district}
            <br />
            <strong>State:</strong> {checkout.state}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminCheckout;
