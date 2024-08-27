"use client";

import React from "react";
import { navLinks } from "./navLinks";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import BrandLogo from "../BrandLogo";

type Props = {};

function DesktopNavbar({}: Props) {
  return (
    <header className="fixed inset-0 flex items-center w-full h-16 backdrop-blur-md backdrop-brightness-150 bg-white/80 border-b">
      <nav className="text-black max-w-screen-xl px-4 mx-auto  flex items-center justify-between w-full ">
        <BrandLogo href={"/"} />
        <div className="flex items-center gap-2">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="hover:bg-gray-100 px-2.5 py-1 rounded-sm duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex item-center gap-2">
          <a
            className="p-2 rounded-full min-h-10 min-w-10 flex items-center justify-center "
            href="https://github.com/Olawumi-Olusegun"
            target="_blank"
          >
            <Github className="rounde-full hover:animate-pulse" size={20} />
          </a>

          <Button
            asChild
            className="rounded-full bg-black hover:text-white text-white "
          >
            <a href={"#contact"}>Hire me</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default DesktopNavbar;
