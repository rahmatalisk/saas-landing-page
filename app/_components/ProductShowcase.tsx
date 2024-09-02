"use client";
import React, { useRef } from "react";
import productImage from "../../public/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "../../public/assets/pyramid.png";
import tubeImage from "../../public/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProductShowcase() {
  const showcaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={showcaseRef}
      className="bg-gradient-to-b from-[#fff] to-[#d2dcef] py-24 overflow-x-clip"
    >
      <div className="container">
        <div>
          <div className="max-w-[540px] lg:max-w-[800px] mx-auto">
            <div className="tag w-fit mx-auto block">
              Boost your productivity
            </div>
            <h2 className="section-title mt-5">
              A more effective way to track progress
            </h2>
            <p className=" section-description mt-5 mb-10">
              Effortlessly turn your ideas into a fully functional, responsive,
              Saas website in just minutes with this template.
            </p>
          </div>

          <div className="relative">
            <Image src={productImage} alt="" className="mt-10" />

            <motion.div
              style={{ translateY: translateY }}
              className=" hidden md:block absolute -right-36 -top-32"
            >
              <Image
                src={pyramidImage}
                alt=""
                height={262}
                width={262}
                className=" hidden md:block absolutee -right-36 -top-32"
              />
            </motion.div>
            <motion.div
              style={{ translateY: translateY }}
              className="hidden md:block absolute bottom-24 -left-36"
            >
              <Image
                src={tubeImage}
                alt=""
                height={248}
                className="hidden md:block absolutee bottom-24 -left-36"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
