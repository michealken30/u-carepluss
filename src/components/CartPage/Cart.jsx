import React from "react";
import LeftCart from "../LeftSectionCart/LeftCart";
import RightCart from "../RightSessionCart/RightCart";
import "./Cart.css";
import {
  useAddToCart,
  useDeleteCartItem,
  useLoadCartData,
  useRemoveFromCart,
} from "../../Api/CartApi.js";
import { useGetFurniture } from "../../Api/furnituresApi.js";

const Cart = () => {
  const { addCart, isLoading } = useAddToCart();
  const { removeItemCart } = useRemoveFromCart();
  const { deleteItemCart } = useDeleteCartItem();
  const { products, refetch } = useGetFurniture();
  const { mycartData } = useLoadCartData();
  return (
    <div className="">
      <div className="two-section media-display">
        <LeftCart
          addCart={addCart}
          removeItemCart={removeItemCart}
          mycartData={mycartData}
          deleteItemCart={deleteItemCart}
          products={products}
          refetch={refetch}
        />
        <RightCart />
      </div>
    </div>
  );
};

export default Cart;
