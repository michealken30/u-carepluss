import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo1 from "../../assets/Frame 3.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import toast from "react-hot-toast";
import { useSearchFurniture } from "../../Api/furnituresApi";
import { useLoadCartData } from "../../Api/CartApi";

const Navbar = ({ showLogin, setShowLogin }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { token, setToken, cartItems } = useContext(StoreContext);
  const menuRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { filters, setFilters, clearCartItems } = useContext(StoreContext);
  const { products, isLoading, refetch } = useSearchFurniture(filters);
  const { mycartData } = useLoadCartData();

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    clearCartItems();
    navigate("/");
    toast.success("Logout Successfully");
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    if (mobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  const handleSignInClick = () => {
    setShowLogin(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setFilters({ ...filters, searchQuery: [searchQuery.trim()] });
      navigate(`/search`);
      refetch();
      setSearchQuery("");
    }
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearchIconClick = () => {
    handleSearch();
  };

  const totalItems =
    cartItems && Object.keys(cartItems).length > 0
      ? Object.values(cartItems).reduce((total, qty) => total + qty, 0)
      : 0;

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      setSearchQuery("");
    }

    const loadCartData = async () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        if (!token) {
          setToken(storedToken);
        }

        await mycartData();
      }
    };

    loadCartData();
  }, [mycartData, token, setToken]);

  return (
    <nav className="nav-bar" ref={menuRef}>
      <div className="">
        <div className="app ">
          <div className="nav-flex">
            <div className="first-flex">
              <Link to="/">
                <div className="logoFlex1">
                  <img className="logo-img" src={logo1} alt="" />
                  <span>Aplha furniture</span>
                </div>
              </Link>
            </div>
            {/* search bar and order */}
            <div className="second-flex">
              <div className="search-flex">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="input-class"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setFilters({
                      ...filters,
                      searchQuery: [e.target.value.trim()],
                    });
                    refetch();
                  }}
                  onKeyDown={handleSearchSubmit}
                />
                <IoMdSearch
                  className="search-icon"
                  onClick={handleSearchIconClick}
                />
              </div>

              <div className="help-flex">
                <FaRegQuestionCircle size={20} />
                <span className="help-span">
                  Help <IoIosArrowDown className="arrow" />
                </span>
              </div>
            </div>
            <div className={mobileMenu ? "color2 third-flex" : "third-flex"}>
              <Link to="/cart" className="cart-icon">
                <FaCartShopping className="cart-shop " />
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </Link>
              {token && (
                <div className="user-section">
                  <CiUser className="cart-icon user-icon" />
                  <div className="dropdown-content">
                    <Link to="/myorder">My Order</Link>
                  </div>
                </div>
              )}
              {!token ? (
                <div>
                  <button className="btn-signin" onClick={handleSignInClick}>
                    Sign in
                  </button>
                </div>
              ) : (
                <button className="btn-signin" onClick={Logout}>
                  Logout
                </button>
              )}

              <IoMenuOutline className="media-on" onClick={toggleMenu} />
            </div>
          </div>

          {/* lower Navbar */}
        </div>
        <ul className={mobileMenu ? "mobile-view" : "hide-mobile-menu"}>
          <li>Home</li>
          <li>Shop</li>
          <li>About us</li>
          <li>Furniture</li>
          <li>Contact us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
