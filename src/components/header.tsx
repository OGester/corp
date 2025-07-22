import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full absolute  text-white z-10 px-1 bg">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/goBack.svg"
            alt="Site Logo"
            width={40}
            height={40}
            className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[85px] lg:h-[85px]"
            priority
          />
        </Link>

        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}

{
  /* <Link href="/" className="flex items-center">
          Home
        </Link> */
}
