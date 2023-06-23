const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on, config) {
  on("file:preprocessor", cucumber());
return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/e2e/**/**/*.{js,feature}',
    watchForFileChanges:false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
  },
});
