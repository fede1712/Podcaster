import React from "react";
import { render, screen } from "@testing-library/react";
import { EpisodesResume } from "../episodesResume";

test("Renders episode resume correctly", () => {
  render(<EpisodesResume data={{ resultCount: 10 }} />);

  const episodesResumeElement = screen.queryByText("Episodes: 10");
  expect(episodesResumeElement).not.toBeNull();

  const { asFragment } = render(<EpisodesResume data={{ resultCount: 10 }} />);

  expect(asFragment()).toMatchSnapshot();
});
