import { PodcastDetailCard } from "@/app/ui/podcastDetailCard/podcastDetailCard";
import { getPodcastDetails } from "../../lib/data";
import { EpisodesResume } from "@/app/ui/episodesResume/episodesResume";
import { EpisodesList } from "@/app/ui/episodesList/episodesList";

export default async function PodcastDetails({ params }: { params: { podcastId: string } }) {
  const data = await getPodcastDetails(params.podcastId);

  return (
    <div className="grid grid-cols-4 gap-4 m-14">
      <section>
        <PodcastDetailCard data={data} />
      </section>
      <section className="col-span-3">
        <EpisodesResume data={data} />
        <EpisodesList data={data} />
      </section>
    </div>
  );
}
