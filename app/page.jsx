"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/themeProvider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Observer from "gsap/Observer";

import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import EndSection from "./sections/EndSection";

gsap.registerPlugin(useGSAP, Observer);

export default function Home() {
  const theme = useContext(ThemeContext);

  useGSAP(() => {
    Observer.create({
      target: "#heroIntroWrapper",
      type: "pointer",
      onMove: (self) => {
        const clientX = self.x;
        const clientY = self.y;
        const deltaX =
          (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const deltaY =
          (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        const tl = gsap.timeline({
          duration: 0.3,
          ease: "power3.out",
        });
        const xOffset = 2;
        const yOffset = 8;
        tl.to(
          ".h1-shadow",
          {
            translateX: deltaX >= 0 ? `${xOffset}%` : `-${xOffset}%`,
            translateY: deltaY >= 0 ? `${yOffset}%` : `-${yOffset}%`,
          },
          0
        );
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#heroIntroWrapper",
        pin: true,
        start: "top top",
        end: `+=${window.innerHeight * 4}`,
        scrub: true,
        onUpdate: (self) => {
          const yOffset =
            self.progress < 0.02
              ? 0
              : self.progress >= 0.25
              ? -100
              : -(((self.progress - 0.02) / 0.23) * 100);
          gsap.to(".heroWords", { yPercent: yOffset });
          const tagOpacity = self.progress >= 0.25 ? 0 : 1;
          gsap.to(".tagBg", { opacity: tagOpacity, scaleY: tagOpacity });

          const introOpacity = self.progress > 0.25 ? 1 : 0;
          gsap.to("#introExpWrapper", { opacity: introOpacity });

          const chars = gsap.utils.toArray(".intro-chars");
          const totalChars = chars.length;

          chars.forEach((char, i) => {
            const minProgress = 0.25;
            const maxProgress = 0.45;
            const range = maxProgress - minProgress;

            const charProgress = i / totalChars;
            const progress =
              (self.progress - minProgress - charProgress * range) /
              (range / totalChars);

            const clamped = gsap.utils.clamp(0.2, 1, progress);
            gsap.to(char, {
              opacity: clamped,
              duration: 0.1,
              overwrite: "auto",
            });
          });

          const maskSize =
            self.progress < 0.51
              ? 0
              : self.progress >= 0.61
              ? 100
              : 100 * ((self.progress - 0.51) / 0.1);
          gsap.to(".circle-mask", {
            clipPath: `circle(${maskSize}% at 50% 50%)`,
          });

          const menuBg =
            self.progress < 0.55 ? "black" : theme.themeColors.themeGray;

          gsap.to(".menuLine", {
            backgroundColor: menuBg,
          });

          const xOffset =
            self.progress < 0.61
              ? `${window.innerWidth * 0.5}`
              : self.progress >= 0.75
              ? -`${expH2.scrollWidth}`
              : -`${expH2.scrollWidth * ((self.progress - 0.61) / 0.14)}`;
          gsap.to("#expH2", {
            x: `${xOffset}px`,
          });

          const xScale =
            self.progress < 0.75
              ? 0
              : self.progress >= 0.85
              ? 1
              : (self.progress - 0.75) / 0.1;
          gsap.to(".under-line", { scaleX: xScale });

          const y = self.progress < 0.85 ? 100 : 0;
          gsap.to(".expSpanLines", { yPercent: y, stagger: 0.1 });

          const color =
            self.progress >= 0.98 ? "black" : theme.themeColors.themeGray;
          gsap.to(".under-line", { backgroundColor: color });
        },
      },
    });

    const skillH2 = document.querySelector("#skillH2");
    gsap.set(skillH2, { x: `${window.innerWidth * 0.5}` });
    const skillH2Tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillH2Wrapper",
        pin: true,
        start: "top top",
        end: `+=${window.innerHeight}`,
        onUpdate: (self) => {
          const xDistance =
            self.progress < 0.05
              ? window.innerWidth * 0.5
              : self.progress >= 0.95
              ? -(skillH2.scrollWidth - skillH2.clientWidth)
              : window.innerWidth * 0.5 -
                ((self.progress - 0.05) / 0.9) *
                  (skillH2.scrollWidth - skillH2.clientWidth);
          const bgColor =
            self.progress >= 0.95 ? theme.themeColors.themeGray : "black";
          gsap.to(skillH2, { x: xDistance });
          gsap.to("#skillWrapper", { backgroundColor: bgColor });
          const menuBg =
            self.progress >= 0.95 ? "black" : theme.themeColors.themeGray;

          gsap.to(".menuLine", {
            backgroundColor: menuBg,
          });
        },
      },
    });

    const skillDetailTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillDetailWrapper",
        start: "top 80%",
        end: "top top",
        scrub: true,
      },
    });
    const skillDetails = gsap.utils.toArray(".skillDetail");
    for (let i = 0; i < skillDetails.length; i++) {
      const line = skillDetails[i].querySelectorAll(".skill-line");
      const spans = skillDetails[i].querySelectorAll(".skillLines");
      skillDetailTl
        .from(line, {
          scaleX: 0,
          stagger: 0.05,
        })
        .fromTo(spans, { yPercent: 100 }, { yPercent: 0 });
    }

    const procTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectHeading",
        start: "top 70%",
        end: "top 50%",
        scrub: true,
      },
    });

    procTl.from(".projectH2", {
      yPercent: 100,
      stagger: {
        each: 0.5,
      },
    });

    const endTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#endWrapper",
        start: "top 70%",
        end: "top 50%",
        scrub: true,
      },
    });
    endTl.from(".end-lines", {
      yPercent: 100,
      stagger: {
        each: 0.5,
      },
    });
  }, {});

  return (
    <div id="mainWrapper" className="overflow-x-hidden z-[10] top-0">
      <div
        id="heroIntroWrapper"
        className="relative overflow-x-hidden bg-themeGray"
      >
        <HeroSection />
        <IntroSection />
      </div>
      <SkillSection />
      <ProjectSection />
      <EndSection />
    </div>
  );
}
