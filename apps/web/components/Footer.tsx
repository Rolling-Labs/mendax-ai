"use client";
import React from "react";
import Logo from "public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const socmed = [
  {
    name: "facebook",
    imgUrl: "/icons/fb.svg",
    linkUrl: "#",
  },
  {
    name: "twitter",
    imgUrl: "/icons/twitter.svg",
    linkUrl: "#",
  },
  {
    name: "instagram",
    imgUrl: "/icons/instagram.svg",
    linkUrl: "#",
  },
  {
    name: "medium",
    imgUrl: "/icons/medium.svg",
    linkUrl: "#",
  },
  {
    name: "telegram",
    imgUrl: "/icons/telegram.svg",
    linkUrl: "#",
  },
];

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] gap-2 grow">
        <div className="flex flex-col gap-4">
          <Logo className="w-[6rem]" />
          <h1 className="text-[#FAF9F5] text-base font-[satoshi]">
            Copyright © Mendax.ai | 2023
          </h1>
        </div>

        <div className="flex flex-wrap p-4 gap-4">
          {socmed.map((data, index) => {
            return (
              <Link
                href={data.linkUrl}
                key={index}
                target="_blank"
                className="hover:scale-125 duration-150"
              >
                <Image
                  src={data.imgUrl}
                  alt={data.name}
                  height={20}
                  width={20}
                />
              </Link>
            );
          })}
        </div>

        <Button
          // onClick={() => setShowModal(true)}
          className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100 bg-gradient-to-l from-[#3c29f7] to-[#ef2897] hover:from-[#ef2897] text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase`}
        >
          Sign up now
        </Button>
      </div>
    </div>
  );
};

export default Footer;
