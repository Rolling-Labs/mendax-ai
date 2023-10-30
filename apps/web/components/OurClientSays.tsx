/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const marqueeComponent = [
  {
    icon: "/assets/client/image-1.png",
    name: "John T.,",
    subTitle: "Hardcore Gamer",
    description:
      "Mendax has rekindled my passion for gaming. The diversity of games and the opportunity to earn rewards while playing is a game-changer. It's the future of gaming, and I'm here for it!",
  },
  {
    icon: "/assets/client/image-2.png",
    name: "BlueShift Studios",
    subTitle: "Game Studio",
    description:
      "Mendax is a game development accelerator. Our team has leveraged their gaming infrastructure to release titles that would have taken years to develop. Mendax has redefined the game creation landscape.",
  },
  {
    icon: "/assets/client/image-3.png",
    name: "Grace K.,",
    subTitle: "Seasoned Game Designer",
    description:
      "Mendax is revolutionizing the game design process. I've been in the industry for years, and I've never seen a platform that empowers creators like this. It's where innovation meets imagination.",
  },
];

const OurClientSays = () => {
  return (
    <div className="flex justify-center items-center faded-edges">
      <div className="relative flex flex-col justify-center items-center max-w-[90rem] grow gap-16  h-[60rem]">
        <img
          src={"/assets/client/divider.png"}
          alt={"divider"}
          width={100}
          height={50}
          className="w-full absolute top-[0] left-1/2 transform -translate-x-1/2 -translate-y-[0]"
        />
        <img
          src={"/assets/client/divider.png"}
          alt={"divider"}
          width={100}
          height={50}
          className="w-full absolute bottom-[0] left-1/2 transform -translate-x-1/2 -translate-y-[0]"
        />

        <h1 className="font-[satoshi] text-white font-bold text-2xl sm:text-5xl">
          Our client says
        </h1>

        <Marquee
          gradient
          gradientColor="#0b1013, #0b1013"
          pauseOnHover
          // gradientWidth={500}
          speed={100}
          className="w-full my-4"
        >
          <div className="flex justify-center items-start gap-4 overflow-x-hidden w-full">
            {marqueeComponent.map((item, index) => {
              return (
                <>
                  <div
                    className="flex flex-col gap-6 w-full max-w-[250px] xsm:max-w-[300px] sm:max-w-[538px] mx-[0.5rem] sm:mx-[1rem] duration-150 scale-80 sm:hover:scale-100"
                    key={index}
                  >
                    <h1 className="text-cWhite-100 font-[satoshi] font-bold italic text-lg sm:text-[27px] leading-[1.3rem] sm:leading-[2.3rem]">
                      {item.description}
                    </h1>

                    <div className="flex flex-row gap-[6px] items-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        width={18}
                        height={18}
                        className="w-full max-w-[18px]"
                      />
                      <div className="flex flex-col">
                        <h1 className="text-cWhite-100 font-bold text-xs font-[satoshi]">
                          {item.name}
                        </h1>
                        <h1 className="text-xs text-cWhite-80 font-medium">
                          {item.subTitle}
                        </h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default OurClientSays;
