import React from "react";
import Image from "next/image";

const DualTokenEconomy = () => {
  return (
    <div className="relative flex justify-center items-center h-[1000px]">
      <Image
        src={"/assets/dual-token-economy/right.png"}
        alt={"right"}
        height={500}
        width={500}
        className="absolute top-0 lg:top-1/2 right-0 transform lg:-translate-y-1/2 w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] -z-[1]"
      />
      <Image
        src={"/assets/dual-token-economy/left.png"}
        alt={"right"}
        height={500}
        width={500}
        className="absolute bottom-0 lg:top-1/2 left-0 transform lg:-translate-y-1/2 w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] -z-[1]"
      />
      <div className="flex flex-col justify-center items-center max-w-[532px] p-8 gap-16">
        <h1 className="flex flex-wrap gap-2 items-center justify-center font-[satoshi] font-bold text-5xl text-center">
          <span className="text-[#FAF9F5] text-center ">Dual Token</span>
          <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ef2897] from-60% to-[#3c29f7]">
            Economy
          </span>
        </h1>
        <p className="text-center  flex flex-wrap justify-center items-center gap-1 text-base">
          <span className="text-[#FAF9F5]/50">Mendax Credits (MC)</span>
          <span className="text-[#FAF9F5]/50">
            is an on-chain token and can be used to purchase assets in the
            Mendax Marketplace to build your game. Winning in the game is
            translated into Earning MC. Build games and get paid in MC when
            other users play your game. You need MC for building your games with
            AI and make use of our Software.
          </span>
          <br></br>
          <br></br>
          <span className="text-[#FAF9F5]">Mendax Points (MP)</span>
          <span className="text-[#FAF9F5]/50">
            are used to buy avatar Accessories and cosmetics such as Skins or
            other in-game complements.
          </span>
        </p>
      </div>
    </div>
  );
};

export default DualTokenEconomy;
