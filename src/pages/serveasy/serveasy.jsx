import "./serveasy.css";
import Navbar from "../../components/navbar/navbar";
import BodyContainer from "../../components/bodyContainer/body-container";
import Footer from "../../components/footer/footer";

function Serveasy() {
  return (
    <BodyContainer>
      <Navbar />
      <div className="serveasy-intro">
        <div className="serveasy-intro-screenshot">
          <img
            src="/assets/serveasy-home-1.png"
            className="serveasy-screenshot"
          ></img>
        </div>

        <div className="serveasy-intro-container">
          <h1 className="serveasy-header">serveasy.</h1>
          <p className="serveasy-header-copy">
            Serveasy is an upcoming service directory to help local service
            businesses be discovered and enquired in one place.<br></br>
            <br></br>This start up approached me and asked me to create some
            wireframes for the developers who are creating this directory.
            <br></br>
            <br></br>This was a personal project as a favour for the start up as
            well as gaining real-life experience for myself with a live project.
          </p>
        </div>
      </div>

      <div className="serveasy-text-one-container">
        <h1 className="serveasy-header-title">The Problem</h1>

        <p className="serveasy-copy">
          The project required a clear way for users to easily navigate through
          the site to find different service offerings from an array of local
          home maintenance businesses. This website will include a variety of
          services, rather than just one stand-alone category so users have an
          all-in-one hub to find any home services required.
        </p>

        <h1 className="serveasy-header-title">Objective</h1>

        <p className="serveasy-copy">
          The designs I created were made with the user journey in mind. The
          hero section entices you to learn instantly what the objective of the
          website is, as well as offering an option to quickly search for a
          specific business or service in case the user already knows the site’s
          purpose.<br></br>
          <br></br> I make sure to use plenty of images or icons to help the
          user find what they’re looking for as quickly as possible. Research at
          3M Corporation concluded that we process visuals 60,000 times faster
          than text, therefore using imagery or iconography was key for the
          user.<br></br>
          <br></br> The whole site’s wireframes are designed to make navigating
          the site easily but also have easy access sections such as the search
          bar and other CTA’s so there is always somewhere for the user to go to
          next to get their desired information.
        </p>

        <h1 className="serveasy-header-title">Target Audience</h1>

        <p className="serveasy-copy">
          The target audience is adults with homes and vehicles, who currently
          don’t have easy access to find local services. They currently have to
          Google each individual service and can only see business information
          at face value, there’s no service options and customer reviews to help
          with their decision to book.
        </p>
      </div>

      <div className="serveasy-wireframes-container">
        <h1 className="serveasy-header-title">
          Home Page - Low-Fidelity Wireframe
        </h1>

        <div className="serveasy-homepage-wireframes">
          <img
            src="/assets/serveasy-homepage.png"
            className="homepage-wireframes"
          ></img>
        </div>

        <div className="serveasy-business-service-page">
          <h1 className="serveasy-header-title">
            Business Service Page - Low-Fidelity Wireframe
          </h1>
          <img
            src="/assets/business-service-page.png"
            className="business-service-page-wireframes"
          ></img>
        </div>
      </div>

      <div className="serveasy-service-page">
        <h1 className="serveasy-header-title">
          Services Page - Low-Fidelity Wireframe
        </h1>
        <img
          src="/assets/service-page.png"
          className="service-page-wireframes"
        ></img>
      </div>
      <Footer />
    </BodyContainer>
  );
}
export default Serveasy;
