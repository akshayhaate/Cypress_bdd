import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
//import HomePage from '../support/page_objects/HomePage';
import homePage from '../page_objects/homePage';


Given('I am on the Amazon homepage', () => {
  //HomePage.visit();
  homePage.visit();
});

When('I search for {string}', (productName) => {
  //HomePage.searchProduct(productName);
  homePage.searchProduct(productName);
});

Then('I should see search results', () => {
  // Add assertions for search results
});