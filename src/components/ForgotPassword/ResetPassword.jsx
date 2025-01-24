import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./ResetPassword.css";
import { useResetPasswordRequest } from "../../Api/MyUserApi";
import { StoreContext } from "../../Context/StoreContext";

const ResetPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const { setShowLogin } = useContext(StoreContext);
  const [newPassword, setNewPassword] = useState("");
  const { resetPassword, isLoading: resetLoading } = useResetPasswordRequest();
  const data = {
    newPassword,
    token,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword(data);
      navigate("/");
      setShowLogin(true);
      toast.success(response.message || "You can now login");
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div className="reset-password">
      <form onSubmit={handleSubmit} className="reset-password-form">
        <h2>Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        {resetLoading ? (
          <button type="submit" disabled>
            Loading...
          </button>
        ) : (
          <button type="submit">Reset Password</button>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
