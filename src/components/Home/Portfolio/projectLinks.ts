import Faji from "../../../assets/faji.png";
import Fent from "../../../assets/fent.png";
import Aisha from "../../../assets/aisha.png";
import Note from "../../../assets/note.jpg";
import Quiz from "../../../assets/quiz.png";
import Unilorin from "../../../assets/unilorin.jpg";
import Afrogrid from "../../../assets/afrogrid.png";
import Lauretta from "../../../assets/lauretta.png";
import Jumai from "../../../assets/jumai.png";
import Adven from "../../../assets/adven.png";

type ProjectLinksProps = {
  title: string;
  link: string;
  img: string;
  type?: "mobile" | "web";
};

export const ProjectLinks: ProjectLinksProps[] = [
  {
    title: "Unilorin League App",
    link: "/",
    type: "mobile",
    img: Unilorin,
  },
  {
    title: "Aisha Bankole",
    link: "/",
    type: "web",
    img: Aisha,
  },
  {
    title: "Afrogrids",
    link: "/",
    type: "web",
    img: Afrogrid,
  },
  {
    title: "Faji Tobiloba",
    link: "/",
    type: "web",
    img: Faji,
  },

  {
    title: "Fents Luxury Hotel",
    link: "/",
    type: "web",
    img: Fent,
  },
  {
    title: "Lauretta Banks",
    link: "/",
    type: "web",
    img: Lauretta,
  },
  {
    title: "Quiz App",
    link: "/",
    type: "mobile",
    img: Quiz,
  },
  {
    title: "Note App",
    link: "/",
    type: "mobile",
    img: Note,
  },
  {
    title: "Adventours with Aisha",
    link: "/",
    type: "web",
    img: Adven,
  },
  {
    title: "Jumai Yahaya Blog",
    link: "/",
    type: "web",
    img: Jumai,
  },
];
