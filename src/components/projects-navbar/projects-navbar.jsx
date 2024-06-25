import "react";
import "./projects-navbar.css";

function Projectsnavbar() {
  return (
    <section className="navbar">
      <div className="projects-link">
        <a href="/">
          <button className="navbar-homepage-button">home.</button>
        </a>
        <a href="#connect">
          <button className="navbar-contact-button">speak to me.</button>
        </a>
      </div>
    </section>
  );
}

export default Projectsnavbar;
