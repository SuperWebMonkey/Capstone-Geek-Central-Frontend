import { useState, useEffect } from "react";
import axios from "axios";

function AdminPage() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const api_url = import.meta.env.VITE_API_URL;

  // Updating the change
  const setChange = (e) => {
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

  return (
    <div className="form-section">
      <h1>Admin Form</h1>
    </div>
  );
}

export default AdminPage;
