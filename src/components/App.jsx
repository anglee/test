import React from "react";
import "./App.less";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import HomePage from "./HomePage/HomePage";
import AppHeader from "./AppHeader/AppHeader";
import LoginPage from "./LoginPage/LoginPage";
import PricingPage from "./PricingPage/PricingPage";
import AccountPage from "./AccountPage/AccountPage";
import FinancialInfoPage from "./FinancialInfoPage/FinancialInfoPage";
import PlanInfoPage from "./PlanInfoPage/PlanInfoPage";
import BandTemplate from "./BandTemplate/BandTemplate";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import { routes } from "../constants/pages/routes";
import pages from "../constants/pages/pages";
import PlanInfoReviewPage from "./PlanInfoReviewPage/PlanInfoReviewPage";
import FinancialInfoReviewPage from "./FinancialInfoReviewPage/FinancialInfoReviewPage";
import SignaturePage from "./SignaturePage/SignaturePage";
import PaymentPage from "./PaymentPage/PaymentPage";
import FinishedPage from "./FinishedPage/FinishedPage";

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="App">
        <AppHeader />
        <Route exact path="/" render={() => <Redirect to={routes[pages.home]} />} />
        <Route exact path={routes[pages.home]} render={() => <HomePage />} />
        <Route exact path={routes[pages.pricing]} render={() => <PricingPage />} />
        <Route exact path={routes[pages.login]} render={() => <LoginPage />} />
        <Route exact path={routes[pages.account]} render={() => <AccountPage />} />
        <Route
          exact
          path={routes[pages.planInfo]}
          render={({ location }) => <PlanInfoPage location={location} />}
        />
        <Route
          exact
          path={routes[pages.financialInfo]}
          render={({ location }) => <FinancialInfoPage location={location} />}
        />
        <Route exact path={routes[pages.planInfoReview]} render={() => <PlanInfoReviewPage />} />
        <Route
          exact
          path={routes[pages.financialInfoReview]}
          render={() => <FinancialInfoReviewPage />}
        />
        <Route exact path={routes[pages.signature]} render={() => <SignaturePage />} />
        <Route exact path={routes[pages.payment]} render={() => <PaymentPage />} />
        <Route exact path={routes[pages.finished]} render={() => <FinishedPage />} />
        <Route exact path="/page1" render={() => <Page1 />} />
        <Route exact path="/page2" render={({ location }) => <Page2 location={location} />} />
        <Route
          exact
          path="/band_template"
          render={({ location }) => <BandTemplate location={location} />}
        />
      </div>
    </HashRouter>
  </Provider>
);

export default App;
