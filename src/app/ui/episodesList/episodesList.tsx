import { Episode } from "@/app/types";
import Link from "next/link";

export const EpisodesList = ({ data, podcastId }: { data: { results: Episode[] }; podcastId: string }) => {
  return (
    <table className="table-auto border shadow-md mt-10 p-10 w-full" data-testid="episode-list">
      <thead>
        <tr className="grid grid-cols-10 justify-items-stretch w-full p-4 border-b-2">
          <th className="col-span-6 justify-self-start">Title</th>
          <th className="col-span-2 justify-self-end">Date</th>
          <th className="col-span-2 justify-self-end">Duration</th>
        </tr>
      </thead>
      <tbody className="w-full m-10">
        {
          (data.results.shift(),
          data.results.map((episode: Episode, idx: number) => {
            const date = new Date(episode.releaseDate);
            const duration = new Date(episode.trackTimeMillis);
            const episodeId = episode.trackId;
            return (
              <tr key={idx} className="grid grid-cols-10 justify-items-stretch w-full p-2  border-b-2">
                <td className="text-cyan-600 col-span-6 justify-self-start">
                  <Link href={`/podcast/${podcastId}/episode/${episodeId}`}>{episode.trackName}</Link>
                </td>
                <td className="col-span-2 justify-self-end">{`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}</td>
                <td className="col-span-2 justify-self-end">{`${duration.getMinutes()}:${duration.getSeconds()}`}</td>
              </tr>
            );
          }))
        }
      </tbody>
    </table>
  );
};
