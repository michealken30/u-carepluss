import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import LoginPop from "../components/Login/LoginPop";
import {
  useCreateMyUserRequest,
  useLoginUserRequest,
  useResetPasswordLink,
} from "../Api/MyUserApi";
import toast from "react-hot-toast";
import { useGoogleAuth } from "../Api/GoogleApi";

const UserPage = () => {
  const { googleAuth, isLoading: googleLoading } = useGoogleAuth();

  const {
    createUser,
    isLoading: creatingLoading,
    isSuccess: isCreatingSuccess,
    error: createError,
  } = useCreateMyUserRequest();

  const {
    loginUser,
    isLoading: LoginLoading,
    isSuccess: LoginSuccess,
    error: LoginError,
  } = useLoginUserRequest();

  const { resetLink, isLoading: resetLinkLoading } = useResetPasswordLink();

  const { showLogin, setShowLogin, currentState, setToken } =
    useContext(StoreContext);

  const handleLoginOrSignup = async (data, action) => {
    try {
      const response = await action(data);
      if (response.token) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
      }
      setShowLogin(false);
      toast.success(response.message, {
        duration: 5000,
      });
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div>
      {showLogin ? (
        <LoginPop
          setShowLogin={setShowLogin}
          onSave={(data) =>
            currentState === "Sign up"
              ? handleLoginOrSignup(data, createUser)
              : handleLoginOrSignup(data, loginUser)
          }
          isLoading={LoginLoading || creatingLoading}
          onGoogle={googleAuth}
          isGoogleLoading={googleLoading}
          resetLink={resetLink}
          resetLinkLoading={resetLinkLoading}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserPage;
