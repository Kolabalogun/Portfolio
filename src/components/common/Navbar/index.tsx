import { useState } from "react";
import Logo from "../../../assets/logo.png";
import useMediaQuery from "../../../hook/useMediaQuery";
import { NavLinks } from "./links";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div className="  center py-5 md:py-10 flex items-center justify-between">
        <a href="/" className="h-10 md:h-12">
          <img src={Logo} alt="Logo" className="h-full" />
        </a>
        {isAboveMediumScreens ? (
          <div>
            {NavLinks.map(({ title, link }, idx) => (
              <Link
                key={idx}
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={
                  "text-base font-medium linked cursor-pointer py-2  mx-10 text-primary  "
                }
              >
                {title}
              </Link>
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-secondary-500 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-9 w-9 md:h-10 md:w-10 text-black" />
          </button>
        )}
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-[999px] h-full w-[300px] bg-[#eee] drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-9 w-9 md:h-10 md:w-10" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-5 flex flex-col gap-10 text-2xl">
            {NavLinks.map(({ title, link }, idx) => (
              <Link
                key={idx}
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={
                  "text-base font-medium linked cursor-pointer py-2  mx-10 text-primary  "
                }
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
