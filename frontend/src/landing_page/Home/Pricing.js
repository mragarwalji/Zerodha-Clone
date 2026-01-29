import React from "react";
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-5">
              <h2 className="fw-medium mb-4" style={{ fontSize: "28px" }}>
                Unbeatable pricing
              </h2>

              <p
                className="text-muted mb-4"
                style={{ fontSize: "16px", lineHeight: "1.8" }}
              >
                We pioneered the concept of discount broking and price <br />{" "}
                transparency in India. Flat fees and no hidden charges.
              </p>

              <Link
                to="#"
                className="fw-medium"
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                  fontSize: "16px",
                }}
              >
                See pricing &nbsp;
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>

            {/* RIGHT STATS */}
            <div className="col-5 mt-3 text-center">
              <div className="row">
                <div className="col">
                  <h2
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "56px",
                      color: "#f9a63a",
                      cursor: "default",
                    }}
                  >
                    ₹0
                  </h2>
                  <p
                    className="text-muted fs-small"
                    style={{ fontSize: "14px" }}
                  >
                    Free account <br /> opening
                  </p>
                </div>

                <div className="col">
                  <h2
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "56px",
                      color: "#f9a63a",
                      cursor: "default",
                    }}
                  >
                    ₹0
                  </h2>
                  <p
                    className="text-muted fs-small"
                    style={{ fontSize: "14px" }}
                  >
                    Free equity delivery <br /> and direct mutual funds
                  </p>
                </div>

                <div className="col mb-5">
                  <h2
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "56px",
                      color: "#f9a63a",
                      cursor: "default",
                    }}
                  >
                    ₹20
                  </h2>
                  <p
                    className="text-muted fs-small"
                    style={{ fontSize: "14px" }}
                  >
                    Intraday and <br /> F&amp;O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
