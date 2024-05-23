import React from "react";
import { render, screen } from "@testing-library/react";
import { Filter } from "../filter";
import { Podcast } from "@/app/types";

test("Renders filter correctly", () => {
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

  const podcastResults: Podcast[] = [
    {
      "im:name": { label: "Test podcast 1" },
      "im:image": [{ label: "http://example.com/artwork.jpg-1" }],
      summary: { label: "Summary podcast 1" },
      title: { label: "Title podcast 1" },
      id: { attributes: { "im:id": "1" } },
      "im:artist": { label: "Artist Podacast 1" },
    },
  ];

  render(<Filter data={podcast} results={podcastResults} search="" setResults={() => jest.fn()} setSearch={() => jest.fn()} />);

  const results = screen.queryByText("1");
  expect(results).not.toBeNull();

  const { asFragment } = render(
    <Filter data={podcast} results={podcastResults} search="" setResults={() => jest.fn()} setSearch={() => jest.fn()} />
  );

  expect(asFragment()).toMatchSnapshot();
});
