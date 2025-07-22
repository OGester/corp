import { StaticImageData } from "next/image";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  const pathname = usePathname();

  return (
    <div className="relaive h-screen ">
      <div className=" absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#37373b]" />
      </div>
      <div className=" pt-48 flex flex-col justify-center items-center text-center px-4">
        {pathname === "/" && (
          <div className="relative w-[260px] h-[90px] sm:w-[380px] sm:h-[120px] md:w-[480px] md:h-[150px] lg:w-[560px] lg:h-[180px] mb-6">
            <Image
              src="/OG-Logo.svg"
              alt="Hero Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
        <h1 className="font-grotesque text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
          {props.title}
        </h1>
      </div>
    </div>
  );
}
