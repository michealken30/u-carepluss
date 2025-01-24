import axios from "axios";
import { useMutation } from "react-query";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useAllOrder = () => {
  const allOrder = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/orders/adminorders`);

      return response;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error fetcting order");
    }
  };

  const {
    mutateAsync: usersOrders,
    isLoading,
    error,
    isSuccess,
  } = useMutation(allOrder);

  return {
    usersOrders,
    isLoading,
    error,
    isSuccess,
  };
};

export const useChangeOrderStatus = () => {
  const ChangeOrderStatus = async ({ orderStatus, orderId }) => {
    try {
      const response = await axios.post(`${API_URL}/api/orders/status`, {
        orderId,
        status: orderStatus,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error placing order");
    }
  };

  const {
    mutateAsync: ChangeStatus,
    isLoading,
    error,
    isSuccess,
  } = useMutation(ChangeOrderStatus);

  return {
    ChangeStatus,
    isLoading,
    error,
    isSuccess,
  };
};
