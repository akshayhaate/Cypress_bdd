class homePage {
    visit() {
      cy.visit('https://www.amazon.in/');
    }
  
    searchProduct(productName) {
      cy.get('#search').type(productName);
      cy.get('.nav-search-submit > .nav-input').click();
    }
  }
  
  export default new homePage();
  