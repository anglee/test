import { Button, Form, Input, Steps } from "antd";
import React, { Component } from "react";
import StepNav from "../common/StepNav/StepNav";
import pages from "../../constants/pages/pages";
import { stepsMap } from "../../constants/pages/steps";
import { routeMap } from "../../constants/pages/routes";
import { Link } from "react-router-dom";
import queryString from "qs";

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

const PlanInfoPage = ({ location }) => {
  const currentPage = pages.planInfo;
  const { action: pageAction } = queryString.parse(location.search);
  return (
    <main>
      <StepNav currentStep={stepsMap[currentPage]} />
      <h1>Plan information</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      </p>
      <Form style={{ width: "640px", margin: "auto" }}>
        <FormItem label={"Plan ID"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Original Plan Effective Date"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Plan Charactieries"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Plan year begin"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Plan year end"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"First time filing?"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem
          label={
            "Filing dealine is 07/31/2018, want LIMpark file extension so that the 5500 form will not due until 10/15/2018?"
          }
          {...formItemLayout}
          required={true}
        >
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem
          label={"Please make sure you file your 5500 before 07/31/2018"}
          {...formItemLayout}
          required={true}
        >
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem
          label={"Did you file extension on 5500 forms yourself"}
          {...formItemLayout}
          required={true}
        >
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem
          label={"Is the company tax return on extension"}
          {...formItemLayout}
          required={true}
        >
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem
          label={"Your 5500 filing is already late, you can:"}
          {...formItemLayout}
          required={true}
        >
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
      </Form>
      {pageAction === "edit" && (
        <Button>
          <Link to={routeMap[currentPage].save}>Save</Link>
        </Button>
      )}
      {pageAction !== "edit" && (
        <Button>
          <Link to={routeMap[currentPage].back}>Back</Link>
        </Button>
      )}
      {pageAction !== "edit" && (
        <Button>
          <Link to={routeMap[currentPage].next}>Next</Link>
        </Button>
      )}
    </main>
  );
};

export default PlanInfoPage;
