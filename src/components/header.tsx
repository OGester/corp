import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute  text-[#f5f6fa] z-10 px-4">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto py-3 px-2">
        <Link
          href="/"
          className="flex items-center font-grotesque text-xl 2md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide"
        >
          Home
        </Link>

        <div
          className="font-grotesque text-m md:text-xl 2md:text-2xl lg:text-3xl xl:text-4xl font-semibold
         space-x-3 md:space-x-4 2md:space-x-5 lg:space-x-6"
        >
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
