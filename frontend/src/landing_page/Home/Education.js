import React from "react";
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-6">
          <Link to="#">
            <img
              src="media/images/education.svg"
              alt="education"
              style={{ width: "75%", transform: "translate(40px, -30px)" }}
            ></img>
          </Link>
        </div>
        <div className="col-6 mt-4">
          <h2 className="fw-medium mb-4">Free and open market education</h2>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link
            to="#"
            style={{ textDecoration: "none", color: "#387ed1" }}
            className="fw-medium"
          >
            Varsity &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
          <p className="mb-4 mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <Link
            to="#"
            style={{ textDecoration: "none", color: "#387ed1" }}
            className="fw-medium"
          >
            TradingQ&A &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;