import React from "react";
import { render, screen } from "@testing-library/react";
import { Episode } from "@/app/types";
import { EpisodeDetail } from "../episodeDetail";

test("Renders episode details correctly", () => {
  const episode: Episode = {
    trackName: "Test Episode",
    description: "This is a test episode description.",
    episodeUrl: "http://example.com/test-episode.mp3",
    artworkUrl600: "http://example.com/artwork.jpg",
    trackTimeMillis: 123456,
    artistName: "Test artist name",
    collectionName: "Test collection name",
    releaseDate: "Test realease date",
    trackId: 123456,
  };

  render(<EpisodeDetail actualEpisode={episode} />);
  const titleElement = screen.queryByText("Test Episode");
  expect(titleElement).not.toBeNull();

  const descriptionElement = screen.queryByText("This is a test episode description.");
  expect(descriptionElement).not.toBeNull();

  const { asFragment } = render(<EpisodeDetail actualEpisode={episode} />);

  expect(asFragment()).toMatchSnapshot();
});
