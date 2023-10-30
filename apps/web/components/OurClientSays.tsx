"use client";
import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";

const OurClientSays = () => {
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
