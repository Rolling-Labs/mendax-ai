"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Logo from "public/icons/logo.svg";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const hide = "hidden";
  const show = "auto";
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    nav
      ? (document.body.style.overflowY = hide)
      : (document.body.style.overflowY = show);

    showModal
      ? (document.body.style.overflowY = hide)
      : (document.body.style.overflowY = show);
  }, [nav, showModal]);

  return (
    <>
      <div
        className={`fixed duration-300 top-0 flex justify-between items-center w-full z-[999]  px-[1rem] lg:px-16 backdrop-blur-md ${
          scrollPosition > 50
            ? "bg-black/10 drop-shadow-md py-4"
            : "bg-transparent py-8"
        }`}
      >
        <Logo className="w-[6rem]" />
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setShowModal(!showModal)}
            className="px-8 py-4 uppercase rounded-full bg-[#FAF9F514]/20 backdrop-blur-[8px] text-white font-[satoshi] hover:scale-105 duration-150 hidden md:inline-block"
          >
            Login
          </button>
          <button
            onClick={() => setShowModal(!showModal)}
            className="px-8 py-4 uppercase rounded-full bg-[#FAF9F514]/20 backdrop-blur-[8px] text-white font-[satoshi] hover:scale-105 duration-150 hidden md:inline-block"
          >
            Sign Up
          </button>
        </div>
        <div
          className="w-full max-w-[2rem] z-[3] duration-300 inline-block md:hidden"
          onClick={() => setNav(!nav)}
        >
          {!nav ? (
            <MenuIcon className="text-white duration-300" />
          ) : (
            <XIcon className="text-white duration-300" />
          )}
        </div>
        <div
          className={`duration-300 backdrop-blur-sm ${
            !nav
              ? "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-[#FAF9F514] -z-[2] translate-x-full"
              : "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-[#FAF9F514] z-[2]"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-4 px-5">
            <Logo className="w-full md:w-96 inline-block mb-5" />
            <button
              onClick={() => setShowModal(!showModal)}
              className="px-8 py-4 uppercase rounded-full bg-[#FAF9F514]/20 backdrop-blur-[8px] text-white font-[satoshi] hover:scale-105 duration-150 inline-block"
            >
              Login
            </button>
            <button
              onClick={() => setShowModal(!showModal)}
              className="px-8 py-4 uppercase rounded-full bg-[#FAF9F514]/20 backdrop-blur-[8px] text-white font-[satoshi] hover:scale-105 duration-150 inline-block"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div
          className={`duration-300 backdrop-blur-sm ${
            !showModal
              ? "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-[#FAF9F514] -z-[2] translate-x-full"
              : "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-[#FAF9F514] z-[2]"
          }`}
        >
          <XIcon
            onClick={() => setShowModal(false)}
            className={`absolute top-10 right-10 text-white duration-300 w-10 cursor-pointer`}
          />
          <div className=" p-6 rounded-lg">
            <h1 className="font-[satoshi] text-4xl font-bold  text-white tracking-wide">
              Coming Soon...
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
