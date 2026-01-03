import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="me-3"
          style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" }}
        />

        {/* Product Info */}
        <div>
          <h5 className="mb-1">{item.name}</h5>
          <p className="mb-1">
            ${item.price} × {item.quantity}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
