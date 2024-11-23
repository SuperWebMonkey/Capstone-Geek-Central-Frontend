import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // Add item to the cart
  const addProduct = (product) => {
    console.log("product is", product);

    let productInCart = cart.find((item) => item.title === product.title);
    console.log("in cart", productInCart);

    // Use prevCart to get the most recent state and then add count
    setCart((prevCart) => {
      // If product exist, add count to  the existing product
      if (productInCart) {
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        // if product does not exist, set to one
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  // Remove product from the cart
  const removeProduct = (product) => {
    const productExist = cart.find((item) => item.title === product.title);

    removeFromCart(productExist, product);
  };

  const removeFromCart = (productExist, product) => {
    if (productExist && productExist.count > 1) {
      setCart(
        cart.map((item) =>
          item.title === product.title
            ? { ...item, count: item.count - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.title !== product.title));
    }
  };

  // Count all products in the cart
  const getCount = () => {
    return cart.reduce((sum, product) => (sum += product.count), 0);
  };

  return (
    <>
      <Navbar productCount={getCount()} />
      <Routes>
        <Route path="/" element={<HomePage addProduct={addProduct} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeProduct={removeProduct} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
