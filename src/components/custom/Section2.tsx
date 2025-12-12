import React from "react";
import Iridescence from "@/components/Iridescence";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
export default function Section2() {
  return (
    <div className="w-full lg:max-w-6xl mx-auto h-[500px] overflow-hidden my-20  rounded-2xl">
      <div className="w-full h-full relative cursor-grab shadow">
        <Iridescence
          color={[0.2, 0.6, 0.9]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
        <div className="flex flex-col space-y-5 z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full p-10">
          <h1 className="font-orb text-6xl font-extrabold">
            GOT AN <span className="text-orange-500">IDEA</span>? LET&apos;S{" "}
            <span className="text-orange-500">COOK</span>.
          </h1>
          <h3 className="font-sora text-xl text-gray-200 mt-2">
            Websites, AI tools, apps — if it lives on the internet, I can bring
            it to life.
          </h3>
          <button
            className="
  relative group mx-auto w-fit mt-5 rounded-lg px-4 py-2 dark:bg-black/60  bg-white/60 dark:text-white text-black flex items-center gap-3
  transition-all duration-300
  hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-300/40 
"
          >
          
            <span
              className="
    w-8 h-8 rounded-full bg-orange-400 
    flex items-center justify-center
    transition-all duration-300
    group-hover:translate-x-1 group-hover:bg-white group-hover:text-black
  "
            >
              <LucideChevronRight />
            </span>

            {/* Text */}
            <span className="font-medium font-sora transition-all duration-300 group-hover:tracking-wide">
              Let&apos;s Connect
            </span>

            {/* After subtle glow */}
            <span
              className="
    absolute inset-0 rounded-xl pointer-events-none
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    ring-2 ring-orange-400/30
  "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
