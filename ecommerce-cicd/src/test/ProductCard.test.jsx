import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";

import ProductCard from "../components/ProductCard";

test("ProductCard displays product information", () => {
  const product = {
    id: 1,
    name: "Laptop",
    price: 999,
    image: "test.jpg"
  };

  render(<ProductCard product={product} onAddToCart={() => {}} />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("$999")).toBeInTheDocument();
});

test("clicking Add to Cart calls function", async () => {
  const user = userEvent.setup();
  const mockFunction = vi.fn();

  const product = {
    id: 1,
    name: "Laptop",
    price: 999,
    image: "test.jpg"
  };

  render(<ProductCard product={product} onAddToCart={mockFunction} />);

  await user.click(screen.getByText("Add to Cart"));

  expect(mockFunction).toHaveBeenCalled();
});
