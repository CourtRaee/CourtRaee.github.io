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
      <Footer />
    </BodyContainer>
  );
}
export default Soc;
