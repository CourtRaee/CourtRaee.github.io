import "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <div className="projects-link">
        <Link to="#projects" className="navbar-projects-button">
          projects.
        </Link>
        <Link to="#connect" className="navbar-contact-button">
          speak to me.
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
