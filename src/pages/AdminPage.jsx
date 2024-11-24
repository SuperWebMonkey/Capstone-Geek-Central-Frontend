/**
 *
 * Admin form page that handles HTTP requests
 *
 */

import { useState, useEffect } from "react";
import axios from "axios";

function AdminPage({ products }) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  // Three different modes: post, put, delete
  const [formMode, setFormMode] = useState("post");
  const apiUrl = import.meta.env.VITE_API_URL;

  // Get and update the products especially when a new http request is called
  const getProducts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
    } catch (e) {
      console.error("Error getting the products", e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Updating the change
  const setFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the editing state and making it true
  const editProduct = (curProduct) => {
    setFormData({
      title: curProduct.title,
      price: curProduct.price,
      description: curProduct.description,
      category: curProduct.category,
    });
    setIsEdit(true);
  };

  const setMode = async (e) => {
    e.preventDefault();
  };

  //  Post request with axios
  const postRequest = async (e) => {
    try {
      await axios.post(apiUrl, {
        title: formData.title,
        price: formData.price,
        description: formData.description,
        category: formData.category,
      });
      setProducts(products);
    } catch (e) {
      console.log("Error with post request", e);
    }
  };

  // put request with axios
  const putRequest = async (e) => {
    try {
      await axios.put(`${apiUrl}/${formData.id}`, {
        title: formData.title,
        price: formData.price,
        description: formData.description,
        category: formData.category,
      });
      setProducts(products);
      setFormMode("put");
    } catch (e) {
      console.log("Error with put request:", e);
    }
  };

  // Delete request with axios
  const deleteRequest = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProducts(products); // Re-fetch items after deletion
      setFormMode("delete"); // Reset to create mode
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <div className="form-section">
      <h1>Admin Form</h1>
      <form></form>
      <h2>List of all products:</h2>
      <ul></ul>
    </div>
  );
}

export default AdminPage;
