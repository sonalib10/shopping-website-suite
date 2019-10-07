Feature: Online Shopping
This feature has steps for online shopping of 2 items and placing an Order.

  @smoke
Scenario: Add two items and place an order
Given user is on Home page of "Firefox"
  When user enters username and password
  Then user log in to the website
  When user selects two items to add to shopping cart
  Then items should be added to shopping cart
  When user moves forward to checkout
  Then user should successfully place the order
