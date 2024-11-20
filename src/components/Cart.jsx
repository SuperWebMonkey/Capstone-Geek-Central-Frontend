function Cart({ cartItems, removeItem }) {
  return (
    <div className="cart-section">
      <h1>Cart</h1>
      {/* {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((digi, i) => (
              <div key={i} className="cart-item">
                <img src={digi.img} alt={digi.name} />
                <div>
                  <h3>{digi.name}</h3>
                  <p>Count: {digi.count}</p>
                  <button
                    onClick={() => removeItem(digi)}
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
        )} */}
    </div>
  );
}

export default Cart;
