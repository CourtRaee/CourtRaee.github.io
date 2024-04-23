import "react";
import "./intro.css";
import IPhoneMockup from "../iPhoneMockup/iPhoneMockup";

function Intro() {
  return (
    <>
      <div className="iphone-container">
        <IPhoneMockup />
      </div>

      <div className="intro-container">
        <div className="welcome-container">
          <p>testing</p>
        </div>

        <div className="tech-stack-container">
          <p>test</p>
        </div>
      </div>
    </>
  );
}

export default Intro;
