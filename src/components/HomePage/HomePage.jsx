import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routeMap } from "../../constants/pages/routes";
import pages from "../../constants/pages/pages";
import section1Image from "./images/homepage_section-1_image1.png";
import section1Dot1 from "./images/homepage_section-1_dot1.png";
import section1Dot2 from "./images/homepage_section-1_dot2.png";
import section2Image from "./images/homepage_section-2_image1.png";
import section2BgImage from "./images/homepage_section-2_background.png";
import section3Image from "./images/homepage_section-3_image1.png";
import section3Dot from "./images/homepage_section-3_dot1.png";
import footerLogo from "./images/homepage_footer_logo.png";

const HomePage = () => {
  return (
    <main className="HomePage">
      <section className="section-1">
        <img className="dot1-img" src={section1Dot1} />
        <img className="dot2-img" src={section1Dot2} />
        <div className="text-container">
          <h1 className="title">What's LimPark</h1>
          <p className="description">
            LimPark is an online pension service provider, our goal is to provide the best service
            without any pension-related background and automatic service for employers to administer
            pension plans, including required government compliance and filling.
          </p>
          <Button className="get-started-button">
            <Link to={routeMap[pages.home].getStarted}>Get Started</Link>
          </Button>
        </div>
        <div className="image-container">
          <img src={section1Image} />
        </div>
      </section>

      <section className="section-2">
        <div className="background-img-container">
          <img className="background-img" src={section2BgImage} />
        </div>
        <div className="image-container">
          <img src={section2Image} />
        </div>
        <div className="text-container">
          <h1 className="title">Our Pricing</h1>
          <h2 className="sub-title">
            <i>$250</i> | <i>5500 Form</i>
          </h2>
          <p className="description">
            5500 is the form in which you fulfill all your retirement plan info, company info, etc
          </p>
          <h2 className="sub-title">
            <i>$50</i> | <i>5558 Form</i>
          </h2>
          <p className="description">
            5558 is the form which tells the DOL (department of labor) you need to postpone your
            filing date to some day later than April 15th
          </p>
          <Button className="get-started-button">
            <Link to={routeMap[pages.home].getStarted}>Get Started</Link>
          </Button>
        </div>
      </section>
      <section className="section-3">
        <img className="section-3-dot-img" src={section3Dot} />
        <img className="float-window-img" src={section3Image} />
        <div className="section-3-text">
          <h1 className="title">Do You Need LimPark</h1>
          <ul className="description">
            <li>You currently have an individual/solo 401(K) plan</li>
            <li>The 401(K) plan covers only you or you and your spouse</li>
            <li>The 401(K) plan have asset exceed $250,000 or will exceed $250,000 soon</li>
          </ul>
          <Button className="get-started-button">
            <Link to={routeMap[pages.home].getStarted}>Get Started</Link>
          </Button>
        </div>
      </section>
      <section className="footer">
        <div className="logo-container">
          <img className="footer-logo-img" src={footerLogo} />
        </div>
        <div className="contact-info-container">
          <div className="contact-info">
            <div className="contact-info-item phone">Contact: (000) 000-0000</div>
            <div className="contact-info-item email">Email: xxxx@xxx.com</div>
          </div>
          <div className="copy-right">2018 LimPark. inc. All rights reserved</div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
