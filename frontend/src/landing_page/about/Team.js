import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="fs-4 text-center">
          People
        </h2>
      </div>
      <div
        className="row  mb-5 p-3"
      >
        <div className="col-6 p-3 text-center">
            <img 
                src="media/images/nithinKamath.jpg"
                alt="Nithin Kamath" 
                style={{width:"60%", borderRadius:"100%"}}>
            </img>
            <h4 className="mt-5 fs-5">Nithin Kamath</h4>
            <h5 className="fs-5">Founder & CEO</h5>
        </div>
        <div className="col-6  p-3">
          <p className="text-justify">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
         
          <p className="text-justify">
           He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-justify">Playing basketball is his zen.</p>
          <p className="text-justify">Connect on <Link to="https://nithinkamath.me/" style={{textDecoration:"none", fontWeight:"400"}}>Homepage</Link> / <Link to="https://tradingqna.com/u/nithin/summary"  style={{textDecoration:"none", fontWeight:"400"}}>TradingQnA</Link> / <Link to="https://x.com/Nithin0dha" style={{textDecoration:"none", fontWeight:"400"}}>Twitter</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
