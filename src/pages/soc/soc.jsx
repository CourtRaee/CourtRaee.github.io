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
        <h1
          className="
        header"
        >
          The Problem
        </h1>
        <p className="copy">
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
        <p className="copy">
          Our stakeholder currently uses Trello, which they expressed is great
          for details on the card, however, it requires scrolling through each
          month to find what is happening with each department and isn’t clear
          to quickly see what communications will be going out.
        </p>
      </div>

      <div className="soc-demo-container">
        <h1 className="header">The Solution</h1>
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

      <div className="ux-container">
        <h1 className="header">Considering the User Experience</h1>
        <p className="copy">
          When meeting with our stakeholder, we explored her main pain points
          with her current software and carefully asked in-depth questions that
          would help us better understand what exactly it was that she was
          envisioning. <br></br>
          <br></br>We took the time to understand our stakeholder more in-depth
          and how she operates. We learnt that she is someone who doesn’t like
          to search around for a solution to a problem. If she doesn’t know
          something, she typically wouldn’t turn to Google to find the answer.{" "}
          <br></br>
          <br></br>Because of this, we concluded that her main need was ease and
          speed with this new software, as there was a lot of searching and
          manoeuvring to get all the information she required on her old one.
          <br></br>
          <br></br>
          With this in mind, we wanted to create a solution that would be in an
          easy-to-read and understandable format. <br></br>
          <br></br>We decided to create 3 calendar views that would easily show
          all the information she was lacking with her current software, as
          shown in the wireframe.
        </p>
        <img src="/assets/year-wireframe.png" className="wireframes"></img>
        <p className="copy">
          Due to the volume of information that would be present, we were
          mindful of the calendar looking too busy but still also getting what
          she needed across clearly.<br></br>
          <br></br> We decided to use colour-coded bars to represent the
          departments to ensure speed and ease which is a key part of solving
          our stakeholders problem.
        </p>
        <img src="/assets/six-month-wireframe.png" className="wireframes"></img>
        <p className="copy">
          Our stakeholder also needed to know what type of communications would
          be going out at a glance, therefore we decided to use emojis.<br></br>
          <br></br> We chose emojis over icons as there is generally more
          familiarity with them and they’re more accessible.<br></br>
          <br></br> Our research concluded that we as humans process visuals
          60,000 times faster than text, therefore using visuals such as emojis
          was key for the user’s needs.
        </p>
        <img src="/assets/month-wireframe.png" className="wireframes"></img>
        <p className="copy">
          We built a prototype that we shared with our stakeholder so she could
          get the full effect of what the product would look and feel like.
          <br></br>
          <br></br> We focused on small, cheap iterations and feedback from our
          stakeholder to make sure we solved the actual problem in a way that
          was useful in practice.<br></br>
          <br></br> Based on the feedback we received after we created the
          prototype, we made small tweaks such as switching from a 6 month view
          to a quarterly view to help better tailor the product to our
          stakeholders needs.
        </p>
        <img src="/assets/demo.png" className="wireframes"></img>
      </div>

      <div className="tech-stack-container">
        <h1 className="header">Our Tech Stack</h1>

        <div className="tech-stack-one">
          <p className="tech-stack-copy">
            We chose ReactJS with Vite for its superior performance, offering
            faster builds and hot module replacement, and for its ease of use,
            providing a streamlined development experience with modern tooling.
          </p>
          <img src="/assets/react.png" className="logos"></img>
          <img src="/assets/vite.png" className="logos"></img>
        </div>
        <div className="tech-stack-two">
          <p className="tech-stack-copy">
            Opting for JavaScript over TypeScript was driven by our team's
            greater familiarity with JavaScript, allowing us to expedite
            development and meet tight deadlines.
          </p>
          <img src="/assets/javascript-logo.png" className="logos-single"></img>
        </div>
        <div className="tech-stack-three">
          <p className="tech-stack-copy">
            To ensure our code's security, we integrated Snyk, which performs
            code testing for vulnerabilities and checks for issues within node
            modules. Additionally, we implemented automated testing using Husky
            to maintain code quality and streamline our development workflow.
          </p>
          <img src="/assets/synk.png" className="logos-single"></img>
        </div>
        <div className="tech-stack-four">
          <p className="tech-stack-copy-end">
            In our research, we aimed to present our Yearly views and Quarterly
            views in a timeline format. After evaluating various options, we
            determined that utilising a pre-built library would be the most
            effective approach. We considered several libraries, including
            gantt-schedule-timeline-calendar, React-google-charts, and
            gantt-task-react. <br></br>
          <br></br>After careful consideration, research and
            project-specific needs, we utilised gantt-task-react for task
            management visualisation and react-big-calendar for robust calendar
            functionalities.
          </p>
        </div>
      </div>
      <Footer />
    </BodyContainer>
  );
}
export default Soc;
