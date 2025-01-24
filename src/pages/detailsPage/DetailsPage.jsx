import React, { useEffect, useState } from "react";
// import { Single } from "../../assets/asset";
import LeftDetailCard from "../../components/LeftDetailCard/LeftDetailCard";
import RightDetailCard from "../../components/RightDetailCard/RightDetailCard";
import "./Detail.css";
import BestCollections from "../../components/BestCollections/BestCollections";
import { Link, useParams } from "react-router-dom";
import { useGetFurniture } from "../../Api/furnituresApi.js";

const DetailsPage = () => {
  const { id } = useParams();
  const { products, refetch, isSuccess } = useGetFurniture();

  const findProductById = (id, products) => {
    if (products.length > 0) {
      return products.find((item) => item._id === id);
    }
    return null;
  };

  const selectedProduct = isSuccess ? findProductById(id, products) : null;

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="app">
        <p className="product-style">
          <Link to="/" className="home-color">
            Home
          </Link>
          <span class="health-style"> &gt;</span> Furniture
          <span class="health-style"> &gt;</span> {selectedProduct.category}
          <span class="health-style"> &gt;</span> {selectedProduct.name}
        </p>
        <div className="two-sections">
          <LeftDetailCard item={selectedProduct} />
          <RightDetailCard item={selectedProduct} />
        </div>
      </div>
      <BestCollections
        title="SIMILAR PRODUCTS"
        data={products}
        refetch={refetch}
        best="Best Collections"
      />
    </>
  );
};

export default DetailsPage;
