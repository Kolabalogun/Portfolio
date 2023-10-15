import { useEffect, useState } from "react";
import Particles from "./Particles";
import { FooterLinks } from "./FooterLinks";
import "./contact.css";

const Contact = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const messages = ["I can help.", "Email me!", "Let's chat."];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact min-h-[145vh] md:min-h-[80vh]" id="contact">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-[40vh] z-30  ">
        <h1 className="text-4xl md:text-[45px] text-primary text-center mb-6">
          Have a new project?{" "}
          <span
            className={` text-primary transform transition-transform ease-in-out duration-500 ${
              animationIndex > 0 ? "translate-y-0" : "translate-y-10"
            }`}
          >
            {messages[animationIndex]}
          </span>
        </h1>
        <p className="text-[#445781] uppercase text-center font-medium">
          Let's build something together. Feel free to reach out if you're
          looking for a developer or just want to connect
        </p>

        <div className="contact-section md:mt-10 md:mb-20 ">
          <ul className="flexallcenter flex-col md:flex-row p-[30px] text-center">
            <li>
              <span className="">Email:</span>
              <br />
              <br />
              <a
                className="text-[#445781]  text-center font-medium"
                href="mailto:>akinola10302@gmail.com"
              >
                <span className="text-primary">akinola10302@gmail.com</span>
              </a>
            </li>

            <li>
              <span className="">Phone:</span>
              <br />
              <br />

              <a
                className="text-[#445781]  text-center font-medium"
                href="tel:+2348073374150"
              >
                <span className="text-primary">+2348073374150</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="h-[1px] w-full bg-[#000]"></div>

        <footer className="flex  flex-col md:flex-row gap-10 md:gap-0 items-center justify-between mt-20 mb-10">
          <div className="text-center md:text-start">
            <p>&copy; Copyright MyPortfolio. All Rights Reserved.</p>
            <br />
            <p>
              Designed by{" "}
              <a href="/" className="text-primary">
                Ibrahim
              </a>
            </p>
          </div>

          <div className="right  flex">
            {FooterLinks.map(({ img, link }, idx) => (
              <a key={idx} href={link}>
                <img src={img} alt="" className="footer-icn" />
              </a>
            ))}
          </div>
        </footer>
      </div>

      <Particles />
    </section>
  );
};

export default Contact;
