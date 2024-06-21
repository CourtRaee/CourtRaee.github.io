import "react";
import "./projects.css";
import ProjectPreview from "../projectPreview/projectPreview";
import ProjectCTA from "../projectCTA/projectCTA";

// import f1Preview from "../../../public/assets/f1-preview.png";
import serveasyWireframes from "../../../public/assets/serveasy-card.png";
import dialledCard from "../../../public/assets/dialled-card.png";
import socCard from "../../../public/assets/soc-preview-card.png";

function Projects() {
  return (
    <div className="projects-container">
      <a id="projects">
        <h1 className="project-text">my projects.</h1>
      </a>
      <div className="project-one-container">
        <ProjectPreview image={socCard} />
        <ProjectCTA
          text={"soc final project."}
          buttonText="i'm curious"
          link="/soc"
        />
      </div>

      <div className="project-two-container">
        <ProjectCTA
          text={"dialled wireframes."}
          buttonText="⬅let's see"
          link="/dialled"
        />
        <ProjectPreview image={dialledCard} />
      </div>

      <div className="project-three-container">
        <ProjectPreview image={serveasyWireframes} />
        <ProjectCTA
          text={"serveasy wireframes."}
          buttonText="take me there"
          link="/serveasy"
        />
      </div>

      {/* <div className="project-four-container">
        <ProjectCTA
          text={"f1 driver results."}
          buttonText="⬅️ show me"
          link="/f1"
        />
        <ProjectPreview image={serveasyWireframes} />
      </div> */}
    </div>
  );
}

export default Projects;
