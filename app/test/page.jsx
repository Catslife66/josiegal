"use client ";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function IntroSection() {
  return (
    <>
      <div className="w-full h-screen bg-red-100">page1</div>
      <div className="W-full grid grid-cols-12 bg-white">
        <div className="col-span-10 col-start-2 grid grid-cols-subgrid py-[8rem]">
          <div className="col-span-5 flex flex-col space-y-8">
            <h2 className="uppercase text-4xl font-bold">
              Southern Airlines Hotel Booking Mini Programme and Official
              Website
            </h2>
            <div className="flex flex-row flex-wrap">
              <span>WeChat Mini Programme /</span>
              <span>Mini Programme /</span>
              <span>WeChat Mini /</span>
              <span>WeChat/</span>
            </div>
          </div>
          <div className="col-span-4 col-end-11 grid grid-cols-5">
            <div className="col-span-2 border-t-1 content-center">Year</div>
            <div className="col-span-3 border-t-1 content-center">2017</div>
            <div className="col-span-2 border-t-1 content-center">Year</div>
            <div className="col-span-3 border-t-1 content-center">2017</div>
            <div className="col-span-2 border-t-1 content-center">Year</div>
            <div className="col-span-3 border-t-1 content-center">2017</div>
            <div className="col-span-2 border-t-1 content-center">Year</div>
            <div className="col-span-3 border-t-1 content-center">2017</div>
          </div>
        </div>

        <div className="col-span-10 col-start-2">
          <p className="text-3xl font-semibold text-center py-[4rem]">
            Led the conceptualisation, development, and implementation of the
            China Southern Airlines Pearl Hotel Booking Mini Programme on
            WeChat, creating a robust and convenient direct booking channel for
            hotel customers. Please view the project detail and find a Figma
            prototype link to simulate the whole mini-programme user
            experience. 
          </p>
        </div>

        <div className="col-span-10 col-start-2 grid grid-cols-subgrid py-[4rem]">
          <div className="col-span-3 mb-[4rem]">
            <h3 className="text-2xl pb-2 w-fit">Objectives</h3>
          </div>
          <div className="col-span-7 mb-[4rem]">
            <div className="flex flex-row space-x-4 mb-4">
              <span className="">01</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio ad ipsa, voluptatem id nam laboriosam itaque accusantium
                error dolor!
              </p>
            </div>
            <div className="flex flex-row space-x-4 mb-4">
              <span className="">01</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio ad ipsa, voluptatem id nam laboriosam itaque accusantium
                error dolor!
              </p>
            </div>
            <div className="flex flex-row space-x-4 mb-4">
              <span className="">01</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio ad ipsa, voluptatem id nam laboriosam itaque accusantium
                error dolor!
              </p>
            </div>
          </div>

          <div className="col-span-3">
            <h3 className="text-2xl pb-2 w-fit border-b-1">Objectives</h3>
          </div>
          <div className="col-span-7">
            <div className="flex flex-row space-x-4 mb-4">
              <span className="">01</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio ad ipsa, voluptatem id nam laboriosam itaque accusantium
                error dolor!
              </p>
            </div>
            <div className="flex flex-row space-x-4 mb-4">
              <span className="">01</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio ad ipsa, voluptatem id nam laboriosam itaque accusantium
                error dolor!
              </p>
            </div>
            <div className="flex flex-row space-x-4 mb-4">
              <span className="">01</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio ad ipsa, voluptatem id nam laboriosam itaque accusantium
                error dolor!
              </p>
            </div>
          </div>
        </div>

        <div
          className="col-span-10 col-start-2"
          style={{ position: "relative", height: "40vh", width: "100%" }}
        >
          <Image
            src={"/images/mini-programmer-banner.png"}
            alt="text"
            fill={true}
            sizes="(min-width: 768px) 100vw"
          />
        </div>

        <div className="col-span-10 col-start-2 grid grid-cols-subgrid py-[4rem]">
          <div className="col-span-10 py-8 mb-8">
            <h3 className="text-2xl text-center">Outcomes</h3>
          </div>
          <div className="col-span-10 grid grid-cols-subgrid grid-rows-2">
            <div className="col-span-5 border-b-1 border-r-1 content-center px-[4rem] py-8">
              Achieved an average 230,000 RMB in monthly revenue 6 months after
              its launch.
            </div>
            <div className="col-span-5 border-b-1 content-center px-[4rem] py-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              aspernatur itaque omnis enim ad ducimus nisi eligendi repudiandae,
              tempore nam recusandae quaerat asperiores? Adipisci numquam
              exercitationem veniam voluptate? Aperiam, eius!
            </div>
            <div className="col-span-5 border-r-1 content-center px-[4rem] py-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              aspernatur itaque omnis enim ad ducimus nisi eligendi repudiandae
            </div>
            <div className="col-span-5 content-center px-[4rem] py-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              aspernatur itaque omnis enim ad ducimus nisi eligendi repudiandae,
              tempore nam recusandae quaerat asperiores?
            </div>
          </div>
        </div>

        <div className="col-span-10 col-start-2 py-[4rem]">
          <Link
            className="w-full flex flex-row items-center justify-center text-4xl text-center"
            href={"/"}
          >
            View Live Link/prototype:{" [-/-]"}
          </Link>
        </div>

        <div className="col-span-10 col-start-2 grid grid-cols-subgrid py-[4rem]">
          <div className="col-span-4">
            <div className="w-fit mb-4 border-b-1">view project {"->"}</div>
            <h4 className="uppercase text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, laudantium!
            </h4>
          </div>
          <div className="col-span-4 col-end-11">
            <div className="w-fit mb-4 border-b-1">view project {"->"}</div>
            <h4 className="uppercase text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, laudantium!
            </h4>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-red-300">page3</div>
    </>
  );
}
