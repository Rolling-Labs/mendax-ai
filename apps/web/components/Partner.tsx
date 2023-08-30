import React from "react";
import Separator from "public/assets/partners/separator.svg";
import Image from "next/image";

const poweredby = [
  {
    name: "unity",
    imgUrl: "/assets/partners/powered/image-4.png",
  },
  {
    name: "lua",
    imgUrl: "/assets/partners/powered/image-5.png",
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
  return (
    <div className="relative flex justify-center items-center h-[800px] lg:h-[1000px] ">
      <Image
        src={"/assets/partners/separator-footer.png"}
        alt={"glow"}
        height={1000}
        width={1000}
        className="absolute bottom-0 lg:-bottom-[3rem] w-full -z-[2] max-w-[1440px] "
      />
      <div className="flex flex-col justify-center items-center py-16 px-8 gap-16  w-full h-full">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="font-[satoshi] text-base text-[#FAF9F5] font-black uppercase">
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
