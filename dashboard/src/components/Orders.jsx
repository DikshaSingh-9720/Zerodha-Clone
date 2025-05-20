import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get("https://zerodha-clone-backend-i5le.onrender.com/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => console.error("Error fetching orders:", err));
  };

  const handleDelete = (id) => {
    axios.delete(`https://zerodha-clone-backend-i5le.onrender.com/orders/${id}`)
      .then(() => {
        setAllOrders((prevOrders) => prevOrders.filter(order => order._id !== id));
      })
      .catch((err) => console.error("Error deleting order:", err));
  };

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>
      {allOrders.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock) => (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.mode}</td>
                  <td>
                  <button className="delete-btn" onClick={() => handleDelete(stock._id)}>
  Delete
</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get Started</Link>
        </div>
      )}
    </div>
  );
};
