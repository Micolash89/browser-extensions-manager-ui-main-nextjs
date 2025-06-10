"use client";
import ExtensionComponent from "@/components/ExtensionComponent";
import FilterButton from "@/components/FilterButton";
import Footer from "@/components/Footer";
import HeaderMain from "@/components/HeaderMain";
import Spinner from "@/components/Spinner";
import { Tool } from "@/lib/definitions";
import { notoSans } from "@/lib/font";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filterName: string) => {
    setSelectedFilter(filterName);
  };

  const handleToolToggle = (toolName: string, newActiveState: boolean) => {
    setTools((prevTools) =>
      prevTools.map((tool) =>
        tool.name === toolName ? { ...tool, isActive: newActiveState } : tool
      )
    );
  };

  const handleToolRemove = (toolName: string) => {
    setTools((prevTools) => prevTools.filter((tool) => tool.name !== toolName));
  };

  useEffect(() => {
    const fetchTools = async () => {
      setSelectedFilter("all");
      try {
        const response = await fetch("/assets/data.json");
        const data: Tool[] = await response.json();
        setTools(data);
      } catch (error) {
        console.error("Error loading tools:", error);
      } finally {
      }
    };

    fetchTools();
  }, []);

  return (
    <>
      <div
        className={`${notoSans.className} min-h-screen flex flex-col max-w-5xl mx-auto w-full `}
      >
        <div className="flex-1 flex  justify-center p-4 w-full">
          <main className="flex flex-col gap-4 w-full">
            <HeaderMain setQuery={setSearchQuery} />
            <section className="flex sm:mt-5 flex-col sm:flex-row sm:justify-between items-center  gap-4">
              <h1 className="text-2xl text-black dark:text-white text-center font-bold mt-3">
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
            {tools.length === 0 && (
              <div className="flex justify-center items-center">
                <Spinner />
              </div>
            )}

            <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2  lg:grid-cols-3  gap-4  ">
              {searchQuery.length > 0?
              tools
                .filter((tool) => tool.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((tool, index) => (
                  <ExtensionComponent
                    key={tool.name}
                    name={tool.name}
                    description={tool.description}
                    url={tool.logo}
                    isActive={tool.isActive}
                    onToggle={handleToolToggle}
                    onRemove={handleToolRemove}
                    index={index}
                  />
                )):
              selectedFilter === "all"
                ? tools.map((tool, index) => (
                    <ExtensionComponent
                      key={tool.name}
                      name={tool.name}
                      description={tool.description}
                      url={tool.logo}
                      isActive={tool.isActive}
                      onToggle={handleToolToggle}
                      onRemove={handleToolRemove}
                      index={index}
                    />
                  ))
                : tools
                    .filter(
                      selectedFilter === "active"
                        ? (tool) => tool.isActive
                        : (tool) => !tool.isActive
                    )
                    .map((tool, index) => (
                      <ExtensionComponent
                        key={tool.name}
                        name={tool.name}
                        description={tool.description}
                        url={tool.logo}
                        isActive={tool.isActive}
                        onToggle={handleToolToggle}
                        onRemove={handleToolRemove}
                        index={index}
                      />
                    ))}


            </section>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
