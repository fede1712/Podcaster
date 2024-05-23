export interface Podcast {
  "im:name": { label: string };
  "im:image": image[];
  summary: { label: string };
  title: { label: string };
  id: { attributes: { "im:id": string } };
  "im:artist": { label: string };
}

export type image = { label: string };

export interface Episode {
  artworkUrl600: string;
  trackTimeMillis: number;
  collectionName: string;
  description: string;
  trackId: number;
  trackName: string;
  episodeUrl: string;
  artistName: string;
  releaseDate: string;
}
