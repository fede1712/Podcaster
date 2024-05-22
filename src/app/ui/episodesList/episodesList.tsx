import { Episode } from "@/app/types";

export const EpisodesList = ({ data }: { data: any }) => {
  return (
    <table className="table-auto  border shadow-md mt-10 p-10 ">
      <thead>
        <tr className="grid grid-cols-10 justify-items-stretch w-full p-4 border-b-2">
          <th className="col-span-6 justify-self-start">Title</th>
          <th className="col-span-2 justify-self-end">Date</th>
          <th className="col-span-2 justify-self-end">Duration</th>
        </tr>
      </thead>
      <tbody className="w-full m-10">
        {data.results.map((episode: Episode) => {
          const date = new Date(episode.releaseDate);
          const duration = new Date(episode.trackTimeMillis);
          return (
            <tr className="grid grid-cols-10 justify-items-stretch w-full p-2  border-b-2">
              <td className="text-cyan-600 col-span-6 justify-self-start">{episode.trackName}</td>
              <td className="col-span-2 justify-self-end">{`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}</td>
              <td className="col-span-2 justify-self-end">{`${duration.getMinutes()}:${duration.getSeconds()}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
