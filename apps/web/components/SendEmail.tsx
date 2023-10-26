"use client";
import React, { useState } from "react";
import Image from "next/image";
import CardPuzzled from "@/components/CardPuzzled";
import Input from "./Input";
import TextArea from "./TextArea";

const SendEmail = () => {
  // const ref = React.useRef(null);
  // const { style, ...mouseHandlers } = use3dEffect(ref);

  const [form, setForm] = useState({
    email: "",
    companyName: "",
    idea: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center bg-[url('/assets/bg/bg-email.png')] bg-cover bg-center py-16">
      <div className="flex flex-col gap-4 sm:gap-8 items-center max-w-[608px] px-4 xl:px-0">
        <CardPuzzled />

        <div className="flex flex-col gap-2 sm:gap-4 items-center">
          <h1 className="font-[satoshi] font-bold text-2xl sm:text-5xl text-cWhite-100">
            Are you a Game Studio?
          </h1>
          <h1 className="font-[satoshi] font-medium text-lg sm:text-3xl text-cWhite-80">
            Be part of the journey, collaborate with us.
          </h1>
        </div>

        <p className="font-[satoshi] font-medium text-base text-cWhite-72 text-center">
          Beyond serving individual creators, Mendax is a powerhouse for
          businesses. Our SaaS platform accelerates game development, enabling
          firms to swiftly launch and diversify their gaming repertoire. Bypass
          lengthy cycles and hefty costs. With Mendax, elevate and expedite your
          gaming aspirations.
        </p>

        <div className="flex flex-col items-center gap-4 w-full max-w-[420px]">
          <Input
            id={"email"}
            placeholder={"Your email"}
            onChange={handleChange}
            value={form.email}
            isError={false}
          />
          <Input
            id={"company-name"}
            placeholder={"Your company name"}
            onChange={handleChange}
            value={form.companyName}
            isError={false}
          />
          <TextArea
            id={"idea"}
            placeholder={"How can we help your idea?"}
            onChange={handleChange}
            value={form.idea}
            height={""}
            className={""}
          />

          <button className="font-[satoshi] font-bold text-cBlack-100 text-base p-4 rounded-lg bg-cWhite-100 w-full hover:opacity-50 duration-150">
            Let’s collaborate!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
