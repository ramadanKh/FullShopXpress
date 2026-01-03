
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Login from "./pages/login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Router>

        <Navbar />

        {/* Content that expands */}
        <div className="content-wrapper">
          <div className="container py-4">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/products" Component={Products} />
              <Route path="/contact" Component={Contact} />
              <Route path="/cart" Component={Cart} />
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />
              <Route path="/add-product" Component={AddProduct} />
              <Route path="*" Component={NotFound} />
            </Routes>
          </div>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
