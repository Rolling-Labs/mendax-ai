"use client";
import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const metadata = [
  {
    name: "Character Head",
    isLive: true,
  },
  {
    name: "Body Build",
    isLive: false,
  },
  {
    name: "Accessories",
    isLive: false,
  },
  {
    name: "Maps and bases",
    isLive: false,
  },
];

const characterhead = [
  {
    name: "01",
    imgUrl: "/assets/customize/01.png",
  },
  {
    name: "11",
    imgUrl: "/assets/customize/11.png",
  },
  {
    name: "21",
    imgUrl: "/assets/customize/21.png",
  },
  {
    name: "31",
    imgUrl: "/assets/customize/31.png",
  },
];

const CustomizeEverything = () => {
  return (
    <div className="relative flex justify-center items-center h-auto pt-[8rem] bg-[url('/assets/bg/bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col gap-16 max-w-[1440px] grow px-[1rem] lg:px-0">
        <div className="flex flex-col gap-8">
          <h1 className="font-[satoshi] text-2xl lg:text-5xl font-bold">
            <span className="text-white">Customize </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef2897] to-[#3c29f7]">
              everything
            </span>
          </h1>
          <p className="text-[#FAF9F5B8] font-[satoshi] font-medium text-base max-w-[848px]">
            Immerse yourself in a dynamic community of like-minded individuals,
            where sharing your creations and collaborating with others is
            seamless and inspiring. Experience the thrill of witnessing your
            visions materialize into interactive experiences that will captivate
            players from around the globe.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col max-w-[190px] sm:max-w-max sm:flex-row lg:flex-col gap-4 w-full lg:max-w-[190px]">
            {metadata.map((data, index) => {
              return (
                <Button
                  key={index}
                  disabled={!data.isLive}
                  className={`p-4 font-[satoshi] text-base uppercase text-left rounded-full focus-visible:outline-none ${
                    !data.isLive
                      ? "font-bold text-white/50"
                      : "font-black text-white bg-gradient-to-r from-[#7e1d57] to-[#301e8c]"
                  }`}
                >
                  {data.name}
                </Button>
              );
            })}
          </div>
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper max-w-[180px] sm:max-w-[375px] md:max-w-[640px] lg:max-w-[1024px]"
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {characterhead.map((data, index) => {
              return (
                <SwiperSlide key={index} className="group">
                  <Image
                    src={data.imgUrl}
                    alt={data.name}
                    height={300}
                    width={300}
                    className="w-full max-w-[300px] scale-75 p-4 duration-300"
                  />
                  <h1 className="text-white absolute top-[3.5rem] right-[3.5rem] rounded-full bg-[#d829a5] blur-2xl max-w-[200px] max-h-[200px] h-full w-full -z-[1] duration-300 opacity-0 lg:group-hover:opacity-40">
                    a
                  </h1>
                  <h1 className="text-white absolute bottom-[3.5rem] left-[3.5rem] rounded-full bg-[#4229f4] blur-2xl max-w-[200px] max-h-[200px] h-full w-full -z-[1] duration-300 opacity-0 lg:group-hover:opacity-40">
                    a
                  </h1>
                  {/* <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-full -translate-y-1/2 bg-pink-600 blur-md max-w-[300px] max-h-[300px] h-full w-full -z-[1] duration-300 opacity-0 group-hover:opacity-20">
                    a
                  </h1> */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomizeEverything;
