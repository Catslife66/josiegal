import { useRef } from "react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { heroContent } from "@/public/content/textContent";

gsap.registerPlugin(useGSAP, Observer, SplitText);

export default function HeroSection() {
  const heroRef = useRef(null);
  useGSAP(() => {
    SplitText.create(".heroSplit", {
      type: "words, lines",
      wordsClass: "heroWords",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) => {
        gsap.from(self.lines, {
          y: 200,
          stagger: 0.05,
        });
      },
    });
  }, {});

  return (
    <div
      ref={heroRef}
      id="heroWrapper"
      className="w-full h-screen relative flex flex-col justify-center items-center space-y-8"
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
  );
}
