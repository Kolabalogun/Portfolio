import { useState } from "react";

import { useGlobalContext } from "../../../context/useGlobalContext";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { projectsFromDB } = useGlobalContext();

  const [selectedType, setSelectedType] = useState("All");

  const filterProjects = (type: string) => {
    setSelectedType(type);
  };

  const filteredProjects =
    selectedType === "All"
      ? projectsFromDB
      : projectsFromDB?.filter((project) => project?.type === selectedType);

  return (
    <section className="bg-secondarybg -mt-4" id="portfolio">
      <div className="center py-16 md:py-40 px-5 sm:px-10 xl:px-0">
        <div className="mb-10">
          <h1 className="text-primary dark:text-primary text-5xl mb-5">
            Portfolio
          </h1>
          <p className="text-[#445781] uppercase font-medium">
            These are my most recent projects.
          </p>
        </div>

        <div className=" flexallcenter gap-16 mb-14">
          <button
            className={`font-medium linked ${
              selectedType === "All" ? "text-[#445781]" : ""
            }`}
            onClick={() => filterProjects("All")}
          >
            All
          </button>
          <button
            className={`font-medium linked ${
              selectedType === "web" ? "text-[#445781]" : ""
            }`}
            onClick={() => filterProjects("web")}
          >
            Web
          </button>
          <button
            className={`font-medium linked ${
              selectedType === "mobile" ? "text-[#445781]" : ""
            }`}
            onClick={() => filterProjects("mobile")}
          >
            Mobile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-content-center">
          {filteredProjects?.map((project, idx) => (
            <Link key={idx} to={`/project/${project?.id}`}>
              <div className="projectlink w-full h-[400px] hover:scale-95 transition-transform duration-300 ease-in-out">
                <img
                  src={project?.imgUrl}
                  alt="quiz project"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <Link
                  to={`/project/${project?.id}`}
                  className={
                    "text-lg font-medium projectlink cursor-pointer py-2 my-3 text-primary dark:text-primary hover:text-secondary"
                  }
                >
                  {project?.projectName}
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
