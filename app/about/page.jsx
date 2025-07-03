"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Observer from "gsap/Observer";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Header from "../components/Header";
import { useState } from "react";
import { heroContent, introContent } from "@/public/content/textContent";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, Observer);

export default function page() {
  useGSAP(() => {
    SplitText.create(".splitIntro", {
      type: "words, lines",
      wordsClass: "intro-words",
      linesClass: "intro-lines",
      mask: "lines",
      autoSplit: true,
    });
  }, {});

  return (
    <>
      <div
        id="heroWrapper"
        className="bg-[#e5e5e5] w-full h-screen relative flex flex-col justify-center items-center space-y-8"
      >
        <div className="relative">
          <h1 className="heroSplit absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-black text-center uppercase md:text-[8rem]">
            Xiaohong
          </h1>
          <h1 className="heroSplit h1-shadow px-4 text-6xl font-black text-center uppercase md:text-[8rem]">
            Xiaohong
          </h1>
        </div>
        <div className="heroSplit tagBg bg-black text-white rounded-lg font-semibold mx-4 px-4 py-2 text-center">
          {heroContent.paragraph}
        </div>
        <div className="relative">
          <h1 className="heroSplit absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-black text-center uppercase md:text-[8rem]">
            Zhuang
          </h1>
          <h1 className="heroSplit h1-shadow px-4 text-6xl font-black text-center uppercase md:text-[8rem]">
            Zhuang
          </h1>
        </div>
        <div className="heroSplit text-black text-sm text-center py-2 font-semibold dark:text-white">
          {heroContent.h4}
        </div>
        <div className="heroSplit absolute bottom-10 uppercase text-xs font-bold text-black">
          {heroContent.btn}
        </div>
      </div>
      <div className="bg-[#e5e5e5] w-full h-screen grid grid-cols-12 content-center">
        <div className="col-span-10 col-start-2">
          <p className="splitIntro text-2xl text-black font-black text-center md:px-8 md:text-4xl">
            {introContent.content}
          </p>
        </div>
      </div>
      <div className="w-full h-screen bg-red-100">page1</div>
      <div className="w-full h-screen bg-red-300">page3</div>
    </>
  );
}
