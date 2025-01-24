import React, { useContext, useState } from "react";
import "./DeliveryInfo.css";
import { StoreContext } from "../../Context/StoreContext";

const DeliveryInfo = () => {
  const { data, setData, setDeliveryAddress } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const updateInfo = (e) => {
    e.preventDefault();
    setDeliveryAddress(false);
  };

  const closePopup = () => {
    setDeliveryAddress(false);
  };

  return (
    <div className="delivery-popup">
      <form onSubmit={updateInfo} className="place-order">
        <div className="place-order-left">
          <div className="info-popup-title">
            <p className="title">Delivery Information</p>
            <p className="pop-off" onClick={closePopup}>
              &times;
            </p>
          </div>

          <div className="multi-fields">
            <input
              required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First name"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="text"
            placeholder="Email address"
          />
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
          />
          <div className="multi-fields">
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields">
            <input
              required
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip code"
            />
            <input
              required
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryInfo;
