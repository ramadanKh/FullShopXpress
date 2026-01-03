
// Import images from assets folder
import Accessories1 from "../assets/Accessories1.jpg";
import Accessories2 from "../assets/Accessories2.jpg";
import Accessories3 from "../assets/Accessories3.jpg";
import Electronics1 from "../assets/Electronics1.jpg";
import Electronics2 from "../assets/Electronics2.jpg";
import Shoes1 from "../assets/Shoes1.jpg";
import Shoes2 from "../assets/Shoes2.jpg";
import Tshirt1 from "../assets/Tshirt1.jpg";
import Tshirt2 from "../assets/Tshirt2.jpg";

const products = [
  {
    id: 1,
    name: "Cool T-Shirt",
    category: "T-Shirts",
    price: 25.99,
    image: Tshirt1,
  },
  {
    id: 2,
    name: "Vintage T-Shirt",
    category: "T-Shirts",
    price: 32.99,
    image: Tshirt2,
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Shoes",
    price: 89.99,
    image: Shoes1,
  },
  {
    id: 4,
    name: "Canvas Sneakers",
    category: "Shoes",
    price: 64.99,
    image: Shoes2,
  },
  {
    id: 5,
    name: "Leather Wallet",
    category: "Accessories",
    price: 45.5,
    image: Accessories1,
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Accessories",
    price: 120.0,
    image: Accessories2,
  },
  {
    id: 7,
    name: "Bracelet",
    category: "Accessories",
    price: 19.99,
    image: Accessories3,
  },
  {
    id: 8,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 199.99,
    image: Electronics1,
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 79.99,
    image: Electronics2,
  },
];

export default products;
