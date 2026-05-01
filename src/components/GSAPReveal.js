"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPReveal({ children, direction = "up" }) {
  const elementRef = useRef();

  useGSAP(() => {
    const xDist = direction === "left" ? -50 : direction === "right" ? 50 : 0;
    const yDist = direction === "up" ? 50 : direction === "down" ? -50 : 0;

    gsap.from(elementRef.current, {
      opacity: 0,
      x: xDist,
      y: yDist,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: elementRef });

  return <div ref={elementRef}>{children}</div>;
}
