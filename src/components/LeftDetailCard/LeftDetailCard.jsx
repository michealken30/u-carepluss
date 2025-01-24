import React from "react";
import "./LeftDetailCard.css";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

const LeftDetailCard = ({ item }) => {
  return (
    <div>
      <div>
        <div>
          <img
            className="full-width"
            src={`${API_BASE_URI}/images/` + item.image}
            alt=""
          />
        </div>

        <div className="img-flex">
          <img
            className="full-width"
            src={`${API_BASE_URI}/images/` + item.image}
            alt=""
          />
          <img
            className="full-width"
            src={`${API_BASE_URI}/images/` + item.image}
            alt=""
          />
          <img
            className="full-width"
            src={`${API_BASE_URI}/images/` + item.image}
            alt=""
          />
          <img
            className="full-width"
            src={`${API_BASE_URI}/images/` + item.image}
            alt=""
          />
          <img
            className="full-width"
            src={`${API_BASE_URI}/images/` + item.image}
            alt=""
          />
        </div>
        <p className="details">{item.description}</p>
        <p className="details">Delivery and assembly prices not included.</p>
        <p className="details">Article number</p>
        <button className="btn">#123456789</button>
      </div>
    </div>
  );
};

export default LeftDetailCard;
