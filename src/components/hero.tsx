import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-dvh w-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101012]" />
      </div>
      <div className="pt-50 md:pt-40 2md:pt-75 flex justify-center items-center">
        <h1 className="font-gothic text-[#f5f6fa] px-1.5 text-3xl md:text-4xl 2md:text-6xl xl:text-7xl text-center">
          {props.title}
        </h1>
      </div>
    </div>
  );
}
