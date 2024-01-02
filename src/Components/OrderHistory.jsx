import React from "react";

function OrderHistory() {
  const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

  return (
    <div>
    <h2>YOUR ORDER WILL BE DELEVIERED WITHIN TWO WEEKS.</h2>
      <h2>Your Order History</h2>
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
                <strong>{item.title}</strong> - Quantity: {item.quantity}, Price: {item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
