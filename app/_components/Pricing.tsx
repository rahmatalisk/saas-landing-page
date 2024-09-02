"use client";
import React from "react";
import CheckIcon from "../../public/assets/check.svg";
import CheckWhiteIcon from "../../public/assets/checkwhite.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5 max-w-[540px] mx-auto">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={`card ${
                  inverse === true
                    ? "border-black text-white bg-black"
                    : "border-[#f1f1f1]"
                }`}
              >
                <div className="flex justify-between">
                  <h3
                    className={`text-lg font-bold ${
                      inverse ? "text-white/60" : "text-black/50"
                    }`}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "-100%",
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 1,
                          ease: "linear",
                        }}
                        className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>

                <button
                  className={`btn w-full mt-[30px] ${
                    inverse === true && "bg-white text-black"
                  }`}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-4 text-sm"
                    >
                      <Image
                        className="w-6 h-6 check-mark"
                        src={inverse ? CheckWhiteIcon : CheckIcon}
                        alt=""
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
