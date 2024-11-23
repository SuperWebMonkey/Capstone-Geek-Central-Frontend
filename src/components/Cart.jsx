import "../styles/Cart.css";

function Cart({ cart, removeProduct }) {
  return (
    <div className="cart-section">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((product, i) => (
            <div key={i} className="cart-item">
              <div>
                <h3>{product.title}</h3>
                <p>Count: {product.count}</p>
                <button
                  onClick={() => removeProduct(product)}
                  className="trash-button"
                >
                  Trash
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="cart-warning">Cart is Empty</h2>
      )}
    </div>
  );
}

export default Cart;
