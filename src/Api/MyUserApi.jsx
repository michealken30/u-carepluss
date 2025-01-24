import { useMutation } from "react-query";
import axios from "axios";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

export const useCreateMyUserRequest = () => {
  const CreateMyUserRequest = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URI}/api/my/user/register`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    error,
    isSuccess,
  } = useMutation(CreateMyUserRequest);

  return {
    createUser,
    isLoading,
    error,
    isSuccess,
  };
};

export const useLoginUserRequest = () => {
  const LoginMyUserRequest = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URI}/api/my/user/login`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const {
    mutateAsync: loginUser,
    isSuccess,
    isLoading,
    error,
  } = useMutation(LoginMyUserRequest);

  return {
    loginUser,
    isLoading,
    isSuccess,
    error,
  };
};

export const useResetPasswordLink = () => {
  const resetPasswordLink = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URI}/api/my/user/request-password-reset`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset failed");
    }
  };

  const {
    mutateAsync: resetLink,
    isSuccess,
    isLoading,
    error,
  } = useMutation(resetPasswordLink);

  return {
    resetLink,
    isLoading,
    isSuccess,
    error,
  };
};

export const useResetPasswordRequest = () => {
  const resetPasswordRequest = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URI}/api/my/user/reset-password`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset failed");
    }
  };

  const {
    mutateAsync: resetPassword,
    isSuccess,
    isLoading,
    error,
  } = useMutation(resetPasswordRequest);

  return {
    resetPassword,
    isLoading,
    isSuccess,
    error,
  };
};
