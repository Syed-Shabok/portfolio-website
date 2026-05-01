"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
    },
    {
      name: "Unity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    }
  ];

  return (
    <section id="skills" className="bg-surface-container/30 py-25">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-h2 text-4xl text-white mb-4">Technical Arsenal</h2>
          <p className="text-on-surface-variant max-w-xl">
            A curated collection of technologies I use to build modern, scalable applications.
          </p>
        </div>

        {/* Single Skills Box */}
        <div className="">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {skills.map(skill => (
              <div key={skill.name} className="group flex flex-col items-center gap-2 cursor-pointer">
                <motion.a


                  title={skill.name}

                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-panel hover:border-primary/30 transition-colors p-4 rounded-full font-bold text-lg text-white transition-all flex items-center gap-2"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-11 w-11 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.a>
                <span className="text-xs text-on-surface-variant opacity-70 group-hover:opacity-100 transition-opacity">
                  {skill.name}
                </span>
              </div>

              // <div

              // key={skill.name}
              //   className="flex flex-col items-center gap-2 group"
              //   title={skill.name}
              // >
              //   <img
              //     src={skill.icon}
              //     alt={skill.name}
              //     className="h-10 w-10 object-contain group-hover:scale-110 transition-transform"
              //   />
              //   <span className="text-xs text-on-surface-variant opacity-70 group-hover:opacity-100 transition-opacity">
              //     {skill.name}
              //   </span>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}