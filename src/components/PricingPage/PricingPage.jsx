import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routeMap } from "../../constants/pages/routes";
import pages from "../../constants/pages/pages";

const PricingPage = () => {
  return (
    <main>
      <h1>Pricing Page</h1>
      <h2>Our Pricing</h2>
      <section>
        <div>$250</div>
        <div>5500 Form</div>
      </section>
      <section>
        <div>$50</div>
        <div>5558 Form</div>
      </section>
      <Button>
        <Link to={routeMap[pages.pricing].getStarted}>Get Started</Link>
      </Button>
    </main>
  );
};

export default PricingPage;
