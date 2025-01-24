import "./Add.css";
import { assets } from "../../assets/assets";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Add = ({
  onSave,
  isLoading,
  refetch,
  selectedProduct,
  setSelectedProduct,
}) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    short: "",
    category: "Comer sofas",
    seat: "Leather",
    best: "Best Seller",
    frame: "Solid wood",
    colors: "Black",
    priceCat: "Under $1000",
    oldPrice: "",
    newPrice: "",
  });
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setData({
        name: selectedProduct.name,
        description: selectedProduct.description,
        short: selectedProduct.short,
        category: selectedProduct.category,
        seat: selectedProduct.seat,
        best: selectedProduct.best,
        frame: selectedProduct.frame,
        colors: selectedProduct.colors,
        priceCat: selectedProduct.priceCat,
        oldPrice: selectedProduct.oldPrice,
        newPrice: selectedProduct.newPrice,
      });
      setImage(selectedProduct.image);
    } else {
      setData({
        name: "",
        description: "",
        short: "",
        category: "Comer sofas",
        seat: "Leather",
        best: "Best Seller",
        frame: "Solid wood",
        colors: "Black",
        priceCat: "Under $1000",
        oldPrice: "",
        newPrice: "",
      });
      setImage(false);
    }
  }, [selectedProduct]);

  const validateFormData = () => {
    if (!image) return "Product Image is required.";
    return null;
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const errorMessage = validateFormData();
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("short", data.short);
    formData.append("category", data.category);
    formData.append("seat", data.seat);
    formData.append("best", data.best);
    formData.append("frame", data.frame);
    formData.append("colors", data.colors);
    formData.append("priceCat", data.priceCat);
    formData.append("oldPrice", Number(data.oldPrice));
    formData.append("newPrice", Number(data.newPrice));
    formData.append("image", image);
    if (selectedProduct) {
      formData.append("id", selectedProduct._id);
    }

    const response = await onSave(formData);
    if (response) {
      setData({
        name: "",
        description: "",
        short: "",
        category: "Comer sofas",
        seat: "Leather",
        best: "Best Seller",
        frame: "Solid wood",
        colors: "Black",
        priceCat: "Under $1000",
        oldPrice: "",
        newPrice: "",
      });
      setImage(false);
      await refetch();
      setSelectedProduct(null);
      toast.success(response.message || "Product Added");
    } else {
      toast.error(response.message || "Can't add Product");
    }
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={
                image
                  ? typeof image === "string"
                    ? `${import.meta.env.VITE_API_BASE_URL}/images/${image}`
                    : URL.createObjectURL(image)
                  : assets.upload_area
              }
              alt="Product"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required={!selectedProduct}
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Short desc</p>
          <input
            onChange={onChangeHandler}
            value={data.short}
            type="text"
            name="short"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
            >
              <option value="Comer sofas">Comer sofas</option>
              <option value="L-shipped Sofas">L-shipped Sofas</option>
              <option value="Sofas cum Bed">Sofas cum Bed</option>
              <option value="Sofas">Sofas</option>
            </select>
          </div>
          <div className="add-category flex-col">
            <p>Seat </p>
            <select onChange={onChangeHandler} name="seat" value={data.seat}>
              <option value="Leather">Leather</option>
              <option value="Fabrics">Fabrics</option>
            </select>
          </div>
          <div className="add-category flex-col">
            <p>Best </p>
            <select onChange={onChangeHandler} name="best" value={data.best}>
              <option value="Best Seller">Best Seller</option>
              <option value="Best Collections">Best Collections</option>
            </select>
          </div>
          <div className="add-category flex-col">
            <p>Frame Materials</p>
            <select onChange={onChangeHandler} name="frame" value={data.frame}>
              <option value="Solid wood">Solid wood</option>
              <option value="Engerineering Wood">Engerineering Wood</option>
            </select>
          </div>
          <div className="add-category flex-col">
            <p>Colors</p>
            <select
              onChange={onChangeHandler}
              name="colors"
              value={data.colors}
            >
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Brown">Brown</option>
              <option value="Red">Red</option>
              <option value="Gray">Gray</option>
              <option value="White">White</option>
              <option value="Pink">Pink</option>
            </select>
          </div>
          <div className="add-category flex-col">
            <p>Price cat</p>
            <select
              onChange={onChangeHandler}
              name="priceCat"
              value={data.priceCat}
            >
              <option value="Under $1000">Under $1000</option>
              <option value="$1000 - $2500">$1000 - $2500</option>
              <option value="$2500 - $5000">$2500 - $5000</option>
              <option value="$5000 - $10000">$5000 - $10000</option>
              <option value="$10000 - $20000">$10000 - $20000</option>
            </select>
          </div>
          <div className="price flex-col">
            <p>Old Price</p>
            <input
              onChange={onChangeHandler}
              value={data.oldPrice}
              type="Number"
              name="oldPrice"
              placeholder="$20"
              required
            />
          </div>
          <div className="price flex-col">
            <p>New Price</p>
            <input
              onChange={onChangeHandler}
              value={data.newPrice}
              type="Number"
              name="newPrice"
              placeholder="$20"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          {isLoading
            ? "Loading..."
            : selectedProduct
            ? "Update Product"
            : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Add;
