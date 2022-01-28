import React from "react";
import "./Video.scss";
import spaceVidoe from "../assest/space.mp4";
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted src={spaceVidoe} type="video/mp4" id="video">
        {/* <source /> */}
      </video>
      <div className="content">
        <h1>Galaxy Travel</h1>
        <p>
          World's first civilian <span> Space Travel </span>
        </p>

        <div>
          <NavLink to="/training" className="btn">
            Training
          </NavLink>

          <NavLink to="/contact" className="btn btn-light">
            Launch
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Video;
