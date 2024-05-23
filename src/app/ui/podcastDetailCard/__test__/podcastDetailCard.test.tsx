import React from "react";
import { render, screen } from "@testing-library/react";
import { PodcastDetailCard } from "../podcastDetailCard";
import { Episode } from "@/app/types";

describe("Renders PodcastDetailCard correctly", () => {
  test("should render PodcastDetailCard", () => {
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

    render(<PodcastDetailCard data={episode} summary="Podcast summary test" podcastId="1" />);
    const collectionNameElement = screen.queryByText("Test collection name");
    expect(collectionNameElement).not.toBeNull();

    const artistNameElement = screen.queryByText("by Test artist name");
    expect(artistNameElement).not.toBeNull();

    const descriptionElement = screen.queryByText("Description:");
    expect(descriptionElement).not.toBeNull();

    const summaryElement = screen.queryByText("Podcast summary test");
    expect(summaryElement).not.toBeNull();

    const { asFragment } = render(<PodcastDetailCard data={episode} summary="Podcast summary test" podcastId="1" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
