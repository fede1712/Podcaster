import { getPodcastDetails, getPodcasts } from "@/app/lib/data";
import { Episode, Podcast } from "@/app/types";
import { EpisodeDetail } from "@/app/ui/episodeDetail/episodeDetail";
import { PodcastDetailCard } from "@/app/ui/podcastDetailCard/podcastDetailCard";

export default async function EpisodeDetails({ params }: { params: { podcastId: string; episodeId: string } }) {
  const data = await getPodcastDetails(params.podcastId);

  const podcastsData = await getPodcasts();

  const actualPodcast = podcastsData.feed.entry.filter((podcast: Podcast) => {
    if (podcast.id.attributes["im:id"] === params.podcastId) {
      return podcast;
    }
  });

  const actualEpisode = data.results.filter((episode: Episode) => {
    if (episode.trackId === Number(params.episodeId)) {
      return episode;
    }
  });

  return (
    <div className="grid grid-cols-4 gap-4 m-14">
      <section>
        <PodcastDetailCard data={data.results[0]} summary={actualPodcast[0].summary.label} podcastId={params.podcastId} />
      </section>
      <section className="col-span-3">
        <EpisodeDetail actualEpisode={actualEpisode[0]} />
      </section>
    </div>
  );
}
