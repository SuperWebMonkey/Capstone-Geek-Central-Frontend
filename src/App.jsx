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
    if (cart.length > 0) {
    }

    let productInCart = cart.find((item) => item.title === product.title);
    console.log("in cart", productInCart);

    checkInCart(productInCart, product);
  };

  const checkInCart = (inCart, product) => {
    if (inCart) {
      setCart(
        cart.map((item) =>
          item.name === product.name ? { ...item, count: item.count + 1 } : item
        )
      );
      console.log("Cart 2:", cart);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
      console.log("Contents", [...cart, { ...product, count: 1 }]);
      console.log("Cart 1:", cart);
    }
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
    return cart.reduce((sum, product) => {
      sum += product.count;
    }, 0);
  };

  return (
    <>
      <Navbar itemCount={0} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cart={cart}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          }
        />
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
