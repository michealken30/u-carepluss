import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useMutation } from "react-query";
import axios from "axios";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

export const useGoogleAuth = () => {
  const googleAuthRequest = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result.user.email);

      const data = JSON.stringify({
        email: result.user.email,
        name: result.user.displayName,
      });

      const response = await axios.post(
        `${API_BASE_URI}/api/my/user/google`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        error.response?.data?.message || "Failed to continue with google"
      );
    }
  };

  const {
    mutateAsync: googleAuth,
    isSuccess,
    isLoading,
    error,
  } = useMutation(googleAuthRequest);

  return {
    googleAuth,
    isLoading,
    isSuccess,
    error,
  };
};
