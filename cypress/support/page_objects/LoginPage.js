class loginPage {
    
    visit() {
      cy.visit('https://automationexercise.com/');
    }
  
    enterLoginCredentials() {
        cy.get('a[href="/login"]').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('input[data-qa="login-email"]').type('cypress.automation.23@gmail.com');
        cy.get('input[data-qa="login-password"]').type('cypress@123');
        cy.get('button[data-qa="login-button"]').click();
    }

    loggedInAs(){
        cy.contains('Logged in as').should('be.visible');
    }

    logoutButton(){
      cy.contains(' Logout').should('be.visible');
    }
  }
  
  export default new loginPage();