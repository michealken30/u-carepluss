import axios from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";
import { StoreContext } from "../Context/StoreContext";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;
export const useAddToCart = () => {
  const { token, setCartItems, cartItems } = useContext(StoreContext);
  const addTocart = async (itemId) => {
    try {
      if (!cartItems) {
        setCartItems({ [itemId]: 1 });
      } else if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }

      if (token) {
        const response = await axios.post(
          `${API_BASE_URI}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
        return response.data;
      }
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Item not added to cart"
      );
    }
  };

  const {
    mutateAsync: addCart,
    isLoading,
    error,
    isSuccess,
  } = useMutation(addTocart);

  return {
    addCart,
    isLoading,
    error,
    isSuccess,
  };
};

export const useDeleteCartItem = () => {
  const { token, setCartItems, cartItems } = useContext(StoreContext);

  const deleteCartItem = async (itemId) => {
    try {
      if (token) {
        const response = await axios.post(
          `${API_BASE_URI}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );

        setCartItems((prev) => {
          const updatedCart = { ...prev };
          delete updatedCart[itemId];
          return updatedCart;
        });

        return response.data;
      }
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Unable to remove item from cart"
      );
    }
  };

  const {
    mutateAsync: deleteItemCart,
    isLoading,
    error,
    isSuccess,
  } = useMutation(deleteCartItem);

  return {
    deleteItemCart,
    isLoading,
    error,
    isSuccess,
  };
};

export const useRemoveFromCart = () => {
  const { token, setCartItems, cartItems } = useContext(StoreContext);

  const removeFromCart = async (itemId) => {
    try {
      if (!cartItems[itemId] > 0) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      }
      if (token) {
        const response = await axios.post(
          `${API_BASE_URI}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );
        return response.data;
      }
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Item not remove from cart"
      );
    }
  };

  const {
    mutateAsync: removeItemCart,
    isLoading,
    error,
    isSuccess,
  } = useMutation(removeFromCart);

  return {
    removeItemCart,
    isLoading,
    error,
    isSuccess,
  };
};

export const useLoadCartData = () => {
  const { token, setCartItems, cartItems } = useContext(StoreContext);

  const LoadCartData = async () => {
    try {
      if (token) {
        const response = await axios.post(
          `${API_BASE_URI}/api/cart/listcart`,
          {},

          { headers: { token } }
        );
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Cart data cant be fetched"
      );
    }
  };

  const {
    mutateAsync: mycartData,
    isLoading,
    error,
    isSuccess,
  } = useMutation(LoadCartData);

  return {
    mycartData,
    isLoading,
    error,
    isSuccess,
  };
};
