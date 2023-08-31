"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Logo from "public/icons/logo.svg";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const navigations = [
  {
    name: "Home",
    linkUrl: "/",
  },
  {
    name: "Games",
    linkUrl: "/#games",
  },
  {
    name: "Marketplace",
    linkUrl: "/#marketplace",
  },
  {
    name: "Studio",
    linkUrl: "/#studio",
  },
  {
    name: "About",
    linkUrl: "/#about",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const hide = "hidden";
  const show = "auto";
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    nav
      ? (document.body.style.overflowY = hide)
      : (document.body.style.overflowY = show);
  }, [nav]);

  return (
    <>
      <div
        className={`fixed duration-300 top-0 flex justify-center items-center w-full  z-[9999999999999999]  backdrop-blur-md 
        ${
          !nav
            ? `${
                scrollPosition > 50
                  ? "bg-black/10 drop-shadow-md py-4"
                  : "bg-transparent py-8"
              }`
            : "bg-transparent py-8"
        }
        `}
      >
        <div className="flex justify-between items-center max-w-[1440px] w-full px-[1rem]">
          <div className="flex flex-row justify-center items-center gap-8 ">
            <Logo className="w-[6rem]" />
            {navigations.map((data, index) => {
              return (
                <a
                  key={index}
                  href={data.linkUrl}
                  className={`
                ${
                  pathname === data.linkUrl
                    ? "text-[#FAF9F5]"
                    : "text-[#FAF9F5]/50"
                } font-[satoshi] text-base hover:text-[#FAF9F5] hidden lg:flex`}
                >
                  {data.name}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center justify-center gap-4">
            <Button
              className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100  text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase`}
            >
              Login
            </Button>
            <Button
              className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100 bg-gradient-to-l from-[#3c29f7] to-[#ef2897] hover:from-[#ef2897] text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase`}
            >
              Sign up now
            </Button>
          </div>
          {/* <div
            className="w-full max-w-[20px] flex lg:hidden"
            onClick={() => setNav(!nav)}
          >
            {!nav ? (
              <MenuIcon className="text-[#FAF9F5] duration-300" />
            ) : (
              <XIcon className="text-[#FAF9F5] duration-300" />
            )}
          </div> */}
        </div>
      </div>

      <div
        className={`fixed duration-300 ${
          scrollPosition > 50 ? "top-0" : "top-5"
        } right-0
         pr-[1rem] p-5 flex flex-row justify-end lg:hidden z-[99999999999]`}
      >
        <div
          className="w-full max-w-[2rem] z-[3] duration-300 inline-block lg:hidden"
          onClick={() => setNav(!nav)}
        >
          {!nav ? (
            <MenuIcon className={`text-white duration-300 w-[2rem]`} />
          ) : (
            <XIcon className="text-white duration-300 w-[2rem]" />
          )}
        </div>
      </div>

      <div
        className={`duration-300 backdrop-blur-sm ${
          !nav
            ? "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-[#0b1013] -z-[2] translate-x-full"
            : "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-[#0b1013] z-[999999999]"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-4 px-5">
          <div className="flex flex-col justify-center items-center gap-8">
            {navigations.map((data, index) => {
              return (
                <a
                  key={index}
                  href={data.linkUrl}
                  className={`
                ${
                  pathname === data.linkUrl
                    ? "text-[#FAF9F5]"
                    : "text-[#FAF9F5]/50"
                } font-[satoshi] text-base hover:text-[#FAF9F5] `}
                >
                  {data.name}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100  text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase`}
            >
              Login
            </Button>
            <Button
              className={`font-[satoshi] duration-300 font-bold text-xs md:text-base py-4 px-8 text-[#FAF9F5]-100 bg-gradient-to-l from-[#3c29f7] to-[#ef2897] hover:from-[#ef2897] text-[#FAF9F5] rounded-full
            hover:to-[#3c29f7] hover:scale-105 focus:outline-none uppercase`}
            >
              Sign up now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
