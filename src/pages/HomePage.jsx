import RandomQuote from "../components/RandomQuotes.jsx";
import Product from "./Product.jsx";

function HomePage({ addProduct }) {
  return (
    <>
      <RandomQuote />
      <Product addProduct={addProduct} />
    </>
  );
}

export default HomePage;
