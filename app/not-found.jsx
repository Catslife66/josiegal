import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[10rem]">
      <div className="relative">
        <h1 className="absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-black text-center uppercase md:text-8xl">
          404
        </h1>
        <h1 className="h1-shadow px-4 text-6xl font-black text-center uppercase md:text-8xl">
          404
        </h1>
      </div>
      <Link
        href={"/"}
        className="cursor-pointer my-4 bg-black text-white rounded-lg font-semibold mx-4 px-4 py-2 text-center"
      >
        Return to Homepage
      </Link>
      <div className="relative">
        <h1 className="absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-black text-center uppercase md:text-8xl">
          not found
        </h1>
        <h1 className="h1-shadow px-4 text-6xl font-black text-center uppercase md:text-8xl">
          not found
        </h1>
      </div>
    </div>
  );
}
