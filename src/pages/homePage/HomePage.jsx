import React from "react";
import Hero from "../../components/Hero/Hero";
import Room from "../../components/Rooms/Room";
import BestCollections from "../../components/BestCollections/BestCollections";
import { useGetFurniture } from "../../Api/furnituresApi.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext.jsx";
import toast from "react-hot-toast";
import EmailSubscription from "../../components/EmailSubscription/EmailSubscription.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

const HomePage = () => {
  const { products, refetch, isLoading } = useGetFurniture();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setShowLogin } = useContext(StoreContext);

  const success = searchParams.get("success");
  const navigate = useNavigate();

  if (success) {
    setShowLogin(true);
    navigate("/");
  }

  return (
    <div>
      <Hero />
      <Room />
      <BestCollections
        title="BEST COLLECTIONS"
        data={products}
        refetch={refetch}
        best="Best Collections"
        isLoading={isLoading}
      />
      <BestCollections
        title="BEST SELLER"
        data={products}
        refetch={refetch}
        best="Best Seller"
        isLoading={isLoading}
      />
      <EmailSubscription />
      <Testimonials />
    </div>
  );
};

export default HomePage;
