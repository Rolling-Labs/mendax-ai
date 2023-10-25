import React from "react";
import Image from "next/image";

interface ICardStudio {
  imgUrl: string;
  title: string;
  description: string;
  className: string;
}

const CardStudio = ({ imgUrl, title, description, className }: ICardStudio) => {
  return (
    <div className="p-4 flex flex-col gap-4 max-w-[256px] rounded-2xl border border-cWhite-8 bg-cBlack-4 group hover:bg-cWhite-4 relative duration-150">
      <Image
        src={"/assets/mendax-studio/arrow-icon.png"}
        alt={"studio-1"}
        width={32}
        height={32}
        className={`${className} absolute top-1/2 -right-[7%] transform -translate-x-[5] -translate-y-1/2 opacity-50 group-hover:opacity-100`}
      />

      <Image src={imgUrl} alt={"studio-1"} width={210} height={78.5} />
      <h1 className="font-[satoshi] text-base text-cWhite-100 font-medium">
        {title}
      </h1>
      <p className="font-[satoshi] text-xs text-cWhite-72 min-h-[128px]">
        {description}
      </p>
    </div>
  );
};

export default CardStudio;
