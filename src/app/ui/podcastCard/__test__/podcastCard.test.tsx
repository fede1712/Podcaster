import React from "react";
import { render, screen } from "@testing-library/react";
import { PodcastCard } from "../podcastCard";

describe("Renders PodcastCard correctly", () => {
  test("should render PodcastCard", () => {
    render(<PodcastCard src={{ label: "http://example.com/artwork.jpg" }} title="Podcast title" author="Podcast author" podcastId="1" />);

    const titleElement = screen.queryByText("PODCAST TITLE");
    expect(titleElement).not.toBeNull();

    const authorElement = screen.queryByText("Author: Podcast author");
    expect(authorElement).not.toBeNull();

    const { asFragment } = render(
      <PodcastCard src={{ label: "http://example.com/artwork.jpg" }} title="Podcast title" author="Podcast author" podcastId="1" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
