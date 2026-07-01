import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import Cart from "../components/Cart";
test("Cart integration shows line items from provided cart data", () => {
  const cart = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 }
  ];

  render(<Cart cart={cart} />);

  expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  expect(screen.getByText("Laptop - $999")).toBeInTheDocument();
  expect(screen.getByText("Mouse - $29")).toBeInTheDocument();
});
