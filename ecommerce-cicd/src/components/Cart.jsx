function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>
              {item.name} - ${item.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;