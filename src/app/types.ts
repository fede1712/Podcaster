export interface Podcast {
  "im:name": { label: string };
  "im:image": image[];
  summary: { label: string };
  "im:price": { label: string; attributes: { amount: string; currency: string } };
  "im:contentType": { attributes: { term: string; label: string } };
  rights: { label: string };
  title: { label: string };
  link: { attributes: { rel: string; type: string; href: string } };
  id: { label: string; attributes: { "im:id": string } };
  "im:artist": { label: string; attributes: { href: string } };
  category: { attributes: { "im:id": string; term: string; scheme: string; label: string } };
  "im:releaseDate": { label: string; attributes: { label: string } };
}

export type image = { label: string; attributes: { height: string } };

export interface Episode {
  country: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  artworkUrl600: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  shortDescription: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  genres: genres[];
  episodeGuid: string;
  description: string;
  releaseDate: string;
  previewUrl: string;
  trackId: number;
  trackName: string;
  feedUrl: string;
  artistIds: [];
  episodeUrl: string;
  artworkUrl60: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  kind: string;
  wrapperType: string;
  genreIds: string[];
  primaryGenreName: string;
  currency: string;
  trackCount: number;
  trackExplicitness: string;
  artistName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artworkUrl30: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  collectionExplicitness: string;
}

export type genres = { name: string; id: string };
