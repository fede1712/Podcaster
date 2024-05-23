import React from "react";

export const EpisodesResume = ({ data }: { data: { resultCount: number } }) => {
  return <p className="border shadow-md p-4 font-bold">Episodes: {data.resultCount}</p>;
};
