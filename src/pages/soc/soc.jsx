import Projectsnavbar from "../../components/projects-navbar/projects-navbar";
import BodyContainer from "../../components/bodyContainer/body-container";
import Connect from "../../components/connect/connect";
import Footer from "../../components/footer/footer";
import "../soc/soc.css";

function Soc() {
  return (
    <BodyContainer>
      <Projectsnavbar />
      <div className="container">
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
            cannot see at a glance all communications activities scheduled
            across various departments (e.g. Transport, Housing) and campaigns
            over a 12 month period. She needs to be able to zoom in to see
            details of planned upcoming activities and zoom out to see a
            high-level view of what’s coming up in order to make strategic
            decisions and manage resources.
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
            with her current software and carefully asked in-depth questions
            that would help us better understand what exactly it was that she
            was envisioning. <br></br>
            <br></br>We took the time to understand our stakeholder more
            in-depth and how she operates. We learnt that she is someone who
            doesn’t like to search around for a solution to a problem. If she
            doesn’t know something, she typically wouldn’t turn to Google to
            find the answer. <br></br>
            <br></br>Because of this, we concluded that her main need was ease
            and speed with this new software, as there was a lot of searching
            and manoeuvring to get all the information she required on her old
            one.
            <br></br>
            <br></br>
            With this in mind, we wanted to create a solution that would be in
            an easy-to-read and understandable format. <br></br>
            <br></br>We decided to create 3 calendar views that would easily
            show all the information she was lacking with her current software,
            as shown in the wireframe.
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
          <img
            src="/assets/six-month-wireframe.png"
            className="wireframes"
          ></img>
          <p className="copy">
            Our stakeholder also needed to know what type of communications
            would be going out at a glance, therefore we decided to use emojis.
            <br></br>
            <br></br> We chose emojis over icons as there is generally more
            familiarity with them and they’re more accessible.<br></br>
            <br></br> Our research concluded that we as humans process visuals
            60,000 times faster than text, therefore using visuals such as
            emojis was key for the user’s needs.
          </p>
          <img src="/assets/month-wireframe.png" className="wireframes"></img>
          <p className="copy">
            We built a prototype that we shared with our stakeholder so she
            could get the full effect of what the product would look and feel
            like.
            <br></br>
            <br></br> We focused on small, cheap iterations and feedback from
            our stakeholder to make sure we solved the actual problem in a way
            that was useful in practice.<br></br>
            <br></br> Based on the feedback we received after we created the
            prototype, we made small tweaks such as switching from a 6 month
            view to a quarterly view to help better tailor the product to our
            stakeholders needs.
          </p>
          <img src="/assets/demo.png" className="wireframes"></img>
        </div>

        <div className="tech-stack-container">
          <h1 className="header">Our Tech Stack</h1>

          <div className="tech-stack-one">
            <div className="logos-container">
              <img src="/assets/react.png" className="logos"></img>
              <img src="/assets/vite.png" className="logos"></img>
              <img src="/assets/javascript-logo.png" className="logos"></img>
              <img src="/assets/synk.png" className="logos"></img>
            </div>
            <p className="tech-stack-copy">
              We chose ReactJS with Vite for its superior performance, offering
              faster builds and hot module replacement, and for its ease of use,
              providing a streamlined development experience with modern
              tooling.
              <br></br>
              <br></br>
              Opting for JavaScript over TypeScript was driven by our team's
              greater familiarity with JavaScript, allowing us to expedite
              development and meet tight deadlines.
              <br></br>
              <br></br>
              To ensure our code's security, we integrated Snyk, which performs
              code testing for vulnerabilities and checks for issues within node
              modules. Additionally, we implemented automated testing using
              Husky to maintain code quality and streamline our development
              workflow.
              <br></br>
              <br></br>
              In our research, we aimed to present our Yearly views and
              Quarterly views in a timeline format. After evaluating various
              options, we determined that utilising a pre-built library would be
              the most effective approach. We considered several libraries,
              including gantt-schedule-timeline-calendar, React-google-charts,
              and gantt-task-react. <br></br>
              <br></br>After careful consideration, research and
              project-specific needs, we utilised gantt-task-react for task
              management visualisation and react-big-calendar for robust
              calendar functionalities.
            </p>
          </div>
        </div>

        <div className="team-container">
          <h1 className="header">How we worked as a team</h1>
          <p className="copy">
            We made it a comfortable safe environment for us all so that we
            could function in the best way possible as a team.<br></br>
            <br></br> This allowed us to bring new creative ideas to the table
            and to really go in-depth with planning and meeting milestones set
            throughout the 4 weeks.<br></br>
            <br></br> We were respectful to each other when ideas were explored
            and challenged the other person as opposed to shutting them down
            when it wouldn’t necessarily be achievable.<br></br>
            <br></br> We had clear stand ups in the morning and debriefs at the
            end of the day so everyone was up to date with where the project was
            at.<br></br>
            <br></br> We ensured effective communication via Slack when work was
            done out of hours.<br></br>
            <br></br> We set a team manifesto at the start of the project which
            was vital for us to understand how we will work together.
          </p>
          <img src="/assets/manifesto.png" className="manifesto"></img>
          <p className="copy">
            We utilised Trello to monitor and complete tasks over using Github
            projects so we could put ourselves in the stakeholder's shoes and
            truly immerse ourselves with her struggles.<br></br>
            <br></br> We used pull requests to create a safety net for us, so we
            would all be responsible for any mistakes that could have been
            pushed.
            <br></br>
            <br></br> In terms of branching, we created a main branch and a
            development branch, we mainly worked on the development branch and
            branched off that individually to do any work. Once we were happy
            with the code on the development branch, we would then merge onto
            main, to ensure code safety and prevent any mistakes from being
            pushed live.
          </p>
        </div>

        <div className="lessons-container">
          <h1 className="header">Lessons Learnt</h1>
          <p className="copy">
            Over the space of the 4 week project, we made the effort to reflect
            on every decision and to understand what lessons we learnt by
            completing the project. <br></br>
            <br></br> Our key takeaways were:
            <br></br>
            <li>
              Clearly define the problem statement early on so we can keep
              referring back to it when making a decision.
            </li>
            <li>
              Work closely with our stakeholder to design a result that meets
              their needs.
            </li>
            <li>
              Implement a thumbs-up or thumbs-down voting system for
              decision-making.
            </li>
            <li>
              Assign tasks to individuals each morning to maintain a smooth
              workflow.
            </li>
            <li>
              Prioritise and manage time effectively so we don’t waste time.
            </li>
            <li>
              Allocate different responsibilities to team members so we can all
              work on different parts of the project rather than just our
              strengths.
            </li>
            <li>Deliver a finished project that everyone can be proud of.</li>
            <li>
              We worked effectively and efficiently as a team and communicated
              well.
            </li>
            <li>
              If we were to do this project again, we would have prioritised
              different objectives earlier in the project, such as making a
              faster decision on our library choice.
            </li>
          </p>
        </div>

        <div className="next-steps-container">
          <h1 className="header">Next Steps</h1>
          <p className="copy">
            Our project is now at a stage where it is ready to expand in the
            future.<br></br>
            <br></br> It is set up to be able to replace our dummy data with a
            database and to include features such as event creation/deletion and
            a search function.<br></br>
            <br></br> These enhancements are sure to instil confidence in our
            stakeholder about the project's future.<br></br>
            <br></br> Finally, we produced an end result that we are really
            proud of and that would be easily developed going forward.
          </p>
        </div>

        <div className="button-container">
          <a href="https://bc16-final-projects-team-ctrl-alt-elite.vercel.app/">
            <button className="product-button">Take me to the product😍</button>
          </a>
        </div>

        <div className="line-container">
          <div className="line-divider"></div>
        </div>

        <Connect />
      </div>
      <Footer />
    </BodyContainer>
  );
}
export default Soc;
