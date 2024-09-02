import React from "react";
import logo from "../../public/assets/logosaas.png";
import Image from "next/image";
import socialX from "../../public/assets/social-x.svg";
import socialInsta from "../../public/assets/social-insta.svg";
import socialLinkdlin from "../../public/assets/social-linkedin.svg";
import socialPin from "../../public/assets/social-pin.svg";
import socialYoutube from "../../public/assets/social-youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div>
          <div className="inline-flex justify-center relative before:h-full before:w-full before:content-[''] before:absolute before:blur  before:bg-[linear-gradient(to_right,#f87bff,#fb9cf,#ffdd9b,#c2f0b1,#2fd8fe)]">
            <Image src={logo} height={40} width={40} alt="logo" className="" />
          </div>

          <nav className="flex flex-col md:flex-row gap-6 mt-6 items-center justify-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
          </nav>
          <div className="flex items-center gap-6 mt-6 justify-center">
            <Image src={socialX} alt="" />
            <Image src={socialInsta} alt="" />
            <Image src={socialLinkdlin} alt="" />
            <Image src={socialPin} alt="" />
            <Image src={socialYoutube} alt="" />
          </div>

          <p className="mt-6">&copy; 2024 Developed by Rahmat Ali.</p>
        </div>
      </div>
    </footer>
  );
}
