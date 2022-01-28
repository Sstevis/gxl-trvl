import React from "react";
import "./TrainingPics.scss";
import { NavLink } from "react-router-dom";
import pod from "../assest/pod.jpg";
import moon from "../assest/moon.jpg";

const TrainingPics = () => {
  return (
    <div className="training-pics">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi rem
          inventore blanditiis voluptates minus obcaecati totam nobis
          perspiciatis aut ipsa!
        </p>
        <NavLink to="/contact">
          <button className="btn">CONTACT</button>
        </NavLink>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={moon} alt="img1" className="img1" />
          </div>

          <div className="img-stack bottom">
            <img src={pod} alt="img2" className="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPics;
