import { Button, Form, Input, Steps } from "antd";
import React, { Component } from "react";
import StepNav from "../common/StepNav/StepNav";
import { stepsMap } from "../../constants/pages/steps";
import pages from "../../constants/pages/pages";
import { routeMap } from "../../constants/pages/routes";
import { Link } from "react-router-dom";

const FormItem = Form.Item;

const Step = Steps.Step;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const AccountPage = () => {
  const currentPage = pages.account;
  return (
    <main>
      <h1>Account Page</h1>
      <StepNav currentStep={stepsMap[currentPage]} />
      <h2>Tell us about your company</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      </p>
      <Form style={{ width: "640px", margin: "auto" }}>
        <FormItem label={"Company Name"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Address"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Address 2"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"City"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"State"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Zip Code"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Phone"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Business Code"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Business Tax ID"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
      </Form>
      <Button>
        <Link to={routeMap[currentPage].next}>Next</Link>
      </Button>
    </main>
  );
};

export default AccountPage;
