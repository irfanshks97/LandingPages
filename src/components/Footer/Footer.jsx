//import React from "react";
import { ImFacebook, ImInstagram } from "react-icons/im";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row d-flex align-items-end footer-row">
        <div className="col-sm-6">
          <ul className="d-flex links">
            <li className="me-2">
              <a href="" className="text-decoration-none text-dark">
                Follow us
              </a>
            </li>
            <li className="me-2">
              <ImInstagram />
            </li>
            <li className="imagetag me-2">
              <img src="image" />
            </li>
            <li className="me-2">
              <ImFacebook className="facebooklogo" />
            </li>
            <li className="me-2">
              <img src={logo} width="85px" height="19px" alt="Logo" />
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="copyright-link">
            <li>
              <a>Microsoft</a>
            </li>
            <li className="copyright">
              <a>&copy; 2017 Microsoft</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="shadow">
        <ul className="d-flex align-items-end footer-links p-sm-4">
          <li>
            <a href="" className="text-decoration-none">
              Contact us
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none">
              Privacy & cookies
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none">
              Terms of use
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none">
              Trademarks
            </a>
          </li>
          <li>
            <a href="" className="text-decoration-none">
              About our ads
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
