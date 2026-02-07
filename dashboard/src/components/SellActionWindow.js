import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindows.css";

const SellActionWindow = () => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [orders, setOrders] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const calculateHoldings = (orders) => {
    const holdings = {};

    orders.forEach(order => {
      if (!holdings[order.name]) {
        holdings[order.name] = { name: order.name, qty: 0, price: order.price };
      }

      if (order.mode === "BUY") {
        holdings[order.name].qty += order.qty;
      } else {
        holdings[order.name].qty -= order.qty;
      }
    });

    return Object.values(holdings).filter(stock => stock.qty > 0);
  };

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:5000/allOrders");
    setOrders(res.data);
    setHoldings(calculateHoldings(res.data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStockSelect = (e) => {
    const stock = holdings.find(h => h.name === e.target.value);
    setSelectedStock(stock);
    setStockQuantity(stock.qty);
    setStockPrice(stock.price);
  };

  const handleSellClick = async () => {
    if (!selectedStock) return alert("Select stock");

    await axios.post("http://localhost:5000/newOrder", {
      name: selectedStock.name,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "SELL"
    });

    await fetchOrders();
    closeSellWindow();
  };

  return (
    <div className="container">

      <h3>Select Stock</h3>

      <select onChange={handleStockSelect}>
        <option>Select Stock</option>
        {holdings.map((stock, i) => (
          <option key={i} value={stock.name}>
            {stock.name} (Qty: {stock.qty})
          </option>
        ))}
      </select>

      {selectedStock && (
        <>
          <p>Available Qty: {selectedStock.qty}</p>

          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />

          <input
            type="number"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
          />

          <p>Total ₹ {(stockQuantity * stockPrice).toFixed(2)}</p>

          <button onClick={handleSellClick}>Sell</button>
          <button onClick={closeSellWindow}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default SellActionWindow;
