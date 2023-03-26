const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://playboy-party-people.surge.sh",
    viewportHeight: 768,
    viewportWidth: 1366,
  },
});
