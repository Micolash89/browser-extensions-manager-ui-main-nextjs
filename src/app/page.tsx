"use client";
import FilterButton from "@/components/FilterButton";
import HeaderMain from "@/components/HeaderMain";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterChange = (filterName: string) => {
    setSelectedFilter(filterName);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto w-full ">
        <div className="flex-1 flex  justify-center p-4 w-full">
          <main className="flex flex-col gap-4 w-full">
            <HeaderMain />
            <section className="flex sm:mt-5 flex-col sm:flex-row sm:justify-between items-center  gap-4">
              <h1 className="text-2xl text-center font-bold mt-3">
                Extensions List
              </h1>
              <section className="flex gap-2 ">
                <FilterButton
                  name="all"
                  tipo="filter-group"
                  isSelected={selectedFilter === "all"}
                  callBackFunction={() => handleFilterChange("all")}
                />
                <FilterButton
                  name="active"
                  tipo="filter-group"
                  isSelected={selectedFilter === "active"}
                  callBackFunction={() => handleFilterChange("active")}
                />
                <FilterButton
                  name="inactive"
                  tipo="filter-group"
                  isSelected={selectedFilter === "inactive"}
                  callBackFunction={() => handleFilterChange("inactive")}
                />
              </section>
            </section>

            {/* <!-- If you plan to use the JSON file to populate the data dynamically, you can delete the content below --> */}

            <section className="w-80 dark:bg-blue-900 bg-blue-100 p-5 rounded-2xl border border-blue-300 ">
              <div className="flex gap-4 items-start">
                <Image
                  src="/assets/images/logo-devlens.svg"
                  alt="devlens logo"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold">DevLens</h4>
                  <p className="text-sm">
                    Quickly inspect page layouts and visualize element
                    boundaries.
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button className="border border-blue-300 text-white hover:bg-red-900 rounded-2xl py-1 px-3">
                  Remove
                </button>

                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-blue-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
                </label>
              </div>
            </section>

            {/* 
  StyleSpy
  Instantly analyze and copy CSS from any webpage element.
  Remove

  SpeedBoost
  Optimizes browser resource usage to accelerate page loading.
  Remove

  JSONWizard
  Formats, validates, and prettifies JSON responses in-browser.
  Remove

  TabMaster Pro
  Organizes browser tabs into groups and sessions.
  Remove

  ViewportBuddy
  Simulates various screen resolutions directly within the browser.
  Remove

  Markup Notes
  Enables annotation and notes directly onto webpages for collaborative debugging.
  Remove

  GridGuides
  Overlay customizable grids and alignment guides on any webpage.
  Remove

  Palette Picker
  Instantly extracts color palettes from any webpage.
  Remove

  LinkChecker
  Scans and highlights broken links on any page.
  Remove

  DOM Snapshot
  Capture and export DOM structures quickly.
  Remove

  ConsolePlus
  Enhanced developer console with advanced filtering and logging.
  Remove */}
          </main>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}
