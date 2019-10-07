$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.automationpractise/placeorder.feature");
formatter.feature({
  "name": "Online Shopping",
  "description": "This feature has steps for online shopping of 2 items and placing an Order.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add two items and place an order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on Home page of \"Firefox\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PlaceOrder.userIsOnHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "PlaceOrder.userEntersUsernameAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user log in to the website",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.userLogInToTheWebsite()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //a[@class\u003d\u0027account\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NBKR83UJ\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 69.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191001234643, moz:geckodriverVersion: 0.25.0, moz:headless: false, moz:processID: 3888, moz:profile: C:\\Users\\prasad\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 916d2e5f-89e4-4965-a991-7078821a9950\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027account\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.automationpractise.Assertions.userLoggedIn(Assertions.java:34)\r\n\tat com.automationpractise.PlaceOrder.userLogInToTheWebsite(PlaceOrder.java:31)\r\n\tat ✽.user log in to the website(file:src/test/resources/com.automationpractise/placeorder.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects two items to add to shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "PlaceOrder.userSelectsTwoItemsToAddToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "items should be added to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.itemsShouldBeAddedToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user moves forward to checkout",
  "keyword": "When "
});
formatter.match({
  "location": "PlaceOrder.userMovesForwardToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should successfully place the order",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.userShouldSuccessfullyPlaceTheOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/com.automationpractise/usersignup.feature");
formatter.feature({
  "name": "User creates new account on the website",
  "description": "  This feature is to signup new user.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "SignIn Error for existing user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User go to shopping website of \"Chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSignUp.userGoToShoppingWebsite(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land to shopping website",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignUp.userShouldLandToShoppingWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Signup page to enter email ID",
  "keyword": "And "
});
formatter.match({
  "location": "UserSignUp.navigatesToSignupPageToEnterEmailID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "throws error for existing user email ID",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignUp.throwsErrorForExistingUserEmailID()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[An account using this email address has already been registered. Please enter a valid password or request a new one].\u003e but was:\u003c[Invalid email address].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.automationpractise.Assertions.isExistingUser(Assertions.java:80)\r\n\tat com.automationpractise.UserSignUp.throwsErrorForExistingUserEmailID(UserSignUp.java:45)\r\n\tat ✽.throws error for existing user email ID(file:src/test/resources/com.automationpractise/usersignup.feature:17)\r\n",
  "status": "failed"
});
});