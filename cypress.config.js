const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

async function setupNodeEvents(on, config) {
   on("file:preprocessor", cucumber());
  on('before:run', async (details) => {
    console.log('override before:run');
    await beforeRunHook(details);
  });

    on('after:run', async () => {
      console.log('override after:run');
      await afterRunHook();
      });

return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true, 
    "reportDir": "cypress/reports"
  },
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/e2e/**/**/*.{js,feature}',
    watchForFileChanges:false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
  }
});