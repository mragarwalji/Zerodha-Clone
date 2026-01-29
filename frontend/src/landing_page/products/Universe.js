import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-4">
          <img src="media/images/zerodhaFundhouse.png" alt="small Case" style={{width:"50%"}}/>
          <p className="text-small text-muted text-center mt-2">our asset management venture</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/sensibullLogo.svg" alt="small Case" style={{width:"55%"}} />
          <p className="text-small text-muted text-center mt-2">Option Trading platform </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/tijori.svg" alt="small Case" style={{width:"35%"}} />
          <p className="text-small text-muted text-center mt-2">investment Research platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/streaklogo.png" alt="small Case" style={{width:"35%"}} />
          <p className="text-small text-muted text-center mt-2">Systematic Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" alt="small Case" />
          <p className="text-small text-muted text-center mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-2 mt-4">
          <img src="media/images/dittoLogo.png" alt="small Case" style={{width:"35%"}}/>
          <p className="text-small text-muted text-center mt-2">Personalized advice on life <br />and health insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;