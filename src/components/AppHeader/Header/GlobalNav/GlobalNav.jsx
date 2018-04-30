import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { routeMap } from "../../../../constants/pages/routes";

const GlobalNav = () => (
  <Menu className="menu-site" mode="horizontal" id="nav" key="nav">
    <Menu.Item key="home">
      <Link to={routeMap.globalNav.pricing}>Pricing</Link>
    </Menu.Item>
    <Menu.Item key="contact">
      <Link to={routeMap.globalNav.contact}>Contact</Link>
    </Menu.Item>
    <Menu.Item key="register">
      <Link to={routeMap.globalNav.register}>Register</Link>
    </Menu.Item>
    <Menu.Item key="login">
      <Link to={routeMap.globalNav.login}>Login</Link>
    </Menu.Item>
  </Menu>
);
