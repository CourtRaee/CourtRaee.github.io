import "react";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <div className="projects-link">
        <button className="navbar-projects-button">projects.</button>
        <button className="navbar-contact-button">speak to me.</button>
      </div>
    </section>
  );
}

export default Navbar;
