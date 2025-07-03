import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { skillsetContent } from "@/public/content/textContent";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function SkillSection() {
  useGSAP(() => {
    SplitText.create(".skillSpan", {
      type: "lines",
      mask: "lines",
      linesClass: "skillLines",
      autoSplit: true,
    });
  }, {});

  return (
    <div id="skillWrapper" className="relative bg-black">
      <div
        id="skillH2Wrapper"
        className="z-20 top-0 w-full h-screen flex flex-col justify-center"
      >
        <div id="skillH2" className="flex flex-row items-center">
          <Image
            src="/images/peanut2.png"
            alt="peanut"
            width={100}
            height={100}
          />
          <h2 className="text-themeYellow text-8xl font-bold text-nowrap py-8 px-4">
            A full-stack skill set spanning frontend, backend, deployment, and
            design integration.
          </h2>
        </div>
      </div>

      <div
        id="skillDetailWrapper"
        className="w-full h-full grid grid-cols-12 grid-rows-auto md:grid-rows-4"
      >
        {skillsetContent.map((skill, idx) => (
          <div key={idx} className="skillDetail col-span-10 col-start-2">
            <div className="skill-line"></div>
            <div className="flex flex-col py-8 md:flex-row">
              <div className="w-full md:w-1/2">
                <h3 className="skillSpan px-8 text-xl font-bold">
                  {skill.title}
                </h3>
              </div>
              <div className="skillSpan w-full px-8 md:w-1/2">
                {skill.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
