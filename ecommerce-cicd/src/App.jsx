import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Keyboard",
      price: 79,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Mouse",
      price: 29,
      image: "https://via.placeholder.com/200"
    }
  ];


  const addToCart = (product) => {

    setCart([
      ...cart,
      product
    ]);

  };


  return (
    <>

      <Navbar 
        cartCount={cart.length}
      />


      <ProductList
        products={products}
        onAddToCart={addToCart}
      />


      <Cart
        cart={cart}
      />

    </>
  );
}

export default App;