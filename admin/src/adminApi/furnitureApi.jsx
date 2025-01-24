import axios from "axios";
import { useMutation, useQuery } from "react-query";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useAddFurniture = () => {
  const addFurniture = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/api/furniture/add`, data);
      return response.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message || "Can't add furniture");
    }
  };

  const { mutateAsync: addProduct, isLoading } = useMutation(addFurniture);

  return {
    addProduct,
    isLoading,
  };
};

export const useGetFurniture = () => {
  const GetFurniture = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/furniture/list`);
      return response.data;
    } catch (error) {
      throw new Error(response?.data?.message || "Can't get Furnitures");
    }
  };

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("fetchFurniture", GetFurniture);

  return {
    products,
    isLoading,
    refetch,
  };
};

export const useRemoveFurniture = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const RemoveFurniture = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/api/furniture/remove`, {
        id: data,
      });
      return response.data;
    } catch (error) {
      throw new Error(response?.data?.message || "Cant remove furniture");
    }
  };

  const {
    mutateAsync: removeProduct,
    isLoading,
    isError,
  } = useMutation(RemoveFurniture);

  return {
    removeProduct,
    isLoading,
    isError,
  };
};

export const useUpdateFurniture = () => {
  const updateFurniture = async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/furniture/update`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error?.response?.data?.message || "Can't update furniture"
      );
    }
  };

  const { mutateAsync: updateProduct, isLoading } =
    useMutation(updateFurniture);

  return {
    updateProduct,
    isLoading,
  };
};
