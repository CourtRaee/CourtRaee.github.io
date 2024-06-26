import "react";
import { HashLink as Link } from "react-router-hash-link";
import "./projects-navbar.css";

function Projectsnavbar() {
  return (
    <section className="navbar">
      <div className="projects-link">
        <a href="/">
          <button className="navbar-homepage-button">home.</button>
        </a>
        <Link to="#connect" className="navbar-contact-button">
          speak to me.
        </Link>
      </div>
    </section>
  );
}

export default Projectsnavbar;
