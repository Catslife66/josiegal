import { experienceContent, introContent } from "@/public/content/textContent";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function IntroSection() {
  useGSAP(() => {
    SplitText.create(".splitIntro", {
      type: "chars, words, lines",
      charsClass: "intro-chars",
      wordsClass: "intro-words++",
      linesClass: "intro-lines",
      mask: "lines",
      autoSplit: true,
    });
    SplitText.create(".expSpan", {
      type: "lines",
      mask: "lines",
      linesClass: "expSpanLines",
      autoSplit: true,
    });
  }, {});

  return (
    <div
      id="introExpWrapper"
      className="w-full h-screen absolute top-0 left-0 opacity-0 flex justify-center items-center"
    >
      <div
        id="introWrapper"
        className="w-full h-full grid grid-cols-12 content-center"
      >
        <div className="col-span-10 col-start-2">
          <p className="splitIntro text-2xl text-center font-black md:px-8 md:text-4xl">
            {introContent.content}
          </p>
        </div>
      </div>

      <div className="circle-mask">
        <div className="relative w-full h-screen overflow-hidden">
          <div className="z-20 relative top-0 w-full h-screen flex flex-col justify-center">
            <div id="expH2" className="flex flex-row items-center">
              <Image
                src="/images/peanut2.png"
                alt="peanut"
                width={100}
                height={100}
              />

              <h2 className="text-themeYellow text-8xl font-bold text-nowrap py-8 px-4">
                The journey starts here.
              </h2>
            </div>
          </div>

          <div className="absolute top-0 mx-auto w-full h-screen grid grid-cols-12 text-white">
            <div className="col-span-10 col-start-2 content-center">
              {experienceContent.map((exp, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col my-4 ${
                    exp.id % 2 === 0 ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="expSpan py-4 text-sm">{exp.time}</span>
                    <div className="under-line bg-white"></div>
                  </div>
                  <div className="expSpan text-2xl font-semibold mt-2">
                    {exp.workplace}
                  </div>
                  <div className="expSpan text-sm">{exp.position}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
