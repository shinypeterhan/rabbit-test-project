import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import OfferList from "../containers/OfferList";

test("renders Offer list pages", () => {
  render(<OfferList />);
  const linkElement = screen.getByText(/BEST SPORTSBOOK OFFERS IN/i);
  expect(linkElement).toBeInTheDocument();
  const buttonElement1 = screen.getByText(/GET BOUNS/i);
  expect(buttonElement1).toBeInTheDocument();
  const buttonElement2 = screen.getByText(/BET NOW/i);
  expect(buttonElement2).toBeInTheDocument();
  const buttonElement3 = screen.getByText(/CLAIM OFFER/i);
  expect(buttonElement3).toBeInTheDocument();
});
