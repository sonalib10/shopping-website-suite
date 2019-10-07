package com.automationpractise;

import com.automationpractise.pages.SignUpPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class UserSignUp extends Driver {

    private SignUpPage signUpPage;

    @Given("User go to shopping website of {string}")
    public void userGoToShoppingWebsite(String browser) {
        initializeBrowser(browser);
        signUpPage = new SignUpPage();
        signUpPage.navigateToURL();
    }

    @Then("User should land to shopping website")
    public void userShouldLandToShoppingWebsite() {
        Assertions.assertLandingPage();
    }

    @And("navigates to Signup page to enter email ID")
    public void navigatesToSignupPageToEnterEmailID() {
        signUpPage.clickOnSignIn();
        signUpPage.enterEmailID();
    }

    @When("user fills the signup form and register")
    public void userFillsTheSignupFormAndRegister() {
        signUpPage.userSignIn();
    }

    @Then("he successfully creates the account")
    public void heSuccessfullyCreatesTheAccount() {
        Assertions.userLoggedIn(signUpPage);
        closeBrowser();
    }

    @Then("throws error for existing user email ID")
    public void throwsErrorForExistingUserEmailID() {
        signUpPage.clickCreateAccount();
        Assertions.isExistingUser();
        closeBrowser();
    }
}
