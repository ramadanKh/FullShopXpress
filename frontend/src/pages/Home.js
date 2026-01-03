import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to ShopXpress</h1>
      <p className="home-subtitle">Browse our products and enjoy seamless shopping.</p>

      <Link to="/products" className="home-button">
        View Products
      </Link>
    </div>
  );
}

export default Home;
