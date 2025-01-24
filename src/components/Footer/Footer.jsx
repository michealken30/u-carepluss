import React from "react";
import "./Footer.css";
import logo1 from "../../assets/Vectorlogo1.png";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logoFlex">
            <img className="logo-img" src={logo1} alt="" />
            <span>Aplha furniture</span>
          </div>
          <span>
            Alpha Furniture, your go-to destination for stylish and affordable
            home furnishings. Our curated selection offers modern designs and
            timeless classics to transform any space. Enjoy seamless shopping
            with fast delivery and exceptional customer service.
          </span>
          <div className="footer-social-icons">
            <FaTwitterSquare />
            <FaInstagram />
            <FaSquareFacebook />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Shop</h2>
          <ul>
            <li>Funiture</li>
            <li>Kitchen & Dinner</li>
            <li>Best Seller</li>
            <li>Technology & Bar</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>Support</h2>
          <ul>
            <li>Return Portal</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>Connect</h2>
          <ul>
            <li>Blogs</li>
            <li>Account/Login</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Aplha furniture - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
