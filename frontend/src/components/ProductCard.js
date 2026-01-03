import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">

        {/* Product Image */}
        <img
          src={`http://localhost:8083/uploads/${product.image}`}
          alt={product.name}
          className="card-img-top"
            style={{
              height: "180px",
              width: "100%",
              objectFit: "cover",
              display: "block",
            }}
        />


        <div className="card-body d-flex flex-column">

          {/* Product Name */}
          <h5 className="card-title">{product.name}</h5>

          {/* Product Price */}
          <p className="card-text fw-bold">${Number(product.price).toFixed(2)}</p>

          {/* Add to Cart Button */}
          <button
            className="btn btn-primary mt-auto"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
