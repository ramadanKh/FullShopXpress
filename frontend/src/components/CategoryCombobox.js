import React, { useState, useEffect } from "react";

function CategoryComboBox({ onSelectChange, value }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleChange = (event) => {
    onSelectChange(event.target.value);
  };

  return (
    <select onChange={handleChange} value={value} required>
      <option value="">Select Category</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.name}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}

export default CategoryComboBox;
