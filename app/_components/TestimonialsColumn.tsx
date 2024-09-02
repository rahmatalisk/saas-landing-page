"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "",
    imageSrc: "",
    name: "",
    username: "",
  },
];

export default function TestimonialsColumn(props: {
  className?: string;
  duration?: number;
  testimonials: typeof testimonials;
}) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-6 mt-10  ${props.className}`}
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration ? props.duration : 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      {props.testimonials.map(({ text, imageSrc, name, username }) => (
        <div key={text} className="card ">
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5 ">
            <Image
              src={imageSrc}
              width={40}
              height={40}
              alt={name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
