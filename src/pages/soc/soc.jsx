import Navbar from "../../components/navbar/navbar";
import BodyContainer from "../../components/bodyContainer/body-container";
import Footer from "../../components/footer/footer";
import "../soc/soc.css";

function Soc() {
  return (
    <BodyContainer>
      <Navbar />
      <div className="soc-intro">
        <div className="soc-screenshot-container">
          <img src="/assets/demo.png" className="soc-screenshot"></img>
        </div>

        <div className="soc-intro-container">
          <h1 className="soc-header">soc final project.</h1>
          <p className="soc-header-copy">
            This project was done by myself and 4 others during my time at the
            School of Code. It was our final project, where we worked with a
            live stakeholder to create a solution to their problem which we
            later demo’d to an array of companies.
          </p>
        </div>
      </div>

      <div className="soc-problem-container">
        <h1 className="soc-problem-header">The Problem</h1>
        <p className="soc-problem-copy">
          The Director of Communications for West Midlands Combined Authority
          cannot see at a glance all communications activities scheduled across
          various departments (e.g. Transport, Housing) and campaigns over a 12
          month period. She needs to be able to zoom in to see details of
          planned upcoming activities and zoom out to see a high-level view of
          what’s coming up in order to make strategic decisions and manage
          resources.
        </p>
      </div>

      <div className="soc-trello-container">
        <img src="/assets/trello.png" className="trello-image"></img>
        <p className="soc-trello-copy">
          Our stakeholder currently uses Trello, which they expressed is great
          for details on the card, however, it requires scrolling through each
          month to find what is happening with each department and isn’t clear
          to quickly see what communications will be going out.
        </p>
      </div>

      <div className="soc-demo-container">
        <h1 className="soc-demo-header">The Solution</h1>
        <video
          width="920"
          height="540"
          className="demo-video"
          playsinline
          autoPlay
          muted
          controls
          loop
        >
          <source src="/assets/demo-video.mov" type="video/mp4"></source>
        </video>
      </div>
      <Footer />
    </BodyContainer>
  );
}
export default Soc;
