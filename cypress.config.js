const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://playboy-party-people.surge.sh",
  },
});
