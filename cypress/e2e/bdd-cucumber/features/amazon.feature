Feature: Searching for products on Amazon

@smoke
Scenario: Searching for a specific product
  Given I am on the Amazon homepage
  When I search for "cypress"
  Then I should see search results

@regression
Scenario: Add product to cart
  Given I am on the Amazon homepage
  When I search for "laptop"
  And I select the first laptop from the search results
  And I add the laptop to the cart
  Then the laptop should be added to the cart
  
