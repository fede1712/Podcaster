import { Episode } from "@/app/types";

export const EpisodeDetail = ({ actualEpisode }: { actualEpisode: Episode }) => {
  return (
    <div className="p-10 border shadow-xl">
      <h2 className="text-2xl font-bold">{actualEpisode.trackName}</h2>
      <p className="italic py-4 border-b-2">{actualEpisode.description}</p>
      <audio controls className="my-4 w-full">
        <source src={actualEpisode.episodeUrl} type="audio/mp3" />
      </audio>
    </div>
  );
};
