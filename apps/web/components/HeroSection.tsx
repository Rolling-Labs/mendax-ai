"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Separator from "public/assets/hero/separator.svg";
import HeroCharacter from "public/assets/hero/hero-character.svg";
import { Button } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";
import { useUrl } from "@/lib/store";

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { url, setUrl } = useUrl((state) => state);

  useEffect(() => {
    if (inView === true) {
      setUrl("/#home-section");
    }
  }, [inView]);
  return (
    // h-[600px] md:h-[900px] lg:h-[1200px] 2xl:h-[1500px]
    <div
      id="home-section"
      className="relative flex justify-center items-center h-[600px] md:h-[900px] lg:h-[1200px] 2xl:h-[1200px] pt-[8rem]"
      ref={ref}
    >
      <Separator className="absolute bottom-0 z-[2] max-w-[1500px]" />
      <Image
        src={"/assets/hero/shadow.png"}
        alt={"aura"}
        width={1400}
        height={1400}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[2rem] sm:bottom-[4rem] w-full max-h-[1200px] max-w-[1440px] -z-[2]"
      />
      <Image
        src={"/assets/hero/hero-character.png"}
        alt={"aura"}
        width={2000}
        height={2000}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[3rem] sm:bottom-[4rem] w-full max-h-[850px]"
      />
      {/* <HeroCharacter className="absolute left-1/2 transform -translate-x-1/2 bottom-[2rem] sm:bottom-[4rem] w-full max-h-[870px]" /> */}
      <Button
        // onClick={() => setShowModal(true)}
        className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100 bg-gradient-to-l from-[#3c29f7] to-[#ef2897] hover:from-[#ef2897] text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase absolute left-1/2 transform -translate-x-1/2 bottom-[2rem] sm:bottom-[1rem] lg:bottom-[16.5rem] z-[3]`}
      >
        Start Creating
      </Button>
      <div className="relative flex flex-col justify-start items-center max-w-[1440px] grow px-[1rem] h-full">
        <h1 className="font-[satoshi] text-5xl sm:text-8xl font-bold text-center text-[#FAF9F5] block lg:hidden">
          <span className="text-[#FAF9F5]">Welcome to </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef2897] to-[#3c29f7] leading-[7.5rem]">
            Mendax {""}
          </span>
        </h1>
        <h1 className="font-[satoshi] text-[#FAF9F5CC] text-xl sm:text-4xl font-medium leading-none block lg:hidden">
          Build your Dream Game
        </h1>

        <h1 className="flex-wrap justify-center items-center max-w-[90rem] gap-1 font-[satoshi] text-5xl sm:text-8xl font-bold text-center  absolute top-[0%] -translate-y-[0%] -z-[1] hidden lg:flex">
          <span className="text-[#FAF9F5]">Welcome to</span> <br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef2897] to-[#3c29f7] leading-[7.5rem]">
            Mendax {""}
          </span>
        </h1>
        <h1 className="font-[satoshi] text-[#FAF9F5CC] text-xl sm:text-4xl font-medium leading-relaxed absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[10%] hidden lg:block">
          Build your Dream Game
        </h1>
        {/* <h1 className="text-[#FAF9F5] absolute top-[21%] left-1/2 transform -translate-x-1/2 -translate-y-[21%] font-[satoshi] text-base font-medium text-center hidden lg:flex">
          Unleash Your Gaming Vision: Create, Innovate, Dominate!
        </h1> */}
      </div>
    </div>
  );
};

export default HeroSection;
