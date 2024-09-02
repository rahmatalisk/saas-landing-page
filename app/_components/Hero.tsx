"use client";

import React, { useRef } from "react";
import arrowRight from "../../public/assets/arrow-right.svg";
import cogImage from "../../public/assets/cog.png";
import cylinderImage from "../../public/assets/cylinder.png";
import noodleImag from "../../public/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8  pb-20 md:pt-5 md:pb-10 xl:pb-24 xl:pt-12 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center justify-between">
          {" "}
          <div className="md:max-w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b to-[#001e80] from-black text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] text-tight mt-6">
              Celebrate the joy o f accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn ">Get For free</button>
              <button className="btn btn-primary flex items-center gap-1">
                <span>Learn more</span>
                <Image src={arrowRight} alt="logo" className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1  ">
            <div className="w-full h-full flex justify-end relative">
              <motion.div
                className="md:absolute md:left-6 xl:right-0 xl:left-auto md:h-full"
                animate={{ translateY: [-30, 30] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={cogImage}
                  alt="cog-image"
                  className=" md:h-full md:w-auto md:max-w-none "
                />
              </motion.div>
              <motion.div
                className="hidden md:block -top-8 -left-32 md:absolute  xl:left-32"
                style={{ translateY: translateY }}
              >
                <Image
                  src={cylinderImage}
                  alt="cylinder"
                  width={220}
                  height={220}
                  className="hidden md:block -top-8 -left-32 md:absolutee  xl:left-32"
                />
              </motion.div>
              <motion.div
                className="hidden lg:block top-[524px] left-[448px] md:absolute rotate-[30deg] lg:right-0 xl:left-auto "
                style={{ translateY: translateY }}
              >
                <Image
                  src={noodleImag}
                  alt="noodleImage"
                  width={220}
                  className="hidden lg:block top-[524px] left-[448px] md:absolutee rotate-[30deg] lg:right-0 xl:left-auto "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
