import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center pt-[8rem] pb-[5rem] h-auto">
      <div className="relative flex flex-col max-w-[1440px] grow px-[1rem] ">
        <div className="flex flex-col gap-8 max-w-[850px]">
          <h1 className="font-[satoshi] text-4xl lg:text-6xl font-bold  text-white tracking-wide">
            Blockchain&#39;s first
            <br></br>
            <span className="text-[#29FF98]"> idea-to-game </span>
            platform
          </h1>
          <p className="text-[#FAF9F5B8]/70 text-base font-[satoshi] font-medium">
            Step into the forefront of game-making innovation and explore the
            joy of crafting your unique gaming sensations, all at your
            fingertips. Join us now and embark on a journey filled with
            excitement, imagination, and the power to turn your ideas into
            reality in a matter of seconds. The adventure begins here!
          </p>
          <div>
            <button className="text-[#0B1113] uppercase bg-[#29FF98] px-8 py-4 rounded-full font-[satoshi] font-black duration-150 hover:scale-105">
              Create Now
            </button>
          </div>
        </div>
        <div className="flex items-start justify-center py-2">
          <Image
            src={"/assets/hero/overall-illustration-v2.webp"}
            alt={"overall"}
            height={1000}
            width={1600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
