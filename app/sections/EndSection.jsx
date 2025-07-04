import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function EndSection() {
  useGSAP(() => {
    SplitText.create(".endSpan", {
      type: "lines",
      linesClass: "end-lines",
      mask: "lines",
      autoSplit: true,
    });
  }, {});

  return (
    <div
      id="endWrapper"
      className="relative z-[5] grid grid-cols-12 bg-black text-white content-center h-[50vh]"
    >
      <div className="col-span-10 col-start-2 md:col-span-6 md:col-start-4">
        <p className="endSpan text-4xl text-center font-bold">
          I’m actively building & learning. For more, please visit my github.
        </p>
      </div>
    </div>
  );
}
