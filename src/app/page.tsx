"use client";
import ExtensionComponent from "@/components/ExtensionComponent";
import FilterButton from "@/components/FilterButton";
import HeaderMain from "@/components/HeaderMain";
import { useEffect, useState } from "react";

interface Tool {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (filterName: string) => {
    setSelectedFilter(filterName);
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
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="min-h-screen flex flex-col max-w-5xl mx-auto w-full ">
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

            <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2  lg:grid-cols-3  gap-4  ">
              {selectedFilter === "all"
                ? tools.map((tool) => (
                    <ExtensionComponent
                      key={tool.name}
                      name={tool.name}
                      description={tool.description}
                      url={tool.logo}
                    />
                  ))
                : tools
                    .filter(
                      selectedFilter === "active"
                        ? (tool) => tool.isActive
                        : (tool) => !tool.isActive
                    )
                    .map((tool) => (
                      <ExtensionComponent
                        key={tool.name}
                        name={tool.name}
                        description={tool.description}
                        url={tool.logo}
                      />
                    ))}
            </section>
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
