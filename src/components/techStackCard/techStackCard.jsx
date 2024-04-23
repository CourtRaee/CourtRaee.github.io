import "react";
import "./techStackCard.css";

function TechStackCard( {image, text} ) {
  return (
    <div className="tech-stack-card">
      <img src={image}></img>
      <p>{text}</p>
    </div>
  );
}

export default TechStackCard;
