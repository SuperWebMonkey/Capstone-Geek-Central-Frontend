/**
 *
 * Login/Sign Up page for the Geek Central website
 * Does not function yet
 *
 */

import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "../styles/LoginPage.css";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will implement authentication logic
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Login */}
        <div className="header">
          <h2>{isLogin ? "Sign in to Geek Central" : "Create your account"}</h2>
          <p>
            {isLogin ? "New to Geek Central? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create an account" : "Sign in"}
            </button>
          </p>
        </div>

        {/* Social Media Logins */}
        <div className="social-login">
          <button>
            <FaGoogle />
            <span>Google</span>
          </button>
          <button>
            <FaGithub />
            <span>GitHub</span>
          </button>
        </div>
        {/* divideer between social media logins and regular login */}
        <div className="divider">
          <span>Or continue with</span>
        </div>

        {/* Form Handler */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {/* Submit button */}
          <button type="submit">
            {isLogin ? "Sign in" : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
