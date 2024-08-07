import "react";
import "./connect.css";

import linkedin from "../../../public/assets/linked-in.png";
import github from "../../../public/assets/github.png";
import mail from "../../../public/assets/mail.png";

function Connect() {
  return (
    <div className="connect-container">
      <a id="connect">
        <h1 className="lets-connect">let's connect.</h1>
      </a>

      <div className="social-button-container">
        <a
          href="https://www.linkedin.com/in/courtraesmith/"
          target="_blank"
          className="social-button"
        >
          <img src={linkedin} height="100%" width="100%" />
        </a>

        <a
          href="https://github.com/CourtRaee"
          target="_blank"
          className="social-button"
        >
          <img src={github} height="100%" width="100%" />
        </a>

        <a
          href="mailto:courtraecodes@gmail.com"
          target="_blank"
          className="social-button"
        >
          <img src={mail} height="100%" width="100%" />
        </a>
      </div>
    </div>
  );
}

export default Connect;
