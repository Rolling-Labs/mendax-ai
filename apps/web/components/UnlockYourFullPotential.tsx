"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const UnlockYourFullPotential = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center py-16 sm:py-32 gap-4 sm:gap-8 max-w-[37.5rem] px-4 lg:px-0">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="font-[satoshi] text-cWhite-100 text-2xl sm:text-5xl font-bold text-center">
            Unlock Your Full Potential
          </h1>
          <p className="font-[satoshi] text-base font-medium text-cWhite-72 text-center">
            Dive into our open platform, tailored for everyone. With Mendax,
            harness the tools to excel in the Web3 gaming realm. Connect,
            collaborate, and craft your gaming dreams. Here, boundaries fade,
            and the gaming future is yours to shape.
          </p>
        </div>
        <button
          className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100 bg-gradient-to-l from-[#3c29f7] to-[#ef2897] hover:from-[#ef2897] text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase`}
        >
          Open app
        </button>
      </div>
    </div>
  );
};

export default UnlockYourFullPotential;
