import { getPodcasts } from "./lib/data";
import { PodcastCard } from "./ui/podcastCard/podcastCard";

export default async function Home() {
  const data = await getPodcasts();
  console.log(data.feed.entry[1]);

  return (
    <div className="grid grid-cols-4 gap-14 m-14">
      {data.feed.entry.map((podcast: any) => {
        return <PodcastCard author={podcast["im:artist"].label} title={podcast["im:name"].label} src={podcast["im:image"][2].label} />;
      })}
    </div>
  );
}
