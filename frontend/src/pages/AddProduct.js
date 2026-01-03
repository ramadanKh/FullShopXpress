import React, { useState } from "react";
import axios from "axios";
import CategoryComboBox from "../components/CategoryCombobox";
import "../styles/login.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:8083/products", formData);

      setMessage("Product added successfully");

      // reset fields
      setName("");
      setCategory("");
      setPrice("");
      setImage(null);
    } catch (err) {
    setMessage(err.response?.data || "Failed to add product");
    }

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Add Product</h2>

        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
             <label>Category</label>
              <CategoryComboBox
              value={category}
               onSelectChange={setCategory}
             />
        </div>


          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button className="login-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
