import "react";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <div className="projects-link">
        <a href="#projects">
          <button className="navbar-projects-button">projects.</button>
        </a>
        <button className="navbar-contact-button">speak to me.</button>
      </div>
    </section>
  );
}

export default Navbar;
