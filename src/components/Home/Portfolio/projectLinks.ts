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
  id: string | number;
  title: string;
  link: string;
  img: string;
  type?: "mobile" | "web";
};

export const ProjectLinks: ProjectLinksProps[] = [
  {
    id: 1,
    title: "Unilorin League App",
    link: "https://play.google.com/store/apps/details?id=com.ibrahimdevv.UnilorinLeague",
    type: "mobile",
    img: Unilorin,
  },
  {
    id: 1,
    title: "Aisha Bankole",
    link: "https://aisha-banks.netlify.app/",
    type: "web",
    img: Aisha,
  },
  {
    id: 1,
    title: "Afrogrids",
    link: "https://afrogrids.com/",
    type: "web",
    img: Afrogrid,
  },
  {
    id: 1,
    title: "Faji Tobiloba",
    link: "https://thefajitobiloba.com/",
    type: "web",
    img: Faji,
  },

  {
    id: 1,
    title: "Fents Luxury Hotel",
    link: "https://fentsluxuryhotel.netlify.app/",
    type: "web",
    img: Fent,
  },
  {
    id: 1,
    title: "Lauretta Banks",
    link: "https://lauretta.netlify.app/",
    type: "web",
    img: Lauretta,
  },
  {
    id: 1,
    title: "Quiz App",
    link: "https://drive.google.com/file/d/1cDx2co0_Wa8UCyWXhyfgp22NwBB2io-r/view",
    type: "mobile",
    img: Quiz,
  },
  {
    id: 1,
    title: "Note App",
    link: "/",
    type: "mobile",
    img: Note,
  },
  {
    id: 1,
    title: "Adventours with Aisha",
    link: "https://adventourswithaisha.wordpress.com/",
    type: "web",
    img: Adven,
  },
  {
    id: 1,
    title: "Jumai Yahaya Blog",
    link: "https://yahayajumai.web.app/#/",
    type: "web",
    img: Jumai,
  },
];
