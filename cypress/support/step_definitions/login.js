import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
//import LoginPage from '../support/page_objects/LoginPage';
import loginPage from '../page_objects/loginPage';

Given('I navigate to automation exercise website', () => {
    //LoginPage.visit();
    loginPage.visit();
});

When('I enter login credentials', () => {
    //LoginPage.enterLoginCredentials();
    loginPage.enterLoginCredentials();
});

Then('I should be logged in', () => {
    //LoginPage.loggedInAs();
    loginPage.loggedInAs();

});