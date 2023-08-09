import React from "react";
import Logo from "public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center py-4 px-[1rem] lg:px-16">
      <Logo className="w-[6rem]" />
      <h1 className="text-[#FAF9F5] text-base font-[satoshi]">
        Copyright © Mendax.ai | 2023
      </h1>
      <div className="flex flex-wrap p-4 gap-4">
        {socmed.map((data, index) => {
          return (
            <Link
              href={data.imgUrl}
              key={index}
              target="_blank"
              className="hover:scale-125 duration-150"
            >
              <Image src={data.imgUrl} alt={data.name} height={20} width={20} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
