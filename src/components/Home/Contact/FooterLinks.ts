import Github from "../../../assets/github.svg";
import Instagram from "../../../assets/instagram-brands.svg";
import Linked from "../../../assets/linkedin-in-brands.svg";
import Twitter from "../../../assets/twitter-brands.svg";

type FooterLinksProps = {
  title: string;
  link: string;
  img: string;
};

export const FooterLinks: FooterLinksProps[] = [
  {
    title: "Github",
    link: "https://github.com/Kolabalogun",

    img: Github,
  },
  {
    title: "Linked",
    link: "https://www.linkedin.com/in/ibrahim-kolabalogun-7130631b9/",

    img: Linked,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/ibrahim_devv/",

    img: Instagram,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/akinola_kb",

    img: Twitter,
  },
];
