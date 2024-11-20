import { Link } from "react-router-dom";
import logo from "../assets/img/negative-man-pic.png";

function Navbar({ itemCount }) {
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
        Cart ({itemCount}) <i className="fas fa-heart"></i>
      </Link>
    </div>
  );
}

export default Navbar;
