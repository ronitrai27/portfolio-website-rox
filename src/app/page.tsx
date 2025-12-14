"use client";
import { AnimatedGradientTextDemo } from "@/components/custom/Banner";

import Section1 from "@/components/custom/Section1";
import Section2 from "@/components/custom/Section2";
import { AnimatedThemeTogglerDemo } from "@/components/custom/Theme";
import { LightRays } from "@/components/ui/light-rays";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      {/* HERE SECTION */}
      <div className="h-screen relative overflow-hidden w-screen">
        <LightRays />

        {/* Dashed Bottom Left Fade Grid */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
            linear-gradient(to right, #2e2e2e 1px, transparent 1px),
            linear-gradient(to bottom, #2e2e2e 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
          `,
            WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
          `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        ></div>
        <main className="z-20 lg:pt-28 h-screen max-w-[1460px] mx-auto  w-full flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols-3 px-10 justify-center items-center ">
            {/* ======TEXT PART======== */}
            <div className="flex-col space-y-6 items-center justify-center ">
              <AnimatedGradientTextDemo />
              <div className="flex flex-col items-center ">
                <h1 className="font-inter text-2xl font-semibold tracking-tight">
                  Highly Scalable{" "}
                  <span className="font-arimo text-orange-400">Full-Stack</span>{" "}
                </h1>
                <div className="flex gap-1 mt-1">
                  <Image
                    src="/h2.png"
                    width={70}
                    height={70}
                    alt="rox"
                    className="object-cover"
                  />
                  <h1 className="font-inter text-2xl font-semibold tracking-tighter">
                    {" "}
                    & <span className="font-sora text-orange-400">
                      Gen-AI
                    </span>{" "}
                    Developer
                  </h1>
                </div>
                <h1 className="font-inter text-2xl -mt-8 font-semibold tracking-tight">
                  From{" "}
                  {/* <span className=" bg-linear-to-br from-blue-500 to-orange-400 text-transparent bg-clip-text font-extrabold text-4xl">
                  INDIA
                </span> */}
                  INDIA
                </h1>
              </div>
            </div>
            {/* =====IMAGE PART======== */}
            <div className="relative z-20">
              <Image
                src="/h1.png"
                width={700}
                height={700}
                alt="rox"
                className="object-cover  scale-125 "
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 30%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 30%, transparent 100%)",
                }}
              />
            </div>
            {/* =======END======== */}
            <div className="flex flex-col space-y-4 tracking-tight w-[400px] ml-auto">
              <div className="font-sora text-2xl">
                Hi, I&apos;m <span className="text-orange-400">Ronit Rai</span>{" "}
                {/* <div className="rounded-full bg-orange-500 py-1 w-[130px]">
                  <Image
                    src="/me3.png"
                    width={40}
                    height={40}
                    alt="wave"
                    className="object-contain w-12 h-12 rounded-full inline bg-white border "
                  />
                </div> */}
                — a Full-Stack & Gen-AI developer who loves turning crazy ideas
                into scalable, real-world products.
              </div>
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-gray-200/80 border dark:bg-gray-800 h-10 w-56  text-left p-3 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-orange-300 after:right-8 after:top-3 after:rounded-full after:blur-lg font-inter dark:text-white text-gray-500">
                Download CV
              </button>
            </div>
          </div>
          <h1 className="text-[150px] -mt-20 font-orb font-extrabold tracking-wider z-20 ">
            I&apos;m ROX.
          </h1>
        </main>
      </div>

      {/* ============SECTION - 1=========== */}
      <Section1 />
      {/* ===========SECTION - 2=========== */}
      <Section2 />
    </div>
  );
};

export default Home;
