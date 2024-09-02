"use client";
import React from "react";
import acmeLogo from "../../public/assets/logo-acme.png";
import quantumLogo from "../../public/assets/logo-quantum.png";
import echoLogo from "../../public/assets/logo-echo.png";
import celestialLogo from "../../public/assets/logo-celestial.png";
import pulseLogo from "../../public/assets/logo-pulse.png";
import apexLogo from "../../public/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoTicker() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex items-center gap-14 flex-none"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              className="logo-ticker-image "
              src={acmeLogo}
              alt="Acme Logo"
            />
            <Image
              className="logo-ticker-image "
              src={quantumLogo}
              alt="quantum Logo"
            />
            <Image
              className="logo-ticker-image "
              src={echoLogo}
              alt="EchoLogo"
            />
            <Image
              className="logo-ticker-image "
              src={celestialLogo}
              alt="Celestial Logo"
            />
            <Image
              className="logo-ticker-image "
              src={pulseLogo}
              alt="Pulse Logo"
            />
            <Image
              className="logo-ticker-image "
              src={apexLogo}
              alt="Apex Logo"
            />
            <Image
              className="logo-ticker-image "
              src={acmeLogo}
              alt="Acme Logo"
            />
            <Image
              className="logo-ticker-image "
              src={quantumLogo}
              alt="quantum Logo"
            />
            <Image
              className="logo-ticker-image "
              src={echoLogo}
              alt="EchoLogo"
            />
            <Image
              className="logo-ticker-image "
              src={celestialLogo}
              alt="Celestial Logo"
            />
            <Image
              className="logo-ticker-image "
              src={pulseLogo}
              alt="Pulse Logo"
            />
            <Image
              className="logo-ticker-image "
              src={apexLogo}
              alt="Apex Logo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
