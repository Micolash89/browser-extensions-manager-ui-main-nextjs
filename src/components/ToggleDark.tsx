"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import React from "react";

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/;max-age=31536000`;
}

export default function ToggleDark() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = getCookie("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("light");
      setCookie("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setCookie("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setCookie("theme", "light");
    }
  };

  if (!theme) return null;

  return (
    <>
      <button
        onClick={toggleTheme}
        className="p-3 bg-neutral-10 hover:bg-neutral-30  dark:bg-neutral-50 rounded-xl  h-fit dark:hover:bg-neutral-40 cursor-pointer transition-all duration-100 self-center"
      >
        {theme === "light" ? (
          <Image
            src="/assets/images/icon-moon.svg"
            alt="imagen luna"
            className=""
            width={24}
            height={24}
          />
        ) : (
          <Image
            src="/assets/images/icon-sun.svg"
            alt="imagen sol"
            className=" "
            width={24}
            height={24}
          />
        )}
      </button>
    </>
  );
}
