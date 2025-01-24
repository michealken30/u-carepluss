import React from "react";
import logo1 from "../../assets/Frame 3.png";
import { CiUser } from "react-icons/ci";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoFlex2">
        <img className="logo-img2" src={logo1} alt="" />
        <span>Aplha furniture</span>
      </div>
      <div>
        <CiUser />
      </div>
    </div>
  );
};

export default Navbar;
