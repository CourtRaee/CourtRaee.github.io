import "react";
import "./intro.css";
import IPhoneMockup from "../iPhoneMockup/iPhoneMockup";
import WelcomeSection from "../welcomeSection/welcomeSection";
import Bitmoji from "../bitmoji/bitmoji";
import TechStackCard from "../techStackCard/techStackCard";

function Intro() {
  return (
    <>
      <div className="iphone-container">
        <IPhoneMockup />
      </div>

      <div className="intro-container">
        <div className="intro-one">
          <div className="welcome-container">
            <WelcomeSection />
          </div>

          <div className="bitmoji-container">
            <Bitmoji />
          </div>
        </div>

        <div className="intro-two">
          <div className="tech-stack-container">
            <h1 className="tech-stack-title">my tech stack.</h1>
            <div className="cards-container">
              <TechStackCard 
                image={"/src/assets/html.png"}
                text={"html"}
              />

              <TechStackCard 
                image={"/src/assets/css.png"}
                text={"css"}
              />

              <TechStackCard 
                image={"/src/assets/javascript.png"}
                text={"javascript"}
              />

              <TechStackCard 
                image={"/src/assets/react.png"}
                text={"react"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
