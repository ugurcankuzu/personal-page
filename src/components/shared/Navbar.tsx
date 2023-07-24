"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <nav className={`w-full h-[50px] flex justify-around items-center gap-2 transition-all duration-[.25s] bg-main ${isScrolled ? " shadow-md shadow-accent fixed top-0 left-0 z-[100]":""}`}>
        <Link href={"#home"} className="text-background" scroll={false}>Home</Link>
        <Link href={"#about"} className="text-background" scroll={false}>About Me</Link>
        <Link href={"#contact"} className="text-background" scroll={false}>Contact</Link>
    </nav>
  )
}
