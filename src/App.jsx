import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Connect from "./components/connect/connect";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
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

      <Footer />
    </>
  );
}

export default App;
