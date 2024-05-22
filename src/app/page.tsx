import { getPodcasts } from "./lib/data";

export default async function Home() {
  const data = await getPodcasts();

  return <div>Home</div>;
}
