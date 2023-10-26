import React from "react";
import Image from "next/image";
import CardStudio from "./CardStudio";

const MendaxStudio = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/assets/bg/bg-game-dev.png')] bg-cover bg-center py-16 lg:h-[68rem]">
      <div className="flex flex-col sm:items-end gap-8 sm:gap-16 grow max-w-[75rem] px-4 xl:px-0">
        <div className="flex flex-col gap-4 sm:items-end">
          <h1 className="font-[satoshi] text-2xl sm:text-5xl font-bold text-cWhite-100">
            Create with Mendax Studio
          </h1>
          <h1 className="font-[satoshi] text-xl sm:text-3xl font-medium text-cWhite-80">
            Generate a game in a single-click
          </h1>
        </div>

        <p className="text-left sm:text-right font-[satoshi] text-base text-cWhite-72 font-medium max-w-[848px]">
          Unlock the creator within using Mendax&rsquo;s intuitive AI-driven
          toolkit. Design games, characters, and worlds effortlessly, sans the
          coding maze. Showcase your vision to a global audience, turning
          gameplay into artistry. At Mendax, innovation and imagination unite
          seamlessly.
        </p>

        <div className="flex justify-center items-center w-full">
          <div className="flex flex-wrap justify-center items-center gap-4 w-full">
            <CardStudio
              imgUrl={"/assets/mendax-studio/studio-1.png"}
              title={"Game Idea"}
              description={
                "Generate your game's DNA effortlessly! Our AI-powered Game Idea feature crafts game genres, captivating descriptions, and intriguing narratives with a click. Unleash your creativity and bring your game concept to life effortlessly."
              }
              className={"hidden md:block"}
            />
            <CardStudio
              imgUrl={"/assets/mendax-studio/studio-2.png"}
              title={"Game Asset"}
              description={
                "Say goodbye to tedious asset creation! Our Game Asset feature generates stunning 3D models, eye-catching 2D images, immersive sound effects, and more. Elevate your game's visual and auditory appeal effortlessly with AI-generated assets."
              }
              className={"hidden md:block"}
            />
            <CardStudio
              imgUrl={"/assets/mendax-studio/studio-3.png"}
              title={"Game Environment"}
              description={
                "Explore endless worlds with our Game Environment feature. It leverages procedural generation to craft diverse, immersive maps for your game. From lush forests to sprawling cities, let AI create the perfect backdrop for your gaming adventures."
              }
              className={"hidden md:block"}
            />
            <CardStudio
              imgUrl={"/assets/mendax-studio/studio-4.png"}
              title={"Game Logic"}
              description={
                "Elevate your game's mechanics with our Game Logic module. AI generates intricate rule sets, gameplay mechanics, and interactive elements, allowing you to focus on gameplay rather than code. Transform your ideas into engaging gaming experiences effortlessly."
              }
              className={"hidden"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MendaxStudio;
