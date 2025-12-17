/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import {
  SiReact,
  SiNextdotjs,
  SiWordpress,
  SiFigma,
  SiGithub,
  SiSlack,
  SiTrello,
  //   SiJavascript,
  //   SiTypescript,
  SiAngular,
  SiSanity,
  SiTailwindcss,
  SiVercel,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiDocker,
  //   SiVisualstudiocode,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJest,
  SiRedux,
  SiGit,
  SiPostgresql,
  SiMysql,
  //   SiAmazonaws,
  SiGooglecloud,
  // SiAzuredevops,
} from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";

export function WobbleCardDemo() {
  const collaborationIconsRow1 = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000" },
    { icon: SiAngular, name: "Angular", color: "#DD0031" },
    { icon: SiWordpress, name: "WordPress", color: "#21759B" },
    { icon: SiSanity, name: "Sanity", color: "#F03E2F" },
    { icon: SiFigma, name: "Figma", color: "#A259FF" },
    { icon: SiGithub, name: "Github", color: "#181717" },
    { icon: SiSlack, name: "Slack", color: "#611f69" },
    { icon: SiTrello, name: "Trello", color: "#0052CC" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiVercel, name: "Vercel", color: "#000" },
  ];

  const collaborationIconsRow2 = [
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiSass, name: "Sass", color: "#CC6699" },
    { icon: SiJest, name: "Jest", color: "#C21325" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiGooglecloud, name: "Google Cloud", color: "#4285F4" },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[350px] shadow-lg"
        className=""
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col">
            <h2 className="text-white font-inter font-bold text-4xl text-center mb-4 whitespace-nowrap">
              Modern Tech Stack
            </h2>
            <p className="text-center text-gray-300 font-inter mt-5 italic text-md">
              Scalable, high-performance technologies, tools, and frameworks I
              use to build modern applications.
            </p>
          </div>
          <div className="lg:w-[70%] lg:pl-8">
            <div className="space-y-6">
              {/* First Row */}
              <div className="overflow-x-hidden overflow-y-visible">
                <motion.div
                  className="flex space-x-4"
                  animate={{
                    x: [0, -100 * (collaborationIconsRow1.length / 2)],
                  }}
                  transition={{
                    x: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of icons */}
                  {collaborationIconsRow1.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={`row1-first-${index}`}
                        className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 0.8, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-8 h-8" color={item.color} />
                      </motion.div>
                    );
                  })}
                  {/* Duplicate set for seamless loop */}
                  {collaborationIconsRow1.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={`row1-second-${index}`}
                        className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 0.8, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-8 h-8" color={item.color} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Second Row - Moving in opposite direction */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex space-x-4"
                  animate={{
                    x: [-100 * (collaborationIconsRow2.length / 2), 0],
                  }}
                  transition={{
                    x: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of icons */}
                  {collaborationIconsRow2.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={`row2-first-${index}`}
                        className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 0.8, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                    );
                  })}
                  {/* Duplicate set for seamless loop */}
                  {collaborationIconsRow2.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={`row2-second-${index}`}
                        className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </WobbleCard>
      {/* 2ND  */}
      <WobbleCard containerClassName="col-span-1 min-h-[350px] bg-orange-500 shadow-lg ">
        <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-extrabold font-sora tracking-[-0.015em] text-white -mt-10">
          Achievements that speaks for themselves
        </h2>
        <p className="mt-4 max-w-[26rem] text-left lg:pr-16 font-arimo  text-base/6 text-neutral-200">
          Recognized as a best problem solver with multiple awards for
          innovation and excellence in Leadership.
        </p>
        <Image
          src="/medal.png"
          width={200}
          height={200}
          alt="linear demo image"
          className="absolute  -right-[10%] -bottom-5 object-contain rounded-2xl"
        />
      </WobbleCard>
      {/* 3RD */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-slate-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] shadow-lg">
        <div className="max-w-lg">
          <h2 className="text-left  text-base md:text-xl lg:text-4xl font-bold font-inter tracking-[-0.015em] text-white">
            Turning ideas into impactful products.
          </h2>

          <p className="mt-4 text-left font-arimo italic text-base/6 text-neutral-200">
            I build scalable full-stack and AI-driven projects focused on
            performance, usability, and real-world impact.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition">
            Explore My Work →
          </button>
        </div>
        <img
          src="/ben1.png"
          width={600}
          height={600}
          alt="linear demo image"
          className="absolute -right-2 -bottom-4 object-cover rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
