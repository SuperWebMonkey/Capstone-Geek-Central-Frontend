import { Link } from "react-router-dom";
import logo from "../assets/img/negative-man-pic.png";

function Navbar({ productCount }) {
  console.log("Product count:", productCount);

  const linkStyle = {
    float: "right",
  };

  return (
    // Navbar
    <div id="navbar">
      <div className="logo">
        <Link to="/">
          <img id="logo-pic" src={logo} alt="main Logo" />
        </Link>
      </div>
      <Link to="/" className="page tech-shop">
        Geek Central
      </Link>
      <Link to="#" className="page login" style={linkStyle}>
        login
      </Link>
      <Link to="/cart" className="page wishlist" style={linkStyle}>
        Cart {productCount >= 0 && <span>({productCount})</span>}{" "}
        {/* Show count if > 0 */} <i className="fas fa-heart"></i>
      </Link>
    </div>
  );
}

export default Navbar;
