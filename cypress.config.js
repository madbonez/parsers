const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1600,
  viewportHeight: 1000,
  failOnStatusCode: false,
  numTestsKeptInMemory: 0,
  video: false
});
