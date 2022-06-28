import React from "react";
import { Link } from "react-router-dom";
import bankLogo from "./bankLogo (2).png";
import profile from "./profile.png";
import "./Topbar.css";
function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/" title="Home">
          <img className="topImg" src={bankLogo} alt=""></img>
        </Link>
      </div>
      <div className="topRight">
        <Link to="/login" className="link" title="Login">
          <img className="topProfileImg" alt="" src={profile}></img>
        </Link>
      </div>
    </div>
  );
}
export default Topbar;
