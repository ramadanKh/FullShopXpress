import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8083/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem(
          "user", JSON.stringify(res.data.user)
        );
        // reset fields
        setEmail("");
        setPassword("");

        // redirect to add product page
        navigate("/add-product");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#007bff" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
