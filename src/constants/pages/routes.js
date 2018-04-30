import pages from "./pages";

export const routes = {
  [pages.home]: "/home",
  [pages.home2]: "/home2",
  [pages.pricing]: "/pricing",
  [pages.contact]: "/contact",
  [pages.signUp]: "/signup",
  [pages.login]: "/login",
  [pages.account]: "/account",
  [pages.planInfo]: "/plan_info",
  [pages.financialInfo]: "/financial_info",
  [pages.planInfoReview]: "/review/plan_info",
  [pages.financialInfoReview]: "/review/financial_info",
  [pages.signature]: "/signature",
  [pages.payment]: "/payment",
  [pages.finished]: "/finished",
};

export const routeMap = {
  globalNav: {
    pricing: routes[pages.pricing],
    contact: routes[pages.contact],
    register: routes[pages.signUp],
  },
  [pages.home]: {
    getStarted: routes[pages.login],
    pricing: routes[pages.pricing],
  },
  [pages.pricing]: {
    getStarted: routes[pages.login],
  },
  [pages.login]: {
    login: routes[pages.account],
  },
  [pages.account]: {
    next: routes[pages.planInfo],
  },
  [pages.planInfo]: {
    back: routes[pages.account],
    next: routes[pages.financialInfo],
    save: routes[pages.planInfoReview],
  },
  [pages.financialInfo]: {
    back: routes[pages.planInfo],
    next: routes[pages.planInfoReview],
    save: routes[pages.financialInfoReview],
  },
  [pages.planInfoReview]: {
    edit: routes[pages.planInfo] + "?action=edit",
    next: routes[pages.financialInfoReview],
  },
  [pages.financialInfoReview]: {
    back: routes[pages.planInfoReview],
    edit: routes[pages.financialInfo] + "?action=edit",
    next: routes[pages.signature],
  },
  [pages.signature]: {
    back: routes[pages.financialInfoReview],
    submit: routes[pages.payment],
  },
  [pages.payment]: {
    back: routes[pages.signature],
    pay: routes[pages.finished],
  },
  [pages.finished]: {
    ok: routes[pages.home],
  },
};
