import React from "react";
import Cart from "../components/CartPage/Cart";
import "./cartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="app">
      <p className="product-style media-p">
        <Link to="/" className="home-color">
          Home
        </Link>
        <span class="health-style"> &gt;</span> Furniture
        <span class="health-style"> &gt;</span> Sofa
        <span className="health-style remove-media"> &gt;</span> LuxeComfort
        Sectional Sofa
        <span class="health-style"> &gt;</span> Cart
      </p>
      <Cart />
    </div>
  );
};

export default CartPage;
