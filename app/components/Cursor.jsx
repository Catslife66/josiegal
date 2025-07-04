"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const mouseRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(mouseRef.current, {
        opacity: 1,
        translateX: e.clientX,
        translateY: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.05,
        ease: "power1.inOut",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      className="fixed rounded-full border-1 z-10"
      style={{
        width: "20px",
        height: "20px",
        opacity: 0,
        pointerEvents: "none",
      }}
    ></div>
  );
}
