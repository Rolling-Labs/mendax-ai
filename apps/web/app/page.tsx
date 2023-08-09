import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-[#0b1013] -z-[2] h-full" />
      <div className="fixed inset-0 flex justify-center items-center bg-[url('/assets/bg/background.webp')] opacity-20 bg-cover bg-left-top bg-fixed -z-[1]" />
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}
