import CustomizeEverything from "@/components/CustomizeEverything";
import DualTokenEconomy from "@/components/DualTokenEconomy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Partner from "@/components/Partner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomizeEverything />
      <DualTokenEconomy />
      <Partner />
    </>
  );
}
