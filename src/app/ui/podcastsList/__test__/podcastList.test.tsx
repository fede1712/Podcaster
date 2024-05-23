import React from "react";
import { render, screen } from "@testing-library/react";
import { Episode, Podcast } from "@/app/types";
import { PodcastsList } from "../podcastsList";

describe("Renders PodcastList correctly", () => {
  test("should render PodcastList", () => {
    const podcast: Podcast[] = [
      {
        "im:name": { label: "Test podcast 1" },
        "im:image": [{ label: "http://example.com/artwork.jpg-1" }],
        summary: { label: "Summary podcast 1" },
        title: { label: "Title podcast 1" },
        id: { attributes: { "im:id": "1" } },
        "im:artist": { label: "Artist Podacast 1" },
      },
      {
        "im:name": { label: "Test podcast 2" },
        "im:image": [{ label: "http://example.com/artwork.jpg-2" }],
        summary: { label: "Summary podcast 2" },
        title: { label: "Title podcast 2" },
        id: { attributes: { "im:id": "2" } },
        "im:artist": { label: "Artist Podacast 2" },
      },
      {
        "im:name": { label: "Test podcast 3" },
        "im:image": [{ label: "http://example.com/artwork.jpg-3" }],
        summary: { label: "Summary podcast 3" },
        title: { label: "Title podcast 3" },
        id: { attributes: { "im:id": "3" } },
        "im:artist": { label: "Artist Podacast 3" },
      },
    ];

    render(<PodcastsList data={podcast} />);

    const nameElement = screen.queryByText("TEST PODCAST 1");
    expect(nameElement).not.toBeNull();

    const artistNameElement = screen.queryByText("Author: Artist Podacast 1");
    expect(artistNameElement).not.toBeNull();

    const { asFragment } = render(<PodcastsList data={podcast} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
