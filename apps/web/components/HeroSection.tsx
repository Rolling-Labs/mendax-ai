"use client";
import React from "react";
import Image from "next/image";
import Separator from "public/assets/hero/separator.svg";
import HeroCharacter from "public/assets/hero/hero-character.svg";
import { Button } from "@nextui-org/react";

const HeroSection = () => {
  return (
    // h-[600px] md:h-[900px] lg:h-[1200px] 2xl:h-[1500px]
    <div className="relative flex justify-center items-center h-[600px] md:h-[900px] lg:h-[1200px] 2xl:h-[1200px] pt-[8rem]">
      <Separator className="absolute bottom-0 z-[2] max-w-[1500px]" />
      <Image
        src={"/assets/hero/shadow.png"}
        alt={"aura"}
        width={1400}
        height={1400}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[2rem] sm:bottom-[4rem] w-full max-h-[1200px] max-w-[1440px] -z-[2]"
      />
      <HeroCharacter className="absolute left-1/2 transform -translate-x-1/2 bottom-[2rem] sm:bottom-[4rem] w-full max-h-[870px]" />
      <Button
        // onClick={() => setShowModal(true)}
        className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100 bg-gradient-to-l from-[#3c29f7] to-[#ef2897] hover:from-[#ef2897] text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase absolute left-1/2 transform -translate-x-1/2 bottom-[2rem] sm:bottom-[1rem] lg:bottom-[16.5rem] z-[3]`}
      >
        Sign up now
      </Button>
      <div className="relative flex flex-col justify-start items-center max-w-[1440px] grow px-[1rem] h-full">
        <h1 className="font-[satoshi] text-4xl md:text-5xl lg:text-8xl font-bold text-center text-[#FAF9F5] mb-2 inline-block lg:hidden">
          <span className="text-[#FAF9F5]">Blockchain’s first</span> <br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef2897] to-[#3c29f7]">
            idea-to-game {""}
          </span>
          <span className="text-[#FAF9F5]">platform</span>
        </h1>
        <h1 className="text-[#FAF9F5] font-[satoshi] text-base font-medium text-center inline-block lg:hidden">
          Unleash Your Gaming Vision: Create, Innovate, Dominate!
        </h1>
        <h1 className="flex-wrap justify-center items-center max-w-[1200px] gap-1 font-[satoshi] text-4xl md:text-5xl lg:text-8xl font-bold text-center  absolute top-[0%] -translate-y-[0%] -z-[1] hidden lg:flex">
          <span className="text-[#FAF9F5]">Blockchain’s first</span> <br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef2897] to-[#3c29f7] leading-[7.5rem]">
            idea-to-game {""}
          </span>
          <span className="text-[#FAF9F5]">platform</span>
        </h1>
        <h1 className="text-[#FAF9F5] absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-[20%] font-[satoshi] text-base font-medium text-center hidden lg:flex">
          Unleash Your Gaming Vision: Create, Innovate, Dominate!
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
