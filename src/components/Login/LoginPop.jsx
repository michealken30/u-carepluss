import React, { useContext, useState } from "react";
import "./LoginPop.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import toast from "react-hot-toast";

const LoginPop = ({
  setShowLogin,
  onSave,
  isLoading,
  onGoogle,
  isGoogleLoading,
  resetLink,
  resetLinkLoading,
}) => {
  const { currentState, setCurrentState, token, setToken } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleLoginState = () => {
    setShowLogin(false);
    setCurrentState("Login");
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await resetLink(data);
      navigate("/");
      setShowLogin(false);
      setCurrentState("Login");

      toast.success(response.message || "You can now login");
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  const onGoogleHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await onGoogle();
      setToken(response.token);
      localStorage.setItem("token", response.token);
      setShowLogin(false);
      toast.success(response.message || "You are Sign in");
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  const onLoginHandler = async (event) => {
    event.preventDefault();
    try {
      await onSave(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="login-popup">
      <form
        onSubmit={onLoginHandler}
        action=""
        className="login-popup-container"
      >
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <p className="pop-off" onClick={handleLoginState}>
            &times;
          </p>
        </div>

        {currentState !== "Reset Password" && (
          <div className="login-popup-input">
            {currentState === "Sign up" && (
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                placeholder="Name"
                required
              />
            )}

            <input
              type="text"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              placeholder="Password"
              required
            />
          </div>
        )}

        {currentState === "Reset Password" && (
          <div className="login-popup-input">
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              placeholder="Enter your email"
              required
            />
            <button
              type="button"
              onClick={resetPassword}
              disabled={resetLinkLoading}
            >
              {resetLinkLoading ? "Loading..." : "Send Reset Link"}
            </button>
          </div>
        )}

        {isLoading ? (
          <button type="submit" disabled>
            Loading...
          </button>
        ) : (
          currentState !== "Reset Password" && (
            <button type="submit">
              {currentState === "Sign up" ? "Create account" : "Login"}
            </button>
          )
        )}

        {isGoogleLoading ? (
          <button type="submit" disabled>
            Loading...
          </button>
        ) : (
          currentState !== "Reset Password" && (
            <button type="button" className="google" onClick={onGoogleHandler}>
              Continue With Google
            </button>
          )
        )}

        {currentState !== "Reset Password" && (
          <div className="login-popup-condition">
            <input type="checkbox" name="" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}

        {currentState === "Login" && (
          <>
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("Sign up")}>Click here</span>
            </p>
            <span
              className="forgot-pass"
              onClick={() => setCurrentState("Reset Password")}
            >
              Forgot Password
            </span>
          </>
        )}

        {currentState === "Sign up" && (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
