import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { items, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleBuy = () => {
    alert("✅ Your order has been placed successfully!");
    clearCart();
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="list-group mb-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Total: ${total.toFixed(2)}</h4>

            <button className="btn btn-warning" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          {/* BUY NOW BUTTON */}
          <button
            className="btn btn-success w-100 py-2"
            onClick={handleBuy}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
