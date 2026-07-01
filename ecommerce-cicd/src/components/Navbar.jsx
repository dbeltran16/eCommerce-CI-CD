function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>My Store</h1>
      <p>🛒 Cart ({cartCount})</p>
    </nav>
  );
}

export default Navbar;
