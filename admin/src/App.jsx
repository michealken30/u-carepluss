import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/order/Order";
import {
  useAddFurniture,
  useGetFurniture,
  useRemoveFurniture,
  useUpdateFurniture,
} from "./adminApi/furnitureApi";
import { useState } from "react";

const App = () => {
  const { addProduct, isLoading: isAdding } = useAddFurniture();
  const { products, refetch } = useGetFurniture();
  const { removeProduct } = useRemoveFurniture();
  const { updateProduct, isLoading: isUpdating } = useUpdateFurniture();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  const handleEditProduct = (product) => {
    setSelectedProduct(product);

    navigate("/add");
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar setSelectedProduct={setSelectedProduct} />
        <Routes>
          <Route
            path="/add"
            element={
              <Add
                onSave={selectedProduct ? updateProduct : addProduct}
                isLoading={isAdding || isUpdating}
                refetch={refetch}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
          <Route
            path="/list"
            element={
              <List
                data={products}
                removeProduct={removeProduct}
                onEditProduct={handleEditProduct}
                refetch={refetch}
              />
            }
          />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
