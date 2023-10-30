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

const navigations = [
  {
    name: "Home",
    linkUrl: "/#home-section",
  },
  {
    name: "Features",
    linkUrl: "/#features-section",
  },
  {
    name: "Tokenomics",
    linkUrl: "/#tokenomics-section",
  },
  {
    name: "Play",
    linkUrl: "/#play-section",
  },
  {
    name: "Create",
    linkUrl: "/#create-section",
  },
  {
    name: "Testimonials",
    linkUrl: "/#testimonials-section",
  },

  {
    name: "Contact",
    linkUrl: "/#contact-section",
  },
  {
    name: "Partners",
    linkUrl: "/#partners-section",
  },
];

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] gap-2 grow px-[1rem]">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Logo className="w-[6rem]" />
          <h1 className="text-[#FAF9F5] text-base font-[satoshi]">
            Copyright © Mendax.ai | 2023
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 grow">
          <div className="flex flex-wrap gap-4">
            {navigations.map((data, index) => {
              return (
                <a
                  href={data.linkUrl}
                  key={index}
                  className="hover:opacity-75 duration-150 text-white"
                >
                  {data.name}
                </a>
              );
            })}
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
        </div>

        <Button
          // onClick={() => setShowModal(true)}
          className={`font-[satoshi] duration-300 font-bold text-base md:text-base py-4 px-8  text-cBlack-100 rounded-2xl focus:outline-none uppercase bg-cWhite-100 hover:opacity-50 duration-150`}
        >
          Sign up now
        </Button>
      </div>
    </div>
  );
};

export default Footer;
