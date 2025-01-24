import React, { useContext, useState } from "react";
import ProductSideBar from "../../components/ProductSideBar/ProductSideBar";
import ProductMain from "../../components/ProductMain/ProductMain";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
// import { useGetFurniture } from "../../Api/furnituresApi.js";

const ProductPage = () => {
  // const { products, refetch } = useGetFurniture();

  const { filters, setFilters } = useContext(StoreContext);

  return (
    <div className="app">
      <div class="container product-cont">
        <p className="product-style">
          <Link to="/" className="home-color">
            Home
          </Link>
          <span class="health-style"> &gt;</span>Funiture
          <span class="health-style"> &gt;</span> sofa
        </p>
      </div>
      <div className="two-sections1">
        <ProductSideBar setFilters={setFilters} />
        <ProductMain filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
};

export default ProductPage;
