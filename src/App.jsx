import React, { useContext, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productsPage/ProductPage";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout/Checkout";
import ScrollToTop from "./components/scrollTop";
// import LoginPop from "./components/Login/LoginPop";
import AOS from "aos";
import { StoreContext } from "./Context/StoreContext";
import UserPage from "./pages/UserPage";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import DeliveryInfo from "./components/DeliveryInfo/DeliveryInfo";
import MyOrders from "./pages/MyOrders/MyOrders";
import Verify from "./pages/Verify/Verify";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // const [showLogin, setShowLogin] = useState(false);

  const { showLogin, setShowLogin, deliveryAddress, setDeliveryAddress } =
    useContext(StoreContext);
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <UserPage />
      {/* {showLogin ? <LoginPop setShowLogin={setShowLogin} /> : <></>} */}

      {!location.pathname.startsWith("/reset-password") && (
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
      {deliveryAddress ? (
        <DeliveryInfo setdeliveryAddress={setDeliveryAddress} />
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/search" element={<ProductPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorder" element={<MyOrders />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
