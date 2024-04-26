"use client";

import Link from "next/link";
import LinkItems from "./linkItems";
import { Cedarville_Cursive } from "next/font/google";
import { HiBars3CenterLeft } from "react-icons/hi2";
import {
  ArrowLeftIcon,
  BarChartIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { CgSearchLoading } from "react-icons/cg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const Nav = () => {
  const [isNav, setNav] = useState(null);
  const [isSearch, setSearch] = useState(false);
  const { setTheme, theme } = useTheme();
  const navRef = useRef(null);
  useEffect(() => {
    if (isNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    const handleClikOutside = (e) => {
      if (e.target.tagName === "svg") return;
      if (navRef?.current && !navRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("click", handleClikOutside);

    return () => {
      document.removeEventListener("click", handleClikOutside);
    };
  }, [isNav]);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <HiBars3CenterLeft
        className="fixed left-2 top-3 cursor-pointer sm:hidden z-[999] w-[20px] p-1 scale-x-[2.2] scale-y-[3.2] "
        onClick={() => setNav((nav) => !nav)}
      />
      <div
        className={`${
          isNav ? "z-[900] opacity-[100]" : "z-[-999] opacity-0"
        } fixed w-screen h-screen top-0 left-0 backdrop-blur-lg`}
      >
        <nav
          ref={navRef}
          className={`${
            isNav ? "translate-x-0" : "translate-x-[-300px]"
          } h-screen w-[300px] bg-zinc-300 dark:bg-zinc-950 origin-right transition-all duration-150 py-10 flex flex-col items-center gap-3`}
        >
          <LinkItems onClick={() => setNav(null)} label="Home" to="/" />
          <LinkItems onClick={() => setNav(null)} label="News" to="/news" />
        </nav>
      </div>

      <div className="w-full sticky top-0 bg-[#cdc193] dark:bg-[#100e0e] flex justify-center border-b-[1px] border-b-zinc-400/10 py-2 z-[100]">
        <nav className="container mx-auto grid grid-cols-[auto_auto_0.5fr_auto] items-center gap-3 backdrop-blur-md px-5 sm:px-2 h-[60px]">
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

          {isSearch ? (
            <div className="flex items-center border-b-[1px] border-b-zinc-400 gap-2">
              <ArrowLeftIcon onClick={() => setSearch(false)} />
              <form action="" className="grid grid-cols-[1fr_auto] w-full">
                <input
                  placeholder="search"
                  type="text"
                  className="p-0 text-[14px] border-none outline-none focus:border-none bg-transparent"
                />
                <Button variant="ghost" size="icon" className="w-[20px]">
                  <CgSearchLoading />
                </Button>
              </form>
            </div>
          ) : (
            <CgSearchLoading onClick={() => setSearch(true)} />
          )}

          <div>
            {theme === "light" ? (
              <MoonIcon onClick={handleTheme} scale={1.2} cursor="pointer" />
            ) : (
              <SunIcon onClick={handleTheme} scale={1.2} cursor="pointer" />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
export default Nav;
