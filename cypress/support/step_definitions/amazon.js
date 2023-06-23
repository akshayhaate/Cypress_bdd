import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
//import homePage from '../support/page_objects/homePage';

Given('I am on the Amazon homepage', () => {
  homePage.visit();
});

When('I search for {string}', (productName) => {
  homePage.searchProduct(productName);
});

Then('I should see search results', () => {
  // Add assertions for search results
});

// Implement other step definitions for the remaining test cases
