import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

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

    // setCart((prevCart) => {
    //   const productExist = prevCart.find((item) => item.title === product.title);

    //   if (productExist && productExist.count > 1) {
    //     // Decrease count if there are more than one of the same item
    //     return prevCart.map((item) =>
    //       item.title === product.title
    //         ? { ...item, count: item.count - 1 }
    //         : item
    //     );
    //   } else {
    //     // If only one or none left, remove it from the cart entirely
    //     return prevCart.filter((item) => item.title !== product.title);
    //   }
    // });

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
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeProduct={removeProduct} />}
        ></Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
