import React from 'react';
import AdminNavbar from './AdminNavbar';

const UserProfile = () => {
  // Fetch data from local storage
  
  const email = localStorage.getItem('email');
  const customizationData = JSON.parse(localStorage.getItem('customizationData'));
  const checkoutData = JSON.parse(localStorage.getItem('checkoutData'));
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory'));
  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));

  return (
    <div className="container">
    <div><AdminNavbar/></div>
      <h1>User Profile</h1>

      {/* Display user details */}
      <h2>User Details</h2>
      <p><strong>Email:</strong> {email}</p>
     

      {/* Display customization data */}
      {customizationData && (
        <div>
          <h2>Customization Data</h2>
          <p><strong>Brand Title:</strong> {customizationData.brandTitle}</p>
          <p><strong>Brand Name:</strong> {customizationData.brandName}</p>
          <p><strong>Colour:</strong> {customizationData.colour}</p>
          <p><strong>Material:</strong> {customizationData.material}</p>
          <p><strong>Frame Type:</strong> {customizationData.frameType}</p>
          <p><strong>Frame Size:</strong> {customizationData.frameSize}</p>
          <p><strong>Prescriptive Lens Type:</strong> {customizationData.prescriptiveLensType}</p>
        </div>
      )}

      {/* Display checkout data */}
      {checkoutData && (
        <div>
          <h2>Checkout Data</h2>
          <p><strong>First Name:</strong> {checkoutData.fname}</p>
          <p><strong>Last Name:</strong> {checkoutData.lname}</p>
          <p><strong>Gender:</strong> {checkoutData.gender}</p>
          <p><strong>Number:</strong> {checkoutData.number}</p>
          <p><strong>Email:</strong> {checkoutData.email}</p>
          <p><strong>Address Line 1:</strong> {checkoutData.address1}</p>
          <p><strong>Address Line 2:</strong> {checkoutData.address2}</p>
          <p><strong>PinCode:</strong> {checkoutData.pincode}</p>
          <p><strong>City/District:</strong> {checkoutData.district}</p>
          <p><strong>State:</strong> {checkoutData.state}</p>
        </div>
      )}

      {/* Display cart items */}
      {cartItems && (
        <div>
          <h2>Cart Items</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <p><strong>Title:</strong> {item.title}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> {item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display order history */}
      {orderHistory && (
        <div>
          <h2>Order History</h2>
          {orderHistory.map((order, index) => (
            <div key={index}>
              <h3>Order {index + 1}</h3>
              <p>
                <strong>Date:</strong> {order.timestamp}
              </p>
              <h4>Order Items:</h4>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    <p><strong>Title:</strong> {item.title}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Price:</strong> {item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Display shipping address */}
      {shippingAddress && (
        <div>
          <h2>Shipping Address</h2>
          <p><strong>First Name:</strong> {shippingAddress.fname}</p>
          <p><strong>Last Name:</strong> {shippingAddress.lname}</p>
          <p><strong>Gender:</strong> {shippingAddress.gender}</p>
          <p><strong>Number:</strong> {shippingAddress.number}</p>
          <p><strong>Email:</strong> {shippingAddress.email}</p>
          <p><strong>Address Line 1:</strong> {shippingAddress.address1}</p>
          <p><strong>Address Line 2:</strong> {shippingAddress.address2}</p>
          <p><strong>PinCode:</strong> {shippingAddress.pincode}</p>
          <p><strong>City/District:</strong> {shippingAddress.district}</p>
          <p><strong>State:</strong> {shippingAddress.state}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
