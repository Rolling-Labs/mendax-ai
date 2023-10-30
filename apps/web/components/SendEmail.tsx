"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardPuzzled from "@/components/CardPuzzled";
import Input from "./Input";
import TextArea from "./TextArea";
import { useInView } from "react-intersection-observer";
import { useUrl } from "@/lib/store";

const SendEmail = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    idea: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function resetForm() {
    setForm({
      email: "",
      name: "",
      idea: "",
    });
  }

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.email === "" || form.name === "" || form.idea === "") {
      // scrollToTop();
    } else {
      try {
        const response = await fetch("api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            companyName: form.name,
            idea: form.idea,
          }),
        });

        if (response.ok) {
          alert("Email Sent");
          resetForm();
        } else {
          // Handle error when the fetch request fails
        }
      } catch (error) {
        // Handle errors during file reading or the fetch request
      }
    }
  }

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { url, setUrl } = useUrl((state) => state);

  useEffect(() => {
    if (inView === true) {
      setUrl("/#contact-section");
      console.log(url);
    }
  }, [inView]);

  return (
    <div
      id="contact-section"
      className="flex justify-center items-center bg-[url('/assets/bg/bg-email.png')] bg-cover bg-center py-16"
    >
      <div className="flex flex-col gap-4 sm:gap-8 items-center max-w-[608px] px-4 xl:px-0">
        <CardPuzzled />

        <div className="flex flex-col gap-2 sm:gap-4 items-center">
          <h1
            className="font-[satoshi] font-bold text-2xl sm:text-5xl text-cWhite-100"
            ref={ref}
          >
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

        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center gap-4 w-full max-w-[420px]"
        >
          <Input
            id={"email"}
            placeholder={"Your email"}
            onChange={handleChange}
            value={form.email}
            type={"email"}
          />
          <Input
            id={"name"}
            placeholder={"Your company name"}
            onChange={handleChange}
            value={form.name}
            type={"text"}
          />

          <TextArea
            id={"idea"}
            placeholder={"How can we help your idea?"}
            onChange={handleChange}
            value={form.idea}
            height={""}
            className={""}
          />
          <input
            type="submit"
            value="Let’s collaborate!"
            className={`font-[satoshi] font-bold text-cBlack-100 text-base p-4 rounded-lg bg-cWhite-100 w-full hover:opacity-50 duration-150 `}
          />
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
