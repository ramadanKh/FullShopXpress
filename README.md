# React Frontend Application

## Overview

This repository contains the **React frontend** of a full-stack web application. The frontend is built using **Create React App** and provides user-facing pages such as product listing, cart management, authentication, and admin product creation.

The application is designed to communicate with a **Node.js / Express backend** and a **MySQL database**.

---

## Tech Stack

* **React** (Create React App)
* **JavaScript (ES6+)**
* **CSS Modules / Custom CSS**
* **Context API** (state management)

---

## Project Structure

```
src/
│
├── components/        # Reusable UI components
│   ├── CartItem.js
│   ├── CategoryCombobox.js
│   ├── Footer.js
│   ├── Navbar.js
│   └── ProductCard.js
│
├── context/           # Global state management
│   └── CartContext.js
│
├── data/              # Static / mock data
│   └── products.js
│
├── pages/             # Application pages
│   ├── AddProduct.js
│   ├── Cart.js
│   ├── Contact.js
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── Products.js
│   └── NotFound.js
│
├── styles/            # Page-level styles
│   ├── Home.css
│   ├── login.css
│   └── NotFound.css
│
├── App.js             # Root component
├── index.js           # Application entry point
└── reportWebVitals.js # Performance monitoring
```

---

## Features

* Product listing and product cards
* Shopping cart with Context API
* User authentication pages (Login / Register)
* Add Product page (admin functionality)
* Client-side routing
* Responsive navigation bar and footer

##

---

## Backend Integration

This frontend expects a backend API that:

* Runs on **Node.js / Express**
* Connects to **MySQL (XAMPP)**
* Exposes REST endpoints for products, authentication, and cart operations

Ensure the backend server is running before using features that depend on API data.

---

## Future Improvements

* API integration for products (replace static data)
* Authentication with JWT
* Admin role management
* Form validation and error handling
* Improved styling and accessibility

---

## Author

Ramadan Khalil

---

##
