import _ from "lodash";
import { Button, Card, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routeMap } from "../../constants/pages/routes";
import pages from "../../constants/pages/pages";

const SignaturePage = () => {
  const currentPage = pages.signature;
  return (
    <main>
      <h1>Signature Page</h1>
      <Card style={{ width: "480px", margin: "auto" }}>
        <h2>It looks good</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor.
        </p>
        <Input value={null} onChange={_.noop} />
        <Input value={null} onChange={_.noop} />
        <Button>
          <Link to={routeMap[currentPage].back}>Back</Link>
        </Button>
        <Button>
          <Link to={routeMap[currentPage].submit}>Submit</Link>
        </Button>
      </Card>
    </main>
  );
};

export default SignaturePage;
