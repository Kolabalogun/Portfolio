import About from "../../components/Home/About";
import Contact from "../../components/Home/Contact";
import Hero from "../../components/Home/Hero";
import Portfolio from "../../components/Home/Portfolio";
import Skills from "../../components/Home/Skills";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
