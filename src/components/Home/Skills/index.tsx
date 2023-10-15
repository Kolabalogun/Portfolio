import { useState } from "react";
import HTML from "../../../assets/html5-brands.svg";
import CSS from "../../../assets/css3-alt-brands.svg";
import JS from "../../../assets/js-brands.svg";
import ReactIcon from "../../../assets/react-brands.svg";
import Node from "../../../assets/node-js.svg";
import Firebase from "../../../assets/firebase-seeklogo.com.svg";
import Tailwind from "../../../assets/tailwind-css.svg";
import Github from "../../../assets/github-brands.svg";
import ReactNative from "../../../assets/reactnat.svg";

const Skills = () => {
  const images = [
    { img: HTML, name: "HTML" },
    { img: CSS, name: "CSS" },
    { img: JS, name: "Javascript" },
    { img: ReactIcon, name: "React JS" },
    { img: Node, name: "Node JS" },
    { img: ReactNative, name: "React Native" },
    { img: Firebase, name: "Firebase" },
    { img: Tailwind, name: "Tailwind" },
    { img: Github, name: "Github" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    if (startIndex + 5 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleClickPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + 5);

  return (
    <section className="center pt-24 pb-32">
      <div className="text-center mb-16">
        <h1 className="text-primary text-5xl mb-5">Resources</h1>
        <p className="text-[#445781] uppercase font-medium">
          Here are all the skills I've learnt and use to develop web
          applications and software
        </p>
      </div>

      <div className=" hidden md:flex gap-10 justify-between  items-center  skills-container">
        <button
          className="py-3 px-5 rounded bg-[#eee]"
          onClick={handleClickPrev}
          disabled={startIndex === 0}
        >
          &lt; Prev
        </button>
        {visibleImages.map((image, index) => (
          <div key={index} className="text-center">
            <img src={image.img} alt={`Skill ${index}`} className="h-20" />

            <p className="mt-2 font-medium">{image.name}</p>
          </div>
        ))}
        <button
          onClick={handleClickNext}
          disabled={startIndex + 5 >= images.length}
          className="py-3 px-5 rounded bg-[#eee]"
        >
          Next &gt;
        </button>
      </div>

      {/* Mobile  */}

      <div className="grid grid-cols-2 gap-10 px-5 md:hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img
              key={index}
              src={image.img}
              alt={`Skill ${index}`}
              className="h-20"
            />

            <p className="mt-2 font-medium">{image.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
