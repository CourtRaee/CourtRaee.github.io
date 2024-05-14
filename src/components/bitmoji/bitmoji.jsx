import "react";
import "./bitmoji.css";

import profilePic from "../../../public/assets/pp.png";

function Bitmoji() {
  return (
    <div className="pp-container">
      <img src={profilePic} className="profile-pic"></img>
    </div>
  );
}

export default Bitmoji;
