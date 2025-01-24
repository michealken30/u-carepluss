import React, { useState } from "react";
import "./ProductSideBar.css";
import Filters from "../Filters/Filters";
import {
  Category,
  Materials1,
  Materials2,
  Colors,
  Price,
} from "../../assets/asset";

const ProductSideBar = ({ setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return (
    <div className="first-section1">
      <Filters
        data={Category}
        title="Category"
        onFilterChange={(value) => handleFilterChange("category", value)}
      />
      <Filters
        data={Materials1}
        title="Seating Materials"
        onFilterChange={(value) => handleFilterChange("material1", value)}
      />
      <div className="none-display">
        <Filters
          data={Materials2}
          title="Frame Materials"
          onFilterChange={(value) => handleFilterChange("material2", value)}
        />
      </div>
      <Filters
        data={Colors}
        title="Colors"
        onFilterChange={(value) => handleFilterChange("color", value)}
      />
      <Filters
        data={Price}
        title="Price"
        onFilterChange={(value) => handleFilterChange("price", value)}
      />
    </div>
  );
};

export default ProductSideBar;
