import React from "react";
import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-4">
          <h3 className="fs-4 mb-5">Trust with confidence</h3>
          <h4 className="fs-5">Customer-first always</h4>
          <p className="mb-5 text-muted text-justify">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br />
            lakh crores of equity investments, making us India's <br />
            largest broker; contributing to 15% of daily retail <br />
            exchange volumes in India.
          </p>

          <h4 className="fs-5">No spam or gimmicks</h4>
          <p className="mb-5 text-muted text-justify">
            No gimmicks, spam, "gamification", or annoying push <br/>notifications.
            High quality apps that you use at your <br /> pace, the way you like.{" "}
            <Link
              to="#"
              className="fw-medium"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Our philosophies.
            </Link>
          </p>
          <h4 className="fs-5">The Zerodha universe</h4>
          <p className="mb-5 text-muted text-justify">
            Not just an app, but a whole ecosystem. Our investments <br />in 30+
            fintech startups offer you tailored services <br />specific to your needs.
          </p>
          <h4 className="fs-5">Do better with money</h4>
          <p className="mb-5 text-muted text-justify">
            With initiatives like{" "}
            <Link
              to="#"
              className="fw-medium"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Nudge
            </Link>{" "}
            and{" "}
            <Link
              to="#"
              className="fw-medium"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Kill Switch
            </Link>
            , we don't just <br /> facilitate transactions, but actively help you do
            better <br /> with your money.
          </p>
        </div>
        <div className="col-6">
          <Link to="#">
            <img
              src="media/images/ecosystem.png"
              alt="Ecosystem"
              className="mt-4"
              style={{ width: "103%", transform: "translateX(-105px)" }}
            ></img>
          </Link>
          <div className="text-center mb-5 d-flex justify-content-center gap-5 mt-4">
            <Link
              to="#"
              className="fw-medium"
              style={{ textDecoration: "none", color: "#387ed1", transform: "translateX(-105px)" }}
            >
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link
              to="#"
              className="fw-medium"
              style={{ textDecoration: "none", color: "#387ed1", transform: "translateX(-105px)" }}
            >
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <div className="text-center mt-3">
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            style={{ width: "50%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Stats;
