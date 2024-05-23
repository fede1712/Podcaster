import React from "react";
import { render, screen } from "@testing-library/react";
import { Episode } from "@/app/types";
import { EpisodesList } from "../episodesList";

test("Renders episodes list correctly", () => {
  const episodeList: Episode[] = [
    {
      trackName: "Test Episode 1",
      description: "This is a test episode description. 1",
      episodeUrl: "http://example.com/test-episode.mp3-1",
      artworkUrl600: "http://example.com/artwork.jpg-1",
      trackTimeMillis: 123456,
      artistName: "Test artist name 1",
      collectionName: "Test collection name 1",
      releaseDate: "Test realease date 1",
      trackId: 1,
    },
    {
      trackName: "Test Episode 2",
      description: "This is a test episode description. 2",
      episodeUrl: "http://example.com/test-episode.mp3-2",
      artworkUrl600: "http://example.com/artwork.jpg-2",
      trackTimeMillis: 123456,
      artistName: "Test artist name 2",
      collectionName: "Test collection name 2",
      releaseDate: "Test realease date 2",
      trackId: 2,
    },
  ];

  render(<EpisodesList data={{ results: episodeList }} podcastId="123456" />);
  const tableTitleElement = screen.queryByText("Title");
  expect(tableTitleElement).not.toBeNull();

  const tableDateElement = screen.queryByText("Date");
  expect(tableDateElement).not.toBeNull();

  const tableDurationElement = screen.queryByText("Duration");
  expect(tableDurationElement).not.toBeNull();

  const { asFragment } = render(<EpisodesList data={{ results: episodeList }} podcastId="123456" />);

  expect(asFragment()).toMatchSnapshot();
});
