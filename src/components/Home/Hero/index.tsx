import { Link } from "react-scroll";
import Navbar from "../../common/Navbar";
import { useGlobalContext } from "../../../context/useGlobalContext";
import {
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../utils/Firebase";
import { useEffect } from "react";

const Hero = () => {
  const { viewsCount, setpageType } = useGlobalContext();

  const runTransactions = async () => {
    const collectionRef = collection(db, "pageViews");
    const docRef = doc(collectionRef, "homepage");

    if (viewsCount) {
      const updatedCount = {
        count: viewsCount.count + 1,
      };
      try {
        await updateDoc(docRef, {
          ...updatedCount,
          updatedAt: serverTimestamp(),
        });
        // console.log("Updated Count");
      } catch (error) {
        console.log(error);
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    runTransactions();
    setpageType("home");
  }, []);

  return (
    <div className="hero min-h-[105vh] md:min-h-[100vh]" id="home">
      <Navbar />

      <div className="center min-h-[70vh] gap-10 md:gap-20 flexallcenter flex-col text-center ">
        <h1 className="text-primary text-[45px] sm:text-[50px] lg:text-[59px] ">
          Hello, I'm Ibrahim, <br /> A Front-End and Mobile{" "}
          <span className="text-secondary">Developer</span>.
        </h1>

        <Link
          activeClass="active"
          to="about"
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
