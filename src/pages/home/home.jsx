import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import Intro from "../../components/intro/intro";
import Projects from "../../components/projects/projects";
import Connect from "../../components/connect/connect";
import Footer from "../../components/footer/footer";
import BodyContainer from "../../components/bodyContainer/body-container";

function Home() {
  return (
    <BodyContainer>
      <Navbar />

      <section className="hero">
        <Hero />
      </section>

      <section className="intro">
        <Intro />
      </section>

      <section className="projects">
        <Projects />
      </section>

      <section className="connect">
        <Connect />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </BodyContainer>
  );
}

export default Home;
