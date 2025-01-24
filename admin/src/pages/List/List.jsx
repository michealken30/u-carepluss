import React, { useEffect, useState } from "react";
import "./List.css";

import toast from "react-hot-toast";

const List = ({ data, removeProduct, refetch, onEditProduct }) => {
  const url = import.meta.env.VITE_API_BASE_URL;

  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    if (data) {
      setProducts(data.furnitures);
    } else {
      toast.error("Can't fetch Data");
    }
  };

  const helpRemoveProduct = async (data) => {
    const response = await removeProduct(data);
    await refetch();
    if (response) {
      toast.success(response.message || "Product removed ");
    } else {
      toast.error(response.message || "Couldnt remove product");
    }

    allProducts();
  };

  useEffect(() => {
    allProducts();
    refetch();
  }, [data]);

  return (
    <div className="list add flex-col">
      <p>All Furnitures Products</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b> New Price</b>
          <b>Action</b>
          <b>Action</b>
        </div>
        {products.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.newPrice}</p>
              <p onClick={() => helpRemoveProduct(item._id)} className="cursor">
                X
              </p>
              <p onClick={() => onEditProduct(item)} className="cursor">
                Edit
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
