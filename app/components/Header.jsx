"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Observer from "gsap/Observer";
import { useState, useContext } from "react";
import { ThemeContext } from "@/app/themeProvider";

gsap.registerPlugin(useGSAP, Observer);

export default function Header() {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [disableHoverAnimation, setDisableHoverAnimation] = useState(false);

  const handleHover = () => {
    if (!disableHoverAnimation) {
      gsap.fromTo(
        ".menuLine",
        {
          scaleX: 0,
        },
        { scaleX: 1, stagger: 0.2, delay: 0.1 }
      );
    }
  };

  const hanleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setDisableHoverAnimation(true);
      gsap.to(
        ".menuLine-1",
        {
          top: "50%",
          rotation: 45,
        },
        0
      );
      gsap.to(".menuLine-2", { top: "50%", rotation: -45 }, 0);
      gsap.to(".menu-btns", { left: 0, duration: 1 });
      gsap.to(".dropdown-menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
      });
    } else {
      setIsOpen(false);
      setDisableHoverAnimation(false);
      gsap.to(
        ".menuLine-1",
        {
          top: "40%",
          rotation: 0,
        },
        0
      );
      gsap.to(".menuLine-2", { top: "60%", rotation: 0 }, 0);
      gsap.to(".menu-btns", { left: "100%", duration: 1 });
      gsap.to(
        ".dropdown-menu",

        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
        }
      );
    }
  };

  return (
    <nav className="fixed top-0 z-[20] w-full grid grid-cols-12 py-2">
      <div className="col-span-10 col-start-2 relative">
        <div className="flex flex-row items-center justify-between">
          <Link href={"/"} className="corsur-pointer p-2">
            <Image
              src={"/images/peanut2.png"}
              alt="logo"
              width={50}
              height={50}
              style={{
                borderRadius: "50%",
              }}
            />
          </Link>
          <div className="flex flex-row space-x-8 overflow-x-hidden">
            <div className="menu-btns hidden space-x-2 relative px-4 md:flex md:flex-row">
              <Link
                className="px-4 rounded-4xl bg-black flex justify-center items-center text-white text-sm font-semibold hover:text-themeYellow"
                href={"/files/xiaohong-zhuang-cv.pdf"}
              >
                Download CV
              </Link>
              <Link
                className="px-4 rounded-4xl bg-black flex justify-center items-center text-white text-sm font-semibold hover:text-themeYellow"
                href={"mailto:josie58@live.cn"}
              >
                Contact Me
              </Link>
            </div>
            <div
              className="menuBar cursor-pointer relative w-16 h-10"
              onMouseOver={handleHover}
              onClick={hanleClick}
            >
              <div
                className={`menuLine menuLine-1 ${
                  theme.isTurnToDark ? "bg-themeGray" : "bg-black"
                }`}
              ></div>
              <div
                className={`menuLine menuLine-2 ${
                  theme.isTurnToDark ? "bg-themeGray" : "bg-black"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-1 justify-end dropdown-menu py-4 mt-4 md:hidden`}
        >
          <ul className="">
            <li className="py-2 px-4">
              <Link
                className="flex justify-center items-center text-white text-sm font-semibold hover:text-black"
                href={"/files/xiaohong-zhuang-cv.pdf"}
              >
                Download CV
              </Link>
            </li>
            <li className="py-2 px-4">
              <Link
                className="flex justify-center items-center text-white text-sm font-semibold hover:text-black"
                href={"mailto:josie58@live.cn"}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
