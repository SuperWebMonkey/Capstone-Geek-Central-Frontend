import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
// import Cart from "./Cart.jsx";

const api_url = "http://localhost:3000/products";

function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loadApi, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilter] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(api_url);
      console.log(res.data);
      setAllProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // Use effect for setting and getting all products
  useEffect(() => {
    fetchProducts(), [];
  });

  // Search Function
  const searchFeature = (e) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    // console.log(typeof query, query);
    setSearch(query);

    const filteredList = products.filter((item) => {
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

  return <></>;
}
