"use client";
import React, { useEffect, useRef, useState } from "react";

import useMounted from "@/hooks/useMounted";
import gsap from "gsap";

const OurClientSays = () => {
  useEffect(() => {
    const divs = document.querySelectorAll("#testimonials");

    gsap.set(divs[1], { x: 0, opacity: 1 });

    gsap
      .timeline({ repeat: -1, defaults: { duration: 3 } })
      .add("one")
      .to(divs[0], { y: 600, x: 0, opacity: 0.05 }, "one")
      .to(divs[1], { y: -350, x: 0, opacity: 0.05 }, "one")
      .to(divs[2], { y: 0, x: 0, opacity: 1 }, "one");
    // .add("two")
    // .to(divs[0], { y: 300, x: 0, opacity: 1 }, "two")
    // .to(divs[1], { y: 300, x: 0, opacity: 0.05 }, "two")
    // .to(divs[2], { y: -600, x: 0, opacity: 0.05 }, "two")
    // .add("three")
    // .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "three")
    // .to(divs[1], { y: 300, x: 0, opacity: 1 }, "three")
    // .to(divs[2], { y: -600, x: 0, opacity: 0.05 }, "three");
  }, []);

  return (
    <div className="content h-[500px] flex flex-col justify-center">
      <div id="testimonials">
        <div className="container">
          <div>Test1</div>
          <div className="text"></div>
        </div>
      </div>
      <div id="testimonials">
        <div className="container">
          <div>Test2</div>
          <div className="text"></div>
        </div>
      </div>
      <div id="testimonials">
        <div className="container">
          <div>Test3</div>
          <div className="text"></div>
        </div>
      </div>
    </div>
  );
};

export default OurClientSays;
