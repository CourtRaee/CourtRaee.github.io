import "react";
import "./projects.css";
import ProjectPreview from "../projectPreview/projectPreview";
import ProjectCTARight from "../projectCTARight/projectCTARight";
import ProjectCTALeft from "../projectCTALeft/projectCTALeft";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="project-text">my projects.</h1>
      <div className="project-one-container">
        <ProjectPreview />
        <ProjectCTARight 
          text={"f1 driver results."}
        />
      </div>

      <div className="project-two-container">
        <ProjectCTALeft 
          text={"dialled wireframes."}
        />
        <ProjectPreview />
      </div>
    </div>
  );
}

export default Projects;
