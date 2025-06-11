import Image from "next/image";
import React, { useState } from "react";
import ToggleDark from "./ToggleDark";

export default function HeaderMain({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [searchShow, setSearchShow] = useState(false);

  return (
    <>
      <header className="w-full p-3 bg-neutral-00 dark:bg-neutral-60 rounded-2xl flex justify-between gap-2">
        <div
          className={`flex justify-between  ${
            !searchShow ? "w-fit" : "w-0"
          } sm:w-fit transition-all duration-100`}
        >
          <Image
            src="/assets/images/logo.svg"
            alt="logo extension"
            width={200}
            height={100}
          />
        </div>
        <div className="self-center flex justify-center gap-2">
          <label
            className="p-3 bg-neutral-10 hover:bg-neutral-30 dark:bg-neutral-50 rounded-xl h-fit dark:hover:bg-neutral-40 cursor-pointer transition-all duration-100"
            onClick={() => {
              setSearchShow(!searchShow);
              setQuery("");
            }}
            htmlFor="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
          </label>

          <input
            type="text"
            id="search"
            className={`${
              searchShow
                ? "p-2 w-52 rounded-lg bg-neutral-10 dark:bg-neutral-50 border border-neutral-30 dark:border-neutral-40 transition-all duration-300"
                : "w-0 transition-all duration-300"
            }`}
            onChange={(e) => {
              e.target.value.length > 0
                ? setQuery(e.target.value)
                : setQuery("");
            }}
          />

          <ToggleDark />
        </div>
      </header>
    </>
  );
}
