import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { useMyOrder } from "../../Api/Orders";

const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const { myOrder } = useMyOrder();

  const fectchOrders = async () => {
    const response = await myOrder();
    setData(response.data);
  };

  useEffect(() => {
    if (token) {
      fectchOrders();
    }
  }, [token]);
  return (
    <div className="my-orders ">
      <h2 className="app">My Orders</h2>
      <div className="container app">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src="./parcel_icon.png" alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "X" + item.quantity;
                  } else {
                    return item.name + "X" + item.quantity + " ,";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button onClick={fectchOrders}>Track order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
