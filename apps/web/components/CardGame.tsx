import React from "react";
import Image from "next/image";

interface ICardData {
  imgUrl: string;
  description: string;
}

const CardGame = ({ imgUrl, description }: ICardData) => {
  return (
    <div className="flex flex-col p-6 max-w-[360px] gap-6 rounded-2xl border border-cWhite-8 bg-cBlack-4 hover:bg-cWhite-4 backdrop-blur duration-150">
      <Image src={imgUrl} alt={"icon-1"} height={64} width={64} />
      <p className="font-[satoshi] text-base text-[#FAF9F5] min-h-[100px]">
        {description}
      </p>
    </div>
  );
};

export default CardGame;
