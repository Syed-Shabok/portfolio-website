"use client";
import { useRef } from "react";
import Image from "next/image";
import devImage from "@/assets/developerImg.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

export default function Hero() {
  const container = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(".hero-title", { y: 100, opacity: 0, stagger: 0.2 })
      .from(".hero-desc", { y: 50, opacity: 0 }, "-=0.6")
      .from(".hero-btns", { y: 30, opacity: 0 }, "-=0.4")
      .from(".hero-image-container", { scale: 0.8, opacity: 0, rotate: 5 }, "-=1");
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7VGLmFSu4VtOIwhgO5QWr36IB4s5DJuxLDOIRG_EpmqWovqKk0PvFhFDkmlZasmCF4RDuzqnNb_Kg5m90OX3aTu83uzl78RmmKi1MSBFFK4kCpvztvcnBL9k96voAqNcVh5LUCuUWYO9AMWTf7LWgcS8wElU0S6HWf1sdNaHkYilgPJoyAkLMOq55tu27VJbnaztM28-zK0Pt-Zh20qvlqyaAmdNxnY5BJsHurilnJ8KPKd-V7Akbe4H-PLy0pllAXv6WDGZvRnE"
          alt="Technical Background"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pb-20 px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div ref={textRef}>
          <h1 className="hero-title font-h1 text-6xl md:text-8xl text-white mb-6 leading-tight">
            Crafting <span className="text-primary">Next-Gen</span> Digital Experiences
          </h1>
          <p className="hero-desc font-body-lg text-on-surface-variant text-xl max-w-2xl mb-12 leading-relaxed">
            Full-stack developer specializing in high-performance architectures, distributed systems, and premium UI/UX design.
          </p>
          <div className="hero-btns flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-outline px-8 py-4 rounded-full font-bold text-lg text-white transition-all"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Right Content: Profile Image */}
        <div className="hero-image-container flex justify-center lg:justify-end relative">
          <div className="relative w-70 h-70 md:w-[500px] md:h-[500px]">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full scale-110"></div>
            <div className="absolute inset-0 border border-primary/20 rounded-full scale-125"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl glass-panel">
              <Image
                src={devImage}
                alt="Image of the developer"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
