"use client";

import { useState } from "react";
import { PodcastCard } from "../podcastCard/podcastCard";
import { Filter } from "../filter/filter";
import { Podcast } from "@/app/types";

export const PodcastsList = ({ data }: { data: Podcast[] }) => {
  const [results, setResults] = useState(data);
  const [search, setSearch] = useState("");

  return (
    <>
      <Filter data={data} results={results} setResults={setResults} setSearch={setSearch} search={search} />
      <div className="grid grid-cols-4 gap-14 m-14">
        {results.map((podcast: Podcast) => {
          const correctImg = podcast["im:image"][podcast["im:image"].length - 1];
          return (
            <PodcastCard key={podcast.id.attributes["im:id"]} author={podcast["im:artist"].label} title={podcast["im:name"].label} src={correctImg} />
          );
        })}
      </div>
    </>
  );
};
