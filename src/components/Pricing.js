import React from "react";
import { NavLink } from "react-router-dom";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <div className="bar"></div>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <NavLink to="/contact" className="btn">
            Book
          </NavLink>
        </div>

        <div className="card">
          <h3>- Suite -</h3>
          <div className="bar"></div>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <NavLink to="/contact" className="btn">
            Book
          </NavLink>
        </div>

        <div className="card">
          <h3>- Executive -</h3>
          <div className="bar"></div>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <NavLink to="/contact" className="btn">
            Book
          </NavLink>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Pricing;
