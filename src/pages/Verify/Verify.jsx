import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { useVerifyOrder } from "../../Api/Orders";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");

  const orderId = searchParams.get("orderId");

  const navigate = useNavigate();
  const { verifyOrder } = useVerifyOrder();

  const verifyPayment = async () => {
    const response = await verifyOrder({ success, orderId });
    if (response.success) {
      navigate("/myorder");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
