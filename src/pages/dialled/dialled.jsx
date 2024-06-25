import Projectsnavbar from "../../components/projects-navbar/projects-navbar";
import BodyContainer from "../../components/bodyContainer/body-container";
import Footer from "../../components/footer/footer";
import "../dialled/dialled.css";

function Dialled() {
  return (
    <BodyContainer>
      <Projectsnavbar />
      <div className="dialled-intro">
        <div className="iphone-dialled-container">
          <img
            src="/assets/iphone-dialled.png"
            className="iphone-dialled"
          ></img>
        </div>

        <div className="dialled-intro-container">
          <h1 className="dialled-header">dialled.</h1>
          <p className="dialled-header-copy">
            Me and my husband are avid mountain bikers, but we would often
            forget our set up details and what parts needed servicing and when
            across our two bikes. My husband is a developer, therefore he wanted
            to create this app to help keep track of bike maintenance.
          </p>
        </div>
      </div>

      <div className="dialled-text-one-container">
        <div className="dialled-text-one">
          <p className="dialled-desc-copy">
            Due to my keen interest in design, I wanted to use this opportunity
            to practice my skills with a real life project, while working
            alongside a developer and understanding his needs. I created high
            fidelity wireframes for a website, web app and mobile app.
          </p>
          <h1 className="dialled-desc-headers">The Problem</h1>
          <p className="dialled-desc-copy">
            Mountain bikers currently don’t have anywhere to store information
            about their bike set ups for different riding locations, including
            when parts where fitted and are due for a service. Our aim is to
            create a clean, easy to use app so they can keep all their bike
            information in one place and be reminded of when services are due.
          </p>
        </div>
      </div>

      <div className="dialled-mobile-container">
        <h1 className="dialled-desc-headers">Mobile Application</h1>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Launch Screen.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Walkthrough 1.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Walkthrough 2.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Walkthrough 3.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Welcome & Get Started.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Register.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Bike Register.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Login.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Dashboard.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/My Bikes Dashboard.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/My Bikes - Bike Info Enter.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/My Bikes - Bike Info Filled In.png"
        ></img>
      </div>

      <div className="dialled-website-container">
        <h1 className="dialled-desc-headers">Website</h1>
        <img
          className="dialled-website-images"
          src="/assets/Home Page - Logged In - Part 1.png"
        ></img>
        <img
          className="dialled-website-images"
          src="/assets/Home Page - Logged In - Part 2.png"
        ></img>
        <img
          className="dialled-website-images"
          src="/assets/Home Page - Logged In - Part 3.png"
        ></img>
        <img
          className="dialled-website-images"
          src="/assets/Home Page - Logged Out - Part 1.png"
        ></img>
      </div>

      <div className="dialled-web-app-container">
        <h1 className="dialled-desc-headers">Responsive Website</h1>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Web App - Dashboard.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Web App - Dashboard - Menu - Logged Out.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Web App - Dashboard - Menu - Logged In.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Web App - Login.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Web App - Register.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Web App - Bike Register.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/My Bikes Dashboard.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/My Bikes - Bike Info Enter.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/My Bikes - Bike Info Filled In.png"
        ></img>
        <img
          className="dialled-mobile-app-images"
          src="/assets/Web App - My Profile.png"
        ></img>
      </div>
      <section className="footer">
        <Footer />
      </section>
    </BodyContainer>
  );
}
export default Dialled;
