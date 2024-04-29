import "react";
import "./projectCTALeft.css";

function ProjectCTALeft( { text }) {
  return (
    <div className="left-cta-container">
      <h1 className="project-title-left">{text}</h1>
      <button className="project-button">take me there ➡️</button>
    </div>
  );
}

export default ProjectCTALeft;
