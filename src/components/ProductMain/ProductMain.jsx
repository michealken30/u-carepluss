import { useContext, useEffect, useState } from "react";
import "./ProductMain.css";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useSearchFurniture } from "../../Api/furnituresApi";
import { StoreContext } from "../../Context/StoreContext";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

const ProductMain = ({ filters, setFilters }) => {
  const { products, isLoading, refetch } = useSearchFurniture(filters);
  const [sortOption, setSortOption] = useState("dateDesc");
  const navigate = useNavigate();
  const { token, setToken } = useContext(StoreContext);

  const fetchAllProducts = () => {
    navigate("/search");
    window.location.reload();
  };

  const handleSortChange = (newSortOption) => {
    if (newSortOption === "all") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        sortOption: "",
        page: 1,
      }));
      fetchAllProducts();
    } else {
      setSortOption(newSortOption);
      setFilters((prevFilters) => ({
        ...prevFilters,
        sortOption: newSortOption,
        page: 1,
      }));
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= (products.pagination?.pages || 1)) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        page,
      }));
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    refetch();
  }, [filters]);

  if (isLoading) return <div>Loading...</div>;

  const currentPage = filters.page || 1;
  const totalPages = products.pagination?.pages || 1;

  return (
    <div className="second-section">
      <div className="container">
        <div className="heading">
          <p>
            All Sofa<span className="span-title">Sorted by:</span>
            <span className="active none">
              {sortOption ? sortOption : "All products"}
            </span>
          </p>
        </div>
        <div className="sortFlex">
          <span
            className={sortOption === "dateDesc" ? "active" : ""}
            onClick={() => handleSortChange("dateDesc")}
          >
            Date: New to Old
          </span>
          <span
            className={sortOption === "dateAsc" ? "active" : ""}
            onClick={() => handleSortChange("dateAsc")}
          >
            Date: Old to New
          </span>
          <span
            className={sortOption === "priceDesc" ? "active" : ""}
            onClick={() => handleSortChange("priceDesc")}
          >
            Price: High to Low
          </span>
          <span
            className={sortOption === "priceAsc" ? "active" : ""}
            onClick={() => handleSortChange("priceAsc")}
          >
            Price: Low to High
          </span>
          <span
            className={sortOption === "" ? "active" : ""}
            onClick={() => handleSortChange("all")}
          >
            All products
          </span>
        </div>
        <div className="grid-class3 media-flex2">
          {products.data.map((card) => (
            <Link to={`/details/${card._id}`} className="border" key={card.id}>
              <div className="flexColStart r-card">
                <img src={`${API_BASE_URI}/images/${card.image}`} alt="home" />
                <div className="wishlist">
                  <span>{card.name}</span>
                  <CiHeart />
                </div>
                <span>{card.short}</span>
                <span className="r-price">
                  <div className="old-price">
                    <del>
                      <span>$</span>
                      <span>{card.oldPrice}</span>
                    </del>
                  </div>
                  <div>
                    <span>$</span>
                    <span>{card.newPrice}</span>
                  </div>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="container paginate-div">
        {currentPage > 1 && (
          <span onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </span>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`paginate ${
              currentPage === index + 1 ? "active-page" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}

        {currentPage < totalPages && (
          <span onClick={() => handlePageChange(currentPage + 1)}>Next</span>
        )}
      </div>
    </div>
  );
};

export default ProductMain;
