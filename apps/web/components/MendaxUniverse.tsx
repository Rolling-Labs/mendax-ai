import React from "react";

const MendaxUniverse = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/assets/bg/bg-mendax.png')] bg-cover bg-center h-[45rem] lg:h-[58rem]">
      <div className="flex flex-col grow max-w-[90rem] px-4 xl:px-0">
        <div className="flex flex-col gap-8 sm:gap-16 grow sm:max-w-[40rem]">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="font-[satoshi] font-bold text-3xl sm:text-5xl text-[#FAF9F5]">
              Play in the Mendax Universe
            </h1>
            <h1 className="font-[satoshi] font-bold text-2xl sm:text-4xl text-[#FAF9F5]/80">
              Where gaming transcends boundaries
            </h1>
          </div>

          <div className="flex flex-col gap-3 sm:gap-6">
            <p className="font-[satoshi] text-base text-[#FAF9F5]/80">
              Step beyond the ordinary and into a universe where gaming is
              limitless. Mendax isn&rsquo;t just a platform&rsquo;it&rsquo;s the
              dawn of a new gaming era. Bolstered by cutting-edge AI technology,
              we showcase a rich tapestry of games, each a masterpiece curated
              from global talents. Delve into an enthralling realm where
              entertainment melds seamlessly with challenges and rewards.
            </p>
            <p className="font-[satoshi] text-base text-[#FAF9F5]/80">
              From the casual player to the dedicated aficionado, Mendax
              welcomes all. Embark on a journey, discover new horizons, and
              redefine how you game. Dive in and transcend the game with Mendax.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MendaxUniverse;
