import { PodcastDetailCard } from "@/app/ui/podcastDetailCard/podcastDetailCard";
import { getPodcastDetails, getPodcasts } from "../../lib/data";
import { EpisodesResume } from "@/app/ui/episodesResume/episodesResume";
import { EpisodesList } from "@/app/ui/episodesList/episodesList";
import { Podcast } from "@/app/types";

export default async function PodcastDetails({ params }: { params: { podcastId: string } }) {
  const data = await getPodcastDetails(params.podcastId);
  const podcastsData = await getPodcasts();

  const actualPodcast = podcastsData.feed.entry.filter((podcast: Podcast) => {
    if (podcast.id.attributes["im:id"] === params.podcastId) {
      return podcast;
    }
  });

  return (
    <div className="grid grid-cols-4 gap-4 m-14">
      <section>
        <PodcastDetailCard data={data.results[0]} summary={actualPodcast[0].summary.label} podcastId={params.podcastId} />
      </section>
      <section className="col-span-3">
        <EpisodesResume data={data} />
        <EpisodesList data={data} podcastId={params.podcastId} />
      </section>
    </div>
  );
}
