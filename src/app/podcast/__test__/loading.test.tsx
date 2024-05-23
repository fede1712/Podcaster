import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../loading";

test("Renders loading correctly", () => {
  render(<Loading />);

  const loadingElement = screen.queryByTestId("loading");
  expect(loadingElement).not.toBeNull();

  const { asFragment } = render(<Loading />);

  expect(asFragment()).toMatchSnapshot();
});
