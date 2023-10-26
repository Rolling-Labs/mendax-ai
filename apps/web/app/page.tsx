import DualTokenEconomy from "@/components/DualTokenEconomy";
import GameDevelopment from "@/components/GameDevelopment";
import HeroSection from "@/components/HeroSection";
import MendaxStudio from "@/components/MendaxStudio";
import MendaxUniverse from "@/components/MendaxUniverse";
import Partner from "@/components/Partner";
import SendEmail from "@/components/SendEmail";
import UnlockYourFullPotential from "@/components/UnlockYourFullPotential";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GameDevelopment />
      {/* <CustomizeEverything /> */}
      <DualTokenEconomy />
      <MendaxUniverse />
      <MendaxStudio />
      <SendEmail />
      <Partner />
      <UnlockYourFullPotential />
    </>
  );
}
