import React from "react";
import "./Header.less";
import { Col, Row, Menu } from "antd";
import { Link } from "react-router-dom";
import headerLogo from "./images/homepage_header_logo.png";

const Header = () => (
  <Row>
    <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
      <Link to={"/"} id="logo">
        <img alt="LimPark" src={headerLogo} />
      </Link>
    </Col>
    <Col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
      <Menu className="menu-site" mode="horizontal" id="nav" key="nav">
        <Menu.Item key="pricing">
          <Link to={"/pricing"}>Pricing</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to={"/contact"}>Contact</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to={"register"}>Register</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to={"/login"}>Login</Link>
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);

export default Header;
