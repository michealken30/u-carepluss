import React, { useContext } from "react";
import "./RightDetailCard.css";
import { CiLineHeight } from "react-icons/ci";
import { TbSquareLetterWFilled } from "react-icons/tb";
import { MdOutlineBlock } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../Api/CartApi";
import toast from "react-hot-toast";
import { StoreContext } from "../../Context/StoreContext";

const RightDetailCard = ({ item }) => {
  const { addCart, isLoading } = useAddToCart();

  const { token, setShowLogin } = useContext(StoreContext);

  const handleAddToCart = async (itemId) => {
    if (!token) {
      setShowLogin(true);
      toast.error("Please login to add items to the cart");
      return;
    }

    try {
      await addCart(itemId);
      toast.success("Item added to cart!");
    } catch (err) {
      toast.error("Failed to add item to cart!");
    }
  };

  return (
    <div className="right-section">
      <div className="right-card">
        <div className="name-div">
          <span>{item.name}</span>
          <span>
            <CiHeart />
          </span>
        </div>
        <div className="name-div ">
          <span className="name-font">{item.short}</span>
          <span>
            <IoShareSocialOutline />
          </span>
        </div>
        <button className="button-brown">{item.colors}</button>
        <span className="r-price">
          <div className="old-price">
            <span>$</span>
            <span>
              <del>{item.oldPrice}</del>
            </span>
          </div>

          <div>
            <span>$</span>

            <span>{item.newPrice}</span>
          </div>
        </span>
        <div className="review">
          <div className="review-icon">
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
          </div>
          <div>
            <span>16.4k Reviews</span>
          </div>
        </div>
        <div className="nature-review">
          <span>
            <CiLineHeight />
          </span>

          <span>soft</span>
        </div>
        <div className="iswash-review">
          <span>
            <MdOutlineBlock />
          </span>
          <span>Washable Cover</span>
        </div>
        <div className="waranty-review">
          <span>
            <TbSquareLetterWFilled />
          </span>
          <span>2 year warranty</span>
        </div>
        <Link to="#">
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(item._id)}
            disabled={isLoading}
          >
            <span>
              <FaCartShopping className="" />
            </span>

            <span>Add to Cart</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RightDetailCard;
