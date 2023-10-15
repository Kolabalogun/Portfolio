import AboutImg from "../../../assets/about.svg";

const pageContent = {
  aboutTitle: "",
  aboutDescription: "",
  aboutImgUrl: "",
};
const About = () => {
  return (
    <section className="bg-secondarybg  -mt-4 " id="about">
      <div className="center py-16 md:py-40 px-5 sm:px-10 xl:px-0 gap-20  grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col mr-8">
          <h1 className="text-primary text-3xl md:text-[50px] md:leading-[52px] leading-[36px] font-bold">
            {pageContent?.aboutTitle
              ? pageContent?.aboutTitle
              : " Hi, Ibrahim Again!. Nice to meet you. Get to know me."}
          </h1>
          <div className="h-[2px] w-3/4 my-7 bg-[#000]"></div>

          <p className=" text-white">
            {/*  */}
            {pageContent?.aboutDescription
              ? pageContent?.aboutDescription
              : "I'm passionate about the art of crafting web and mobile applications, I thrive on the creative journey from conception to realization. I'm a tenacious problem solver, committed to delivering results that meet your needs. My programming journey has led me to master technologies that power the digital realm. I've been fortunate to collaborate with industry veterans who've enriched my understanding of what makes a great web or software application. Discover more below, and let's connect to discuss your vision."}
          </p>

          <a
            href="/folder/my_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="about-btn">My Resume</button>
          </a>
        </div>
        <div className="flex flex-col mt-5 md:mt-0">
          <img src={pageContent?.aboutImgUrl || AboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
