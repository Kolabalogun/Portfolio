import Logo from "../../../assets/logo.png";
import { NavLinks } from "./links";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" center py-10 flex items-center justify-between">
      <a href="/" className="h-12">
        <img src={Logo} alt="Logo" className="h-full" />
      </a>

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
    </nav>
  );
};

export default Navbar;
