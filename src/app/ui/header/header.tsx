import Loading from "@/app/podcast/loading";
import Link from "next/link";
import { Suspense } from "react";

export const Header = () => {
  return (
    <header className="flex justify-between border-b-4 m-10 ">
      <Link href="/">
        <h1 className="text-cyan-600 text-xl  font-bold">Podcaster</h1>
      </Link>
    </header>
  );
};
