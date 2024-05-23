import { Episode } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export const PodcastDetailCard = ({ data, summary, podcastId }: { data: Episode; summary: string; podcastId: string }) => {
  return (
    <div className="border shadow-xl" data-testid="podcast-detail-card">
      {data && (
        <>
          <div className="flex justify-center border-b-2 p-8">
            <Link href={`/podcast/${podcastId}`}>
              <Image alt={data.collectionName} src={data.artworkUrl600} width={200} height={200} priority={true} />
            </Link>
          </div>
          <section className="p-8 border-b-2">
            <Link href={`/podcast/${podcastId}`}>
              <h3 className="font-bold">{data.collectionName}</h3>
            </Link>
            <p className="italic">by {data.artistName}</p>
          </section>
          <section className="p-8">
            <h3 className="font-bold">Description:</h3>
            <p className="text-sm text-left italic break-words">{summary}</p>
          </section>
        </>
      )}
    </div>
  );
};
