import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import Navbar from "../components/Navbar";

test("Navbar displays store name and cart count", () => {
  render(<Navbar cartCount={3} />);

  expect(screen.getByText("Wrong Store")).toBeInTheDocument();
  expect(screen.getByText(/Cart \(3\)/)).toBeInTheDocument();
});
