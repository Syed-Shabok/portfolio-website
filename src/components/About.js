"use client";
import aboutMEImg from "@/assets/aboutMeImg.png";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";


export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-5 md:py-10 lg:py-section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-last lg:order-first">
          <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-4">
            <Image
              src={aboutMEImg}
              alt="Developer Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-xl glow-accent">
            <p className="text-4xl font-bold text-white font-space-grotesk">5+</p>
            <p className="text-on-surface-variant text-sm">Years of<br />Experience</p>
          </div> */}
        </div>
        <div className="space-y-8 order-first lg:order-last">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <h2 className="font-h2 text-4xl text-white">About Me</h2>
          </div>
          <p className="text-xl text-on-surface-variant leading-relaxed text-center md:text-left">
            I am a passionate web developer who enjoys building modern, user-friendly applications and solving real-world problems through code. I focus on creating clean, efficient, and responsive experiences.
          </p>
          <p className="text-xl  text-on-surface-variant leading-relaxed text-center md:text-left">
            I work with technologies like React, Node.js, Express, and MongoDB, and I am constantly learning and improving my skills through hands-on projects and real-world practice.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-4 items-center justify-center md:justify-start">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-1">Location</h4>
              <p className="text-on-surface-variant"> Dhaka, Bangladesh</p>
            </div>
            {/* Socials  */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Email */}
              <motion.a
                href="mailto:syed.shabok@gmail.com"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border border-outline p-4 rounded-full font-bold text-lg text-white transition-all flex items-center gap-2"
              >
                <FaEnvelope size={18} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/syed-shabok/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border border-outline p-4 rounded-full font-bold text-lg text-white transition-all flex items-center gap-2"
              >
                <FaLinkedin size={18} />

              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Syed-Shabok"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border border-outline p-4 rounded-full font-bold text-lg text-white transition-all flex items-center gap-2"
              >
                <FaGithub size={18} />

              </motion.a>
            </div>
            {/* <div>
              <h4 className="text-white font-bold mb-1">Email</h4>
              <p className="text-on-surface-variant">syed.shabok@gmail.com</p>
            </div> */}
          </div>
        </div>
      </div>

    </section>
  );
}
