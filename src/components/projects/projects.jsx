import "react";
import "./projects.css";
import ProjectPreview from "../projectPreview/projectPreview";
import ProjectCTA from "../projectCTA/projectCTA";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="project-text">my projects.</h1>
      <div className="project-one-container">
        <ProjectPreview />
        <ProjectCTA
          text={"f1 driver results."}
          buttonText="take me there ➡️"
          link="/f1"
        />
      </div>

      <div className="project-two-container">
        <ProjectCTA
          text={"serveasy wireframes."}
          buttonText="⬅️ show me"
          link="/serveasy"
        />
        <ProjectPreview />
      </div>

      <div className="project-three-container">
        <ProjectPreview />
        <ProjectCTA
          text={"dialled wireframes."}
          buttonText="i'm curious ➡️"
          link="/dialled"
        />
      </div>

      <div className="project-four-container">
        <ProjectCTA
          text={"soc progression."}
          buttonText="⬅️ let's see"
          link="/soc"
        />
        <ProjectPreview />
      </div>
    </div>
  );
}

export default Projects;
