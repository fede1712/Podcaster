import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../header";

describe("Renders header correctly", () => {
  test("should render header correctly", () => {
    render(<Header />);

    const titleElement = screen.queryByText("Podcaster");
    expect(titleElement).not.toBeNull();

    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
