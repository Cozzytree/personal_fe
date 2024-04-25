"use client";

import Link from "next/link";
import LinkItems from "./linkItems";
import { Cedarville_Cursive } from "next/font/google";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { BarChartIcon } from "@radix-ui/react-icons";
import { useState } from "react";
const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const Nav = () => {
  const [isNav, setNav] = useState(null);
  return (
    <>
      <HiBars3CenterLeft
        className="fixed left-2 top-2 cursor-pointer sm:hidden z-[999]"
        size={20}
        onClick={() => setNav((nav) => !nav)}
      />
      <div
        className={`${
          isNav ? "z-[900] opacity-[100]" : "z-[-999] opacity-0"
        } fixed w-screen h-screen top-0 left-0 backdrop-blur-lg`}
      >
        <nav
          className={`${
            isNav ? "translate-x-0" : "translate-x-[-300px]"
          } h-screen w-[300px] origin-right transition-all duration-150 py-10 flex flex-col gap-3`}
        >
          <LinkItems label="Home" to="/" />
          <LinkItems label="News" to="/news" />
        </nav>
      </div>

      <div className="w-full flex justify-center border-b-[1px] border-b-zinc-400/10 py-2">
        <nav className="container mx-auto flex items-center gap-3 backdrop-blur-md px-5 sm:px-2 ">
          <Link href="/" className="border-r-[1px] border-b-zinc-400/60 px-2">
            <h1
              className={`${cursive.className} cursor-pointer font-extrabold text-xl`}
            >
              Persona
            </h1>
          </Link>

          <div className="hidden sm:flex items-center gap-2">
            <LinkItems label="Home" to="/" />
            <LinkItems label="News" to="/news" />
          </div>
        </nav>
      </div>
    </>
  );
};
export default Nav;
