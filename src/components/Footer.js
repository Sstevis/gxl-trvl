import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="location">
            <i>
              <FaSearchLocation />
            </i>

            <div>
              <p>123 Radio City,</p>
              <h4>Iture, Elmina.</h4>
            </div>
          </div>

          <div className="phone">
            <i>
              <FaPhone />
            </i>
            <div>
              <p>+233-(0)-241300851</p>
            </div>
          </div>
          <div className="mails">
            <i>
              <FaMailBulk />
            </i>
            <div>
              <p>trips@glx-trvl.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="about">About the Company</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            magni omnis! Aliquid ut ex quod, voluptas ipsam tempore maxime quasi
            error dolor voluptatibus nemo culpa?
          </div>
          <div className="socials">
            <i>
              <FaFacebook />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaLinkedin />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
