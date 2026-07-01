import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "@jest/globals";

import App from "../App";


test("adding a product updates the cart", async () => {


  const user = userEvent.setup();


  render(<App />);



  // Find the Add to Cart button

  const buttons = screen.getAllByText(
    "Add to Cart"
  );


  // Click first product button

  await user.click(
    buttons[0]
  );



  // Navbar should update

  expect(

    screen.getByText("Cart (1)")

  ).toBeInTheDocument();



  // Product should appear in cart

  expect(

    screen.getByText("Laptop - $999")

  ).toBeInTheDocument();



});