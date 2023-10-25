import React from "react";
import Image from "next/image";
import CardGame from "./CardGame";

const GameDevelopment = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/assets/bg/bg-game-dev.png')] bg-cover bg-center py-[5rem] lg:h-[58rem]">
      <div className="flex flex-col gap-8 sm:gap-16 max-w-[90rem] grow px-4 xl:px-0">
        <h1 className="font-[satoshi] text-2xl sm:text-5xl text-center font-bold text-white leading-[2rem] sm:leading-[4rem]">
          Unleash Your Creativity with <br /> AI-Powered Game Development
        </h1>

        <div className="flex flex-wrap grow gap-4 items-center justify-center">
          <CardGame
            imgUrl={"/icons/game-development/icon-1.png"}
            description={
              "Comprehensive game development solution for various industries"
            }
          />
          <CardGame
            imgUrl={"/icons/game-development/icon-2.png"}
            description={
              "AI-powered tools and drag-and-drop interface for faster development."
            }
          />
          <CardGame
            imgUrl={"/icons/game-development/icon-3.png"}
            description={
              "AI-powered texture Automatic Creation with just few words"
            }
          />
          <CardGame
            imgUrl={"/icons/game-development/icon-4.png"}
            description={
              "Enables creation of engaging, interactive content for advertising, marketing, and entertainment."
            }
          />
          <CardGame
            imgUrl={"/icons/game-development/icon-5.png"}
            description={
              "Seamless integration with popular game engines like Unity and Unreal Engine. Valuable educational resource for game design and development courses."
            }
          />
          <CardGame
            imgUrl={"/icons/game-development/icon-6.png"}
            description={
              "SaaS model offers scalability, easy installation, cost-effectiveness, regular updates, and accessibility."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GameDevelopment;
