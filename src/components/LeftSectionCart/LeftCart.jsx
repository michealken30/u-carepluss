import React, { useEffect, useContext } from "react";
import "./LeftCart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { StoreContext } from "../../Context/StoreContext";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

const LeftCart = ({
  addCart,
  removeItemCart,
  mycartData,
  products,
  refetch,
  deleteItemCart,
}) => {
  const { cartItems, token, setToken } = useContext(StoreContext);

  useEffect(() => {
    const loadCartData = async () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        if (!token) {
          setToken(storedToken);
        }
        await refetch();
        await mycartData(storedToken);
      }
    };

    loadCartData();
  }, [mycartData, setToken, token]);

  const handleRemoveAll = async (itemId) => {
    try {
      await deleteItemCart(itemId);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleIncrement = async (itemId) => {
    try {
      await addCart(itemId);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleDecrement = async (itemId, quantity) => {
    try {
      if (quantity > 0) {
        await removeItemCart(itemId);
        await mycartData();
      } else {
        await handleRemoveAll(itemId);
      }
    } catch (error) {
      console.error("Error decrementing item in cart:", error);
    }
  };

  return (
    <div className="">
      {products && Object.keys(cartItems).length > 0 && (
        <div className="">
          {Object.entries(cartItems).map(([id, quantity]) => {
            const cartProduct = products.find((product) => product._id === id);

            if (cartProduct) {
              return (
                <div className="">
                  <div key={id} className="first-section card-div">
                    <div className="img-div">
                      <img
                        src={`${API_BASE_URI}/images/${cartProduct.image}`}
                        alt={cartProduct.name}
                      />
                      <div className="img-flex">
                        <span>
                          <AiOutlineDelete />
                        </span>
                        <span
                          onClick={() => handleRemoveAll(cartProduct._id)}
                          style={{ cursor: "pointer" }}
                        >
                          REMOVE
                        </span>
                      </div>
                    </div>
                    <div className="text-div">
                      <span className="big-font">{cartProduct.name}</span>
                      <span className="medium-font">{cartProduct.short}</span>
                      <span className="small-font">In Stock</span>
                    </div>
                    <div>
                      <button className="add-button">
                        <a
                          href="#"
                          onClick={() =>
                            handleDecrement(cartProduct._id, quantity)
                          }
                        >
                          -
                        </a>
                        <span>{quantity}</span>
                        <a
                          href="#"
                          onClick={() => handleIncrement(cartProduct._id)}
                        >
                          +
                        </a>
                      </button>
                    </div>
                    <div className="">
                      <span className="new-price">${cartProduct.newPrice}</span>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default LeftCart;
