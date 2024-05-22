import { getPodcasts } from "./lib/data";
import { PodcastsList } from "./ui/podcastsList/podcastsList";

export default async function Home() {
  const data = await getPodcasts();
  return <PodcastsList data={data.feed.entry} />;
}
