import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

const Products = () => {
  // Products from database
  const [products, setProducts] = useState([]);

  // Local UI states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("name-asc");

  // 🔹 Fetch products from DB
  useEffect(() => {
    axios
      .get("http://localhost:8083/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // --- SEARCH + FILTER + SORT LOGIC ---
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category ? p.category === category : true
    )
    .sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Products</h2>

      {/* --- Filters Row --- */}
      <div className="row mb-4">

        {/* Search */}
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="name-asc">Name A → Z</option>
            <option value="price-asc">Price Low → High</option>
            <option value="price-desc">Price High → Low</option>
          </select>
        </div>
      </div>

      {/* --- Product Grid --- */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Products;
