import React, { useState, useContext} from "react"; 
import axios from "axios";
import { toast } from 'react-toastify';

import {GeneralContext} from "./GeneralContext.jsx"; 

import "./BuyActionWindow.css";

export const BuyActionWindow = ({ uid,mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3000/newOrder", {
        name: uid,
        qty: stockQuantity, 
        price: stockPrice, 
        mode:"BUY" ,
      });
      toast.success('Order Bought successfully!');   
        closeBuyWindow(); 
      } 
     catch (error) {
        toast.error('Something went wrong!');
      console.error("Error while placing order:", error);
    }
  };

  const handleSellClick = async () => {
    try {
      await axios.post("http://localhost:3000/newOrder", {
        name: uid,
        qty: stockQuantity, 
        price: stockPrice, 
        mode:"SELL" ,
      });   
      toast.success('Order Sold successfully!');       
        closeBuyWindow(); 
      } 
     catch (error) {
        toast.error('Something went wrong!');
      console.error("Error while selling order:", error);
    }
  };  

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
              min="1" 
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
              min="0" 
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
        <button
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={mode === 'BUY'? handleBuyClick : handleSellClick }
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

