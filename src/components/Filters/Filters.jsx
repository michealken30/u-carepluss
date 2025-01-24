import React, { useState } from "react";
import "./Filter.css";

const Filters = ({ data, title, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;

    setSelectedFilters((prevSelected) => {
      if (checked) {
        const updatedSelection = [...prevSelected, value];
        onFilterChange(updatedSelection);
        return updatedSelection;
      } else {
        const updatedSelection = prevSelected.filter((item) => item !== value);
        onFilterChange(updatedSelection);
        return updatedSelection;
      }
    });
  };

  return (
    <div>
      <div>
        <p className="pdt-class">{title}</p>
      </div>
      <div className="check-column">
        {data.map((item, i) => (
          <div className="sale-box4" key={i}>
            <input
              className="sale-box"
              type="checkbox"
              value={item}
              onChange={handleCheckboxChange}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
