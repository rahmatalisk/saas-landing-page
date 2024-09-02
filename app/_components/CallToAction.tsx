"use client";
import React, { useRef } from "react";
import ArrowRight from "../../public/assets/arrow-right.svg";
import starImage from "../../public/assets/star.png";
import springImage from "../../public/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CallToAction() {
  const sectioneRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectioneRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectioneRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="relative max-w-[540px] mx-auto">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy o f accomplishment with an app designed to track
            your progress, motivate your efforts.
          </p>
          <motion.div
            style={{ translateY: translateY }}
            className="absolute -left-[350px] -top-[137px]"
          >
            <Image
              src={starImage}
              alt=""
              width={360}
              className="absolutee -left-[350px] -top-[137px]"
            />
          </motion.div>

          <motion.div
            style={{ translateY: translateY }}
            className="absolute -right-[331px] -top-[19px]"
          >
            <Image
              src={springImage}
              alt=""
              width={360}
              className="absolutee -right-[331px] -top-[19px]"
            />
          </motion.div>
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <button className="btn">Get for free</button>
          <button className="btn btn-primary flex items-center gap-1">
            <span>Learn more</span> <Image src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
