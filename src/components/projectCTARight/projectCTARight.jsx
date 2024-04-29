import "react";
import "./projectCTARight.css";

function ProjectCTARight({ text }) {
  return (
    <div className="right-cta-container">
      <h1 className="project-title-right">{text}</h1>
      <button className="project-button">⬅️ show me</button>
    </div>
  );
}

export default ProjectCTARight;
