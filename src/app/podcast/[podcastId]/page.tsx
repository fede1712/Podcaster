import { getPodcastDetails } from "@/app/lib/data";

export default async function PodcastDetails() {
  const data = await getPodcastDetails("934552872");

  return <div>PodcastDetails</div>;
}
