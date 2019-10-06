package com.automationpractise;

import com.automationpractise.pages.PlaceOrderPage;
import com.automationpractise.pages.SignUpPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PlaceOrder extends Driver {

    private SignUpPage signUpPage;

    @Given("^user is on Home page$")
    public void userIsOnHomePage() {
        initializeBrowser("Firefox");
        signUpPage = new SignUpPage();
        signUpPage.navigateToURL();
        Assertions.assertLandingPage();
    }

    @When("^user enters username and password$")
    public void userEntersUsernameAndPassword() {
        signUpPage.clickOnSignIn();
        signUpPage.enterSignInEmailID();
        signUpPage.enterSignInPassword();
    }

    @Then("^user log in to the website$")
    public void userLogInToTheWebsite() {
        signUpPage.login();
        Assertions.userLoggedIn(signUpPage);
    }

    @When("^user selects two items to add to shopping cart$")
    public void userSelectsTwoItemsToAddToShoppingCart() {
        PlaceOrderPage.selectTwoProducts();
    }


    @Then("^items should be added to shopping cart$")
    public void itemsShouldBeAddedToShoppingCart() {
        Assertions.isItemAddedToShoppingCart();
    }

    @When("^user moves forward to checkout$")
    public void userMovesForwardToCheckout() {
        PlaceOrderPage.checkOutAndOrder();
    }

    @Then("^user should successfully place the order$")
    public void userShouldSuccessfullyPlaceTheOrder() {
        PlaceOrderPage.isOrderPlacedSuccessfully();
        closeBrowser();
    }
}
