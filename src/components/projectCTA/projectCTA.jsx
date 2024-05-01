import "react";
import "./projectCTA.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProjectCTA({ text, buttonText, link }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(link);
  };

  return (
    <div className="cta-container">
      <h1 className="project-title">{text}</h1>
      <button onClick={onClick} className="project-button">
        {buttonText}
      </button>
    </div>
  );
}

export default ProjectCTA;
