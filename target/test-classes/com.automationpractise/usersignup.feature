Feature: User creates new account on the website
  This feature is to signup new user.

@regression
Scenario: Signup new user
    Given User go to shopping website
    Then User should land to shopping website
    And navigates to Signup page to enter email ID
    When user fills the signup form and register
    Then he successfully creates the account

@smoke
Scenario: SignIn Error for existing user
  Given User go to shopping website
  Then User should land to shopping website
  And navigates to Signup page to enter email ID
  Then throws error for existing user email ID