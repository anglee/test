import { Button, Form, Input, Steps } from "antd";
import React from "react";
import StepNav from "../common/StepNav/StepNav";
import { routeMap } from "../../constants/pages/routes";
import { Link } from "react-router-dom";
import pages from "../../constants/pages/pages";
import { stepsMap } from "../../constants/pages/steps";
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
  const currentPage = pages.financialInfo;
  const { action: pageAction } = queryString.parse(location.search);
  return (
    <main>
      <StepNav currentStep={stepsMap[currentPage]} />
      <h1>Financial information</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      </p>
      <Form style={{ width: "640px", margin: "auto" }}>
        <FormItem label={"Asset value at begin"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Asset value at end"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem
          label={"Contribution deposited during 01/01/2017-12/31/2017 for 2016 plan year"}
          {...formItemLayout}
          required={true}
        >
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Contribution during 2017 for 2017"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"# Active participant at end"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Total employee 401k"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem label={"Rollover from other plan"} {...formItemLayout} required={true}>
          <Input value={""} onChange={({ target: { value } }) => {}} />
        </FormItem>
        <FormItem
          label={
            "We have noticed the begin balance (Asset value at begin + contribution_curr_for_pre exceeds 250k, the initial filling should have been done for previous years, do you want to:"
          }
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
