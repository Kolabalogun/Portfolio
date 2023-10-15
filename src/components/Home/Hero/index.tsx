import { Link } from "react-scroll";
import Navbar from "../../common/Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />

      <div className="center min-h-[70vh] gap-10 md:gap-20 flexallcenter flex-col text-center ">
        <h1 className="text-primary text-[45px] sm:text-[50px] lg:text-[59px] ">
          Hello, I'm Ibrahim, <br /> A Front-End and Mobile{" "}
          <span className="text-secondary">Developer</span>.
        </h1>

        <Link
          activeClass="active"
          to="note"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className=" cursor-pointer hover:scale-[0.9]  bottom-3  transition-all duration-200 delay-100  mouse"
        >
          <span className="mouse-wheel"></span>
        </Link>
      </div>
      <div className="">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    </div>
  );
};

export default Hero;
