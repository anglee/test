module.exports = function(wallaby) {
  return {
    files: [
      "config/polyfills.js",
      "config/jest/*.js",
      "src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)",
      "!src/**/*.test.js?(x)",
    ],

    tests: ["src/**/*.test.js?(x)"],

    env: {
      type: "node",
      runner: "node",
    },

    testFramework: "jest",

    compilers: {
      "**/*.js?(x)": wallaby.compilers.babel({}),
    },

    setup: wallaby => {
      const jestConfig = require("./package.json").jest;
      delete jestConfig.transform["^.+\\.(js|jsx)$"];
      delete jestConfig.testEnvironment;
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
