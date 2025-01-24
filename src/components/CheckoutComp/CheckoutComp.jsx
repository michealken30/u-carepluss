import React from "react";
import "./CheckoutComp.css";
import LeftCheckout from "../LeftSectionCheckout/LeftCheckout";
import RightCheckout from "../RightSessionCheckout/RightCheckout";

const CheckoutComp = () => {
  return (
    <div className="app">
      <div className="two-section">
        <LeftCheckout />
        <RightCheckout />
      </div>
    </div>
  );
};

export default CheckoutComp;
