import "react";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <div className="projects-link">
        <a href="/#projects">
          <button className="navbar-projects-button">projects.</button>
        </a>
        <a href="/#connect">
          <button className="navbar-contact-button">speak to me.</button>
        </a>
      </div>
    </section>
  );
}

export default Navbar;
