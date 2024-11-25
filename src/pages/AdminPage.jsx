/**
 *
 * Admin form page that handles HTTP requests such as put, post, and delete
 * Form is used to initiate the http request
 *
 */

import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Admin.css";

function AdminPage() {
  const [formData, setFormData] = useState({
    title: "",
    price: null,
    description: "",
    category: "",
  });
  const [products, setProducts] = useState([]);
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
      id: curProduct._id,
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
      id: curProduct._id,
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
      setFormMode("post");
    } catch (e) {
      console.log("Error with post request", e);
    }
  };

  // put request with axios
  const putRequest = async () => {
    try {
      console.log("Updating product with ID:", formData.id);
      await axios.put(`${apiUrl}/${formData.id}`, {
        title: formData.title,
        price: Number(formData.price),
        description: formData.description,
        category: formData.category,
      });
      getProducts();
    } catch (e) {
      console.error("Error with put request:", e.response?.data || e);
    }
  };

  // Delete request with axios
  const deleteRequest = async () => {
    try {
      console.log("Deleting product with ID:", formData.id);
      await axios.delete(`${apiUrl}/${formData.id}`);
      getProducts();
      setFormMode("post");
    } catch (error) {
      console.error("Error deleting item:", error.response?.data || error);
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
    <div className="admin-section">
      <div className="form-section">
        <div className="form-menu">
          {/* Select section */}
          <h1>Admin Form</h1>
          <label>Choose which HTTP request:</label>
          <select value={formMode} onChange={modeChange}>
            <option value="post">post</option>
            <option value="put">put</option>
            <option value="delete">delete</option>
          </select>
          {/* Form for selecting the request */}
          <form className="admin-form" onSubmit={setMode}>
            {formMode !== "delete" && (
              <>
                <div id="product-title">
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={setFormChange}
                    required
                    disabled={formMode === "delete"}
                  />
                </div>
                <div id="product-price">
                  <label>Price:</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={setFormChange}
                    required
                    disabled={formMode === "delete"}
                  />
                </div>
                <div id="product-description">
                  <label>description:</label>
                  <textarea
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={setFormChange}
                    required
                    rows="8"
                    cols="50"
                    disabled={formMode === "delete"}
                  />
                </div>
                <div id="product-description">
                  <label>Category:</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={setFormChange}
                    required
                  >
                    <option value="electronics">electronics</option>
                    <option value="movies">movies</option>
                    <option value="anime">anime</option>
                  </select>
                </div>
              </>
            )}
            {/* Submitting the form */}
            <div className="submit-section">
              <button id="request-button" type="submit">
                {formMode === "put"
                  ? "Update"
                  : formMode === "delete"
                  ? "Confirm Deletion"
                  : "Add"}
              </button>
            </div>
          </form>
          {/* Asking the user if they want to delete */}
          {formMode === "delete" && (
            <div className="ask-to-delete">
              <p>Are you sure you want to delete "{formData.title}"?</p>
            </div>
          )}
          {/* Show all products */}
          <div className="product-list">
            {products.map((product) => (
              <li key={product._id}>
                {product.title}
                <button
                  id="edit-button"
                  onClick={() => putFormHandler(product)}
                >
                  Edit Product
                </button>
                <button
                  id="delete-button"
                  onClick={() => deleteFormHandler(product)}
                >
                  Delete Product
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
