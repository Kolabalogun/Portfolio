import React, { useEffect, useState } from "react";

import Contact from "../../components/Home/Contact";
import Navbar from "../../components/common/Navbar";

import { Link, useParams } from "react-router-dom";
import {
  ProjectFromDBProps,
  useGlobalContext,
} from "../../context/useGlobalContext";

import { db } from "../../utils/Firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/common/Loader";

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const { setpageType, projectsFromDB } = useGlobalContext();

  const [form, setForm] = useState<ProjectFromDBProps | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    setloading(true);
    id && getBlogDetails();
    setpageType("project");
    window.scroll(0, 0);
  }, [id]);

  const getBlogDetails = async () => {
    if (id) {
      const docRef = doc(db, "Projects", id);
      const blogDetail = await getDoc(docRef);
      setForm(blogDetail.data() as ProjectFromDBProps);
      setloading(false);
    }
  };

  const otherProjects = projectsFromDB
    ?.filter((project) => project.projectName !== form?.projectName)
    .slice(0, 3);

  if (loading) return <Loader />;

  return (
    <main className="bg-[#f3f3f3]">
      <Navbar />

      <div className="center">
        <div className="my-16  md:my-32 flexallcenter flex-col ">
          <h1 className="text-primary text-[48px] md:text-[59px] text-center mb-4">
            {form?.projectName}
          </h1>

          <div className="flex">
            <p className="font-medium text-sm md:text-base text-center text-primary">
              <Link to={"/"}> Home {">"} Portfolio</Link> {">"}{" "}
              <span className="text-secondary cursor-pointer">
                {form?.projectName}
              </span>
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="my-20 flex flex-col md:flex-row gap-10 md:gap-20 items-start justify-between">
          <div className="flex flex-col gap-5">
            <div className="">
              <h2 className="text-lg text-secondary font-medium mb-3">
                Client
              </h2>
              <p className="font-medium text-[#696969]">{form?.client}</p>
            </div>
            <div className="">
              <h2 className="text-lg text-secondary font-medium mb-3">Type</h2>
              <p className="font-medium text-[#696969]">
                {form?.type === "web"
                  ? "Web Application"
                  : "Andriod Mobile App"}
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 mx-0 md:mx-20">
            <h2 className="text-lg text-secondary font-medium mb-3">
              Project Description
            </h2>
            <p className=" text-[#696969]">{form?.Description}</p>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-lg text-secondary font-medium mb-3">
              Resources
            </h2>
            <p className="font-medium text-[#696969]">{form?.resourceI}</p>
            <p className="font-medium text-[#696969]">{form?.resourceII}</p>
            <p className="font-medium text-[#696969]">{form?.resourceIII}</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-20 my-20">
          <img
            src={form?.projectIimage}
            alt="project"
            className="h-full w-full"
          />
          {form?.projectIIIimage && (
            <img
              src={form?.projectIIimage}
              alt="project"
              className="h-full w-full"
            />
          )}
          {form?.projectIIIimage && (
            <img
              src={form?.projectIIIimage}
              alt="project"
              className="h-full w-full"
            />
          )}
        </div>

        <div className="line"></div>
        <div className="flexallcenter my-10 ">
          <a href={form?.projectLink} target="_blank" rel="noopener noreferrer">
            <button className="about-btn">View Project</button>
          </a>
        </div>
        <div className="line"></div>

        <div className="mt-24 mb-5">
          <h1 className="text-secondary text-center text-4xl mb-10">
            Other Projects
          </h1>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
            {otherProjects.map((project) => (
              <Link
                to={`/project/${project.id}`}
                className="border-secondary border-[1px] rounded-md p-6 flex flex-col gap-7 flex-1"
              >
                <div className="h-[200px]">
                  <img
                    src={project?.imgUrl}
                    alt=""
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>

                <h1 className="text-primary text-lg md:text-xl">
                  {project.projectName}
                </h1>

                <button className="about-btn">View Project</button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Contact />
    </main>
  );
};

export default ProjectDetails;
