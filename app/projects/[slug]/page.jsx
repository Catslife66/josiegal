import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCaseContent } from "@/public/content/textContent";

export default function ProjectDetail(props) {
  const params = use(props.params);
  const slug = params.slug;
  const project = projectCaseContent.find((p) => p.slug === slug);
  const otherProjects = projectCaseContent.filter((p) => p.slug !== slug);
  if (!project) return notFound();

  return (
    <div className="W-full grid grid-cols-12 bg-black text-white">
      <div className="col-span-10 col-start-2 grid grid-cols-subgrid pt-[12rem] pb-[8rem]">
        <div className="col-span-5 flex flex-col space-y-8">
          <h2 className="uppercase text-4xl font-black">{project.name}</h2>
          <div className="flex flex-row flex-wrap">
            {project.tags.map((tag, i) => (
              <div key={i} className="me-2">
                <span className="me-2">{tag}</span>
                <span>/</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 col-end-11 grid grid-cols-5">
          <div className="col-span-2 border-t-1 content-center">Year</div>
          <div className="col-span-3 border-t-1 content-center">
            {project.year}
          </div>
          <div className="col-span-2 border-t-1 content-center">Location</div>
          <div className="col-span-3 border-t-1 content-center">
            {project.location}
          </div>
          <div className="col-span-2 border-t-1 content-center">Role</div>
          <div className="col-span-3 border-t-1 content-center">
            {project.role}
          </div>
          <div className="col-span-2 border-y-1 content-center">View Demo</div>
          <Link
            className="col-span-3 border-y-1 flex flex-row items-center"
            href={project.liveSite ? project.liveSite : project.githubLink}
          >
            {project.liveSite ? "Visit link" : "Source code"}
            <svg
              className="ms-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="col-span-10 col-start-2">
        <p className="text-3xl font-semibold text-center py-[4rem]">
          {project.description}
        </p>
      </div>

      <div className="col-span-10 col-start-2 grid grid-cols-subgrid py-[4rem]">
        <div className="col-span-3 mb-[4rem]">
          <h3 className="text-2xl pb-2 w-fit border-b-1">Objectives</h3>
        </div>
        <div className="col-span-7 mb-[4rem]">
          {project.objectives.map((obj, idx) => (
            <div key={idx} className="flex flex-row space-x-4 mb-4 text-xl">
              <span className="">{obj.order}</span>
              <p className="">{obj.content}</p>
            </div>
          ))}
        </div>

        <div className="col-span-3">
          <h3 className="text-2xl pb-2 w-fit border-b-1">Features</h3>
        </div>
        <div className="col-span-7">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex flex-row space-x-4 mb-4 text-xl">
              <span className="">{feature.order}</span>
              <p>{feature.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="col-span-12"
        style={{ position: "relative", height: "60vh", width: "100%" }}
      >
        <Image
          src={project.bannerImg.src}
          alt={project.bannerImg.alt}
          fill={true}
          sizes="(min-width: 768px) 100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="col-span-10 col-start-2 grid grid-cols-subgrid py-[4rem]">
        <div className="col-span-3 mb-[4rem]">
          <h3 className="text-2xl pb-2 w-fit border-b-1">Outcomes</h3>
        </div>
        <div className="col-span-7">
          {project.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex flex-row space-x-4 mb-4 text-xl">
              <span className="">{outcome.order}</span>
              <p className="">{outcome.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-10 col-start-2 py-[4rem]">
        <Link
          className="w-full flex flex-row items-center justify-center text-3xl text-center"
          href={project.liveSite ? project.liveSite : project.githubLink}
        >
          <span>
            View {project.liveSite ? "Live Link/Prototype" : "Source Code"}:
          </span>
          <svg
            className="ms-4"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="white"
          >
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
          </svg>
        </Link>
      </div>

      <div className="col-span-10 col-start-2 grid grid-cols-subgrid pt-[4rem] pb-[10rem]">
        {otherProjects.map((proj, idx) => (
          <Link
            key={idx}
            href={`/projects/${proj.slug}`}
            className="col-span-5 cursor-pointer"
          >
            <div className="flex flex-row justify-center w-fit pb-2 border-b-1">
              <span>View Project</span>
              <span className="ms-1 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="white"
                >
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
              </span>
            </div>
            <h4 className="uppercase text-2xl font-bold mt-4 pr-[4rem]">
              {proj.name}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
