"use client";

import React, { useEffect } from "react";
import Separator from "public/assets/partners/separator.svg";
import Image from "next/image";
import { useUrl } from "@/lib/store";
import { useInView } from "react-intersection-observer";

const poweredby = [
  {
    name: "unity",
    imgUrl: "/assets/partners/powered/image-4.png",
  },
  {
    name: "lua",
    imgUrl: "/assets/partners/powered/lua-white.png",
  },
  {
    name: "aws",
    imgUrl: "/assets/partners/powered/image-6.png",
  },
  {
    name: "openai",
    imgUrl: "/assets/partners/powered/image-7.png",
  },
];

const ourpartners = [
  {
    name: "meta",
    imgUrl: "/assets/partners/our-partners/image-9.png",
  },
  {
    name: "nreal",
    imgUrl: "/assets/partners/our-partners/image-8.png",
  },
  {
    name: "tiktok",
    imgUrl: "/assets/partners/our-partners/image-10.png",
  },
];

const Partner = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { url, setUrl } = useUrl((state) => state);

  useEffect(() => {
    if (inView === true) {
      setUrl("/#partners-section");
      console.log(url);
    }
  }, [inView]);
  return (
    <div
      id="partners-section"
      className="relative flex justify-center items-center"
    >
      <Image
        src={"/assets/partners/separator-v2.png"}
        alt={"glow"}
        height={1000}
        width={1000}
        className="absolute -bottom-[5rem] sm:-bottom-[10rem] lg:-bottom-[15rem] w-full -z-[2] max-w-[1440px] "
      />
      <div className="flex flex-col justify-center items-center py-16 px-8 gap-16  w-full h-full">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1
            className="font-[satoshi] text-base text-[#FAF9F5] font-black uppercase"
            ref={ref}
          >
            Powered By
          </h1>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            {poweredby.map((data, index) => {
              return (
                <Image
                  key={index}
                  src={data.imgUrl}
                  alt={data.name}
                  height={90}
                  width={90}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="font-[satoshi] text-base text-[#FAF9F5] font-black uppercase">
            Our partners
          </h1>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            {ourpartners.map((data, index) => {
              return (
                <Image
                  key={index}
                  src={data.imgUrl}
                  alt={data.name}
                  height={100}
                  width={100}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
