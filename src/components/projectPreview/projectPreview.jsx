import "react";
import "./projectPreview.css";

// eslint-disable-next-line react/prop-types
function ProjectPreview({ image }) {
  return <img src={image} className="preview-placeholder"></img>;
}

export default ProjectPreview;
