import { image } from "@/app/types";
import Image from "next/image";

export const PodcastCard = ({ src, title, author }: { src: image; title: string; author: string }) => {
  return (
    <div className="border rounded-md p-4 shadow-xl">
      <div className="flex justify-center relative bottom-14">
        <Image alt="cover" src={src.label} width={100} height={100} className="rounded-full" />
      </div>
      <section className="flex justify-center">
        <h2 className="text-center">{title.toLocaleUpperCase()}</h2>
      </section>
      <section className="flex justify-center">
        <p className="font-light text-sm text-center">Author: {author}</p>
      </section>
    </div>
  );
};
