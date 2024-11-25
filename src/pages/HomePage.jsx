import RandomMovie from "../components/RandomMovie.jsx";
import Product from "./Product.jsx";

function HomePage({ addProduct }) {
  return (
    <>
      <RandomMovie />
      <Product addProduct={addProduct} />
    </>
  );
}

export default HomePage;
