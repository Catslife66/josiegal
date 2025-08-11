import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Observer from "gsap/Observer";
import SplitText from "gsap/SplitText";
import Link from "next/link";
import Image from "next/image";
import { projectCaseContent } from "@/public/content/textContent";

gsap.registerPlugin(useGSAP, SplitText, Observer);

function ProjectSectionHeading() {
  useGSAP(() => {
    SplitText.create(".procSpan", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      linesClass: "projectH2",
    });
  }, {});

  return (
    <div id="projectHeading" className="grid grid-cols-12 py-[8rem]">
      <div className="col-span-10 col-start-2">
        <h2 className="procSpan text-4xl font-semibold mb-8 md:text-6xl">
          My Projects
        </h2>
        <div className="procSpan text-xl">
          A mix of real-world experience & personal projects that shaped my
          development journey
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  useGSAP(() => {
    SplitText.create(".procLine", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      linesClass: "projectLines",
    });

    const projects = gsap.utils.toArray(".project");
    const imgs = gsap.utils.toArray(".projectImg");
    const lines = gsap.utils.toArray(".linkUnderline");

    projects.forEach((project, idx) => {
      Observer.create({
        target: project,
        type: "pointer",
        onHover: () => {
          const tl = gsap.timeline({
            ease: "power1.out",
            duration: 2.5,
          });
          tl.to(
            project,
            {
              flexGrow: 2,
            },
            0
          )
            .to(imgs[idx], { scale: 1.2 }, 0)
            .fromTo(
              lines[idx],
              {
                scaleX: 0,
              },
              {
                scaleX: 1,
              },
              0
            );
        },
        onHoverEnd: () => {
          const tl = gsap.timeline({
            ease: "power1.out",
            duration: 2.5,
          });
          tl.to(
            project,
            {
              flexGrow: 1,
            },
            0
          )
            .to(imgs[idx], { scale: 1 }, 0)
            .fromTo(
              lines[idx],
              {
                scaleX: 1,
              },
              {
                scaleX: 0,
              },
              0
            );
        },
      });
    });
  }, {});

  return (
    <div id="projectWrapper" className="bg-themeGray relative">
      <ProjectSectionHeading />
      <div id="projectList" className="pt-[4rem] pb-[8rem] grid grid-cols-12">
        <div className="col-span-10 col-start-2 md:col-span-9 md:col-start-3 lg:col-span-8 lg:col-start-4">
          <div className="flex flex-col min-h-[100vh]">
            {projectCaseContent.map((project, idx) => (
              <div
                key={idx}
                className={`project py-4 w-full flex grow flex-row flex-1 items-center space-x-8 ${
                  idx === projectCaseContent.length - 1
                    ? "border-y-1"
                    : "border-t-1"
                }`}
              >
                <div className="hidden md:block">
                  <Image
                    className="projectImg origin-left"
                    src={project.mainImg.src}
                    width={150}
                    height={150}
                    alt={project.mainImg.alt}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <div className="flex grow flex-row mb-4 md:mb-8">
                    <h4 className="pe-2">{project.num}</h4>
                    <h3 className="projectTitle text-2xl font-bold md:text-3xl lg:text-4xl">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex flex-col ms-7 md:flex-row md:justify-between md:items-end">
                    <div className="w-full text-sm font-light mb-4 md:w-3/5 md:mb-0">
                      {project.tags.map((tag, i) =>
                        i === project.tags.length - 1 ? (
                          <span key={i}>{tag}</span>
                        ) : (
                          <span key={i} className="me-1">
                            {tag},
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex flex-col w-fit text-sm">
                      <Link href={`projects/${project.slug}`}>View Detail</Link>
                      <div className="linkUnderline bg-black h-[1px] scale-x-0 origin-left"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
