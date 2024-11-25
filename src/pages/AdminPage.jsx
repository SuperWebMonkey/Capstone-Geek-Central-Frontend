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
    price: null,
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

  // Handle the post state in the form
  const postFormHandler = (curProduct) => {
    setFormData({
      title: curProduct.title,
      price: curProduct.price,
      description: curProduct.description,
      category: curProduct.category,
    });
    setFormMode("post");
  };

  // Handle the put state and making it true
  const putFormHandler = (curProduct) => {
    setFormData({
      title: curProduct.title,
      price: curProduct.price,
      description: curProduct.description,
      category: curProduct.category,
    });
    setFormMode("put");
  };

  // Handle the delete form
  const deleteFormHandler = (curProduct) => {
    setFormData({
      title: curProduct.title,
      price: curProduct.price,
      description: curProduct.description,
      category: curProduct.category,
    });
    setFormMode("delete");
  };

  // Used when the form changes to a different HTTP request
  const modeChange = (e) => {
    e.preventDefault();
    const selected = e.target.value;
    setFormMode(selected);

    if (selected === "post") {
      setFormData({
        title: "",
        price: null,
        description: "",
        category: "",
      });
    }
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
      getProducts();
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
      getProducts();
      setFormMode("put");
    } catch (e) {
      console.log("Error with put request:", e);
    }
  };

  // Delete request with axios
  const deleteRequest = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      getProducts();
      setFormMode("delete");
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  // Sets the form to one of the following states: post, put or delete.
  // Resets after the http request has been performed
  const setMode = async (e) => {
    e.preventDefault();

    // Form Logic
    if (formMode === "post") {
      await postRequest();
    } else if (formMode === "put") {
      await putRequest();
    } else if (formMode === "delete") {
      await deleteRequest();
    }

    // Resetting the form
    setFormData({ title: "", price: null, description: "", category: "" });
    setFormMode("post");
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
