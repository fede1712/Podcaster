import Link from "next/link";

export const Header = () => {
  return (
    <Link href="/">
      <h1 className="text-cyan-600 m-10 text-xl border-b-4 font-bold">Podcaster</h1>
    </Link>
  );
};
