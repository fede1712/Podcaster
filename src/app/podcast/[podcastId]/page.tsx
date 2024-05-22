import { getPodcastDetails } from "../../lib/data";

export default async function PodcastDetails() {
  const data = await getPodcastDetails("121");

  return <div>PodcastDetails</div>;
}
