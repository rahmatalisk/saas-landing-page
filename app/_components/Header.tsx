import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logosaas.png";
import menuIcon from "../../public/assets/menu.svg";

export default function Header() {
  return (
    <header className="py-2 md:py-4  sticky top-0 backdrop-blur-sm z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Image src={logo} height={40} width={40} alt="logo" />
          <Image src={menuIcon} className="w-5-h-5 md:hidden" alt="logo" />

          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="btn">Get for free</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
