import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="grid grid-cols-12 bg-themeYellow py-4">
      <div className="col-span-10 col-start-2 grid grid-cols-subgrid">
        <div className="col-span-10 content-center grid grid-cols-subgrid pt-[4rem]">
          <div className="col-span-10 md:col-span-5 flex flex-col">
            <Link
              href={"/"}
              className="text-center text-6xl text-darkBlue py-4 md:text-7xl uppercase font-extrabold hover:cursor-pointer"
            >
              josiegal
            </Link>
            <div className="h-32" style={{ position: "relative" }}>
              <Image
                src={"/images/footer-img.png"}
                alt="images of my seagull friend Peanut"
                fill={true}
                sizes="(min-width: 768px) 100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="col-span-10 text-xl font-black md:col-span-5 md:content-center">
            <div className="flex flex-row flex-wrap justify-center mx-auto py-8">
              <h4 className="w-2/5 pb-4">Find me on</h4>
              <Link
                className="w-2/5 flex justify-end pb-4 hover:cursor-pointer md:justify-start"
                href={"https://github.com/Catslife66"}
              >
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <h4 className="w-2/5 pb-4">Get in touch</h4>
              <Link
                href="mailto:josie58@live.cn"
                className="w-2/5 text-end pb-4 hover:underline hover:cursor-pointer md:text-start"
              >
                josie58@live.cn
              </Link>

              <h4 className="w-2/5 pb-4">Base in</h4>
              <div className="w-2/5 text-end pb-4 md:text-start">
                Falkirk, UK
              </div>
              <h4 className="w-2/5 pb-4">Get my cv</h4>
              <Link
                className="w-2/5 flex justify-end pb-4 hover:cursor-pointer md:justify-start"
                href={"/files/xiaohong-zhuang-cv.pdf"}
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-10 ">
          <div className="flex flex-row items-center space-x-1 justify-center mt-8">
            <span className="text-xs">© 2025</span>
            <span className="text-xs">All rights preserve.</span>
            <span className="text-xs ms-1">- v 1.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
