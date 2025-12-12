"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const images = ["ma1.png", "ma2.png", "ma3.png", "ma4.png", "ma5.png", "ma6.png"];

const duplicatedImages = [...images, ...images];

const Marquee = () => {
  return (
    <div className="overflow-hidden w-full dark:bg-black bg-white py-6 mt-10 relative">
      {/* Left Gradient */}
      <div
        className="
          pointer-events-none absolute left-0 top-0 h-full w-32 z-10 max-[500px]:hidden
          dark:bg-[linear-gradient(to_right,black_10%,transparent_100%)]
          bg-[linear-gradient(to_right,white_10%,transparent_100%)]
        "
      />

      {/* Right Gradient */}
      <div
        className="
          pointer-events-none absolute right-0 top-0 h-full w-32 z-10 max-[500px]:hidden
          dark:bg-[linear-gradient(to_left,black_10%,transparent_100%)]
          bg-[linear-gradient(to_left,white_10%,transparent_100%)]
        "
      />

      <motion.div
        className="flex gap-10 min-w-max"
        style={{ willChange: "transform" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {duplicatedImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="shrink-0 flex items-center justify-center"
            whileHover={{
              scale: 1.08,
              zIndex: 20,
              boxShadow: "0 6px 28px 0 rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={`/${img}`}
              alt={`m ${(idx % images.length) + 1}`}
              width={300}
              height={200}
              className="object-contain w-[400px] rounded-xl transition-all duration-300 shadow-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
