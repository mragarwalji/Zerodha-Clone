import React, { useState, useEffect } from "react";
import axios from "axios";

// Correct total calculation
const calculateTotals = (orders) => {
  let totalQty = 0;
  let totalValue = 0;

  orders.forEach(order => {
    if (order.mode === "BUY") {
      totalQty += order.qty;
      totalValue += order.qty * order.price;
    } else {
      totalQty -= order.qty;
      totalValue -= order.qty * order.price;
    }
  });

  return { totalQty, totalValue };
};

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  // calculate totals using function
  const totals = calculateTotals(allOrders);

  return (
    <>
      <h3 className="title">Orders</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price ? stock.price.toFixed(2) : "-"}</td>
                <td>{stock.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="Total-Stat">
        <h4 className="title">Statistics</h4>

        <div className="row">
          <div className="col">
            <p>Total Orders</p>
            <h5>{allOrders.length}</h5>
          </div>

          <div className="col">
            <p>Total Qty.</p>
            <h5>{totals.totalQty}</h5>
          </div>

          <div className="col">
            <p>Total Value</p>
            <h5>₹ {totals.totalValue.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
