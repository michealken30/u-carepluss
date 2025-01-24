import axios from "axios";
import { useQuery } from "react-query";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

export const useGetFurniture = () => {
  const GetFurniture = async () => {
    try {
      const response = await axios.get(`${API_BASE_URI}/api/furniture/list`);

      return response.data.furnitures;
    } catch (error) {
      throw new Error(response?.data?.message || "Can't get Furnitures");
    }
  };

  const {
    data: products = [],
    isLoading,
    refetch,
    isSuccess,
  } = useQuery("fetchFurniture", GetFurniture);

  return {
    products,
    isLoading,
    refetch,
    isSuccess,
  };
};

export const useSearchFurniture = (filters = {}) => {
  const searchFurniture = async () => {
    try {
      const {
        category,
        material1,
        material2,
        color,
        price,
        searchQuery,
        sortOption,
        page = 1,
      } = filters;

      const queryParams = new URLSearchParams();

      if (searchQuery && searchQuery.length > 0) {
        queryParams.append("searchQuery", searchQuery.join(","));
      }

      if (category && category.length > 0) {
        queryParams.append("selectedCategories", category.join(","));
      }

      if (material1 && material1.length > 0) {
        queryParams.append("selectedMaterial1", material1.join(","));
      }

      if (material2 && material2.length > 0) {
        queryParams.append("selectedMaterial2", material2.join(","));
      }

      if (color && color.length > 0) {
        queryParams.append("selectedColors", color.join(","));
      }

      if (price) {
        queryParams.append("priceRange", price);
      }

      if (sortOption) {
        queryParams.append("sortOption", sortOption);
      }
      if (page && !isNaN(page)) {
        queryParams.append("page", page);
      } else {
        queryParams.append("page", 1);
      }

      const response = await axios.get(
        `${API_BASE_URI}/api/furniture/search?${queryParams.toString()}`
      );

      return response.data;
    } catch (error) {
      throw new Error(
        error?.response?.data?.message || "Failed to search furniture"
      );
    }
  };

  const {
    data: products = [],
    isLoading,
    refetch,
    isSuccess,
  } = useQuery(["searchFurniture", filters], searchFurniture, {
    enabled: !!filters,
  });

  return { products, isLoading, refetch, isSuccess };
};
