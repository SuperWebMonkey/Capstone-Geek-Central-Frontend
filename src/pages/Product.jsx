import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
// import Cart from "./Cart.jsx";

const api_url = "https://digimon-api.vercel.app/api/digimon";

function Product() {
  const [search, setSearch] = useState("");
  const [loadApi, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
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

  // Use effect for getting the digi api
  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        // setDigimons(res.data);
        // setFilter(res.data);
        // setLoading(false);
      })
      .catch((e) => {
        console.error("Error when fetching Digimon data:", e);
        // setLoading(false);
      });
  }, []);

  return <></>;
}
