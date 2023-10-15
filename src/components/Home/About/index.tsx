import AboutImg from "../../../assets/about.svg";
import ABOUT from "../../../constants/text";

const About = () => {
  return (
    <section className="bg-secondarybg  -mt-4 " id="about">
      <div className="center py-16 md:py-40 px-5 sm:px-10 xl:px-0 gap-20  grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col mr-8">
          <h1 className="text-primary text-3xl md:text-[50px] md:leading-[52px] leading-[36px] font-bold">
            {ABOUT.HEADING}
          </h1>
          <div className="h-[2px] w-3/4 my-7 bg-[#000]"></div>

          <p className=" text-white">{ABOUT.CAPTION}</p>

          <a
            href="/folder/my_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="about-btn">My Resume</button>
          </a>
        </div>
        <div className="flex flex-col mt-5 md:mt-0">
          <img src={AboutImg} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
