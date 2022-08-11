import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Footer from "../layouts/Footer";

test("renders Footer", () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const year_component = screen.getByText(/2022/i);
  expect(year_component).toBeInTheDocument();
  expect(currentYear).toBe(2022);
});
