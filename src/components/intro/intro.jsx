import "react";
import "./intro.css";
import IPhoneMockup from "../iPhoneMockup/iPhoneMockup";
import WelcomeSection from "../welcomeSection/welcomeSection";
import Bitmoji from "../bitmoji/bitmoji"

function Intro() {
  return (
    <>
      <div className="iphone-container">
        <IPhoneMockup />
      </div>

      <div className="intro-container">
        <div className="welcome-container">
          <WelcomeSection />
        </div>

        <div className="bitmoji-container">
          <Bitmoji />
        </div>

        <div className="tech-stack-container">
          <p>test</p>
        </div>
      </div>
    </>
  );
}

export default Intro;
