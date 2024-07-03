// Import necessary modules and assets
import React from "react";
import hero_image from "../../assets/images/hero_mage.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import "./Section.css";

// Define Section component
export const Section = () => {
  return (
    <div className="container section">
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 text-center">
          <img
            src={hero_image}
            alt="Hero Image"
            className="img-fluid shadow hero_image"
          />
        </div>
        <div className="col-md-6 col-sm-12 mt-4 mt-md-0 main-content">
          <p>Share:</p>
          <ul className="list-unstyled d-flex">
            <li className="me-3 anchor">
              <a href="http://www.facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li className="me-3 anchor">
              <a href="http://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li className="anchor">
              <a href="http://www.linkedin.com">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <h1 className="display-6">
            7 reasons businesses should use a collaboration suite
          </h1>
          <div className="paragraph-content">
            <p>
              Collaboration suites bring a host of intangible benefits to
              businesses. And a number of tangible benefits as well.
            </p>
            <p>Here are a few:</p>
            <ol>
              <li>Cost: Single-vendor systems are typically less expensive</li>
              <li>Implementation: It's simpler to maintain your system</li>
              <li>Security: Attacks are easier to spot</li>
              <li>
                Productivity: Collaboration between departments is smoother
              </li>
              <li>
                Communication: Services like Skype for Business are built in.
                Get the infographic to see all the benefits by the numbers.
              </li>
            </ol>
            <button className=" button mt-3">
              Get the free infographic
              <span className="ms-1">
                <FiArrowRightCircle />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-5 mb-5 related-content">
        <h1 className="display-6 pb-3">Related Content</h1>
        <div className="col-md-4 col-6 mb-4">
          <h6>Modern Workplace Webcast Series</h6>
          <p>Go inside the minds of business and technology innovators.</p>
          <a className="link" href="">
            Watch now
            <span className="ms-1">
              <FiArrowRightCircle />
            </span>
          </a>
        </div>
        <div className="col-md-4 col-6 mb-4">
          <h6>Tour Office 365</h6>
          <p>
            Explore the new enterprise capabilities of Office 365 in an easy
            guided tour.
          </p>
          <a className="link" href="">
            Start your tour
            <span className="ms-1">
              <FiArrowRightCircle />
            </span>
          </a>
        </div>
        <div className="col-md-4 col-6 mb-4">
          <h6>10 Myths About the Cloud</h6>
          <p>
            What does it mean to "move to the cloud"? This eBook breaks down
            myths and misconceptions.
          </p>
          <a href="" className="link">
            Get the free eBook
            <span className="ms-1">
              <FiArrowRightCircle />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
