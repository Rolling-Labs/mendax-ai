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

  const [isButtonLoading, setIsButtonLoading] = useState(false);

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
        setIsButtonLoading(true);
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
          setIsButtonLoading(false);
          setShowModal(true);
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

  const { setUrl } = useUrl((state) => state);

  useEffect(() => {
    if (inView === true) {
      setUrl("/#contact-section");
    }
  }, [inView]);

  const hide = "hidden";
  const show = "auto";

  useEffect(() => {
    showModal
      ? (document.body.style.overflowY = hide)
      : (document.body.style.overflowY = show);
  }, [showModal]);

  return (
    <>
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
            firms to swiftly launch and diversify their gaming repertoire.
            Bypass lengthy cycles and hefty costs. With Mendax, elevate and
            expedite your gaming aspirations.
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
              value={
                isButtonLoading === true ? "Sending..." : "Let's collaborate"
              }
              className={`font-[satoshi] font-bold text-cBlack-100 text-base p-4 rounded-lg bg-cWhite-100 w-full  duration-150 ${
                isButtonLoading === true
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 hover:opacity-50 cursor-pointer"
              }`}
            />
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 h-full w-full flex justify-center items-center bg-cBlack-4 backdrop-blur-md z-[9999999999999999]">
          <div className="p-4 gap-6 flex flex-col w-full max-w-[26.25rem] w-f rounded-2xl items-center justify-center bg-cWhite-100">
            <Image
              src={"/icons/check-icon.svg"}
              alt={"check"}
              height={32}
              width={32}
            />

            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="font-[satoshi] text-base font-bold text-cBlack-100 text-center">
                Inquiry successfully sent!
              </h1>
              <p className="font-[satoshi] text-base font-normal text-cBlack-100 text-center">
                Please wait from a response on our team within 1 - 3 business
                days. Thank you!
              </p>
            </div>

            <button
              onClick={() => setShowModal(!showModal)}
              className={`opacity-100 hover:opacity-50 rounded-lg bg-cBlack-100 text-base text-cWhite-100 font-bold font-[satoshi] w-full py-3 px-2  duration-150`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SendEmail;
