import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb", borderTop: "1px solid #eee" }}>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <Link className="navbar-brand" to="/">
              <img
                src="media/images/logo.svg"
                style={{ width: "50%" }}
                alt="Zerodha Logo"
                className="mb-3"
              ></img>
            </Link>
            <p className="foot-p text-muted">
              © 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>
          <div className="col">
            <h6>Account</h6>
            <Link to="#" className="footer-link">
              Open demat account
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Minor demat account
            </Link>
            <br />
            <Link to="#" className="footer-link">
              NRI demat account
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Commodity
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Dematerialisation
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Fund transfer
            </Link>
            <br />
            <Link to="#" className="footer-link">
              MTF
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Referral program
            </Link>
            <br />
          </div>
          <div className="col">
            <h6>Products</h6>
            <Link to="#" className="footer-link">
              Contact us
            </Link>
            <br />
            <Link to="/support" className="footer-link">
              Support portal
            </Link>
            <br />
            <Link to="#" className="footer-link">
              How to file a complaint?
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Status of your complaints
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Bulletin
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Circular
            </Link>
            <br />
            <Link to="/about" className="footer-link">
              Z-Connect blog
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Downloads
            </Link>{" "}
            <br />
          </div>
          <div className="col">
            <h6>Company</h6>
            <Link to="/" className="footer-link">
              About
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Philosophy
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Press & media
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Careers
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Zerodha Cares (CSR)
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Zerodha.tech
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Open source
            </Link>{" "}
            <br />
          </div>
          <div className="col">
            <h6>Quick links</h6>
            <Link to="#" className="footer-link">
              Upcoming IPOs
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Brokerage charges
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Market holidays
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Economic calendar
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Calculators
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Markets
            </Link>
            <br />
            <Link to="#" className="footer-link">
              Sectors
            </Link>{" "}
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "10.4px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE &​ MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to{" "}
            <Link to="#" className="foot-link-p">
              complaints@zerodha.com
            </Link>
            , for DP related to{" "}
            <Link to="#" className="foot-link-p">
              dp@zerodha.com
            </Link>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <Link to="#" className="foot-link-p">
              SEBI SCORES
            </Link>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances{" "}
          </p>

          <p>
            <Link to="#" className="foot-link-p">
              Smart Online Dispute Resolution
            </Link>{" "}
            |{" "}
            <Link to="#" className="foot-link-p">
              Grievances Redressal Mechanism{" "}
            </Link>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <Link to="#" className="foot-link-p">
              NSE broker factsheet
            </Link>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <Link to="#" className="foot-link-p">
              create a ticket here
            </Link>
            .
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
