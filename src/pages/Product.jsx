import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
// import Cart from "./Cart.jsx";

// change the api_url with the render link when deploying
const api_url = "http://localhost:3000/products";

function Product({ cart, addProduct, removeProduct }) {
  const [search, setSearch] = useState("");
  const [loadApi, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilter] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(api_url);
      console.log(res.data);
      setAllProducts(res.data);
      setFilter(res.data);
      setLoading(false);
    } catch (e) {
      // Logging full error
      console.log("The error in /products:", e);
      console.error("Error details:", e.response);
      console.error("Error message:", e.message);
      console.error("Error code:", e.code);
      setLoading(false);
    }
  };

  // Use effect for setting and getting all products
  useEffect(() => {
    fetchProducts();
  }, []);

  // Search Function
  const searchFeature = (e) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    // console.log(typeof query, query);
    setSearch(query);

    const filteredList = allProducts.filter((item) => {
      console.log(item);
      const titleMatch = item.title.toLowerCase().includes(query);

      // console.log(`Searching for: ${query}`);
      // console.log(
      //   `Checking Title: ${item.title.toLowerCase()} (title match: ${titleMatch})`
      // );

      return titleMatch;
    });

    // console.log(products);
    // console.log(filteredList);

    setFilter(filteredList);
  };

  return (
    <>
      <div className="main-section">
        {/* Shop Title and About section */}
        <h1 id="digimon-world-title">Geek Central</h1>
        <p id="about-p">
          The place for all your nerdy needs. Everything from video games,
          anime, and etc.
        </p>

        {/* Search Feature */}
        <input
          type="text"
          className="search-bar"
          placeholder="search for a product"
          value={search}
          onChange={searchFeature}
        />

        {/* Loading all product items into the product page */}
        {loadApi ? (
          <p>Loading all products...</p>
        ) : (
          <div className="digimons-list">
            {filterProducts.map((product, i) => (
              <div key={i} className="digimon-box">
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
