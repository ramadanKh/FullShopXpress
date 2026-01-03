const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ---------------- DATABASE CONNECTION ---------------- */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

/* ---------------- IMAGE UPLOAD (MULTER) ---------------- */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ---------------- TEST ROUTE ---------------- */
app.get("/", (req, res) => {
  res.json("Backend is running");
});

/* ---------------- LOGIN ---------------- */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) {
      res.json({
        success: true,
        user: {
          id: data[0].id,
          email: data[0].email,
        },
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
  });
});

/* ---------------- REGISTER ---------------- */
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const checkSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkSql, [email], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const insertSql = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.query(insertSql, [email, password], (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        success: true,
        message: "User registered successfully",
        userId: result.insertId,
      });
    });
  });
});

/* ---------------- GET CATEGORIES ---------------- */
app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM category";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(data);
  });
});


/* ---------------- PRODUCTS ---------------- */

/* ADD PRODUCT (WITH IMAGE) */
app.post("/products", upload.single("image"), (req, res) => {
  const { name, category, price } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !category || !price || !image) {
    return res.status(400).json("All fields are required");
  }

  const sql =
    "INSERT INTO products (name, category, price, image) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, category, price, image], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      success: true,
      message: "Product added successfully",
      id: result.insertId,
    });
  });
});

/* GET ALL PRODUCTS */
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

/* DELETE PRODUCT */
app.delete("/products/:id", (req, res) => {
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Product deleted successfully");
  });
});

/* ---------------- SERVER ---------------- */
app.listen(8083, () => {
  console.log("Backend running on port 8083");
});
