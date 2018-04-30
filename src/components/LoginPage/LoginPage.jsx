import _ from "lodash";
import { Button, Card, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routeMap } from "../../constants/pages/routes";
import pages from "../../constants/pages/pages";

const LoginPage = () => {
  return (
    <main>
      <h1>Login Page</h1>
      <Card style={{ width: "480px", margin: "auto" }}>
        <h2>Welcome Back</h2>
        <Input value={null} onChange={_.noop} />
        <Input value={null} onChange={_.noop} />
        <div>Forgot your password?</div>
        <Button>
          <Link to={routeMap[pages.login].login}>Log in</Link>
        </Button>
      </Card>
    </main>
  );
};

export default LoginPage;
