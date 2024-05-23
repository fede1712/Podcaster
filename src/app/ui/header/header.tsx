import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between border-b-4 m-10">
      <Link href="/" data-testid="header">
        <h1 className="text-cyan-600 text-xl  font-bold">Podcaster</h1>
      </Link>
    </header>
  );
};
